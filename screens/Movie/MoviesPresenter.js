import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "./Slider";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.results.map((movie) => (
            <Slider
              key={movie.id}
              id={movie.id}
              title={movie.original_language}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
            />
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
