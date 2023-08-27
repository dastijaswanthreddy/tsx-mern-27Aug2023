import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './Homepage.css';

const HomePage = () => {
  const [characters,setCharacters]=useState([])
  const [loading, setLoading] = useState();
  useEffect(()=>{
    setLoading(1);
    axios.get(`https://swapi.dev/api/people`)
      .then((res)=>{
          setCharacters(res.data.results);
          setLoading(0);
      })
      .catch((error)=>{
        console.log(error);
        setCharacters();
      })
  },[]);

  return (
      <div className='home'>
          {loading===1 && <h1>Loading...</h1>}
          {characters?
            characters.map((character,key) =>(
              <Link to={`/Character/${key+1}`} key={key}>
                  <div className={`species-${character.species.length?2:1}`}>
                      <img src={`https://picsum.photos/200?random=${character.name}`} alt='#' />
                      <h1 style={{color: "white"}}>{character.name}</h1>
                  </div>
              </Link>
            ))
            :<div>
              <h1>Invalid API or API Server is down, please open console to know more about this</h1>
            </div>
          }
      </div>
  )
}

export default HomePage