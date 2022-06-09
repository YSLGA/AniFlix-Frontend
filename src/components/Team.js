import kevin from "./kevin.png";
import imran from "./imran.png";
import zeke from "./zeke.png";

const Team = () => {
  return (
    <div>
      <h1> Meet The Devs </h1>

      <img src={imran} alt="Imran Syed" />
      <p>Planned, designed, and deployed database and website</p>

      <img src={kevin} alt="Kevin Villegas" />
      <p>Planned, designed, and lead database and website construction</p>

      <img src={zeke} alt="Ezekiel Robinson" />
      <p>Planned, designed, and contributed to database and website creation</p>

      <p>
        {" "}
        Three fellas with a thorough appreciation for anime and discovery! We
        hope you enjoy our site. Keep posting anime movies and TV shows, to help
        us grow our library!{" "}
      </p>
    </div>
  );
};

export default Team;
