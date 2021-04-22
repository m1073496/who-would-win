import { Component } from "react";
import './MatchUp.css';
import image from './android17-main1.png';
import image2 from './android18-main2.png';


class MatchUp extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      characters: [],
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
          />
          <div className="vs">VS</div>
          <img
            className="second-fighter-box"
            src={image2}
          />
      </main>
    )
  }



}

export default MatchUp;
