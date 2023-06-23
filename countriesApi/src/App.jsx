import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, json } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { Context } from './components/Context'
import Header from './components/Header';
import List from './components/List';
import Detail from './components/Detail';
import Footer from './components/Footer';
import { langPacka } from './components/Language';

function App() {
  const [dark, setDark] = useState(false);
  const langPack = langPacka;
  const [lang, setLang] = useState(langPack[1]);
  const [country, setCountry] = useState("all");
  const [items, setItems] = useState([]);

  const fetchCountries = () => {
    const url = `https://restcountries.com/v3.1/${country}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(() => console.error("error"));
  };
  useEffect(() => {fetchCountries()}, [country]);

  const searchInput = useRef();
  const searching = () => {
    const cty = searchInput.current.value;
    if(cty != "") setCountry("name/" + cty);
    else setCountry("all");
  };

  const langChange = (n) => {
    let cover =  document.getElementById("langBox");
    setLang(langPack[n]);
  };

  return (
    <div id="background" className={ dark ? "darkmode" : "" }>
      <div id="container">
        <Context.Provider value={{ dark, setDark, searchInput, searching, items, lang, langChange }}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="https://chickencoc.github.io/countriesEx/" element={<List />} />
              <Route path="https://chickencoc.github.io/countriesEx/detail/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </div>
      <Footer />
    </div>
  )
}


export default App
