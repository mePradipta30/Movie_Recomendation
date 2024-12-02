import React, { useEffect , useState } from 'react'
import './movielist.css'
import Card from './Card'
import TvCard from './TvCard'

const TvDiscover = () => {

    const [showsDiscover, setShowsDiscover] = useState([])

    useEffect(() => {
     fetchMovies();
    }, [])

    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=46478e6cf1e109cb336bc398e8239119`)
        .then((res) => res.json())
        .then((res) => setShowsDiscover(res.results))
    }
    
  return (
    <div className='movieList'>
        <h2 className='listTitle'>Discovered Tv Shows</h2>
        <div className='listCards'>
            {showsDiscover.map((show) => (
                <TvCard key={show.id} show={show}/>
            ))}
        </div>
    </div>
  )
}

export default TvDiscover
