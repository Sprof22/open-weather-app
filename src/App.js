import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default App;
