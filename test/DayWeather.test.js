import React from 'react';
import { shallow, mount } from 'enzyme';

import objectCleanerForecast from '../lib/helpers/objectCleanerForecast';
import stubAPI from './stubAPI.json';
import DayWeather from '../lib/components/DayWeather';
import Forecast from '../lib/components/Forecast';

describe('DayWeather', () => {
  it('should', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const wrapper = shallow( <DayWeather weather={ cleanAPI } />);

    expect(wrapper.find('h3').length).toEqual(30);
    expect(wrapper.find('.scroll-item').length).toEqual(40)

    expect(wrapper.find('h3').filter('.scroll-item').length).toEqual(30)
  });

  it('should have 10 .article classNames', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const wrapper = shallow( <DayWeather weather={ cleanAPI } />);

    expect(wrapper.at(0).find('article').length).toEqual(10)
  });

  it('should have a weekday at the first h3 element', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const wrapper = shallow( <DayWeather weather={ cleanAPI } />);

    expect(wrapper.find('h3').first().text()).toEqual('Monday')
  })

  it('values should be appropriately dispensed from the api array', () => {
    const cleanAPI = objectCleanerForecast(stubAPI);
    const wrapper = shallow( <DayWeather weather={ cleanAPI } />);

    expect(wrapper.find('article').first().childAt(0).text()).toEqual('Monday')
    expect(wrapper.find('article').first().childAt(1).text()).toEqual('63 ° / 54   °F')
    expect(wrapper.find('article').first().childAt(3).text()).toEqual('Chance of Rain')
  })
})
