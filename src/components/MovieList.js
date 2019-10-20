import React, { Component } from "react";
import MovieCard from "./MovieCard";
import "../css/MovieList.css";

const API_KEY = "b55524ae";

export default class MovieList extends Component {
  state = {
    movies: [],
    details: {}
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    try {
      const movies = await this.fetchMovies();
      this.setState({ movies });
    } catch (e) {
      console.error(e);
    }
  };

  loadDetail = async id => {
    try {
      const data = await this.fetchDetail(id);
      this.setState(prevState => ({
        details: { ...prevState.details, [id]: data }
      }));
    } catch (e) {
      console.error(e);
    }
  };

  fetchMovies = () => {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman`)
      .then(response => response.json())
      .then(data => data.Search);
  };

  fetchDetail = id => {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`).then(
      response => response.json()
    );
  };

  displayDetailsHandler = id => {
    const { details } = this.state;
    if (!details[id]) {
      this.loadDetail(id);
    }
  };

  render() {
    const { movies, details } = this.state;
    const { value } = this.props;

    if (movies) {
      return (
        <ul className="movie-list">
          {movies
            .filter(({ Title }) =>
              Title.toLowerCase().includes(value.toLowerCase())
            )
            .map(movie => (
              <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                details={details[movie.imdbID]}
                onDisplayDetails={this.displayDetailsHandler}
              ></MovieCard>
            ))}
        </ul>
      );
    } else {
      return <p>Cargando pelis...</p>;
    }
  }
}
