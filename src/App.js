import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
  // const [currentWeather, forecastWeather] = useState(null);

  const handleSearchInput = (searchData) => {
    console.log(searchData)
  }

 
  return (
    <div className="container">
      <Search onSearchChange={handleSearchInput} />
      <CurrentWeather />
    </div>
  );
}

export default App;
