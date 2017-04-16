import React from 'react';
import DayWeather from './DayWeather'

const Forecast = (props) => {

  // if (!location) {
  //   return (
  //     <div>Please enter a valid City, STATE</div>
  //   );
  // }

  return(
    <DayWeather weather={props.forecastWeather} />
  )
};

export default Forecast;
