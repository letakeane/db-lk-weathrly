import React from 'react';

// 7 Hour Forecast

const HourWeather = (props) => {
  const showHours = () => {
    const weatherHours = props.weather;

    const listHours =
    weatherHours.map((obj) => {
      return (
        <article key={obj.time.toString()}
                 id={Date.now()}
                 className='hour-weather'
        >
          <h3 className='hour-time'>
            {obj.time}
          </h3>

          <img src = {obj.conditionImg.toString()}
          />

          <h3 className='hour-condition'>
            {obj.conciseCondition}
          </h3>
          <div className='hour-divider'></div>
        </article>
      );
    });
    return listHours;
  };

  return (
    <div className='seven-hour-weather'>
      {showHours()}
    </div>
  );

};

export default HourWeather;
