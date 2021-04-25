import { Component } from "react";
import { Route, Link } from "react-router-dom";
import WinnerBar from "../WinnerBar/WinnerBar";
import CharacterList from "../CharacterList/CharacterList"
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
// import { getQuotes } from "../../API-calls.js"
import './MatchUp.css';
import secondKamehameha from '../../assets/trunks.gif';
import firstKamehameha from '../../assets/buu.gif';
import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';
import clearButton from '../../assets/close.svg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

class MatchUp extends Component {
  constructor() {
    super();
    this.state = {
      characterData: [dbData, yyhData, hxhData],
      firstFighter: {},
      secondFighter: {},
      vote: {},
      quotes: []
    }
  }

  selectFighters = (fighter) => {
    if (Object.keys(this.state.firstFighter).length === 0) {
      this.setState({ firstFighter: fighter })
    } else if (Object.keys(this.state.secondFighter).length === 0) {
      this.setState({ secondFighter: fighter })
    }
  }

  findImage = (fighterNum) => {
    if (Object.keys(fighterNum).length) {
      return images[`${fighterNum.image}`]['default'];
    } else if (this.state.firstFighter === fighterNum){
      return firstKamehameha;
    } else {
      return secondKamehameha;
    }
  }

  clearFighter = (fighter) => {
    if (fighter === this.state.firstFighter) {
      this.setState({ firstFighter: {} })
    } else {
      this.setState({ secondFighter: {} })
    }
  }

  vote = (fighter) => {
    this.setState({ vote: fighter })
  }

  getCharacterStats = (fighter) => {
    this.props.getFighterStats(this.state.firstFighter, this.state.firstQuotes)
  }

  componentDidMount = () => {

    let charactersWithQuotes = [
      "goku",
      "vegeta",
      "android",
      "krillin",
      "frieza",
      "piccolo",
      "goku black",
      "trunks",
      "urameshi",
      "kuwabara",
      "kurama",
      "hiei",
      "genkai",
      "karasu",
      "sensui",
      "gon freecss",
      "killua",
      "leorio",
      "kurapika",
      "netero",
      "meruem",
      "hisoka",
      "biscuit"
    ]


    // let allQuotes = charactersWithQuotes.reduce((accu, currentName) => {
    //       fetch(`https://animechan.vercel.app/api/quotes/character?name=${currentName}`)
    //         .then(response => response.json())
    //         .then(data => accu.push(data))
    //     console.log(accu)
    //     return accu;
    //   }, []);
    //
    //
    // this.setState({ quotes: allQuotes });
    // localStorage.setItem('quotes', allQuotes);
    // console.log(this.state.quotes)
  }

  render() {
    return (
      <div>
        <main className="matchup-container">
          <h1 className="header">Who Would Win?</h1>
          {this.state.firstFighter.name && this.state.secondFighter.name && <WinnerBar className="winner-bar" fighterss={[ this.state.firstFighter, this.state.secondFighter ]} vote={ this.state.vote } /> }
          <Link to="/stats" className="first-fighter-link">
            <img
              className="first-fighter-box"
              src={this.findImage(this.state.firstFighter)}
              alt=""
              onClick={ () => { this.getCharacterStats(this.state.firstFighter) } }
            />
          </Link>
          { this.state.firstFighter.name &&
            <img
              className="clear-first-button"
              src={clearButton}
              onClick={ () => this.clearFighter(this.state.firstFighter) }
            />
          }
          { this.state.firstFighter.name && this.state.secondFighter.name &&
            <button
            className="first-fighter-vote"
            onClick={ () => this.vote(this.state.firstFighter) }
            >VOTE</button>
          }
          <div className="vs">VS</div>
          <Link to="/stats" className="second-fighter-link">
            <img
              className="second-fighter-box"
              src={this.findImage(this.state.secondFighter)}
              alt=""
              onClick={ () => this.props.getFighterStats(this.state.secondFighter) }
            />
          </Link>
          { this.state.secondFighter.name &&
            <img
              className="clear-second-button"
              src={clearButton}
              onClick={ () => this.clearFighter(this.state.secondFighter) }
            />
          }
          { this.state.firstFighter.name && this.state.secondFighter.name &&
            <button className="second-fighter-vote">VOTE</button>
          }
          <p className="choose-fighter">choose your fighters...</p>
          <Navigation className="nav-bar"/>
        </main>
        <Route
          path="/stats">
          <Stats fighter={this.state.firstFighter} />
        </Route>
        <Route
          path="/matchUp/DB">
          <CharacterList characterSet={ this.state.characterData[0] } selectFighters={ this.selectFighters } />
        </Route>
        <Route
          path="/matchUp/YYH">
          <CharacterList characterSet={ this.state.characterData[1] } selectFighters={ this.selectFighters } />
        </Route>
        <Route
          path="/matchUp/HXH">
          <CharacterList characterSet={ this.state.characterData[2] } selectFighters={ this.selectFighters } />
        </Route>
      </div>
    )
  }

}

export default MatchUp;
