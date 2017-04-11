import React from 'react';
import HourWeather from './HourWeather'

const TodayWeather = ({ location }) => {
  if (!location) {
    return (
      <div>Please enter a valid City, STATE</div>
    );
  }

  return(
    <HourWeather />
  )
};

export default TodayWeather;
