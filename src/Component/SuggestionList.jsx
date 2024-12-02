import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import './suggestionlist.css'

const SuggestionList = () => {

    const [suggestionList, setSuggestionList] = useState([])
    const {type} = useParams()

    useEffect(() => {
      getData()
    }, [])
    
    useEffect(() => {
      getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/movie_id/${type ? type : "popular"}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then(res => console.log(res.results))
    }
    
  return (
    <>
        <div className='sgList'>
            <h2 className='listTitle'>{(type ? type : "popular").toUpperCase()}</h2>
            <div className='listCards'>
                {
                    suggestionList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default SuggestionList
