import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";

const App = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        getAnimes();
    }, []);

    const getAnimes = async () => {
        try {
            let response = await axios.get(
                `https://anime-mern-backend.herokuapp.com/animes/`
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home animes={displayAnime} setAnime={setAnimes} />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
