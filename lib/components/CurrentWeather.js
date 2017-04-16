import React from 'react';

const CurrentWeather = (props) => {
  return (
    <article className='current-weather'>
      <div className='current-header'>
        <h3 className='current-day'>TODAY</h3>
      </div>
      <h2 className='current-location'>
        {props.location}
      </h2>

      <img className='current-icon'
           src={props.weather[0].conditionImg.toString()}
      />
      <h2 className='current-temp'>
        {props.weather[0].temp}&deg;F
      </h2>

      <h2 className='current-condition'>
        {props.weather[0].conciseCondition}
      </h2>
    </article>
  );
};

export default CurrentWeather;
