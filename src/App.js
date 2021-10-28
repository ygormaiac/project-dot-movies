import React from 'react';
import Header from './components/Header';
import '../src/css/main.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="app">
        <Header />
        <MovieList />
    </div>
  );
}

export default App;
