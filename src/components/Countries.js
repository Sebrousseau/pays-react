import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
  const[data, setData] = useState([])
  const[sortedData, setSortedData] = useState([])
  const[playOnce, setPlayOnce] = useState(true)
  const[range, setRange] = useState(40)
  const[selectedRegion, setSelectedRegion] = useState('')
  const regions = ['Asia', 'Africa', 'Europe', 'Americas', 'Oceania']

  useEffect(() => {
    if (playOnce) {
      axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
        )
        .then((res) => {
          setData(res.data)
          setPlayOnce(false)
        })
      }
    const sortCountries = () => {
      const countriesObj = Object.keys(data).map((i) => data[i])
      const sortedArray = countriesObj.sort((a, b) => {
        return b.population - a.population
      })
      sortedArray.length = range
      setSortedData(sortedArray)
    }
    sortCountries()
  }, [data, playOnce, range])
  return (
    <div className="countries">
      <div className="sort-container">
        <input type="range" min='0' max='250' value={range} onChange={(e) => setRange(e.target.value)} />
        <ul>
          {regions.map((region) => {
            return(
              <li key={region}>
                <input type="radio" id={region} value={region} checked={region == selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}/>
                <label htmlFor={region}>{region}</label>
              </li>
            )
          })}
        </ul>
      </div>
        <div className="cancel">
          {selectedRegion && <h5 onClick={() => setSelectedRegion('')}>Annuler la recherche</h5>}
        </div>
        <ul className="countries-list">
        {sortedData
        .filter((country) => (country.region.includes(selectedRegion)))
        .map((country) => (
          <Card country={country} key={country.name.common}/>
        ))}
        </ul>
    </div>
  );
};

export default Countries;
