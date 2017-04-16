import React, { Component } from 'react'
import Weather from './Weather'


export default class Main extends Component {
  render() {
    return (
      <section className='weather-holder'>
        <Weather/>
      </section>
    )
  }
}
