import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
 
  return (
    <div className="container">
      <Search  />
      <CurrentWeather />
    </div>
  );
}

export default App;
