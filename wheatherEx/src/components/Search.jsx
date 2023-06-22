import React from 'react'

function Search({lang, handleOnKeyDown, setLocation}) {
  function click() {
    const searchInput = document.getElementById("abc");
    setLocation(searchInput.value);
  };

  return (
    <div id="search">
        <label htmlFor="abc">* {lang.searchLabel} :</label><input type="text" id="abc" placeholder={lang.searchInputHolder} onKeyUp={handleOnKeyDown} />
        <button id="searchBtn" onClick={click}>{lang.searchButton}</button>
  </div>
  )
}

export default Search