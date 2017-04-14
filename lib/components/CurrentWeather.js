import React from 'react';

const CurrentWeather = ({ hourlyWeather }) => {

  return (
    <article className='current-weather'>
      <div className='current-header'>
        <h3>TODAY</h3>
      </div>
      <h2 className='current-location'>
        LOCATION HERE
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
