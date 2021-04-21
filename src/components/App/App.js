import React, { Component } from "react";
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
        <header className="App-header">Who Would Win?</header>
      </main>
    );
  }
}

export default App;
