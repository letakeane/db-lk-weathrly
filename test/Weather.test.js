import React from 'react';
import { shallow, mount } from 'enzyme';

import Weather from '../lib/components/Weather';
import TodayWeather from '../lib/components/TodayWeather';
import Controls from '../lib/components/Controls';

describe('Weather', () => {
  it('should should should could', () => {
    const wrapper = shallow(<Controls fetchWeather = { () => {} } />)
    const submitButton = wrapper.find('.submit-button')
    const inputField = wrapper.find('input[type="text"]')

    inputField.simulate('change', { target: { value: 'golden' } });

    expect(wrapper.state('location')).toEqual('golden');
  });

  it('should have default state of empty arrays', () => {
    const wrapper = shallow(<Weather />);

    expect(wrapper.state('hourlyWeather').length).toEqual(0);
    expect(wrapper.state('forecastWeather').length).toEqual(0);
  });

  it('should display an error when hourlyWeather & forecastWeather are empty', () => {
    const wrapper = shallow(<Weather />);

    let error = wrapper.find('.error-message');

    expect(error.length).toEqual(1);
    expect(error.text()).toEqual('Please enter a location');
  });

  it('error message should be wrapped in a div element', () => {

    const wrapper = shallow(<Weather />);

    expect(wrapper.type()).toEqual('div');
  });
})
