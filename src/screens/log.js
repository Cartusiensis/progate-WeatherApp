import React, { useContext } from "react";
import { View, Text } from "react-native";
import { WeatherDataContext } from "../weatherDataContext";

const Log = () => {
  const { weatherData } = useContext(WeatherDataContext);

  console.log(weatherData);

  return (
    <View>
      <Text>Log</Text>
    </View>
  );
};

export default Log;
