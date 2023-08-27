import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Character.css';

const Character = () => {
  const [character,setCharacter]=useState([]);
  var location=window.location.pathname.substring(11); //location stores the index of the character
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${location}`)
    .then((res)=>{
      setCharacter(res.data);
    })
    .catch((error)=>{
      console.log(error);
      setCharacter([]);
    })
    },[location]);

  const [homeworld,setHomeWorld]=useState([]);
  useEffect(()=>{
    axios.get(`${character.homeworld}`)
    .then((res)=>{
      setHomeWorld(res.data);
    })
    .catch((error)=>{
      console.log(error);
      setHomeWorld([]);
    })
  },[character.homeworld]);

  const convertToDateFormat=(isoDate) => {
      const date = new Date(isoDate);
      const day = String(date.getDate()).padStart(2,'0');
      const month = String(date.getMonth()+1).padStart(2,'0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
  }
  return (
    <div className='character-details'>
        {
          character &&
          <div style={{display: "flex"}}>
            <table>
                <caption>Details of the character</caption>
                <thead>
                  <tr>
                    <th colSpan={4}>{character.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Height:</td>
                    <td>{character.height/100} meters</td>
                  </tr>
                  <tr>
                    <td>Mass:</td>
                    <td>{character.mass} Kg</td>
                  </tr>
                  <tr>
                    <td>Date added to API:</td>
                    <td>{convertToDateFormat(character.created)}</td>
                  </tr>
                  <tr>
                    <td>Number of films:</td>
                    <td>{character.films?character.films.length:0}</td>
                  </tr>
                  <tr>
                    <td>Birth Year:</td>
                    <td>{character.birth_year}</td>
                  </tr>
                </tbody>
            </table>
            <table>
              <caption>Details of the Character's Home World</caption>
                <thead>
                  <tr>
                    <th colSpan={4}>{homeworld.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Terrain:</td>
                    <td>{homeworld.terrain}</td>
                  </tr>
                  <tr>
                    <td>Climate:</td>
                    <td>{homeworld.climate}</td>
                  </tr>
                  <tr>
                    <td>Number of residents:</td>
                    <td>{homeworld.population}</td>
                  </tr>
                </tbody>
            </table>
            </div>}
    </div>
  )
}

export default Character