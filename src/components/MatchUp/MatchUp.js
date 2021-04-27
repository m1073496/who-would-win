import { Component } from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import WinnerBar from "../WinnerBar/WinnerBar";
import CharacterList from "../CharacterList/CharacterList"
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import './MatchUp.css';

import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';

import clearButton from '../../assets/close.svg';
import funnyBuu from '../../assets/funny-boo.png';

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
      vote: {}
    }
  }

  selectFighters = (fighter) => {
    if (Object.keys(this.state.firstFighter).length === 0) {
      this.setState({ firstFighter: fighter })
      this.props.getQuote('firstFighter', fighter.name);
    } else if (Object.keys(this.state.secondFighter).length === 0) {
      this.setState({ secondFighter: fighter })
      this.props.getQuote('secondFighter', fighter.name);
    }
  }

  findImage = (fighterNum) => {
    if (Object.keys(fighterNum).length) {
      return images[`${fighterNum.image}`]['default'];
    } else if (this.state.firstFighter === fighterNum){
      return funnyBuu;
    } else {
      return funnyBuu;
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

  render() {
    return (
      <div>
        <main className="matchup-container" data-cy="matchup-container">
          <header className="header" data-cy="header">Who Would Win?</header>
          {this.state.firstFighter.name && this.state.secondFighter.name && <WinnerBar className="winner-bar" selectedFighters={[ this.state.firstFighter, this.state.secondFighter ]} vote={ this.state.vote } /> }
          <Link to="/stats" className="first-fighter-link">
            <img
              className="first-fighter-box"
              data-cy="first-fighter-box"
              src={this.findImage(this.state.firstFighter)}
              alt=""
              onClick={ () => { this.props.getFighterStats(this.state.firstFighter, this.findImage(this.state.firstFighter)) } }
            />
          </Link>
          { this.state.firstFighter.name &&
            <img
              className="clear-first-button"
              data-cy="clear-first-button"
              src={clearButton}
              alt="First fighter box with anime character in fighting pose"
              onClick={ () => this.clearFighter(this.state.firstFighter) }
            />
          }
          { this.state.firstFighter.name && this.state.secondFighter.name &&
            <button
            className="first-fighter-vote"
            data-cy="first-vote"
            onClick={ () => this.vote(this.state.firstFighter) }
            >VOTE</button>
          }
          <div className="vs" data-cy="vs">VS</div>
          <Link to="/stats" className="second-fighter-link">
            <img
              className="second-fighter-box"
              data-cy="second-fighter-box"
              src={this.findImage(this.state.secondFighter)}
              alt=""
              onClick={ () => { this.props.getFighterStats(this.state.secondFighter, this.findImage(this.state.secondFighter)) } }
            />
          </Link>
          { this.state.secondFighter.name &&
            <img
              className="clear-second-button"
              data-cy="clear-second-button"
              src={clearButton}
              alt="Second fighter box with anime character in fighting pose"
              onClick={ () => this.clearFighter(this.state.secondFighter) }
            />
          }
          { this.state.firstFighter.name && this.state.secondFighter.name &&
            <button
              className="second-fighter-vote"
              data-cy="second-vote"
              onClick={ () => this.vote(this.state.secondFighter) }
              >VOTE</button>
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
        <div className="icons">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" className="icons">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="icons">www.flaticon.com</a></div>
        <div className="icons">Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan" className="icons">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="icons">www.flaticon.com</a></div>


      </div>
    )
  }

}

export default MatchUp;

MatchUp.propTypes = {
  getFighterStats:PropTypes.func.isRequired,
  getQuote: PropTypes.func.isRequired
};
