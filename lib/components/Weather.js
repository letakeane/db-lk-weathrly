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

  componentDidMount() {
    const userLocation = localStorage.getItem('location');

    userLocation && this.fetchWeather(userLocation);
  }

  fetchWeather(inputLocation) {
    const urlAPI = `http://api.wunderground.com/api/babdeffdfd483352/hourly/forecast10day${inputLocation}.json`;
    $.get(urlAPI).then((weatherData) => {
      const cleanHourly = objectCleanerHourly(weatherData).slice(0, 8);
      const cleanForecast = objectCleanerForecast(weatherData);

      this.setWeatherState(cleanHourly, cleanForecast);
      this.displayWeatherData();
    }).catch(() => {
    });
  }

  setWeatherState(cleanHourly, cleanForecast) {
    this.setState(
      { hourlyWeather: cleanHourly,
        forecastWeather: cleanForecast,
      }
    );
  }

  displayWeatherData() {
    let toDisplay;
    if (this.state.hourlyWeather.length > 0 && this.state.forecastWeather.length > 0) {
      toDisplay =
      (
        <article className='display-day-weather'>
          <TodayWeather
            weather = {this.state.hourlyWeather}
            location = {this.state.location}
          />
          <Forecast forecastWeather = {this.state.forecastWeather} />
        </article>
      );
    } else {
      toDisplay =
      (
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
