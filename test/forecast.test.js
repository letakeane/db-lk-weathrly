import React from 'react';
import Jest from 'jest';
import { shallow, mount } from 'enzyme';

import Forecast from '../lib/components/Forecast';
import DayWeather from '../lib/components/DayWeather.js';

import stubAPI from './stubAPI.json';
import objectCleanerForecast from '../lib/helpers/objectCleanerForecast';
require('locus');

describe('Forecast', () => {
  it('should render ten <scroll-item/> ', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);

    const forecast = shallow(<DayWeather weather = {cleanAPI} />);

    const dayWeatherCount = forecast.find('.scroll-item');
    expect(dayWeatherCount).toHaveLength(40);
   });
});
