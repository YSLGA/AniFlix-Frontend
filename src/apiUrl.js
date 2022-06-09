let apiUrl;
const apiUrls = {
  production: "https://anime-mern-backend.herokuapp.com",
  development: "http://localhost:4000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
