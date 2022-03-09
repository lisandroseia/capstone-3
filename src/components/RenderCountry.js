import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/country.scss';

const RenderCountry = ({ name, active, total }) => {
  return (
    <li className="list-wraper">
      <Link to={`/details/${name}`}>
        {
          <div>
            <h2>{name}</h2>
            <p className='active'>
              active covid cases: <span>{active}</span>
            </p>
            <p className='total'>
              total covid cases: <span>{total}</span>
            </p>
          </div>
        }
      </Link>
    </li>
  );
};

export default RenderCountry;
