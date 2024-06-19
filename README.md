# Weather App

This repository contain a practice material from Progate.

A weather app is a mobile tool that provides users with up-to-date weather information, including current temperature, cloud cover, visibility, and wind speed, to help them plan their day.

The weather data is provided by [OpenWeather](https://openweathermap.org/)

### Installation

1. Clone the repository

```bash
git clone git@github.com:Cartusiensis/progate-WeatherApp.git
```

2. Install dependencies

```bash
cd progate-WeatherApp
npm install
```

3. Create URL and API Key file in `src/constant.js`

```js
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
export const API_KEY = "your API key...";
```

4. Run Expo

```bash
npx expo start
```

Build using `React Native`
