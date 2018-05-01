import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Form from './Form';
import Typography from 'material-ui/Typography';

const apiKey = 'gKvbPlPFx9WoglD03wWua4EU2ucElFxZ';
const styles = {
  app: {
    padding: '20px',
  },
};

const Results = ({image}) => {
  const firstSearch = image === '';

  if(firstSearch) {
    return <p>Seach for something!</p>
  }

  return <img src={image} alt={image} height="400" />

};

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
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Typography variant="title" gutterBottom>GIF Search</Typography>
        <Form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          searchTerm={term}/>
        <Results image={img}/>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
