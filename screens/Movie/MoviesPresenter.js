import React from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "./Slider";
import Title from "../Title";
import Popular from "./Popular";
import Upcoming from "./UpComing";
import Scroll from "../Scroll";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
`;
const PopularContainer = styled.View`
  margin-top: 40px;
`;
const UpComingContainer = styled.View`
  margin-top: 40px;
`;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <Scroll loading={loading} refreshFn={refreshFn}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={10}>
          {nowPlaying?.results?.map((movie) => (
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
          {popular?.results?.map((movie) => (
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
        {upcoming?.results?.map((movie) => (
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
  </Scroll>
);
