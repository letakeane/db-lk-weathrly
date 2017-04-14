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
    const weatherLocation = $.get(`http://autocomplete.wunderground.com/aq?query=${this.state.location}`, () => {
      if (!weatherLocation.responseJSON.RESULTS.length) {
        return (
          <section>Please enter a valid location</section>
        );
      } else {
        const weatherQueryLocation = weatherLocation.responseJSON.RESULTS[0].l;
        this.setState({ queryLocation: weatherQueryLocation });

        const userLocation = weatherLocation.responseJSON.RESULTS[0].name;
        this.setState({ location: userLocation });

        localStorage.setItem('userLocation', this.state.location);
        this.props.fetchWeather(this.state.queryLocation);
      }
    });
  }

  render() {
    return (
      <article>
        <h1>weathrly</h1>

        <input type='text'
               placeholder='Enter City, STATE'
               onChange= {
                 (event) => {
                   const userInput = event.target.value.toLowerCase().toString();

                   this.setState({ location: userInput });
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
