import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "./src/screens/home";
import Log from "./src/screens/log";
import { WeatherDataProvider } from "./src/weatherDataContext";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <WeatherDataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="home" size={28} color={color} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Log"
            component={Log}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="search" size={28} color={color} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </WeatherDataProvider>
  );
};

export default App;
