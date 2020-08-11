import React from "react";
import { Dimensions, ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "./Slider";
import Title from "../Title";
import Popular from "./Popular";
import Upcoming from "./UpComing";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;
const PopularContainer = styled.View``;
const UpComingContainer = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.results.map((movie) => (
              <Slider
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <PopularContainer>
          <Title title={"Popoular Movies"} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popular.results.map((movie) => (
              <Popular
                key={movie.id}
                id={movie.id}
                title={movie.title}
                votes={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </ScrollView>
        </PopularContainer>
        <UpComingContainer>
          <Title title={"Coming soon"} />
          {upcoming.results.map((movie) => (
            <Upcoming
              key={movie.id}
              id={movie.id}
              title={movie.title}
              votes={movie.vote_average}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </UpComingContainer>
      </>
    )}
  </ScrollView>
);
