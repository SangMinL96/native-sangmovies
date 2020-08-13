import React from "react";
import styled from "styled-components/native";
import { ScrollView, ActivityIndicator } from "react-native";
import Title from "../Title";
import Today from "./Today";
import Scroll from "../Scroll";
import OnAir from "./OnAir";
import Popular from "./Popular";
import TopRated from "./TopRated";
const TodayContainer = styled.View``;
const OnAirContainer = styled.View`
  margin-top: 40px;
`;
const PopularContainer = styled.View`
  margin-top: 40px;
`;
const TopRatedContainer = styled.View`
  margin-top: 40px;
`;
export default ({ refreshFn, loading, today, thisWeek, topRated, popular }) => (
  <Scroll loading={loading} refreshFn={refreshFn}>
    <TodayContainer>
      <Title title={"Today"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {today?.results?.map((item) => (
          <Today
            key={item.id}
            id={item.id}
            name={item.name}
            votes={item.vote_average}
            poster={item.poster_path}
            backgroundImage={item.backdrop_path}
            overview={item.overview}
            release={item.release_date}
          />
        ))}
      </ScrollView>
    </TodayContainer>
    <OnAirContainer>
      <Title title={"ON-AIR"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {thisWeek?.results?.map((item) => (
          <OnAir
            key={item.id}
            id={item.id}
            name={item.name}
            votes={item.vote_average}
            poster={item.poster_path}
            backgroundImage={item.backdrop_path}
            overview={item.overview}
            release={item.release_date}
          />
        ))}
      </ScrollView>
    </OnAirContainer>
    <PopularContainer>
      <Title title={"Popular-TV"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popular?.results?.map((item) => (
          <Popular
            key={item.id}
            id={item.id}
            name={item.name}
            votes={item.vote_average}
            poster={item.poster_path}
            backgroundImage={item.backdrop_path}
            overview={item.overview}
            release={item.release_date}
          />
        ))}
      </ScrollView>
    </PopularContainer>
    <TopRatedContainer>
      <Title title={"Top-TV"} />
      {topRated?.results?.map((item) => (
        <TopRated
          key={item.id}
          id={item.id}
          name={item.name}
          votes={item.vote_average}
          poster={item.poster_path}
          overview={item.overview}
          backgroundImage={item.backdrop_path}
          overview={item.overview}
          release={item.release_date}
        />
      ))}
    </TopRatedContainer>
  </Scroll>
);
