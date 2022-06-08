import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import AnimeItem from "./components/AnimeItem";
import apiUrl from "./apiUrl";
import Team from "./components/Team";

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [users, setUsers] = useState("");

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

  //////////////////////////

  const postUser = async () => {
    let payload = { name: users };
    try {
      let response = await axios.post(`${apiUrl}/users/`, payload);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  ///////////////////////////////

  const handleUserChange = (event) => {
    setUsers(event.target.value);
  };

  //   const displayUser = users.map((user, key) => {
  //     return <p key={key}>Username: {user.name}</p>;
  //   });

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
          element={
            <Home
              animes={displayAnime}
              setAnime={setAnimes}
              //   users={displayUser}
              userPost={postUser}
              userChange={handleUserChange}
              user={users}
            />
          }
        />
        <Route path="/:_id" element={<AnimeItem setAnime={setAnimes} />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default App;
