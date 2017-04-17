import React from 'react';
import HourWeather from './HourWeather';
import CurrentWeather from './CurrentWeather';

const TodayWeather = (props) => {
  return (
    <article className='today-weather'>
      <CurrentWeather weather = {props.weather}
                      location = {props.location}
      />
      <HourWeather weather = {props.weather} />
    </article>
  );
};

export default TodayWeather;
