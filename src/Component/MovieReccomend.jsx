import React, { useEffect, useState } from 'react'
import '../Pages/detailpage.css'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import './movielist.css'
import Card from './Card';

const MovieReccomend = () => {

    const [movieReccomendPage, setMovieReccomendPage] = useState([])
    const { id } = useParams()

    useEffect(() => {
     getData()
     window.scrollTo(0,0)
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then((data) => setMovieReccomendPage(data.results))
        // .then(data => {
        //     if (data && Array.isArray(data.results)) {
        //         setMovieReccomendPage(data.results); // Use the "results" array
        //     } else {
        //         setMovieReccomendPage([]); // Fallback to an empty array
        //     }
        // })
    }

  return (
    <>
    <div className='MovieList'>
            <h2 className='listTitle'>Recommendations</h2>
            <div className='listCards'>
                {movieReccomendPage.length > 0 ? (
                    movieReccomendPage.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No recommendations available.</p>
                )}
            </div>
        </div>
        </>
  )
}

export default MovieReccomend
