const $ = require('jQuery');
import React, { Component } from 'react';
import Controls from './Controls';
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';
import objectCleanerHourly from './ObjectCleanerHourly'
import objectCleanerForecast from './ObjectCleanerForecast'

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {
      hourlyWeather: [],
      forecastWeather: [],
    }
  }

  fetchWeather(inputLocation) {
    const urlAPI = `http://api.wunderground.com/api/babdeffdfd483352/hourly/forecast10day${inputLocation}.json`;
    $.get(urlAPI).then((weatherData) => {
      const cleanHourly = objectCleanerHourly(weatherData).slice(0, 8);
      const cleanForecast = objectCleanerForecast(weatherData);

      this.setWeather(cleanHourly, cleanForecast)
    }).catch(() => {
      console.log(this.state);
    });
  }

  setWeather(cleanHourly, cleanForecast) {
    this.setState(
      { hourlyWeather: cleanHourly,
        forecastWeather: cleanForecast,
      }
    );
  }

  componentDidMount() {
    const userLocation = localStorage.getItem('location');

    userLocation && this.fetchWeather(userLocation);
  }

  displayWeatherData() {
    let toDisplay;
    if (this.state.hourlyWeather.length && this.state.forecastWeather.length) {
      toDisplay = (
        <div className='display-day-weather'>
          <TodayWeather hourlyWeather = {this.state.hourlyWeather} />
          <Forecast forecastWeather = {this.state.forecastWeather} />
        </div>
      );
    } else {
      toDisplay = (
        <p className='error-message'>Please enter a location</p>
      );
    }
    return toDisplay;
  }

  render() {
    return (
      <div>
        <Controls fetchWeather = {this.fetchWeather.bind(this)}
        />
        {this.displayWeatherData()}
      </div>
    )
  }
}
