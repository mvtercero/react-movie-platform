import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import '../css/MovieCard.css';

export default class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
     displayDetail: false,
    }
  }

  displayDetail = () => {
    this.setState({
        displayDetail: !this.state.displayDetail
    })
  }
  
  render() {
    const {keyId, poster, title, year, movieDetail} = this.props
    const {displayDetail} = this.state
    return (
      <li>
        <div id={keyId} className="movie-card">
          <img src={poster} alt="imagen de la película" className="movie-card__img"/>
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__year">{year}</p>
          <button onClick={this.displayDetail}>Más info</button>
        </div>

        <ul> 
        { movieDetail.map((detail, index) =>
         displayDetail && keyId === index ? (
          <MovieDetail
            key={index}
            keyId={index}
            director={detail.Director}
            actors={detail.Actors}
            plot={detail.Plot}
          >
          </MovieDetail>
          ) : ( undefined )
        )}
        </ul>
      </li>
    )
  }
}
