import React from "react";
import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import useAsync from "../../useAsync";

const { width, height } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
  background-color: red;
`;
const SliderItem = styled.View`
  color: white;
`;
const SliderText = styled.Text``;

function MovieSlider() {
  const sliderURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=cc3aed3fa1f0feef67c25879a942c3db&language=en-US&page=1";
  const [state] = useAsync(sliderURL);
  const { data, error, loading } = state;
  console.log(data);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생</div>;
  if (!data) return <div>받아온 데이터가 없습니다 ㅠㅠ</div>;
  return (
    <SliderContainer>
      <Swiper loop timeout={3} controlsEnabled={false}>
        {data &&
          data.results.map((item) => (
            <SliderItem key={item.id}>
              <SliderText>{item.title}</SliderText>
            </SliderItem>
          ))}
      </Swiper>
    </SliderContainer>
  );
}

export default MovieSlider;
