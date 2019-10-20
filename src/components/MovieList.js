import React, { Component } from 'react'
import MovieCard from './MovieCard'


export default class MovieList extends Component {
 constructor(props) {
   super(props)
   this.state = {
    movies: [],
    movieDetail: []
   }
 }

 componentDidMount() {
  fetch('http://www.omdbapi.com/?apikey=b55524ae&s=batman')
    .then((response) => {
      return response.json()
    })
    .then((movies) => {
      this.setState({ movies: movies.Search })
      Promise.all(movies.Search.map(movie =>  {
        return fetch('http://www.omdbapi.com/?i=' + movie.imdbID + '&apikey=b55524ae')
        .then((response) => {
          return response.json();
          })
        .then((data) => {
          return data;
          });
      }))
      .then((movieDetail) => {
        this.setState({ movieDetail: movieDetail });
      })
      .catch(console.error.bind(console));
    })
    .catch((error)=>{ console.log(error)});
 }

  render() {
    const { movies, movieDetail } = this.state;
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
                movieDetail={movieDetail}
              >
              </MovieCard>
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <p>Cargando pelis...</p>
      )
    }
  }
}






