import React from "react";
import { Link } from "react-router-dom";
import "./Stats.css";

const Stats = ({ fighter, image, firstQuotes, secondQuotes }) => {

  console.log(firstQuotes)
  console.log(secondQuotes)

  if (fighter.name) {
    const allMoves = fighter.moves.map(move => {
        return(
          <li>{ move }</li>
        )
      })

    return (
      <main className="stats-container">

        <h1 className="title">Stats</h1>

        <Link className="link" to="/matchUp">
          <p className="return-text">return to fight...</p>
          <img
            className="image"
            src={ image }
          />
        </Link>

        <p className="quote">{ secondQuotes[0].quote }</p>
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
