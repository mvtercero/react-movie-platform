import React from 'react'

const MovieDetail = ({director, actors, plot, keyId}) => {
  return (
    <li key={keyId}>
      <p>{director}</p>
      <p>{actors}</p>
      <p>{plot}</p>
    </li>
  )
}

export default MovieDetail;