import { useEffect, useState } from 'react';
import WeatherBox from './component/weatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/weatherButton';
import './App.css';

function App() {
  // 1. 앱이 실행이 되자 마자, 현재 위치 기반의 날씨가 보인다.
  // 2. 지금 현재 도시, 섭씨, 화씨, 날씨 상태 정보가 나온다.
  // 3. 밑에 버튼이 5개 있다. (현재 위치 1개, 다른 도시 4개)
  // 4. 버튼을 누를때마다 해당되는 도시별 날씨가 보여진다.
  // 5. 현재위치 버튼을 누르면 다시 다시 현재 위치 기반의 날씨정보를 보여준다.
  // 6. 데이터를 들고오는 동안 로딩 스피너가 돌아간다.
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;      
      getWeatherByCurrentLocation(lat, lon);      
    });
  }  
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=34e50c3cd21e9f0ba6b80f29ff93fd2f&units=metric`;        
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    console.log(data);
  }
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34e50c3cd21e9f0ba6b80f29ff93fd2f&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    console.log('도시 데이터 확인',data);
  }
  useEffect(() => {
    if (city == '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }        
  }, [city]);  

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity('');
    } else {
      setCity(city);
    }
  }
  return (
    <div className='container'>
      <WeatherBox weather={weather} /> 
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
