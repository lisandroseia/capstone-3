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
  const [details] = useState(...country);
  return (
        <section>

          <div className='country-info'>
          <h2>{details.country}</h2>
          <p>population: <span>{details.population}</span></p>  
          </div>

           <div className='today-info'>
          <p>cases today: <span>{details.todayCases}</span></p>
          <p>deaths today: <span>{details.todayDeaths}</span></p>
          <p>recovered today: <span>{details.todayRecovered}</span></p>
             </div>

           <div className='total-info'>
          <p>total cases: <span>{details.cases}</span></p>
          <p>active cases: <span>{details.active}</span></p>
          <p>critical cases: <span>{details.critical}</span></p>
          <p>deaths: <span>{details.deaths}</span></p>
          <p>recovered: <span>{details.recovered}</span></p>
          <p>tests: <span>{details.tests}</span></p>
             </div>

             <div className='million-info'>
          <p>total cases per million: <span>{details.casesPerOneMillion}</span></p>
          <p>total actives per million: <span>{details.activePerOneMillion}</span></p>
          <p>critical cases per million: <span>{details.criticalPerOneMillion}</span></p>
          <p>total per million: <span>{details.deathsPerOneMillion}</span></p>
          <p>recovered per million: <span>{details.recoveredPerOneMillion}</span></p>
          <p>tests per million: <span>{details.testsPerOneMillion}</span></p>
               </div>
        </section>
  )
};

export default Details;
