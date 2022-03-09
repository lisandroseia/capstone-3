import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import '../styles/details.scss';

const Details = () => {
  const selected = useParams();
  const country = useSelector((state) =>
    state.HomeReducer.filter((item) => item.country == selected.id)
  );
  const [details] = useState(...country);
  const [openToday, setOpenToday] = useState(false);
  const [openTotal, setOpenTotal] = useState(false);
  const [openAverage, setOpenAverage] = useState(false);

  return (
    <section className="details">
      <Link className="link" to="/">
        <img src="https://img.icons8.com/flat-round/64/000000/back--v1.png" />
      </Link>
      <div className="country-info">
        <h2>{details.country}</h2>
        <p>
          population: <span>{details.population}</span>
        </p>
      </div>

      <div className="today-info cont">
        <div onClick={() => setOpenToday(!openToday)} className="header">
          <h2>TODAY</h2>
          <span>{openToday ? '-' : '+'}</span>
        </div>
        <p className={openToday ? 'opened' : 'closed'}>
          cases today: <span>{details.todayCases}</span>
        </p>
        <p className={openToday ? 'opened' : 'closed'}>
          deaths today: <span>{details.todayDeaths}</span>
        </p>
        <p className={openToday ? 'opened' : 'closed'}>
          recovered today: <span>{details.todayRecovered}</span>
        </p>
      </div>

      <div className="total-info cont">
        <div onClick={() => setOpenTotal(!openTotal)} className="header">
          <h2>TOTAL</h2>
          <span>{openTotal ? '-' : '+'}</span>
        </div>
        <p className={openTotal ? 'opened' : 'closed'}>
          total cases: <span>{details.cases}</span>
        </p>
        <p className={openTotal ? 'opened' : 'closed'}>
          active cases: <span>{details.active}</span>
        </p>
        <p className={openTotal ? 'opened' : 'closed'}>
          critical cases: <span>{details.critical}</span>
        </p>
        <p className={openTotal ? 'opened' : 'closed'}>
          deaths: <span>{details.deaths}</span>
        </p>
        <p className={openTotal ? 'opened' : 'closed'}>
          recovered: <span>{details.recovered}</span>
        </p>
        <p className={openTotal ? 'opened' : 'closed'}>
          tests: <span>{details.tests}</span>
        </p>
      </div>

      <div className="million-info cont">
        <div onClick={() => setOpenAverage(!openAverage)} className="header">
          <h2>AVERAGE </h2>
          <span>{openAverage ? '-' : '+'}</span>
        </div>
        <p className={openAverage ? 'opened' : 'closed'}>
          total cases per million: <span>{details.casesPerOneMillion}</span>
        </p>
        <p className={openAverage ? 'opened' : 'closed'}>
          total actives per million: <span>{details.activePerOneMillion}</span>
        </p>
        <p className={openAverage ? 'opened' : 'closed'}>
          critical cases per million:{' '}
          <span>{details.criticalPerOneMillion}</span>
        </p>
        <p className={openAverage ? 'opened' : 'closed'}>
          total per million: <span>{details.deathsPerOneMillion}</span>
        </p>
        <p className={openAverage ? 'opened' : 'closed'}>
          recovered per million: <span>{details.recoveredPerOneMillion}</span>
        </p>
        <p className={openAverage ? 'opened' : 'closed'}>
          tests per million: <span>{details.testsPerOneMillion}</span>
        </p>
      </div>
    </section>
  );
};

export default Details;
