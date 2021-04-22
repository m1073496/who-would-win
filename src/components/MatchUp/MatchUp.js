import { Component } from "react";
import Fighter from "../Fighter/Fighter";
import './MatchUp.css';


class MatchUp extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  render() {
    return (
      <main className="matchup-container">
        <h1 className="header">Who Would Win?</h1>
          <Fighter id="first-fighter-box"></Fighter>
          <div className="vs">VS</div>
          <Fighter id="second-fighter-box"></Fighter>
      </main>
    )
  }



}

export default MatchUp;
