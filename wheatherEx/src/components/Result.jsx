import React from 'react'

const Result = ({lang, weather}) => {
  return (
    <div id="result">
        <p>{lang.resultTitle}</p>
        {
        weather.cod == "404" &&
        <p style={{color:"red"}}>{lang.error}</p>
        }
        {
        weather.cod == "200" &&
        <ul>
            <li>* {lang.resultCountry}:<span>{weather.name} {`( ${weather.sys.country} )`}</span></li>
            <li>* {lang.resultWeather}:<span>{weather.weather[0].description}</span></li>
            <li>* {lang.resultTemp}:<span>{weather.main.temp}°C</span></li>
            <li>* {lang.resultHumidity}:<span>{weather.main.humidity}%</span></li>
            <li>* {lang.resultVisibility}:<span>{(weather.visibility / 1000).toFixed(2)}km</span></li>
        </ul>
        }
    </div>
  )
}

export default Result