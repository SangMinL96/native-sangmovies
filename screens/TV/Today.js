import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "../Votes";
import { getImage } from "../../API";
import OnPress from "../OnPress";
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

function Today({
  id,
  name,
  release,
  votes,
  poster,
  overview,
  backgroundImage,
}) {
  return (
    <OnPress
      id={id}
      name={name}
      votes={votes}
      poster={poster}
      backgroundImage={backgroundImage}
      overview={overview}
      release={release}
    >
      <Container>
        <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
        <Title>{name.length > 15 ? `${name.slice(0, 15)}...` : name}</Title>
        <Votes votes={votes} />
      </Container>
    </OnPress>
  );
}

Today.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};

export default Today;
