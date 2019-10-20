import React from 'react'


const MovieCard = ({keyId, poster, title, year}) => {
  return (
  <li id={keyId}>
    <img src={poster} alt="imagen de la película"/>
    <h2>{title}</h2>
    <p>{year}</p>
  </li>
  ) 
}

export default MovieCard;