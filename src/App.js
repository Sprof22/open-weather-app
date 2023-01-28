import { useState } from "react";
import { OPEN_WEATHER_KEY, OPEN_WEATHER_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
  // const [currentWeather, forecastWeather] = useState(null);

  const handleSearchInput = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch = fetch(`${OPEN_WEATHER_URL}/weather?lat={lat}&lon={lon}&appid=${OPEN_WEATHER_KEY}`)
    const forecastWeatherFetch = fetch(`${OPEN_WEATHER_URL}/forecast?lat={lat}&lon={lon}&appid=${OPEN_WEATHER_KEY}`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch]).then
  }



 
  return (
    <div className="container">
      <Search onSearchChange={handleSearchInput} />
      <CurrentWeather />
    </div>
  );
}

export default App;
