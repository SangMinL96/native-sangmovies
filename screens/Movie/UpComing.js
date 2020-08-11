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

function UpComing({ title, votes, poster, overview }) {
  return (
    <TouchableOpacity>
      <Container>
        <Datas>
          <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
          <Contents>
            <Title>
              {title.length > 15 ? `${title.slice(0, 14)}...` : title}
            </Title>
            <Votes votes={votes} />
            <Overview>
              {overview.length > 80 ? `${overview.slice(0, 80)}...` : overview}
            </Overview>
          </Contents>
        </Datas>
      </Container>
    </TouchableOpacity>
  );
}

UpComing.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
export default UpComing;
