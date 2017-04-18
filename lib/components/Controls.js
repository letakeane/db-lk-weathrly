import $ from 'jQuery';
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
          <section
            className='error-message'
          >
            Please enter a valid location
          </section>
        );
      } else {
        const weatherQueryLocation = weatherLocation.responseJSON.RESULTS[0].l;
        this.setState({ queryLocation: weatherQueryLocation });

        localStorage.setItem('userLocationQuery', weatherQueryLocation);

        const userLocation = weatherLocation.responseJSON.RESULTS[0].name;
        this.setState({ location: userLocation });

        localStorage.setItem('userLocationPretty', userLocation);
        this.props.fetchWeather(this.state.queryLocation);
      }
    });
  }

  render() {
    return (
      <article className='header-nav'>
        <h1>weathrly</h1>

        <div className='input-holder'>
          <input type='text'
                 placeholder='Enter zipcode OR City, STATE'
                 className='input-field'
                 onChange= {
                   (event) => {
                     const userInput = event.target.value.toLowerCase().toString();

                     this.setState({ location: userInput });
                   }
                 }
          />

          <input type='submit'
                 className='submit-button'
                 onClick={this.handleClick.bind(this)}
          />
        </div>
      </article>
    );
  }
}
