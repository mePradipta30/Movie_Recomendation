import React, { useEffect , useState } from 'react'
import './movielist.css'
import Card from './Card'

const MovieDiscover = () => {

    const [moviesDiscover, setMoviesDiscover] = useState([])

    useEffect(() => {
     fetchMovies();
    }, [])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=46478e6cf1e109cb336bc398e8239119`)
        .then((res) => res.json())
        .then((res) => setMoviesDiscover(res.results))
    }
    
  return (
    <div className='movieList'>
        <h2 className='listTitle'>Discovered Movies</h2>
        <div className='listCards'>
            {moviesDiscover.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    </div>
  )
}

export default MovieDiscover
