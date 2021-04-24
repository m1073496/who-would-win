import React from "react";
import "./Stats.css";

const Stats = ({ fighter }) => {
  console.log(fighter)
  return (
    <main className="stats-container">
      <h1> Stats</h1>
      <p>{fighter.name}</p>




    </main>
  )
}

export default Stats;
