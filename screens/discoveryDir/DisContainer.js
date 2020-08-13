import React, { useState } from "react";
import { PanResponder, Animated } from "react-native";

import styled from "styled-components/native";
import { getImage } from "../../API";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;
const styles = {
  top: 70,
  position: "absolute",
  width: "80%",
  height: "80%",
};
const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
function DisContainer({ discovery }) {
  const [topIndex, setTopIndex] = useState(0);
  const newIndex = () => setTopIndex(topIndex + 1);
  const position = new Animated.ValueXY();
  const panResPonder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx <= -300) {
        Animated.spring(position, {
          toValue: {
            x: -500,
            y: 0,
          },
        }).start(newIndex);
      } else if (dx >= 300) {
        Animated.spring(position, {
          toValue: {
            x: 500,
            y: 0,
          },
        }).start(newIndex);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
        }).start();
      }
    },
  });
  const rotation = position.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ["-5deg", "0deg", "5deg"],
    extrapolate: "clamp",
  });
  const opacity = position.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const scale = position.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {discovery?.results?.map((item, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotation },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={item.id}
              {...panResPonder.panHandlers}
            >
              <Poster
                resizeMode="cover"
                source={{ uri: getImage(item.poster_path) }}
              />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: opacity,
                transform: [{ scale: scale }],
              }}
              key={item.id}
              {...panResPonder.panHandlers}
            >
              <Poster
                resizeMode="cover"
                source={{ uri: getImage(item.poster_path) }}
              />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
}

export default DisContainer;
