import { Component } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink className="db-link" to="/matchUp/DB">Dragon Ball</NavLink>
          <NavLink className="yyh-link" to="/matchUp/YYH">Yu Yu Hakusho</NavLink>
          <NavLink className="hxh-link" to="/matchUp/HXH">Hunter X Hunter</NavLink>
      </main>
    )
  }



}

export default MatchUp;
