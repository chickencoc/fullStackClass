import React, { useContext } from 'react'
import { Context } from './Context'

const Header = () => {
  const { dark, setDark, lang, langChange } = useContext(Context);

  return (
    <header>
        <h1>{lang.pageTitle}</h1>
        <div id="headerBtns">
          <div id="langBoxCover">
            <p>{lang.type}</p>
            <div id="langBox">
                <ul>
                  <li><a onClick={() => langChange(0)}>ENG</a></li>
                  <li><a onClick={() => langChange(1)}>KOR</a></li>
                  <li><a onClick={() => langChange(2)}>RUS</a></li>
                  <li><a onClick={() => langChange(3)}>TUR</a></li>
                </ul>
            </div>
          </div>
          <button id="darkmodeBtn" onClick={() => setDark(!dark)}>{dark ? "LightMode" : "DarkMode"}</button>
        </div>
    </header>
  )
}

export default Header