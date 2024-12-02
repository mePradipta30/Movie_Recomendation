import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import './tvlist.css'
import TvCard from './TvCard'

const TvList = () => {

    const [tvList, setTvList] = useState([])
    const {type} = useParams()

    useEffect(() => {
      getData()
    }, [])
    
    useEffect(() => {
      getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then(res => setTvList(res.results))
    }
    
  return (
    <>
        <div className='TvList'>
            <h2 className='listTitle'>{(type ? type : "popular").toUpperCase()}</h2>
            <div className='listCards'>
                {
                    tvList.map(show => (
                      <TvCard key={show.id} show={show}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default TvList
