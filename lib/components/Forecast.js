import React from 'react';
import DayWeather from './DayWeather'

const Forecast = ({ forecastWeather }) => {
  // if (!location) {
  //   return (
  //     <div>Please enter a valid City, STATE</div>
  //   );
  // }

  return(
    <DayWeather weather={forecastWeather} />
  )
};

export default Forecast;
