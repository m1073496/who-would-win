import React from "react";
import "./CharacterList.css";

const CharacterList = ({ characterSet, selectFighters }) => {

  // const nameList = () => {
  //   return characterSet.characters.map(character => {
  //     return (
  //       <li className="character-name-item" >{character.name}</li>
  //     )
  //   })
  // }

  const chooseFighter = (event) => {
    console.log(characterSet.characters)
    const fighter = characterSet.characters.find(character => character.name === event.target.value);
    selectFighters(fighter)
  }

  return (
    <section className="character-list-container">
      { characterSet.characters.map(character => {
          return (
            <button value={character.name} className="character-name-item" onClick={ (event) => { chooseFighter(event) } }>{ character.name }</button>
          )
        })
      }
    </section>
  )
}

export default CharacterList;
