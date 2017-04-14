import React from 'react';
import HourWeather from './HourWeather'
import CurrentWeather from './CurrentWeather'

const TodayWeather = ({ hourlyWeather }) => {
if(!hourlyWeather.length) {
  return (
    <section>
      suh dude
    </section>
    )
  }
  return (
    <article className='today-weather'>
      <CurrentWeather weather = {hourlyWeather} />
      <HourWeather weather = {hourlyWeather} />
    </article>
  );
};

export default TodayWeather;
