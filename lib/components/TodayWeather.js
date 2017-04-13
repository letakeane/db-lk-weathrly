import React from 'react';
import HourWeather from './HourWeather'
import CurrentWeather from './CurrentWeather'

const TodayWeather = ({ hourWeather }) => {

  return (
    <article>
      <CurrentWeather weather = {hourWeather}/>
      <HourWeather weather = {hourWeather} />
    </article>
  );
};

export default TodayWeather;
