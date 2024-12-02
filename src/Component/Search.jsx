import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './search.css'
import { RiSearchLine } from "react-icons/ri";
import MovieWrapper from './MovieWrapper';

const Search = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popularity.asc');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const handleSortChange = (event) => {
        setSortBy(event.target.value);
      };

      const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
      };

      const handleSearchSubmit = async () => {
        if (!searchQuery) return; 
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: '46478e6cf1e109cb336bc398e8239119',
              query: searchQuery,
            },
          }
        );
        const results = response.data.results || [];
        setMovies(results);
    
        navigate('/movies', { state: { movies: results } });
      };

    //   useEffect(() => {
    //     const fetchMovies = async () => {
    //       const response = await axios.get(
    //         'https://api.themoviedb.org/3/discover/movie',
    //         {
    //           params: {
    //             api_key: '46478e6cf1e109cb336bc398e8239119',
    //             sort_by: sortBy,
    //             page: 1,
    //             with_genres: selectedGenre,
    //             query: searchQuery,
    //           },
    //         }
    //       );
    //       setMovies(response.data.results);
    //     };
    //     fetchMovies();
    //   }, [searchQuery, sortBy, selectedGenre]);
    

      useEffect(() => {
        const fetchGenres = async () => {
          const response = await axios.get(
            'https://api.themoviedb.org/3/genre/movie/list',
            {
              params: {
                api_key: '46478e6cf1e109cb336bc398e8239119',
              },
            }
          );
          setGenres(response.data.genres);
        };
        fetchGenres();
      }, []);
    

  return (
    <>
    <div className="search-bar">
    <input type="text" placeholder="Search movies..." value={searchQuery} onChange={handleSearchChange} 
    className='search-input'/>
    <button onClick={handleSearchSubmit} className="search-button">
        <RiSearchLine />
      </button>
    </div>

    <div className='filters'>
    <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="popularity.desc">Low Popularity</option>
          <option value="popularity.asc">High Popularity</option>
          <option value="vote_average.desc">Bad Rating </option>
          <option value="vote_average.asc">Good Rating </option>
          <option value="release_date.desc">Old Released </option>
          <option value="release_date.asc">New Released </option>
        </select>

        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
    </div>

    {/* {movies.length > 0 && <MovieWrapper movies={movies} />} */}
    </>
  )
}

export default Search
