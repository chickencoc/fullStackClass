import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, json } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { Context } from './components/Context'
import Header from './components/Header';
import List from './components/List';
import Detail from './components/Detail';

function App() {
  const [dark, setDark] = useState(false);
  const [country, setCountry] = useState("all");
  const [items, setItems] = useState([]);

  const fetchCountries = () => {
    const url = `https://restcountries.com/v3.1/${country}`
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => {setItems(data); console.log(data);})
      .catch(() => console.error("error"));
  };
  useEffect(() => {fetchCountries()}, [country]);

  const searchInput = useRef();
  const searching = () => {
    const cty = searchInput.current.value;
    if(cty != "") setCountry("name/" + cty);
    else setCountry("all");
  };

  return (
    <div id="background" className={ dark ? "darkmode" : "" }>
      <div id="container">
        <Context.Provider value={{ dark, setDark, searchInput, searching, items }}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </div>
    </div>
  )
}


export default App
