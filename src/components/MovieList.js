import React, { Component } from 'react'

export default class MovieList extends Component {
 constructor(props) {
   super(props)
   this.state = {
      movies: []
   }
 }

 componentDidMount() {
  fetch('http://www.omdbapi.com/?apikey=b55524ae&s=batman')
    .then((response) => {
      return response.json()
    })
    .then((movies) => {
      this.setState({ movies: movies.Search })
    })
    .catch((error)=>{ console.log(error)});
 }
 
  render() {
    const { movies } = this.state;
    if(movies) {
      return (
        <div>
          <ul>{movies.map((movie, index) => <li key={index}>{movie.Title}</li>)}</ul>
        </div>
      )
    } else {
      return (
        <p>Cargando pelis...</p>
      )
    }
  }
}






