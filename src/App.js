import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import "./css/App.css";

class App extends Component {
  state = {
    value: ""
  };

  searchMovieHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <Header />
        <Search onSearchMovie={this.searchMovieHandler} value={value}></Search>
        <MovieList value={value}></MovieList>
      </div>
    );
  }
}

export default App;
