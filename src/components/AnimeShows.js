import axios from "axios";
import { useState } from "react";
import apiUrl from "../apiUrl";

const AnimeShows = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const postAnime = async () => {
    let payload = {
      name: name,
      yearReleased: year,
      genre: genre,
      image: image,
    };
    try {
      let response = await axios.post(`${apiUrl}/animes/`, payload);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    postAnime();
    setName("");
    setYear("");
    setGenre("");
    setImage("");
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
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className ="animeShows">
      <form className="show-text-fields"onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="Enter Anime Show"
        />
        <input
          onChange={handleYearChange}
          value={year}
          type="text"
          placeholder="Year Released"
        />
        <input
          onChange={handleGenreChange}
          value={genre}
          type="text"
          placeholder="Genre"
        />
        <input
          type="text"
          value={image}
          onChange={handleImageChange}
          placeholder="Image"
        />
        <input type="submit" value="add to show list" />
      </form>
      <ul>{props.animes}</ul>
    </div>
  );
};

export default AnimeShows;
