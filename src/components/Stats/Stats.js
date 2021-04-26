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

    if (firstQuotes.error && secondQuotes.error) {
      quote = '';

    } else if (firstQuotes.error && secondQuotes[0].character.includes(fighter.name)) {

      if (secondQuotes[2] && secondQuotes[2].character.includes(fighter.name)) {
        quote = `"${secondQuotes[2].quote}"`;
      } else if (secondQuotes[0].character.includes(fighter.name)) {
        quote = `"${secondQuotes[0].quote}"`;
      } else {
        quote = '';
      };

    } else if (secondQuotes.error && firstQuotes[0].character.includes(fighter.name)) {

      if (firstQuotes[2] && firstQuotes[2].character.includes(fighter.name)) {
        quote = `"${firstQuotes[2].quote}"`;
      } else if (firstQuotes[0].character.includes(fighter.name)) {
        quote = `"${firstQuotes[0].quote}"`;
      } else {
        quote = '';
      };

    } else if (!firstQuotes.error && !secondQuotes.error) {

      if (secondQuotes[2] && secondQuotes[2].character.includes(fighter.name)) {
        quote = `"${secondQuotes[2].quote}"`;

      } else if (secondQuotes[0] && secondQuotes[0].character.includes(fighter.name)) {
        quote = `"${secondQuotes[0].quote}"`;

      } else if (firstQuotes[2] && firstQuotes[2].character.includes(fighter.name)) {
        quote = `"${firstQuotes[2].quote}"`;

      } else if (firstQuotes[0] && firstQuotes[0].character.includes(fighter.name)) {
        quote = `"${firstQuotes[0].quote}"`;
      };

   } else if (!firstQuotes.error || !secondQuotes.error) {
      quote = '';
   };


    return (
      <main className="stats-container" data-cy="stats-container">

        <h1 className="title" data-cy="title">Stats</h1>

        <Link className="link" to="/matchUp">
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
  firstQuotes:PropTypes.array,
  secondQuotes:PropTypes.array
};
