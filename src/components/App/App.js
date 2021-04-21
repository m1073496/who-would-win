import React, { Component } from "react";
import './App.css';
import yyhData from '../../YYHdata.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characterData: []
    }
  }

  render = () => {
    console.log(yyhData)
    return (
      <div className="App">
        <header className="App-header">Who Would Win?</header>
      </div>
    );
  }
}

export default App;
