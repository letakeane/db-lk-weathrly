import React from 'react';

// 10 Day Forecast

const DayWeather = (props) => {
  const showDayWeather = () => {
    const dayWeather = props.weather;

    const dayList = dayWeather.map((obj, ind) => {
      return (
        <article key = {obj.weekday.toString() + ind}
                 id = {Date.now()}
                 className = 'hourly-forecast-scroll'
        >
          <h3 className = 'scroll-item'>
            {obj.weekday}
          </h3>

          <h3 className = 'scroll-item'>
            {obj.highTemp}  &deg; / {obj.lowTemp}   &deg;F
          </h3>

          <img src = {obj.conditionImg.toString()}
               className = 'scroll-item'
            />

            <h3 className = 'scroll-item'>
            {obj.conciseCondition}
            </h3>
        </article>
      );
    });
    return dayList;
  };

  return (
    <div className = 'ten-day-cast'>
      {showDayWeather()}
    </div>
  );
};

export default DayWeather;
