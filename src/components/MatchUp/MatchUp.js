import { Component } from "react";
import { Route } from "react-router-dom";
import CharacterList from "../CharacterList/CharacterList"
import Navigation from "../Navigation/Navigation";
import './MatchUp.css';
import image from './android17-main1.png';
import image2 from './android18-main2.png';
import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';

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
    console.log(this.state.secondFighter.image)
    return (
      <div>
        <main className="matchup-container">
          <h1 className="header">Who Would Win?</h1>
            <img
              className="first-fighter-box"
              src={image}
              alt=""
            />
            {/*}<button className="first-stats">See stats</button>*/}
            <div className="vs">VS</div>
            <img
              className="second-fighter-box"
              src={image2}
              alt=""
            />
            {/*<button className="second-stats">See stats</button>*/}
            <p className="choose-fighter">choose your fighters...</p>
            <Navigation className="nav-bar"/>
        </main>
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
