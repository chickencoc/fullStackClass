import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({"cod": ""});

  function fetchWeather() {
    const apiKey = "1b9de2f304a91d21750ebcee97b6ca7d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    // ajax 요청
    fetch(url)
      .then(res => res.json()) // json 포맷으로 변경
      .then(data =>{
        //if(data.cod === "404") return;
        //if(data.cod === "404") return;
        setWeather(data);
        console.log(data);
      })
      .catch(() => console.error("error"));
  }
  useEffect(() => {fetchWeather()},[location]);
  

  const handleOnKeyDown = e => {
    if (e.key === 'Enter') {
      setLocation(e.target.value);
    }
  };

  return (
    <div>
      <div id="top">
        <h1>" Применение погоды "</h1>
      </div>
      <div id="mid">
        <Search handleOnKeyDown={handleOnKeyDown} />
        <Result weather={weather} />
      </div>
    </div>
  )
}

export default App
