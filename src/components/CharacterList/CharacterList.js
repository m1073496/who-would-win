import React from "react";
import "./CharacterList.css";

const CharacterList = ({ characterSet, selectFighters }) => {

  const nameList = characterSet.characters.map(character => {
      return (
        <button key={character.name} value={character.name} className="character-name-item" onClick={ (event) => { chooseFighter(event) } }>{ character.name }</button>
      )
  })

  const chooseFighter = (event) => {
    const fighter = characterSet.characters.find(character => character.name === event.target.value);
    selectFighters(fighter)
  }

  return (
    <section className="character-list-container">
      { nameList }
    </section>
  )
}

export default CharacterList;
