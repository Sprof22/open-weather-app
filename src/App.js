import { useState } from "react";
import { OPEN_WEATHER_KEY, OPEN_WEATHER_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";
import Search from "./components/Search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const handleSearchInputChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
      );
      const forecastWeatherFetch = fetch(
      `${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastWeatherResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...currentWeatherResponse});
        setForecastWeather({city: searchData.label, ...forecastWeatherResponse});
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather, "this is current");
  console.log(forecastWeather, "this is forecast");
  return (
    <div className="container">
      <Search onSearchChange={handleSearchInputChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <ForecastWeather data={forecastWeather} />}
    </div>
  );
}

export default App;
