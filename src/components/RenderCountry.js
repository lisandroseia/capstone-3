import React from 'react';
import { Link } from 'react-router-dom';

const RenderCountry = ({ name, active, total }) => {
  return (
    <li>
      <Link to={`/details/${name}`}>{<div>
        <h2>{name}</h2>
        <p>active covid cases: <span>{active}</span></p>
        <p>total covid cases: <span>{total}</span></p>

        </div>}</Link>
    </li>
  );
};

export default RenderCountry;
