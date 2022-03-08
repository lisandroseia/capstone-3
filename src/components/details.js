import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Details = () => {
  const selected = useParams();
  const country = useSelector((state) =>
    state.HomeReducer.filter(
      (item) => item.country == selected.id)
  );
  const [details, setDetails] = useState(...country);
  return (
        <h1>{details.country}</h1>
  )
};

export default Details;
