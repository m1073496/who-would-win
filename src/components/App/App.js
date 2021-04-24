import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import Stats from "../Stats/Stats";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fighterStats: {}
    }
  }

getFighterStats = (fighter) => {
  this.setState({ fighterStats: fighter })
}

  render() {
    return (
      <main className="App">
        <Route exact path="/">
          <header>Who Would Win?</header>
          <Link className="link" to="/matchUp"><button>Let's Fight!</button></Link>
        </Route>
        <Route
          path="/matchUp">
          <MatchUp getFighterStats={ this.getFighterStats } />
        </Route>
        <Route
          path="/stats">
          <Stats fighter={ this.state.fighterStats }/>
        </Route>

      </main>
    );
  }
}



export default App;
