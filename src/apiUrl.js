let apiUrl;
const apiUrls = {
  production: "https://anime-backendv2.herokuapp.com/",
  development: "http://localhost:4000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
