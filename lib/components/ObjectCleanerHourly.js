import React from 'react';

const objectCleanerHourly = ((weatherAPI) => {
  weatherAPI.hourlyforecast.map((obj) => {
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
});

export default objectCleanerHourly;
