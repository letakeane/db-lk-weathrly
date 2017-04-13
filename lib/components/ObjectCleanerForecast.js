import React from 'react';

const objectCleanerForecast = ((weatherData) => {
  const firstArray =
    weatherData.forecast.simpleforecast.forecastday.map((obj) => {
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
    weatherData.forecast.txt_forecast.forecastday.map((obj) => {
      return { verboseCondition: obj.fcttext }
    });

  var scrubbedData = [{ forecastData: firstArray,
           verboseConditions: secondArray,
         }];

  return scrubbedData;
});

export default objectCleanerForecast;

// Need to figure out how to put verbose conditions into the first array!
