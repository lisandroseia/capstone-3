import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderCountry from './RenderCountry'


const HomeList = () => {
  const countries = useSelector((state) => state.HomeReducer);
  const [toFilter, setFilter] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="filter by country"
        onChange={({ target }) => {
          setFilter(target.value);
        }}
      />
      <ul>
        {countries
          .filter((item) => item.country.toLowerCase().includes(toFilter))
          .slice(-10)
          .map((item) => (
            <RenderCountry key={item.country} name={item.country} active={item.active} total={item.cases}/>
          ))}
      </ul>
    </div>
  );
};

export default HomeList;
