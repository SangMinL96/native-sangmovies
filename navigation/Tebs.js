import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import discovery from "../screens/discovery";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

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
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "heart") {
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
      <Teps.Screen name="Movies" component={Movies} />
      <Teps.Screen name="Tv" component={Tv} />
      <Teps.Screen name="Search" component={Search} />
      <Teps.Screen name="discovery" component={discovery} />
    </Teps.Navigator>
  );
};
