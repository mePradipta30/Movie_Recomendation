import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './moviewrapper.css'

const MovieWrapper = () => {

  const location = useLocation();
  const movies = location.state?.movies || []; // fetch movies from state

  return (
    <>
     <div className="movieSearch-wrapper">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movieSearch">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
            />
            <h2>{movie.title}</h2>
            <p className="movieSearchrating">Rating: {movie.vote_average}</p>
          </div>
        ))
      ) : (
        <p className="movieSearchno-results">No movies found. Try searching something else.</p>
      )}
    </div>
      </>
  )
}

export default MovieWrapper
