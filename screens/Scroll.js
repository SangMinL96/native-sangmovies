import React, { useState } from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const Scroll = ({ refreshFn, loading, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          enabled={true}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? <ActivityIndicator size="large" /> : children}
    </ScrollView>
  );
};

export default Scroll;
