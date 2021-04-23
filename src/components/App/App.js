import React from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import './App.css';

const App = () => {
    return (
      <main className="App">
        <Route exact path="/">
          <header>Who Would Win?</header>
          <Link className="link" to="/matchUp"><button>Let's Fight!</button></Link>
        </Route>
        <Route
          path="/matchUp">
          <MatchUp />
        </Route>
      </main>
    );
  }



export default App;
