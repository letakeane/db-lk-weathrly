import React, { Component } from 'react';
import TodayWeather from './TodayWeather';
import Forecast from './Forecast';

export default class Weather extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      location: [],
    }
  }

  handleClick() {
    const userLocation = { location: this.state.input, id: Date.now() };

    this.state.location.push(userLocation);
    this.setState({
      input: '',
      location: this.state.location,
    });
  }

  render() {
    return(
      <div>
        <input type='text'
               placeholder='Enter City, STATE' value={this.state.input}
               onChange= { (event) => { this.setState({ input: event.target.value }); }}
        />

        <input type='submit'
                 onClick={this.handleClick.bind(this)}
          />

          <TodayWeather location = { this.state.location }
          />

          <Forecast />
      </div>
    )
  }
}
