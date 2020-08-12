import React from "react";
import styled from "styled-components/native";
import Votes from "../Votes";
import { getImage } from "../../API";
const Container = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 10px;
  padding-bottom: 30px;
`;
const Poster = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 8px;
`;

const Title = styled.Text`
  width: 120px;
  color: white;
`;

export default ({ name, votes, poster }) => (
  <Container>
    <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
    <Title>{name.length > 15 ? `${name}...` : name}</Title>
    <Votes votes={votes} />
  </Container>
);
