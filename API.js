import axios from "axios";

const APIKEY = "cc3aed3fa1f0feef67c25879a942c3db";

const getData = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: APIKEY,
    },
  });

const onApiData = async (path, params = {}) => {
  try {
    const { data: results, data } = await getData(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => onApiData("/movie/now_playing"),
  popular: () => onApiData("/movie/popular"),
  upcoming: () => onApiData("/movie/upcoming", { region: "kr" }),
  search: (query) => onApiData("/search/movie", { query }),
  movie: (id) => onApiData(`/movie/${id}`),
  discover: () => onApiData("/discover/movie"),
};

export const tvApi = {};
