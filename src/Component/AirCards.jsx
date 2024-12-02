import React, { useEffect, useState } from 'react'
import Card from './Card'
import './movielist.css'
import TvCard from './TvCard'

const AirCards = () => {

    const [airCards, setAirCards] = useState([])

    useEffect(() => {
      getData ()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then((res) => res.json())
        .then((res) => setAirCards(res.results))
    }
    
  return (
    <div className='MovieList'>
            <h2 className='listTitle'>TV shows that air in the next 7 days</h2>
            <div className='listCards'>
                {
                    airCards.map(show => (
                        <TvCard key={show.id} show={show} />
                    ))
                }
            </div>
        </div>
  )
}

export default AirCards
