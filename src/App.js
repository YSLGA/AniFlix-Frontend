import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [input, setInput] = useState({name:"", yearReleased:"", genre:""})

  const handleChange = (event) => {
    setInput({...input, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefualt()

    fetch('https://anime-mern-backend.herokuapp.com/animes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
    .then(response => response.json())
    .then(data => {
      const copy = [...animes]
      copy.push(data.animes)
      setAnimes(copy)
      setInput({name:"", yearReleased:"", genre:""})
    })


  }



  useEffect(() => {
    getAnimes();
  }, []);

  const getAnimes = async () => {
    try {
      let response = await axios.get(
        `https://anime-mern-backend.herokuapp.com/animes`
      );
      console.log(response.data);
      setAnimes(response.data.animes);
    } catch (ex) {
      console.log(ex);
    }
  };

  const displayAnime = animes.map((anime) => {
    return (
      <Link to={"/" + anime._id}>
        <li key={anime._id}>
          <p>Name: {anime.name}</p>
          <p>Year Released: {anime.yearReleased}</p>
          <p>Genre: {anime.genre}</p>
        </li>
      </Link>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={input.name} name="name" type="text" placeholder="name" />
          <input onChange={handleChange} value={input.yearReleased} name="yearReleased" type="text" placeholder='year released' />
          <input onChange={handleChange} value={input.genre} name="genre" type="text" placeholder= "genre" />
          <input type="submit" value="add to list" />
      </form>

      <Routes>
        <Route path="/" element={<Home animes={displayAnime} />} />
      </Routes>
     
    </div>
  );
};

export default App;
