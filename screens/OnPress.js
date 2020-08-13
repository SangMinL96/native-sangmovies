import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OnPress = ({
  id,
  title,
  votes,
  poster,
  overview,
  name,
  backgroundImage,
  release,
  children,
}) => {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      votes,
      poster,
      overview,
      name,
      backgroundImage,
      release,
    });
  };
  return <TouchableOpacity onPress={goDetail}>{children}</TouchableOpacity>;
};

export default OnPress;
