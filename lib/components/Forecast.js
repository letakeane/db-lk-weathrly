import React from 'react';
import DayWeather from './DayWeather';

const Forecast = (props) => {

  return (
    <DayWeather weather={props.forecastWeather} />
  );
};

export default Forecast;
