import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import './movielist.css'

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
      getData()
    }, [])
    
    useEffect(() => {
      getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then(res => setMovieList(res.results))
    }
    
  return (
    <>
        <div className='MovieList'>
            <h2 className='listTitle'>{(type ? type : "popular").toUpperCase()}</h2>
            <div className='listCards'>
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default MovieList
