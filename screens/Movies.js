import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../API";
import MovieContainer from "./Movie/MovieContainer";

export default () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.nowPlaying();
    const [upcoming, upcomingError] = await movieApi.nowPlaying();
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      popularError,
      nowPlayingError,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <MovieContainer data={movies.n} />
    </View>
  );
};
