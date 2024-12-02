import React, { useEffect, useState } from 'react'
import Card from './Card'
import './movielist.css'

const LatestMovies = () => {

    const [latestMovies, setLatestMovies] = useState([])

    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then((res) => res.json())
        .then((res) => setLatestMovies(res.results))
    }
    
  return (
    <div className='MovieList'>
            <h2 className='listTitle'>Newest & Latest Movies</h2>
            <div className='listCards'>
                {
                    latestMovies.map(movies => (
                        <Card key={movies.id} movie={movies} />
                    ))
                }
            </div>
        </div>
  )
}

export default LatestMovies
