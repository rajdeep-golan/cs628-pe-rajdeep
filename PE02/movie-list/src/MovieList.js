import React, { useState } from 'react';
import './MovieList.css'; 

function MovieList() {
  const initialMovies = [
    { Title: 'Inception', Genre: 'Science Fiction', ReleaseYear: 2010 },
    { Title: 'The Shawshank Redemption', Genre: 'Drama', ReleaseYear: 1994 },
    { Title: 'The Dark Knight', Genre: 'Action', ReleaseYear: 2008 },
    { Title: 'Pulp Fiction', Genre: 'Crime', ReleaseYear: 1994 },
    { Title: 'The Matrix', Genre: 'Science Fiction', ReleaseYear: 1999 },
    { Title: 'Forrest Gump', Genre: 'Drama', ReleaseYear: 1994 },
    { Title: 'Interstellar', Genre: 'Science Fiction', ReleaseYear: 2014 },
    { Title: 'Gladiator', Genre: 'Action', ReleaseYear: 2000 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres'); 

  const genres = ['All Genres', ...new Set(initialMovies.map(movie => movie.Genre))];

  const filteredMovies = selectedGenre === 'All Genres'
    ? initialMovies
    : initialMovies.filter(movie => movie.Genre === selectedGenre);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (movieTitle) => {
    alert(`You clicked on "${movieTitle}"`);
  };

  return (
    <div className="movie-list-container">
      <div className="filter-section">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <div
            key={movie.Title} 
            className="movie-card"
            onClick={() => handleMovieClick(movie.Title)} 
          >
            <h3>{movie.Title}</h3> 
            <p className="genre">{movie.Genre}</p>
            <p className="release-year">Released: {movie.ReleaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;