import React from 'react'
import '../css/Search.css';

const Search = ({ searchMovie, value}) => {
  return (
    <div>
      <p>Busca tu peli de Batman</p>
      <input type="text" onChange={searchMovie} value={value} className="search"></input>
    </div>
  )
}

export default Search;