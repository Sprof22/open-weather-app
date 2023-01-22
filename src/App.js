import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/Search/Search";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search  onSearchChange={handleSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
