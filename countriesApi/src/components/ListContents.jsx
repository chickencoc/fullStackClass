import React from 'react'

const ListContents = ( { item, lang } ) => {
  return (
    <div id="listContentsBox">
        {
            item &&
            <>
                <img src={item.flags.png} alt={item.flags.alt} />
                <div id="listContentsInfo">
                    <h2>
                        {
                            lang.id === 0 ? `${item.name.common}` :
                            `${item.name.common + " " + Object.values(item.translations)[lang.id].common}`
                        }
                    </h2>
                    <ul>
                        <li><h3>{lang.population}: </h3>{item.population}</li>
                        <li><h3>{lang.region}: </h3>{item.region}</li>
                        <li><h3>{lang.capital}: </h3>{item.capital}</li>
                    </ul>
                </div>
            </>
        }
    </div>
  )
}

export default ListContents