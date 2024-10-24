import React, { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";

const App = () => {
  let [animes, setAnimes] = useState([]);
  let [term , setTerm] = useState('naruto')

  let getAnime = async (name) => {
    let response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    let data = await response.json();
    setAnimes(data.data);
    console.log(data);
  };

  useEffect(() => {
    getAnime("naruto");
  },[]);

  return (
    <>
      <h1>Anime Search</h1>
      <div className="container">
        <input type="text" placeholder="Search Anime" onChange={(e) => setTerm(e.target.value)} />
        <button onClick={() => getAnime(term)}>Search</button>
      </div>

      <div className="container">
        {animes.length > 0 ? (
          animes.map((anime, index) => <AnimeCard anime={anime} key={index} />)
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </>
  );
};

export default App;
