import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import MovieSlider from "./Movie/MovieSlider";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;
export default () => {
  return (
    <Container>
      <MovieSlider />
    </Container>
  );
};
