import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './moviewrapper.css'
import Card from './Card';

const MovieWrapper = () => {

  const location = useLocation();
  const { movies } = location.state || { movies: [] }; // Get movies from navigation state

  return (
      <div className="">
          {movies.length > 0 ? (
              <div className="movieSearch-wrapper">
                  {movies.map((movie) => (
                      <Card key={movie.id} movie={movie} className="movieSearch"/>
                  ))}
              </div>
          ) : (
              <h2>No results found. Please try a different search.</h2>
          )}
      </div>
  );
};


export default MovieWrapper
