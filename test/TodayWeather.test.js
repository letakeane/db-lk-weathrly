import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/components/CurrentWeather.js';
import HourWeather from '../lib/components/HourWeather.js';
import stubAPI from './stubAPI.json';
import objectCleanerHourly from '../lib/helpers/objectCleanerHourly';

describe('TodayWeather', () => {
  it('should run a data scrubber', () => {
    const cleanAPI = objectCleanerHourly(stubAPI);

    expect(cleanAPI[0].time).toEqual('2:00 PM');
    expect(cleanAPI[0].conciseCondition).toEqual('Chance of Rain');
  });

  it('should not return unwanted data', () => {
    const cleanAPI = objectCleanerHourly(stubAPI);

    expect(cleanAPI[0].dewpoint).toBeFalsy();
    expect(cleanAPI[0].sky).toBeFalsy();
  });

  it('should render hourly forecast', () => {
    const cleanAPI =  objectCleanerHourly(stubAPI);
    const hourWeather = shallow(<HourWeather weather = {cleanAPI} />);
    const hourWeatherCount = hourWeather.find('.hour-weather');

    expect(hourWeatherCount).toHaveLength(36);
  });

  it('should render data from the API', () => {
    const cleanAPI = objectCleanerHourly(stubAPI);
    const hourForecast = shallow(<HourWeather weather = {cleanAPI} />);

    expect(hourForecast.containsAnyMatchingElements([<h3>Chance of Rain</h3>])).toEqual(true);
  });

  it('should render current conditions', () => {
    const cleanAPI =  objectCleanerHourly(stubAPI);
    const currentWeather = shallow(<CurrentWeather weather = {cleanAPI} />);
    const currentWeatherCount = currentWeather.find('.current-header');

    expect(currentWeatherCount).toHaveLength(1);
  });

  it('should render current data from the API', () => {
    const cleanAPI = objectCleanerHourly(stubAPI);
    const currentWeather = shallow(<CurrentWeather weather = {cleanAPI} />);

    expect(currentWeather.containsAnyMatchingElements([<h2>Chance of Rain</h2>])).toEqual(true);
    expect(currentWeather.containsAnyMatchingElements([<h2>62&deg;F</h2>])).toEqual(true);
  });
})
