import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import CharacterList from "../CharacterList/CharacterList";
import './App.css';
import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characterData: [dbData, yyhData, hxhData]
    }
  }

  render = () => {
    return (
      <main className="App">
        <Route exact path="/">
          <header>Who Would Win?</header>
          <Link className="link" to="/matchUp"><button>Let's Fight!</button></Link>
        </Route>
        <Route path="/matchUp">
          <MatchUp />
        </Route>
        <Route
          path="/matchUp/DB">
          <CharacterList characterSet={ this.state.characterData[0] }/>
        </Route>
        <Route
          path="/matchUp/YYH">
          <CharacterList characterSet={ this.state.characterData[1] }/>
        </Route>
        <Route
          path="/matchUp/HXH">
          <CharacterList characterSet={ this.state.characterData[2] }/>
        </Route>
      </main>
    );
  }
}

export default App;
