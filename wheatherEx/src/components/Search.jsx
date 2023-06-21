import React from 'react'

function Search({handleOnKeyDown, setLocation}) {
  function click() {
    const searchInput = document.getElementById("abc");
    setLocation(searchInput.value);
  };

  return (
    <div id="search">
        <label htmlFor="abc">* Площадь :</label><input type="text" id="abc" placeholder="City Name" onKeyUp={handleOnKeyDown} />
        <button onClick={click}>Поиск</button>
  </div>
  )
}

export default Search