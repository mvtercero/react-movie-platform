import React, { Component } from 'react'
import MovieDetail from './MovieDetail'

export default class MovieCard extends Component {
  render() {
    const {keyId, poster, title, year, movieDetail} = this.props
    return (
      <div>
        <li id={keyId}>
          <img src={poster} alt="imagen de la película"/>
          <h2>{title}</h2>
          <p>{year}</p>
        </li>

        <ul> 
        { movieDetail.map((detail, index) =>
          keyId === index ? (
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
      </div>
    )
  }
}
