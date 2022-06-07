import axios from "axios";
import { useState } from "react";

const Home = (props) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const postAnime = async () => {
        let payload = { name: name, yearReleased: year, genre: genre };
        try {
            let response = await axios.post(
                `https://anime-mern-backend.herokuapp.com/animes/`,
                payload
            );
            console.log(response.data);
        } catch (ex) {
            console.log(ex);
        }
        try {
            let response = await axios.get(
                `https://anime-mern-backend.herokuapp.com/animes/`
            );
            console.log(response.data);
            props.setAnime(response.data.animes);
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postAnime();
        setName("");
        setYear("");
        setGenre("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    value={name}
                    type="text"
                    placeholder="name"
                />
                <input
                    onChange={handleYearChange}
                    value={year}
                    type="text"
                    placeholder="year released"
                />
                <input
                    onChange={handleGenreChange}
                    value={genre}
                    type="text"
                    placeholder="genre"
                />
                <input type="submit" value="add to list" />
            </form>
            <ul>{props.animes}</ul>
        </div>
    );
};

export default Home;
