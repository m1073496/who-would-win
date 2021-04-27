import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Stats.css";

const Stats = ({ fighter, image, firstQuotes, secondQuotes }) => {

  if (fighter.name) {

    const allMoves = fighter.moves.map(move => {
        return(
          <li key={move}> { move } </li>
        )
      });

    let quote;
    if (firstQuotes.character === fighter.name) {
      quote = firstQuotes.quotes[Math.floor(Math.random() * firstQuotes.quotes.length)];
    } else if (secondQuotes.character === fighter.name) {
      quote = secondQuotes.quotes[Math.floor(Math.random() * firstQuotes.quotes.length)];
    };

    return (
      <main className="stats-container" data-cy="stats-container">

        <h1 className="title" data-cy="title">Stats</h1>

        <Link className="link" to="/matchUp" aria-label="Link to Match Up view">
          <p className="return-text">return to fight...</p>
          <img
            className="image"
            src={ image }
            alt={`${image.name} standing in a fighting pose`}
          />
        </Link>

        <p className="quote">{ quote }</p>
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

Stats.propTypes = {
  fighter:PropTypes.object.isRequired,
  image: PropTypes.string,
  firstQuotes:PropTypes.object,
  secondQuotes:PropTypes.object
};
