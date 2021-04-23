import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import App from "../App/App";
import Navigation from "../Navigation/Navigation";
import './MatchUp.css';
import image from './android17-main1.png';
import image2 from './android18-main2.png';


class MatchUp extends Component {
  constructor() {
    super();
    this.state = {
      allCharacters: [],
      firstFighter: [],
      secondFighter: []
    }
  }

  render() {
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

      </div>
    )
  }

}

export default MatchUp;
