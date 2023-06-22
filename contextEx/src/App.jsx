import './App.css'
import { useState } from 'react'
import { Context } from './components/Context'
import Contents from './components/Contents'

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (mode) => {
    if(count < 999999999999999999) setCount(count * 3);
    const root = document.getElementById("root");
    const btns = document.getElementsByTagName("button");
    if(mode) {
      setDarkMode(mode);
      root.className = "darkmode";
    } else {
      setDarkMode(mode);
      root.className = "";
    }
      
  };
  

  return (
    // 전역 변수 설정
    <Context.Provider value={{ count, setCount, darkMode }}>
      <div id="buttonBox">
        <button className={ darkMode ? "darkmode" : "" } onClick={() => {handleDarkMode(!darkMode)}}>{ darkMode ? "LIGHTMODE" : "DARKMODE" }</button>
      </div>
      <Contents />
    </Context.Provider>
  )
}

export default App
