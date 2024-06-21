import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { WeatherDataContext } from "../weatherDataContext";

const Log = () => {
  const { weatherData } = useContext(WeatherDataContext);
  const [weatherDataLog, setweatherDataLog] = useState([]);

  useEffect(() => {
    if (weatherData) {
      const timestamp = new Date().toLocaleString();
      setweatherDataLog((prevData) => [
        ...prevData,
        { timestamp, data: weatherData },
      ]);
    }
  }, [weatherData]);

  return (
    <ScrollView>
      {weatherDataLog.map((log, index) => (
        <View key={index} style={styles.logEntry}>
          <Text style={styles.cityText}>City: {log.data.name}</Text>
          <Text style={styles.tempText}>Temp: {log.data.main.temp} &deg;C</Text>
          <Text style={styles.descText}>
            Cloud desc: {log.data.weather[0].description}
          </Text>
          <Text style={styles.timestampText}>Timestamp: {log.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logEntry: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  cityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tempText: {
    fontSize: 14,
  },
  descText: {
    fontSize: 14,
    fontStyle: "italic",
  },
  timestampText: {
    fontSize: 12,
    color: "#666",
  },
});

export default Log;
