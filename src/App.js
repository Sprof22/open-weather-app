import { useState } from "react";
import { OPEN_WEATHER_KEY, OPEN_WEATHER_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);


  const handleSearchInput = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch = fetch(`${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`)
    const forecastWeatherFetch = fetch(`${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch]).then( async (response) => {
      const currentWeatherResponse = await response[0].json()
      const forecastWeatherResponse = await response[1].json()

      setCurrentWeather({city: searchData.label, ...currentWeatherResponse})
      setForecastWeather({city: searchData.label, ...forecastWeatherResponse})
    }).catch(err => console.log(err))
  }
 
  console.log(currentWeather)
  console.log(forecastWeather)

  return (
    <div className="container">
      <Search onSearchChange={handleSearchInput} />
      {currentWeather&&<CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
