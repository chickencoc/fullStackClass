import React from 'react'

function Header({lang, langChange, handleDarkMode, darkMode}) {

  return (
    <div id="header">
        <div id="headerBtnBox">
            <div id="darkModeBtn">
                <a href='#' onClick={() => handleDarkMode(!darkMode)}><img id="imgDarkMode" /></a>
            </div>
            <div id="langBtnsCover">
                {
                    lang.id === 1 &&
                    <div id="langBtns">
                        <img id="imgLang1" />
                        <a href='#' onClick={() => langChange(2)}><img id="imgLang2" /></a>
                        <a href='#' onClick={() => langChange(3)}><img id="imgLang3" /></a>
                    </div>
                }
                {
                    lang.id === 2 &&
                    <div id="langBtns">
                        <img id="imgLang2" />
                        <a href='#' onClick={() => langChange(1)}><img id="imgLang1" /></a>
                        <a href='#' onClick={() => langChange(3)}><img id="imgLang3" /></a>
                    </div>
                }
                {
                    lang.id === 3 &&
                    <div id="langBtns">
                        <img id="imgLang3" />
                        <a href='#' onClick={() => langChange(1)}><img id="imgLang1" /></a>
                        <a href='#' onClick={() => langChange(2)}><img id="imgLang2" /></a>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Header