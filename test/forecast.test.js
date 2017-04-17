import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from '../lib/components/Forecast';
import DayWeather from '../lib/components/DayWeather.js';
import stubAPI from './stubAPI.js';
import objectCleanerForecast from '../lib/components/objectCleanerForecast';

describe('Forecast', () => {

  it('should render ten <scroll-item/> components', () => {
    let cleanAPI =  objectCleanerForecast(stubAPI);

    // const wrapper = mount(<Forecast weather = {cleanAPI} />);

    const forecast = shallow(<Forecast weather = {cleanAPI} />);

    let dayWeatherCount = forecast.find('.scroll-item');

    expect(dayWeatherCount).toHaveLength(10);
   });

});
