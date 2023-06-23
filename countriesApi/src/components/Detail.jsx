import React, { useContext } from 'react'
import { Context } from './Context'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Detail() {
    const { items } = useContext(Context);
    const { id } = useParams();
    const item = items[id];

  return (
    <div id="countryDetailBox">
        <div id="toBack">
            <Link to="/" ><button>Back</button></Link>
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
                    <li><h3>{item.name.common + " " + item.translations.kor.common}</h3></li>
                    <li>{item.population}</li>
                    <li>{item.region}</li>
                    <li>{item.capital}</li>
                    <li>{item.subregion}</li>
                    <li>{item.tld[0]}</li>
                    <li>{Object.values(item.languages)}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Detail