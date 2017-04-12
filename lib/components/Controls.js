<input type='text'
       placeholder='Enter City, STATE' value={this.state.input}
       onChange= { (event) => { this.setState({ input: event.target.value }); }}
/>


<input type='submit'
         onClick={this.handleClick.bind(this)}
/>


handleClick() {
  const userLocation = { location: this.state.input, id: Date.now() };

    this.state.location.push(userLocation);
    this.setState({
      input: '',
      location: this.state.location,
  });
}
