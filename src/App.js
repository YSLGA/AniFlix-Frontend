import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import AnimeItem from "./components/AnimeItem";
import apiUrl from "./apiUrl";
import Team from "./components/Team";

const App = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAnimes();
  }, []);

  const getAnimes = async () => {
    try {
      let response = await axios.get(`${apiUrl}/animes`);
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
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Team">
            <li>Team</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home animes={displayAnime} setAnime={setAnimes} />}
        />
        <Route path="/:_id" element={<AnimeItem setAnime={setAnimes} />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default App;
