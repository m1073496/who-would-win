import React from "react";
import "./CharacterList.css";

const CharacterList = ({ characterSet }) => {

  // const nameList = () => {
  //   return characterSet.characters.map(character => {
  //     return (
  //       <li className="character-name-item" >{character.name}</li>
  //     )
  //   })
  // }

  return (
    <section className="character-list-container">
      { characterSet.characters.map(character => {
          return (
            <li className="character-name-item">{ character.name }</li>
          )
        }) 
      }
    </section>
  )
}

export default CharacterList;
