import React from 'react';
import HourWeather from './HourWeather'
import CurrentWeather from './CurrentWeather'

const TodayWeather = ({ hourlyWeather }) => {
console.log(hourlyWeather);
  return (
    <article className='today-weather'>
      <CurrentWeather weather = {hourlyWeather} />
      <HourWeather weather = {hourlyWeather} />
    </article>
  );
};

export default TodayWeather;
