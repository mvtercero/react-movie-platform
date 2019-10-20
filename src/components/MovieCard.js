import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const {keyId, poster, title, year} = this.props
    return (
      <div>
        <li id={keyId}>
          <img src={poster} alt="imagen de la película"/>
          <h2>{title}</h2>
          <p>{year}</p>
        </li>
      </div>
    )
  }
}
