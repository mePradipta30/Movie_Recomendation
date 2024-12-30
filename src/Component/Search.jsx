import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './search.css';
// import MovieWrapper from './MovieWrapper';
import { RiSearchLine } from "react-icons/ri";
import Card from './Card'; // Import the Card component

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popularity.desc');
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
                    sort_by: sortBy,
                    with_genres: selectedGenre,
                },
            }
        );
        const results = response.data.results || [];
        setMovies(results);
        navigate('/movie', { state: { movies: results } });
    };

    const handleKeyDown = (event) => {

      if(event.key === 'Enter'){
        handleSearchSubmit();
      }
    }

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
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                />
                <button onClick={handleSearchSubmit} className="search-button">
                    <RiSearchLine />
                </button>
            </div>

            <div className="filters">
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

           
            {/* Render search results using Card */}
            {/* <div className="movie-grid">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div> */}
        </>
    );
};

export default Search;
