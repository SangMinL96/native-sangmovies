import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { getImage } from "../../API";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  background-color: red;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
`;
const Slider = ({ id, title, backgroundImage, votes, overview }) => (
  <SliderContainer>
    <BG source={{ uri: getImage(backgroundImage) }} />
  </SliderContainer>
);
//
//
//
Slider.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Slider;
