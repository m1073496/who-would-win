import React from "react";
import "./Stats.css";
import image from '../MatchUp/android17-main1.png';

const Stats = ({ fighter }) => {

  if (fighter.name) {

    const allMoves = fighter.moves.map(move => {
        return(
          <li>{ move }</li>
        )
      })

    return (
      <main className="stats-container">
        <h1 className="title">Stats</h1>
        <img
          className="image"
          src={ image }
        />
        <div className="first-column">
          <p>{ fighter.summary }</p>
          <p>{ fighter.rank }</p>
          <p>{ fighter.fighting_style }</p>
        </div>
        <div className="second-column">ABILITIES: { allMoves }</div>
      </main>
    )
  } else {
    return (
      <p>Make a selection to see some stats!</p>
    )
  }
}

export default Stats;
