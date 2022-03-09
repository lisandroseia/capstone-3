import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderCountry from './RenderCountry'
import '../styles/countries.scss'

const HomeList = () => {
  const countries = useSelector((state) => state.HomeReducer);
  const [toFilter, setFilter] = useState('');

  return (
    <div className='countries-container'>
      <nav>
        <h1>covid tracker</h1>
      <input
        type="text"
        placeholder="filter by country"
        onChange={({ target }) => {
          setFilter(target.value);
        }}
      />
      <div />
      </nav>
      <ul>
        {countries
          .filter((item) => item.country.toLowerCase().includes(toFilter))
          .map((item) => (
            <RenderCountry key={item.country} name={item.country} active={item.active} total={item.cases}/>
          ))}
      </ul>
    </div>
  );
};

export default HomeList;
