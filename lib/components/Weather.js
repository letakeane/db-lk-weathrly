import React, { Component } from 'react';

import Controls from './Controls.js'
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {
      hourlyWeather: [],
      forecastWeather: [],
    }
  }

  render() {
    return(
      <div>
        <Controls     hourlyWeather = {this.state.hourlyWeather}
                      forecastWeather = {this.state.forecastWeather}
        />
        <TodayWeather hourlyWeather = {this.state.hourlyWeather} />
        <Forecast     forecastWeather = {this.state.forecastWeather} />
      </div>
    )
  }
}
