import React from 'react'

function Search({handleOnKeyDown}) {
  return (
    <div id="search">
        <label htmlFor="abc">* Площадь :</label><input type="text" id="abc" placeholder="City Name" onKeyUp={handleOnKeyDown} />
  </div>
  )
}

export default Search