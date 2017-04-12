import React from 'react';
import HourWeather from './HourWeather'
import CurrentWeather from './CurrentWeather'

const TodayWeather = ({ location, weather }) => {
  if (!location) {
    return (
      <div>Please enter a valid City, STATE</div>
    );
  }

  return(
    <HourWeather weather = {weather} />
  )
};

export default TodayWeather;
