import React from 'react';

const objectCleanerHourly = ((weatherData) => {
  var scrubbedData = weatherData.hourly_forecast.map((obj) => {
    return {
      [obj.FCTTIME.hour]: {
        time: obj.FCTTIME.civil,
        day: obj.FCTTIME.weekday_name,
        temp: obj.temp.english,
        conciseCondition: obj.condition,
        conditionImg: obj.icon_url,
      },
    };
  });
  return scrubbedData
});

export default objectCleanerHourly;
