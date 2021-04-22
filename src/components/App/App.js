import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import './App.css';
import yyhData from '../../YYHdata.json';
import dbData from '../../DBdata.json';
import hxhData from '../../HXHdata.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characterData: []
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
          <MatchUp>ok</MatchUp>
        </Route>
      </main>
    );
  }
}

export default App;
