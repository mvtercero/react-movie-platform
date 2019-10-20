import React from 'react';
import batmanLogo from './batman-logo.svg';
import './css/App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header>
        <img src={batmanLogo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload</p>
      </header>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
