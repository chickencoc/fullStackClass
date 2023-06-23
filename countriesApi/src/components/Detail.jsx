import React, { useContext } from 'react'
import { Context } from './Context'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Detail() {
    const { items, lang } = useContext(Context);
    const { id } = useParams();
    const item = items[id];

  return (
    <div id="countryDetailBox">
        <div id="toBack">
            <Link to="/" ><button>{lang.backBtn}</button></Link>
        </div>      
        <div id="countryCca2">
            <h2>{item.cca2}</h2>
        </div>
        <div id="detailContents">
            <div id="countryImg">
                <img src={item.flags.svg} alt={item.flags.alt} />
            </div>
            <div id="countryInfomation">
                <ul>
                    <li><h3>{item.name.common + " " + Object.values(item.translations)[lang.id].common}</h3></li>
                    <li><h4>{lang.population}: </h4>{item.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
                    <li><h4>{lang.region}: </h4>{item.region}</li>
                    <li><h4>{lang.capital}: </h4>{item.capital}</li>
                    <li><h4>{lang.subregion}: </h4>{item.subregion}</li>
                    <li><h4>{lang.tld}: </h4>{item.tld[0]}</li>
                    <li><h4>{lang.languages}: </h4>{Object.values(item.languages)}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Detail