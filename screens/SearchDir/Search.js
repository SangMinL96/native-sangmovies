import React, { useState } from "react";

import SearchContainer from "./SearchContainer";
import { movieApi, tvApi } from "../../API";
export default () => {
  const [data, setData] = useState({
    movies: [],
    show: [],
    moviesError: null,
    showError: null,
  });
  const [keyWord, setKeyWord] = useState("");
  const onChange = (text) => setKeyWord(text);
  const onSubmit = async () => {
    const [movies, moviesError] = await movieApi.search(keyWord);
    const [show, showError] = await tvApi.search(keyWord);
    setData({
      movies,
      moviesError,
      show,
      showError,
    });
    setKeyWord("");
  };

  return (
    <SearchContainer
      {...data}
      onSubmit={onSubmit}
      onChange={onChange}
      keyWord={keyWord}
    />
  );
};
