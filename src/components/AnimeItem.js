import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";

const AnimeItem = (props) => {
    const params = useParams();
    let navigate = useNavigate();
    const [id, setId] = useState([]);
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

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
            <ul>
                <li>
                    <p>Name: {id.name}</p>
                    <p>Year Released: {id.yearReleased}</p>
                    <p>Genre: {id.genre}</p>
                </li>
            </ul>
        </div>
    );
};

export default AnimeItem;
