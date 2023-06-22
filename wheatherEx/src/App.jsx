import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search';
import Result from './components/Result';
import Header from './components/Header';

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({"cod": ""});
  const langPack = {
    rus : {
        id : 2,
        lang : "ru",
        error : "Пожалуйста, повторно введите название города.",
        title : "Применение погоды",
        searchLabel : "Имя города",
        searchInputHolder : "Введите название города.",
        searchButton : "Поиск",
        resultTitle : "[ Текущая погода ]",
        resultCountry : "Город (Страна)",
        resultWeather : "Погода",
        resultTemp : "Температура",
        resultHumidity : "Влажность",
        resultVisibility : "Видимость",
    },
    eng : {
        id : 1,
        lang : "en",
        error : "Please re-enter the city name.",
        title : "Search the weather",
        searchLabel : "City name",
        searchInputHolder : "Enter city name.",
        searchButton : "Search",
        resultTitle : "[ Current Weather ]",
        resultCountry : "City (Country)",
        resultWeather : "Weather",
        resultTemp : "Temperature",
        resultHumidity : "Humidity",
        resultVisibility : "Visibility",
    },
    kor : {
        id : 3,
        lang : "kr",
        error : "도시 이름을 다시 입력해주세요.",
        title : "날씨 검색",
        searchLabel : "도시 이름 입력",
        searchInputHolder : "도시 이름을 입력하세요.",
        searchButton : "검색",
        resultTitle : "[ 현재 날씨 ]",
        resultCountry : "도시 (나라)",
        resultWeather : "날씨",
        resultTemp : "온도",
        resultHumidity : "습도",
        resultVisibility : "가시거리",
    },
  };
  const [lang, setLang] = useState(langPack.eng);
  const langChange = (n) => {
    let cover = document.getElementById("langBtnsCover");
    switch (n) {
      case 1:
        setLang(langPack.eng);
        langChangeCoverMove(cover);
        break;
      case 2:
        setLang(langPack.rus);
        langChangeCoverMove(cover);
        break;
      case 3:
        setLang(langPack.kor);
        langChangeCoverMove(cover);
        break;
    
      default:
        break;
    }
  };
  const langChangeCoverMove = (cover) => {
    cover.style.height = "35px";
    setTimeout(() => {
      cover.style.height = "";  
    }, 300);
  };

  function fetchWeather() {
    const apiKey = "1b9de2f304a91d21750ebcee97b6ca7d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=${lang.lang}&appid=${apiKey}`;

    // ajax 요청
    fetch(url)
      .then(res => res.json()) // json 포맷으로 변경
      .then(data =>{
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

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (e) => {
    setDarkMode(e);
    const list = [
      document.getElementsByTagName("body")[0],
      document.getElementById("darkModeBtn"),
      document.getElementById("langBtnsCover"),
      document.getElementById("searchBtn"),
      document.getElementById("abc")
    ];
    
    if(e) {
      for(let item of list) {
        item.className = "darkmode";
      }
    } else {
      for(let item of list) {
        item.className = "asd";
      }
    };
  };

  return (
    <div id="container">
      <Header lang={lang} langChange={langChange} handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <div id="top">
        <h1>" {lang.title} "</h1>
      </div>
      <div id="mid">
        <Search lang={lang} handleOnKeyDown={handleOnKeyDown} setLocation={setLocation} />
        <Result lang={lang} weather={weather} />
      </div>
    </div>
  )
}

export default App
