import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { getImage } from "../../API";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";
import OnPress from "../OnPress";
const Container = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 10px;
  padding-bottom: 30px;
`;
const Datas = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Poster = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 7px;
`;
const Contents = styled.View`
  width: 60%;
`;
const Title = styled.Text`
  color: white;
  font-size: 17px;
  margin-bottom: 7px;
`;
const Overview = styled.Text`
  color: gray;
`;

function TopRated({
  id,
  release,
  name,
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
        <Datas>
          <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
          <Contents>
            <Title>{name.length > 15 ? `${name.slice(0, 14)}...` : name}</Title>
            <Votes votes={votes} />
            <Overview>
              {overview.length > 80 ? `${overview.slice(0, 80)}...` : overview}
            </Overview>
          </Contents>
        </Datas>
      </Container>
    </OnPress>
  );
}

TopRated.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};
export default TopRated;
