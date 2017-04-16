import React from 'react';

// 10 Day Forecast

const DayWeather = (props) => {
  const showDayWeather = () => {
    const dayWeather = props.weather
    console.log(dayWeather);
    const dayList =
    dayWeather.map((obj, ind) => {
      return (
        <article  key = {obj.weekday.toString() + ind}
                  id = {Date.now()}
                  className = 'hourly-forecast'
        >
          <h3 className = 'weekday'>
            {obj.weekday}
          </h3>

          <h3 className = 'high-temp'>
            {obj.highTemp}  &deg; / {obj.lowTemp}   &deg;F
          </h3>


          <img className = 'dayweather-img'
            src = {obj.conditionImg.toString()}
            />

            <h3 className = 'concise-condition'>
            {obj.conciseCondition}
            </h3>
        </article>
      );
    });
    return dayList;
  };

  return (
    <div className = 'tenDayCast'>
      {showDayWeather()}
    </div>
  );

};

export default DayWeather;
