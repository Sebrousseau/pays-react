import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
  const[data, setData] = useState([])
  const[sortedData, setSortedData] = useState([])
  const[playOnce, setPlayOnce] = useState(true)
  const[range, setRange] = useState(40)

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
      </div>
        <ul className="countries-list">
        {sortedData.map((country) => (
          <Card country={country} key={country.name.common}/>
        ))}
        </ul>
    </div>
  );
};

export default Countries;
