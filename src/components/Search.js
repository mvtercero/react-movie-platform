import React from 'react'

const Search = ({ searchMovie, value}) => {
  return(
    <input type="text" onChange={searchMovie} value={value}></input>
  )
}

export default Search;