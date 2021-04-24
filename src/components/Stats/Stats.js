import React from "react";
import "./Stats.css";
import image from '../MatchUp/android18-main2.png';
import backArrow from '../../assets/left-arrow.svg';

const Stats = ({ fighter }) => {

  if (fighter.name) {

    const allMoves = fighter.moves.map(move => {
        return(
          <li>{ move }</li>
        )
      })

    return (
      <main className="stats-container">
        <img
          className="back-arrow"
          src={ backArrow }
        />
        <h1 className="title">Stats</h1>
        <img
          className="image"
          src={ image }
        />
        <p className="quote">{fighter.summary}</p>
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
