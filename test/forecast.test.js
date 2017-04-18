import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from '../lib/components/Forecast';
import DayWeather from '../lib/components/DayWeather.js';

import stubAPI from './stubAPI.json';
import objectCleanerForecast from '../lib/helpers/objectCleanerForecast';

describe('Forecast', () => {
  it('should run a data scrubber', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);

    expect(cleanAPI[0].weekday).toEqual('Monday');
    expect(cleanAPI[0].conciseCondition).toEqual('Chance of Rain');
  });

  it('should not return unwanted data', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);

    expect(cleanAPI[0].epoch).toBeFalsy();
    expect(cleanAPI[0].icon).toBeFalsy();
  });

  it('should render ten <scroll-item/> ', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const forecast = shallow(<DayWeather weather = {cleanAPI} />);
    const dayWeatherCount = forecast.find('.hourly-forecast-scroll');

    expect(dayWeatherCount).toHaveLength(10);
  });

  it('should render data from the API', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const forecast = shallow(<DayWeather weather = {cleanAPI} />);

    expect(forecast.containsAnyMatchingElements([<h3>Chance of Rain</h3>])).toEqual(true);
  });
});
