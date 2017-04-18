import Controls from '../lib/components/Controls';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Weather from '../lib/components/Weather.js';

describe('Controls', () => {
  it('should have an input field', () => {
    const wrapper = shallow(<Controls fetchWeather = { () => {} } />);
    const inputField = wrapper.find('.input-field');

    expect(inputField).toBeTruthy();
  })

  it('should have a submit button', () => {
    const wrapper = shallow(<Controls fetchWeather = { () => {} } />);
    const submitButton = wrapper.find('.submit-button');

    expect(submitButton).not.toBeFalsy();
  })

  it('state.location should change when user types in field', () => {
    const wrapper = shallow(<Controls fetchWeather = { () => {} } />);
    const inputField = wrapper.find('input[type="text"]');

    inputField.simulate('change', { target: { value: 'denver' } });

    expect(wrapper.state('location')).toEqual('denver');
  });
});
