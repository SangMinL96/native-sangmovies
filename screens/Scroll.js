import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";

const Scroll = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator size="large" /> : children}
  </ScrollView>
);

export default Scroll;
