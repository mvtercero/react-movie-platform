import React from 'react'


const MovieCard = ({keyId, poster, title, year, movieID }) => {
  const movieIdURL = `http://www.omdbapi.com/?${movieID}&apikey=b55524ae`
  return (
  <li id={keyId}>
    <img src={poster} alt="imagen de la película"/>
    <h2>{title}</h2>
    <p>{year}</p>
    <p>{movieID}</p>
  </li>
  ) 
}

export default MovieCard;