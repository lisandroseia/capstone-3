import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
          .filter((item) => item.name.toLowerCase().includes(toFilter))
          .slice(0, 10)
          .map((item) => (
            <li>{item.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default HomeList;
