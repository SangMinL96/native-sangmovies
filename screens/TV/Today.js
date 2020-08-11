import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "../Votes";
import { getImage } from "../../API";
const Container = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 10px;
`;
const Poster = styled.Image`
  width: 120px;
  height: 160px;
  border-radius: 7px;
`;
const Title = styled.Text`
  margin-top: 7px;
  color: white;
  width: 120px;
`;

function Today({ id, name, votes, poster }) {
  return (
    <Container>
      <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
      <Title>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</Title>
      <Votes votes={votes} />
    </Container>
  );
}

Today.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Today;
