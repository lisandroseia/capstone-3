import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/country.scss';
import { PropTypes } from 'prop-types';

const RenderCountry = ({ name, active }) => (
  <li className="list-wraper">
    <Link to={`/details/${name}`}>
      <div>
        <h2>{name}</h2>
        <p className="active">
          active covid cases:
          {' '}
          <span>{active}</span>
        </p>
      </div>
    </Link>
  </li>
);

RenderCountry.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
};

export default RenderCountry;
