import React, { useEffect, useState } from 'react'
import '../Pages/detailpage.css'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import './movielist.css'
import TvCard from './TvCard';

const TvRecommend= () => {

    const [tvReccomendPage, setTvReccomendPage] = useState([])
    const { id } = useParams()

    useEffect(() => {
     getData()
     window.scrollTo(0,0)
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then((data) => setTvReccomendPage(data.results))
    }

  return (
    <>
    <div className='MovieList'>
            <h2 className='listTitle'>Recommendations</h2>
            <div className='listCards'>
                {tvReccomendPage.length > 0 ? (
                    tvReccomendPage.map(show => (
                        <TvCard key={show.id} show={show} />
                    ))
                ) : (
                    <p>No recommendations available.</p>
                )}
            </div>
        </div>
        </>
  )
}

export default TvRecommend
