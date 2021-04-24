import { Component } from "react";
import { Route, Link } from "react-router-dom";
import WinnerBar from "../WinnerBar/WinnerBar";
import CharacterList from "../CharacterList/CharacterList"
import Navigation from "../Navigation/Navigation";
import Stats from "../Stats/Stats";
import './MatchUp.css';
import image from './android17-main1.png';
import image2 from './android18-main2.png';
import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';

import black from '../../assets/black.png'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));
console.log(images)

class MatchUp extends Component {
  constructor() {
    super();
    this.state = {
      characterData: [dbData, yyhData, hxhData],
      firstFighter: {},
      secondFighter: {}
    }
  }

  selectFighters = (fighter) => {
    if (this.state.firstFighter.name) {
      this.setState({ secondFighter: fighter }, () => {
      })
    } else {
      this.setState({ firstFighter: fighter }, () => {
      })
    }
  }

  render() {
    return (
      <div>
        <main className="matchup-container">
          <h1 className="header">Who Would Win?</h1>
          <WinnerBar className="winner-bar" />
          <Link to="/stats" className="first-fighter-box">
            <img
              className="first-fighter-box"
              src={images[`${dbData.characters[10].image}`]['default']}
              alt=""
              onClick={ () => this.props.getFighterStats(this.state.firstFighter) }
            />
          </Link>
          <div className="vs">VS</div>
          <Link to="/stats" className="second-fighter-box">
            <img
              className="second-fighter-box"
              src={image2}
              alt=""
              onClick={ () => this.props.getFighterStats(this.state.firstFighter) }
            />
          </Link>
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
