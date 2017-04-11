import React from 'react';
import TodayWeather from './TodayWeather'

const RenderList = ({ location }) => {
  if (!location) {
    return (
      <div>Please enter a valid City, STATE</div>
    );
  }

  return(
    <TodayWeather />
  )
};

export default RenderList;
