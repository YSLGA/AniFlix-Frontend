import kevin from "./kevin.png";
import imran from "./imran.png";
import zeke from "./zeke.png";

const Team = () => {
    return (
        <div className="teamimage">
            <h1> Meet The Devs </h1>
            <p>
                {" "}
                Three fellas with a thorough appreciation for anime and
                discovery! We hope you enjoy our site. Keep posting anime movies
                and TV shows, to help us grow our library!{" "}
            </p>
            <h3>Imran</h3>
            <img src={imran} alt="Imran Syed" />
            <p>Planned, designed, and deployed database and website</p>
            <h3>Kevin</h3>
            <img src={kevin} alt="Kevin Villegas" />
            <p>Planned, designed, and lead database and website construction</p>
            <h3>Ezekiel</h3>
            <img src={zeke} alt="Ezekiel Robinson" />
            <p>
                Planned, designed, and contributed to database and website
                creation
            </p>
        </div>
    );
};

export default Team;
