import React from "react";
import { View, Text } from "react-native";

export default () => {
  const [tv, setTv] = useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.nowPlaying();
    const [thisWeek, thisWeekError] = await tvApi.nowPlaying();
    const [topRated, topRatedError] = await tvApi.nowPlaying();
    const [popular, popularError] = await tvApi.nowPlaying();
    setMovies({
      today,
      todayError,
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      popular,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>Tv</Text>
    </View>
  );
};
