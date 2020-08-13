import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { getImage } from "../../API";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";
import OnPress from "../OnPress";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
`;
const SliderContents = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Poster = styled.Image`
  width: 28%;
  height: 78%;
  border-radius: 10px;
`;
const Data = styled.View`
  width: 45%;
`;
const Title = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const OverView = styled.Text`
  color: #9c9191;
`;
const Button = styled.View`
  width: 40%;

  background-color: gray;
  color: #9c9191;
  margin-top: 10px;
  border-radius: 6px;
`;
const ButtonText = styled.Text`
  text-align: center;
  padding: 4px;
  font-size: 10px;
  font-weight: bold;
`;
const Slider = ({
  id,
  title,
  backgroundImage,
  release,
  votes,
  overview,
  poster,
}) => (
  <Container>
    <BG resizeMode="cover" source={{ uri: getImage(backgroundImage) }} />
    <SliderContents>
      <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
      <Data>
        <Title>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</Title>
        <Votes votes={votes} />
        <OverView>{overview.slice(0, 80)}...</OverView>
        <OnPress
          id={id}
          title={title}
          votes={votes}
          poster={poster}
          overview={overview}
          backgroundImage={backgroundImage}
          release={release}
        >
          <Button>
            <ButtonText>See Details</ButtonText>
          </Button>
        </OnPress>
      </Data>
    </SliderContents>
  </Container>
);
//
//
//
Slider.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};
export default Slider;
