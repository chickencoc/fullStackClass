import React from 'react'

const Result = ({weather}) => {
  return (
    <div id="result">
        <p>{"[ Текущая погода ]"}</p>
        {
        weather.cod == "404" &&
        <p style={{color:"red"}}>{weather.message}</p>
        }
        {
        weather.cod == "200" &&
        <ul>
            <li>* Country: {`( ${weather.sys.country} )`} {weather.name}</li>
            <li>* Weather: {weather.weather[0].main} {`( ${weather.weather[0].description} )`}</li>
            <li>* Temp: {(weather.main.temp - 273.15).toFixed(2)}ºC</li>
            <li>* Humidity: {weather.main.humidity}%</li>
            <li>* Visibility: {(weather.visibility / 1000).toFixed(2)}km</li>
        </ul>
        }
    </div>
  )
}

export default Result