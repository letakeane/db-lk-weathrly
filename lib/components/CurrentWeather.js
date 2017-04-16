import React from 'react';

const CurrentWeather = ({hourlyWeather, location}) => {
  return (
    <article className='current-weather'>
      <div className='current-header'>
        <h3 className='current-day'>TODAY</h3>
      </div>
      <h2 className='current-location'>
        {location}
      </h2>

      <img className='current-icon'
           src={hourlyWeather[0].conditionImg.toString()}
      />
      <h2 className='current-temp'>
        {hourlyWeather[0].temp} + &deg; + 'F'
      </h2>

      <h2 className='current-condition'>
        {hourlyWeather[0].conciseCondition}
      </h2>
    </article>
  )
};

export default CurrentWeather;
