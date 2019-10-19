import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class MovieList extends Component {
 constructor(props) {
   super(props)
   this.state = {
    movies: [],
   }
 }

 componentDidMount() {
  fetch('http://www.omdbapi.com/?apikey=b55524ae&s=batman')
    .then((response) => {
      return response.json()
    })
    .then((movies) => {
      this.setState({ movies: movies.Search })
      const movieIDList = movies.Search.map(movie => movie.imdbID)
      for (const movieID of movieIDList) {
        fetch('http://www.omdbapi.com/?i=' + movieID + '&apikey=b55524ae')
        .then(function(response) {
            return response.json();
        })
        .then((movieDetail)=> {
          console.log(movieDetail, "---respuesta de la api")
        })
        .catch(function(error) {
          console.log('Request failed', error)
        })
      }
    })
    .catch((error)=>{ console.log(error)});
 }
 
  render() {
    const { movies } = this.state;
    if(movies) {
      return (
        <div>
          <ul>
            { movies.map((movie, index) =>
              <MovieCard 
                key={index}
                keyId={index} 
                poster={movie.Poster} 
                title={movie.Title} 
                year={movie.Year}
                movieID={movie.imdbID}
              >
              </MovieCard>
            )}
          </ul>
          <ul></ul>
        </div>
      )
    } else {
      return (
        <p>Cargando pelis...</p>
      )
    }
  }
}






