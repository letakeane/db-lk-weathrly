const $ = require('jQuery');
import React, { Component } from 'react';
import Weather from './Weather';


export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      queryLocation: '',
    };
  }

  handleClick() {
    localStorage.setItem('userLocation', this.state.queryLocation);
    this.setState({
      location: this.state.location,
    });

    this.props.fetchWeather(this.state.queryLocation);
  }

  render() {
    return (
      <article>
        <h1>weathrly</h1>

        <input type='text'
               placeholder='Enter City, STATE'
               value={this.state.location}
               onChange= {
                 (event) => {
                   const userInput = event.target.value.toLowerCase().toString();

                   this.setState({ location: userInput });

                   let weatherLocation = $.get(`http://autocomplete.wunderground.com/aq?query=${this.state.location}`, () => {
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
      </article>
    );
  }
}
