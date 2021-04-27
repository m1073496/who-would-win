import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MatchUp from "../MatchUp/MatchUp";
import Stats from "../Stats/Stats";
import './App.css';

import hxhGif from '../../assets/main/gon-killua-fight.gif';
import dbGif from '../../assets/main/db-gif.gif';
import yyhGif from '../../assets/main/yusuke-gif.gif';
import yyhFalls from '../../assets/main/yusuke-falls.gif';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fighterStats: {},
      image: '',
      firstQuotes: {},
      secondQuotes: {}
    }
  }

getFighterStats = (fighter, image) => {
  this.setState({ fighterStats: fighter, image: image });
}

getQuote = (fighterString, fighterName) => {
  fetch(`https://animechan.vercel.app/api/quotes/character?name=${fighterName}`)
    .then(response => response.json())
    .then(data => {
      if (fighterString === 'firstFighter' && !data.error) {
        let quotes = data.map(item => item.quote);
        this.setState({ firstQuotes: { character: `${fighterName}`, quotes: quotes } })
      } else if (fighterString === 'firstFighter' && data.error) {
        this.setState({ firstQuotes: { character: `${fighterName}`, quotes: {} } })
      } else if (fighterString === 'secondFighter' && !data.error) {
        let quotes = data.map(item => item.quote);
        this.setState({ secondQuotes: { character: `${fighterName}`, quotes: quotes } })
      } else if (fighterString === 'secondFighter' && data.error) {
        this.setState({ secondQuotes: { character: `${fighterName}`, quotes: {} } })
      }
    })
}

findImage = () => {
  let images = [hxhGif, dbGif, yyhGif, yyhFalls];
   return images[Math.floor(Math.random() * 4)];
}

  render() {
    return (
      <main className="App">
          <Route exact path="/">
            <div className="home" data-cy="home-view">
              <header data-cy="App-title">Who Would Win?</header>
              <Link className="fight-link" to="/matchUp" data-cy="fight-button"><button className="fight-button">LET'S FIGHT!</button></Link>
              <img
                className="left-image"
                src={ this.findImage() }
                alt="A gif of anime characters fighting"
              />
            </div>
          </Route>
        <Route
          path="/matchUp">
          <MatchUp getFighterStats={ this.getFighterStats } getQuote={ this.getQuote }/>
        </Route>
        <Route
          path="/stats">
          <Stats fighter={ this.state.fighterStats } image={ this.state.image } firstQuotes={ this.state.firstQuotes } secondQuotes={ this.state.secondQuotes }/>
        </Route>
      </main>
    );
  }
}



export default App;
