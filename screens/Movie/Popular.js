import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { getImage } from "../../API";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";
const Container = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 10px;
`;
const Title = styled.Text`
  margin-top: 8px;
  width: 120px;
  color: white;
`;

const Poster = styled.Image`
  width: 120px;
  height: 160px;
  border-radius: 7px;
`;

function Popular({ id, title, votes, poster }) {
  return (
    <TouchableOpacity>
      <Container>
        <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
        <Title>{title.length > 15 ? `${title.slice(0, 14)}...` : title}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
}

Popular.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Popular;
