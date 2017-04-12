import React from 'react';

const ObjectCleaner = (dayForecast) => {



let cleanWeather = dayForecast.hourly_forecast.map( (obj) => {
  return {[obj.FCTTIME.hour]:{timeDate: obj.FCTTIME.pretty,
                    time: obj.FCTTIME.civil,
                    temp: obj.temp.english,
                    condition: obj.condition,
                    conditionImg: obj.icon_url
  }}
})
}
