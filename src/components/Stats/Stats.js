import React from "react";
import { Link } from "react-router-dom";
import "./Stats.css";
import image from '../MatchUp/android18-main2.png';
import backArrow from '../../assets/left-arrow.svg';

const Stats = ({ fighter }, { quote }) => {

  console.log(quote)

  if (fighter.name) {
    const allMoves = fighter.moves.map(move => {
        return(
          <li>{ move }</li>
        )
      })

    return (
      <main className="stats-container">

        <h1 className="title">Stats</h1>

        <Link className="image" to="/matchUp">
          <p className="return-text">return to fight...</p>
          <img
            src={ image }
          />
        </Link>

        <p className="quote">{fighter.summary}</p>
        <div className="first-column">
          <p>{ fighter.summary }</p>
          <p>{ fighter.rank }</p>
          <p>{ quote }</p>
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
