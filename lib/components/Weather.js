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

  fetchWeather(location) {
    const urlAPI = `http://api.wunderground.com/api/babdeffdfd483352/hourly/forecast10day${location}.json`;
    $.get(urlAPI, (weatherData) => {
      const cleanHourly = objectCleanerHourly(weatherData).slice(0, 8);
      const cleanForecast = objectCleanerForecast(weatherData);

        this.setState({ hourlyWeather: cleanHourly }),
        this.setState({ forecastWeather: cleanForecast })
    });
  }


  render() {
    return (
      <div>
        <Controls fetchWeather = {this.fetchWeather.bind(this)}
        />
        <TodayWeather hourlyWeather = {this.state.hourlyWeather}
        />
        <Forecast forecastWeather = {this.state.forecastWeather} />
      </div>
    )
  }
}
