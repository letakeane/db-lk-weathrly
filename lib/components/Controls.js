var $ = require('jQuery');
import React, { Component } from 'react';
import Weather from './Weather';
import objectCleanerHourly from './ObjectCleanerHourly'
import objectCleanerForecast from './ObjectCleanerForecast'

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      queryLocation: '',
    };
  }

  handleClick({ hourlyWeather, forecastWeather }) {
    localStorage.setItem('userLocation', this.state.queryLocation);

    const weatherForThisLocation =
      $.get(`http://api.wunderground.com/api/230d6e06452ab3a7/hourly/forecast10day/${this.state.queryLocation}.json`);
    const hourlyWeatherData = objectCleanerHourly(weatherForThisLocation).slice(0, 7);
    const forecastWeatherData = objectCleanerForecast(weatherForThisLocation);

    this.setState({
      location: this.state.location,
      hourlyWeather: hourlyWeatherData,
      forecastWeather: forecastWeatherData,
    });
  }

  render() {
    return (
      <div>
        <input type='text'
               placeholder='Enter City, STATE'
               value={this.state.location}
               onChange= {
                 (event) => {
                   const userInput = event.target.value.trim().toLowerCase().toString();
                   this.setState({ location: userInput });

                   let weatherLocation = $.get(`http://autocomplete.wunderground.com/aq?query=${userInput}`, () => {
                     if (!weatherLocation.responseJSON.RESULTS[0]) {
                       this.setState({ location: 'Please enter a location' });
                     } else {
                       weatherLocation = weatherLocation.responseJSON.RESULTS[0].l;
                       this.setState({ queryLocation: weatherLocation });
                     }
                   });
                 }
               }
        />

        <input type='submit'
               onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
