import React, { useState } from 'react'
import PercentagesSlider from 'react-percentages-slider'

const WinnerBar = ({ fighterss }) => {
  const [fighters, setFighters] = useState([
    {id: 0, text: "Fighter 1", color:"#13FF9D", percentage: 50 },
    {id: 1, text: "Fighter 2", color: "#14FFF9", percentage: 50 }
  ]);

  let percentage;
  let modifiedFighters = fighterss.reduce((accu, currentFighter, i) => {
      let color;

      if (i === 0) {
        color = "#13FF9D";
        percentage = Math.floor(Math.random() * 71) + 20;
      } else {
        color = "#14FFF9";
        percentage = 100 - percentage;
      }
      accu.push({ id: i, text: currentFighter.name, color: color, percentage: percentage })

      return accu;
    }, []);

  return <PercentagesSlider divisions={modifiedFighters} setDivisions={setFighters}/>
}

export default WinnerBar;
