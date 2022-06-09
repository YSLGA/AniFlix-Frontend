import axios from "axios";
import { useState } from "react";
import apiUrl from "../apiUrl";

const AnimeMovies = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const postAnimeMovie = async () => {
    let payload = {
      name: name,
      yearReleased: year,
      genre: genre,
      image: image,
    };
    try {
      let response = await axios.post(`${apiUrl}/animeMovies/`, payload);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
    try {
      let response = await axios.get(`${apiUrl}/animeMovies/`);
      console.log(response.data);
      props.setAnime(response.data.movies);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postAnimeMovie();
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
        <input type="submit" value="add to list" />
      </form>
      <ul>{props.movies}</ul>
    </div>
  );
};

export default AnimeMovies;
