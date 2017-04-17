import React from 'react';
import Jest from 'jest';
import { shallow, mount } from 'enzyme';

import HourWeather from '../lib/components/HourWeather.js';
import stubAPI from './stubAPI.json';
import objectCleanerHourly from '../lib/components/objectCleanerHourly';

describe('TodayWeather', () => {
  it('should render ', () => {
    const cleanAPI =  objectCleanerHourly(stubAPI);

    const hourWeather = shallow(<HourWeather weather = {cleanAPI} />);

    const hourWeatherCount = hourWeather.find('.hour-weather')

    expect(hourWeatherCount).toHaveLength(36)
  })
})
