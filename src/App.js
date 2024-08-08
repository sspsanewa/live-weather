import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Component/Header';
import CityWeatherInfo from './Pages/CityWeatherInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/cityweatherinfo' Component={CityWeatherInfo} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
