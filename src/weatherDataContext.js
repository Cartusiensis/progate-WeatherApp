import React, { createContext, useState } from "react";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState();

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};
