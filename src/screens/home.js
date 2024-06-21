import React, { useState, useContext } from "react";
import axios from "axios";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import WeatherSearch from "../components/weatherSearch";
import WeatherInfo from "../components/weatherInfo";
import { BASE_URL, API_KEY } from "../constant";
import { useNavigation } from "@react-navigation/native";
import { WeatherDataContext } from "../weatherDataContext";

const Home = () => {
  // const [weatherData, setWeatherData] = useState();
  const { weatherData, setWeatherData } = useContext(WeatherDataContext);
  const [status, setStatus] = useState("");
  const navigation = useNavigation();

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return (
          <Text style={styles.errorText}>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  const searchWeather = (location) => {
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Convert Kelvin to Celsius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
  errorText: {
    color: "#ff3333",
  },
});

export default Home;
