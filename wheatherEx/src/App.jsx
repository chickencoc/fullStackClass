import { useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState("seoul");
  const [weather, setWeather] = useState(null);

  function fetchWeather() {
    const apiKey = "1b9de2f304a91d21750ebcee97b6ca7d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  fetchWeather();


  return (
    <div>
      <div id="top">
        <h1>" Применение погоды "</h1>
      </div>
      <div id="mid">
        <div id="search">
          <label for="abc">* Площадь :</label><input type="text" id="abc" placeholder="City Name"></input>
        </div>
        <div id="result">
          <p>{"[ result ]"}</p>
        </div>
      </div>
    </div>
  )
}

export default App
