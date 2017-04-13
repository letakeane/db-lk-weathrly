import React from 'react';

const objectCleanerForecast = ((weatherAPI) => {
  const firstArray =
    weatherAPI.forecast.simpleforecast.forecastday.map((obj) => {
      return {
        [obj.date.weekday]: {
          conciseCondition: obj.conditions,
          highTemp: obj.high.fahrenheit,
          lowTemp: obj.low.fahrenheit,
          conditionImg: obj.icon_url,
        },
      };
    });

  const secondArray =
    weatherAPI.forecast.txt_forecast.forecastday.map((obj) => {
      return { verboseCondition: obj.fcttext }
    });

  return { forecastData: firstArray,
           verboseConditions: secondArray,
         };
});

export default objectCleanerForecast;

// Need to figure out how to put verbose conditions into the first array!
