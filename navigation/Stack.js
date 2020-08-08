import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Detail from "../screens/Detail";
import Tebs from "./Tebs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Movies" component={Tebs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
