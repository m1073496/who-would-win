import React, { useState } from 'react'
import PercentagesSlider from 'react-percentages-slider'

const WinnerBar = () => {
  const [example, setExample] = useState([
    { text: "Android 17", color:"orange", percentage: 50 },
    { text: "Android 18", color:"yellow", percentage: 50 }])

  return <PercentagesSlider divisions={example} setDivisions={setExample}/>
}

export default WinnerBar;
