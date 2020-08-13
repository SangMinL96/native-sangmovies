import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Votes from "./Votes";
import { getImage, getDate } from "../API";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  position: relative;
`;
const BGimg = styled.Image`
  width: 100%;
  height: 250px;
  opacity: 0.7;
`;
const Poster = styled.Image`
  width: 120px;
  height: 180px;
  position: absolute;
  top: 150px;
`;
const Contents = styled.View`
  margin-top: 120px;
  margin-left: 20px;
  width: 100%;
  align-items: flex-start;
`;
//
//
const TitleContainer = styled.View`
  margin-bottom: 40px;
`;
const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const TitleData = styled.Text`
  color: white;
`;
//
//
const DateContainer = styled.View`
  margin-bottom: 40px;
`;
const Date = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const DateData = styled.Text`
  color: white;
`;
const VotesContainer = styled.View`
  margin-bottom: 40px;
`;
const Vote = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;
//
//
const OverViewContainer = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;
const OverView = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const OverViewData = styled.Text`
  color: white;
  width: 90%;
`;
export default ({
  route: {
    params: {
      id,
      title,
      votes,
      poster,
      overview,
      name,
      backgroundImage,
      release,
    },
  },
  navigation,
}) => {
  navigation.setOptions({ title: title || name });
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Container>
        <BGimg resizeMode="cover" source={{ uri: getImage(backgroundImage) }} />
        <Poster resizeMode="cover" source={{ uri: getImage(poster) }} />
        <Contents>
          <TitleContainer>
            <Title>영화(TV) 제목</Title>
            <TitleData>{title || name}</TitleData>
          </TitleContainer>
          <DateContainer>
            <Date>개봉 날짜</Date>
            <DateData>{getDate(release)}</DateData>
          </DateContainer>
          <VotesContainer>
            <Vote>평점</Vote>
            <Votes votes={votes} />
          </VotesContainer>
          <OverViewContainer>
            <OverView>요약</OverView>
            <OverViewData>{overview}</OverViewData>
          </OverViewContainer>
        </Contents>
      </Container>
    </ScrollView>
  );
};
