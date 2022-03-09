import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderCountry from './RenderCountry'
import '../styles/countries.scss'
import icon from '../assets/icon.png'

const HomeList = () => {
  const countries = useSelector((state) => state.HomeReducer);
  const [toFilter, setFilter] = useState('');

  return (
    <div className='countries-container'>
      <nav>
        <div className='icon'>
          <img src={icon} alt='icon' />
        <h1>covid tracker</h1>
        </div>
      <input
        type="text"
        placeholder="filter by country"
        onChange={({ target }) => {
          setFilter(target.value);
        }}
      />
      <div />
      </nav>
      <hr />
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
