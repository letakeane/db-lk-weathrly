import Controls from '../lib/components/Controls'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'mocha'

describe('Controls', () => {
  it('state.location should change when user types in field', () => {
    const wrapper = mount(<Controls fetchWeather = { () => {} } />);
    const inputField = wrapper.find('input[type="text"]');

    inputField.simulate('change', { target: { value: "denver" } });

    expect(wrapper.state('location').toEqual('denver'))
  })

  it('button should run a function when clicked', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Controls fetchWeather = { mockFn } />);
    const inputField = wrapper.find('input[type="text"]');
    const submitButton = wrapper.find('input[type="submit"]');

    inputField.simulate('change', { target: { value: "denver" } });
    submitButton.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})
