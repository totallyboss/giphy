import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    term: '',
    img: '',
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const apiKey = 'gKvbPlPFx9WoglD03wWua4EU2ucElFxZ';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          term: '',
          img: data.data[0].images.original.url
        })
      })
      .catch(e => console.log('error', e));
  };

  render() {

    const { term, img } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={term} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <img src={img} height="200"/>
      </div>
    );
  }
}

export default App;
