import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import searchIcon from './search.svg'
import Card from './Card';


// 93c3d162

const API_URL = 'http://www.omdbapi.com?apikey=93c3d162'


const App = () => {

  const[movies,setMovies] = useState([]);
 const [searchTerm,setSearchterm] = useState('');

 
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman');
  },[])
  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder='Search for movies' value={searchTerm}
        onChange={(e)=>setSearchterm(e.target.value)} />

        <img src={searchIcon} alt="search"
        onClick={()=>searchMovies(searchTerm)} />
</div>


       {movies?.length > 0
       ?(
        <div className="container">
          {movies.map((movie) =>(
            <Card movie={movie}/>
          ))}
      </div>
       ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
       )
      }

        
      
    </div>
  );
}

export default App;
