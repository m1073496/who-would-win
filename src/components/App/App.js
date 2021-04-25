import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import Stats from "../Stats/Stats";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fighterStats: {},
      image: ''
    }
  }

getFighterStats = (fighter, image) => {
  this.setState({ fighterStats: fighter, image: image })
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
          <MatchUp getFighterStats={ this.getFighterStats }/>
        </Route>
        <Route
          path="/stats">
          <Stats fighter={ this.state.fighterStats } image={ this.state.image }/>
        </Route>
      </main>
    );
  }
}



export default App;
