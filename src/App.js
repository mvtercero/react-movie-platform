import React, { Component } from 'react';
import batmanLogo from './batman-logo.svg';
import './css/App.css';
import MovieList from './components/MovieList';
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: "",
    }
  }

  handleSearchMovie = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { value } = this.state
    console.log(value, '--value')
    return (
      <div className="App">
        <header>
          <img src={batmanLogo} className="App-logo" alt="logo" />
        </header>
        <Search searchMovie={this.handleSearchMovie} value={value}></Search>
        <MovieList value={value}></MovieList>
      </div>
    );
  }

}

export default App;
