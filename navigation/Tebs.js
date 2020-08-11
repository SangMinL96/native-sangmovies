import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Discovery from "../screens/Discovery";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import MoviesContainer from "../screens/Movie";

const Teps = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route?.state?.routeNames[route.state.index] || "Movies",
    });
  }, [route]);
  return (
    <Teps.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "Tv") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "gray"}
              size={26}
            />
          );
        },
      })}
    >
      <Teps.Screen name="Movies" component={MoviesContainer} />
      <Teps.Screen name="Tv" component={Tv} />
      <Teps.Screen name="Search" component={Search} />
      <Teps.Screen name="Discovery" component={Discovery} />
    </Teps.Navigator>
  );
};
