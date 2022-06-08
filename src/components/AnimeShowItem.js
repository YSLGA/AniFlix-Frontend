import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

const AnimeShowItem = (props) => {
    const params = useParams();
    let navigate = useNavigate();
    const [id, setId] = useState([]);
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        getReq();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
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
            name: name,
            yearReleased: year,
            genre: genre,
            image: image,
        };
        try {
            let response = await axios.patch(
                `${apiUrl}/animes/${params._id}`,
                payload
            );
            console.log(response.data.animes);
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleSubmit = () => {
        patchReq();
        setName("");
        setYear("");
        setGenre("");
        setImage("");
    };

    const deleteReq = async () => {
        try {
            let response = await axios.delete(`${apiUrl}/animes/${params._id}`);
            console.log(response.data);
        } catch (ex) {
            console.log(ex);
        }
        try {
            let response = await axios.get(`${apiUrl}/animes/`);
            console.log(response.data);
            props.setAnime(response.data.animes);
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleClick = () => {
        deleteReq();
        navigate("/");
    };

    const getReq = async () => {
        try {
            let response = await axios.get(`${apiUrl}/animes/${params._id}`);
            console.log(response.data);
            setId(response.data.animes);
            console.log(id);
        } catch (ex) {
            console.log(ex);
        }
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
                <input
                    type="text"
                    value={image}
                    onChange={handleImageChange}
                    placeholder="image"
                />
                <input type="submit" value="edit" />
                <button onClick={handleClick}>delete</button>
            </form>

            <ul>
                <li>
                    <p>Name: {id.name}</p>
                    <p>Year Released: {id.yearReleased}</p>
                    <p>Genre: {id.genre}</p>
                    <img src={id.image} alt="single anime cover" />
                </li>
            </ul>
        </div>
    );
};

export default AnimeShowItem;
