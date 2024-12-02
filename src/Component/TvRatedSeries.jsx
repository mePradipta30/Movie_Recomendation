import React, { useEffect , useState } from 'react'
import './movielist.css'
import Card from './Card'
import { FaVoteYea } from "react-icons/fa";
import TvCard from './TvCard';

const TvRatedSeries = () => {

    const [tvSeriesRated, setTvSeriesRated] = useState([])

    useEffect(() => {
     fetchMovies();
    }, [])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=46478e6cf1e109cb336bc398e8239119`)
        .then((res) => res.json())
        .then((res) => setTvSeriesRated(res.results))
    }
    
  return (
    <div className='movieList'>
        <h2 className='listTitle'> TV shows ordered by Rating <FaVoteYea /> </h2>
        <div className='listCards'>
            {tvSeriesRated.map((show) => (
                <TvCard key={show.id} show={show}/>
            ))}
        </div>
    </div>
  )
}

export default TvRatedSeries
