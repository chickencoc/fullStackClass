import React, { useContext } from 'react'
import { Context } from './Context'
import ListContents from './ListContents'
import { Link } from 'react-router-dom';

function List() {
    const { searchInput, searching, items } = useContext(Context);

  return (
    <main>
        <div id="searchBox">
            <input ref={searchInput} id='searchInput' placeholder='search' onKeyDown={(e) => {if(e.key === 'Enter') searching();}} />
            <button id="searchBtn" onClick={searching}>search</button>
        </div>
        {
            items &&
            <div id="countriesList">
                { items.map((item, i) => {
                    return <Link to={`/detail/${i}`} key={item.cca3}><ListContents item={item} /></Link>;
                })}
            </div>
        }
    </main>
  )
}

export default List