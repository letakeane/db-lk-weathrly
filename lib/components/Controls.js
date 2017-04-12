import React, { Component } from 'react';
import Weather from './Weather';
import ObjectCleaner from './ObjectCleaner'

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  handleClick({weather}) {
    const userLocation = {this.state.location }
    localStorage.setItem('userLocation', userLocation)

    let locale = $.get('http://api.wunderground.com/api/230d6e06452ab3a7/hourly/forecast10day/q/' + this.state.location.toString() + ".JSON" )
    ObjectCleaner(locale)

      this.setState({
        location: this.state.location,
        weather: ObjectCleaner(locale)
    });
  }

  render() {
    return(
      <div>
        <input  type='text'
                placeholder='Enter City, STATE' value={this.state.location}
                onChange= { (event) => { this.setState( { location: event.target.value } ); }}
        />

        <input  type='submit'
                onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}
