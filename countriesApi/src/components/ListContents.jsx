import React from 'react'

const ListContents = ( { item } ) => {

  return (
    <div id="listContentsBox">
        {
            item &&
            <>
                <img src={item.flags.png} alt={item.flags.alt} />
                <div id="listContentsInfo">
                    <h2>{item.name.common + " " + item.translations.kor.common}</h2>
                    <ul>
                        <li>{item.population}</li>
                        <li>{item.region}</li>
                        <li>{item.capital}</li>
                    </ul>
                </div>
            </>
        }
    </div>
  )
}

export default ListContents