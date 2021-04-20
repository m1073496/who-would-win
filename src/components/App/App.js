import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">Who Would Win?</header>
      </div>
    );
  }
}

export default App;
