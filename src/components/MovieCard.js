import React, { Component } from "react";
import MovieDetail from "./MovieDetail";
import "../css/MovieCard.css";

export default class MovieCard extends Component {
  state = {
    displayDetail: false
  };

  toggleDisplay = () => {
    this.setState(prevState => ({
      displayDetail: !prevState.displayDetail
    }));
  };

  onClickDisplayDetail = () => {
    const { id, onDisplayDetails } = this.props;
    this.toggleDisplay();
    onDisplayDetails(id);
  };

  render() {
    const { poster, title, year, details } = this.props;
    const { displayDetail } = this.state;

    return (
      <li className="movie-card">
        <img src={poster} alt={title} className="movie-card__img" />
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__year">{year}</p>
        <button onClick={this.onClickDisplayDetail}>Más info</button>

        {displayDetail &&
          (details ? (
            <MovieDetail
              director={details.Director}
              actors={details.Actors}
              plot={details.Plot}
            />
          ) : (
            <small>loading...</small>
          ))}
      </li>
    );
  }
}
