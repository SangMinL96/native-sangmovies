import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../../API";
import DisContainer from "./DisContainer";

function Discovery() {
  const [data, setData] = useState({
    discovery: [],
    error: null,
  });

  const getData = async () => {
    const [discovery, error] = await movieApi.discovery();
    setData({
      discovery,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <DisContainer {...data} />;
}

export default Discovery;
