import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RenderCountry = ({ name, id }) => {
  
  return (
    <li>
      <Link to={`/details/${name}`}>{name}</Link>
    </li>
  );
};

export default RenderCountry;
