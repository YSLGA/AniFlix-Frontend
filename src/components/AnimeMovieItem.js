import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

const AnimeMovieItem = (props) => {
    const params = useParams();
    let navigate = useNavigate();
    const [id, setId] = useState([]);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        getReq();
    }, []);

    const handleNameChange = (event) => {
        setTitle(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };
    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const patchReq = async () => {
        let payload = {
            title: title,
            yearReleased: year,
            genre: genre,
            image: image,
        };
        try {
            let response = await axios.patch(
                `${apiUrl}/animeMovies/${params._id}`,
                payload
            );
            console.log(response.data.movies);
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleSubmit = () => {
        patchReq();
        setTitle("");
        setYear("");
        setGenre("");
        setImage("");
    };

    const deleteReq = async () => {
        try {
            let response = await axios.delete(
                `${apiUrl}/animeMovies/${params._id}`
            );
            console.log(response.data);
        } catch (ex) {
            console.log(ex);
        }
        try {
            let response = await axios.get(`${apiUrl}/animeMovies/`);
            console.log(response.data);
            props.setMovies(response.data.movies);
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleClick = () => {
        deleteReq();
        navigate("/movies");
    };

    const getReq = async () => {
        try {
            let response = await axios.get(
                `${apiUrl}/animeMovies/${params._id}`
            );
            console.log(response.data);
            setId(response.data.movies);
            console.log(id);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div className="animeMovieItem">
            <form
                className="animeMovieItem-text-fields"
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleNameChange}
                    value={title}
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
                <input
                    type="text"
                    value={image}
                    onChange={handleImageChange}
                    placeholder="image"
                />
                <input type="submit" value="edit" />
                <button className="delete-btn" onClick={handleClick}>
                    delete
                </button>
            </form>

            <ul>
                <li>
                    <p>Title: {id.title}</p>
                    <p>Year Released: {id.yearReleased}</p>
                    <p>Genre: {id.genre}</p>
                    <img
                        className="anime-item"
                        src={id.image}
                        alt="single anime movie cover"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AnimeMovieItem;
