import React, {useState, useCallback} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';
import '../HomePage/Homepage.css'
const HomePage = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const [loading, setLoading] = useState(2);
  const [characters,setCharacters]=useState([]);
  const fetchSearchCharacter=useCallback(()=>{
    setLoading(1);
    axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
    .then(res=>{
      setCharacters(res.data.results);
      setLoading(0);
    })
    .catch((error)=>{
      console.log(error);
      setCharacters([]);
    })
    },[searchTerm]);
  return (
    <div className='home'>
      <div className='home-search'>
        <input
          type='text'
          placeholder='Type a character name...'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
         />
        <button onClick={fetchSearchCharacter}>Search Meal</button>
        {loading===1 && <h1 style={{position: 'absolute', right: '25%'}}>Loading...</h1>}
      </div>
      <div className='home'>
          {characters? characters.map((character,key) =>(
              <Link to={`/Character/${key+1}`} key={key}>
                <div className={`home-charcter species-${character.species.length?2:1}`}>
                    <img src={`https://picsum.photos/200?random=${character.name}`} alt='#' />
                    <h1 style={{color: "white"}}>{character.name}</h1>
                </div>
              </Link>
            )):
          <div className='home-charcter'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7D1F6AgHuvYGUUA7JHV1gKP3ut89dfb83yA&usqp=CAU" alt='#' />
              <h4>404</h4>
              <h2>Character not found! Try another Character...</h2>
          </div>}
      </div>
    </div>
  )
}

export default HomePage