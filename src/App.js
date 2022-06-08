import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import AnimeShows from "./components/AnimeShows";
import AnimeShowItem from "./components/AnimeShowItem";
import apiUrl from "./apiUrl";
import Team from "./components/Team";
import Home from "./Home";
import AnimeMovies from "./components/AnimeMovies";
import AnimeMovieItem from "./components/AnimeMovieItem";

const App = () => {
    const [animes, setAnimes] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAnimes();
        getMovies();
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

    const getMovies = async () => {
        try {
            let response = await axios.get(`${apiUrl}/animeMovies`);
            console.log(response.data);
            setMovies(response.data.movies);
        } catch (ex) {
            console.log(ex);
        }
    };

    const displayAnime = animes.map((anime) => {
        return (
            <Link to={"/animes/" + anime._id}>
                <li key={anime._id}>
                    <p>Name: {anime.name}</p>
                    <p>Year Released: {anime.yearReleased}</p>
                    <p>Genre: {anime.genre}</p>
                    <img src={anime.image} alt="anime cover" />
                </li>
            </Link>
        );
    });

    const displayMovies = movies.map((movie, key) => {
        return (
            <Link to={"/movies/" + movie._id}>
                <li key={key}>
                    <p>Title: {movie.title}</p>
                    <p>Year Released: {movie.yearReleased}</p>
                    <p>Genre: {movie.genre}</p>
                    <img src={movie.image} alt="anime movie cover" />
                </li>
            </Link>
        );
    });

    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/animes">Anime Shows</Link>
                    <Link to="/movies">Anime Movies</Link>
                    <Link to="/Team">Team</Link>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/animes/"
                    element={
                        <AnimeShows
                            animes={displayAnime}
                            setAnime={setAnimes}
                        />
                    }
                />
                <Route
                    path="/animes/:_id"
                    element={<AnimeShowItem setAnime={setAnimes} />}
                />
                <Route
                    path="/movies/"
                    element={
                        <AnimeMovies
                            movies={displayMovies}
                            setMovies={setMovies}
                        />
                    }
                />
                <Route
                    path="/movies/:_id"
                    element={<AnimeMovieItem setMovies={setMovies} />}
                />
                <Route path="/Team" element={<Team />} />
            </Routes>
        </div>
    );
};

export default App;
