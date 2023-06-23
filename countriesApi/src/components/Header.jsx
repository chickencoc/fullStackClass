import React, { useContext } from 'react'
import { Context } from './Context'

const Header = () => {
  const { dark, setDark } = useContext(Context);

  return (
    <header>
        <h1>Where in the world?</h1>
        <button id="darkmodeBtn" onClick={() => setDark(!dark)}>Dark Mode</button>
    </header>
  )
}

export default Header