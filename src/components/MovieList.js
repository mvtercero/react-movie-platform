import React, { Component } from 'react'
import MovieCard from './MovieCard'
import '../css/MovieList.css';


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
    const { value } = this.props;

    if (movies) {
      return (
        <ul className="movie-list">
        { movies
          .map((movie, index) =>
            <MovieCard 
              key={index}
              keyId={index} 
              poster={movie.Poster} 
              title={movie.Title} 
              year={movie.Year}
              movieDetail={movieDetail}
            >
            </MovieCard>
          )
          .filter((movie => 
            movie.props.title.toLowerCase().includes(value.toLowerCase())
          ))
        }      
        </ul>
      )
    } else {
      return (
        <p>Cargando pelis...</p>
      )
    }
  }
}






