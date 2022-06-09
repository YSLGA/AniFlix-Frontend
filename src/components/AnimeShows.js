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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
<<<<<<< HEAD
          placeholder="name"
=======
          placeholder="Enter Anime Show"
>>>>>>> cd73e3091f900d1c1530d3aa303bac1e01f1a16d
        />
        <input
          onChange={handleYearChange}
          value={year}
          type="text"
<<<<<<< HEAD
          placeholder="year released"
=======
          placeholder="Year Released"
>>>>>>> cd73e3091f900d1c1530d3aa303bac1e01f1a16d
        />
        <input
          onChange={handleGenreChange}
          value={genre}
          type="text"
<<<<<<< HEAD
          placeholder="genre"
=======
          placeholder="Genre"
>>>>>>> cd73e3091f900d1c1530d3aa303bac1e01f1a16d
        />
        <input
          type="text"
          value={image}
          onChange={handleImageChange}
<<<<<<< HEAD
          placeholder="image"
=======
          placeholder="Image"
>>>>>>> cd73e3091f900d1c1530d3aa303bac1e01f1a16d
        />
        <input type="submit" value="add to list" />
      </form>
      <ul>{props.animes}</ul>
    </div>
  );
};

export default AnimeShows;
