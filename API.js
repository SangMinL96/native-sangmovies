import axios from "axios";

const APIKEY = "cc3aed3fa1f0feef67c25879a942c3db";

const getData = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      api_key: APIKEY,
      ...params,
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
  discovery: () => onApiData("/discover/movie"),
};
export const tvApi = {
  today: () => onApiData("/tv/airing_today"),
  thisweek: () => onApiData("/tv/on_the_air"),
  topRated: () => onApiData("/tv/top_rated"),
  popular: () => onApiData("/tv/popular"),
  search: (query) => onApiData("/search/tv", { query }),
  show: (id) => onApiData(`/tv/${id}`),
};
export const getImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "http://memorymaker.co.kr/plugin/wz.booking.pension.prm/img/noimage.gif";

export const getDate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("ko-kr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
