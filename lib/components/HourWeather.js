import React from 'react';

const HourWeather = ({weather}) => {

  const showHours = () => {
    weather.map((obj) => {
      return (
        <article id={Date.now()}
                 className='hour-weather'
        >
          <h3 className='hour-time'>
            {weather[obj].time}
          </h3>

          <h3 className='hour-condition'>
            {weather[obj].conciseCondition}
          </h3>
          <div className='hour-divider'></div>
        </article>
      )
    })
  }

  return (
      <article className='seven-hour-weather'>
        {this.showHours()}
      </article>
  )
}

export default HourWeather;
