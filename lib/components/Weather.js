import React, { Component } from 'react';

import Controls from './Controls'
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {
      weather: []
    }
  }

  render() {
    return(
      <div>
        <Controls     weather = {this.state.weather} />
        <TodayWeather weather = {this.state.weather} />
        <Forecast     weather = {this.state.weather} />
      </div>
    )
  }
}
