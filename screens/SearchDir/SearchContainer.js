import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "../Votes";
import SearchInput from "./SearchInput";
import MovieResults from "./MovieResults";
import { ScrollView } from "react-native-gesture-handler";
import ShowResults from "./ShowResults";
import Title from "../Title";
const Container = styled.View`
  flex: 1;
  background-color: black;
`;
const MovieResutsSlier = styled.View`
  margin-top: 35px;
`;
const ShowResultsSlier = styled.View``;
export default ({ movies, show, onSubmit, onChange, keyWord }) => (
  <Container>
    <SearchInput
      placeholder={"검색어를 입력하세요."}
      onSubmit={onSubmit}
      onChange={onChange}
      value={keyWord}
    />
    <MovieResutsSlier>
      {movies.length !== 0 && <Title title={"Movies"} />}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies?.results?.map((item) => (
          <MovieResults
            key={item.id}
            id={item.id}
            title={item.title}
            votes={item.vote_average}
            poster={item.poster_path}
          />
        ))}
      </ScrollView>
    </MovieResutsSlier>
    <ShowResultsSlier>
      {show.length !== 0 && <Title title={"TV"} />}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {show?.results?.map((item) => (
          <ShowResults
            key={item.id}
            id={item.id}
            name={item.name}
            votes={item.vote_average}
            poster={item.poster_path}
          />
        ))}
      </ScrollView>
    </ShowResultsSlier>
  </Container>
);
