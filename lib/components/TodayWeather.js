import React from 'react';

const TodayWeather = ({ location }) => {
  if (!location) {
    return (
      <div>Please enter a valid City, STATE</div>
    );
  }

  return(
    <div>Today's Weather</div>
  )
}

export default TodayWeather;
