import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow, mount } from 'enzyme'
// import Jest from 'jest'
import Weather from '../lib/components/Weather.js'

describe('Controls', () => {
  it('state.location should change when user types in field', () => {
    const wrapper = shallow(<Controls fetchWeather = { () => {} } />);
    const inputField = wrapper.find('input[type="text"]');

    inputField.simulate('change', { target: { value: 'denver' } });

    expect(wrapper.state('location')).toEqual('denver');
  });
});
