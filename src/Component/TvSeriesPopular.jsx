import React, { useEffect , useState } from 'react'
import './movielist.css'
import Card from './Card'
import TvCard from './TvCard'

const TvSeriesPopular = () => {

    const [tvSeriesPop, setTvSeriesPop] = useState([])

    useEffect(() => {
     fetchMovies();
    }, [])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=46478e6cf1e109cb336bc398e8239119`)
        .then((res) => res.json())
        .then((res) => setTvSeriesPop(res.results))
    }
    
  return (
    <div className='movieList'>
        <h2 className='listTitle'> TV shows ordered by Popularity</h2>
        <div className='listCards'>
            {tvSeriesPop.map((show) => (
                <TvCard key={show.id} show={show}/>
            ))}
        </div>
    </div>
  )
}

export default TvSeriesPopular
