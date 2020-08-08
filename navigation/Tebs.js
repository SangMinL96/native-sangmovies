import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import discovery from "../screens/discovery";

const Teps = createBottomTabNavigator();

export default () => (
  <Teps.Navigator>
    <Teps.Screen name="Movies" component={Movies} />
    <Teps.Screen name="Tv" component={Tv} />
    <Teps.Screen name="Search" component={Search} />
    <Teps.Screen name="discovery" component={discovery} />
  </Teps.Navigator>
);
