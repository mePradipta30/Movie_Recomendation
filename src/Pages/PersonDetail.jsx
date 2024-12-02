import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import './detailpage.css'

    const PersonDetail = () => {

        const [personDetailPage, setPersonDetailPage] = useState([])
        const { id } = useParams()
    
        useEffect(() => {
         getData()
         window.scrollTo(0,0)
        }, [])
    
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/person/${id}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
            .then(res => res.json())
            .then(data => setPersonDetailPage(data))
        }

  return (
    <div className="movie">
    <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${personDetailPage ? personDetailPage.profile_path : ""}`} />
    </div>
    <div className="movie__detail">
        <div className="movie__detailLeft">
            <div className="movie__posterBox">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${personDetailPage ? personDetailPage.profile_path : ""}`} />
            </div>
        </div>
        <div className="movie__detailRight">
            <div className="movie__detailRightTop">
                <div className="movie__name">{personDetailPage ? personDetailPage.name : ""}</div>
                <div className="movie__tagline">{personDetailPage ? personDetailPage.place_of_birth : ""}</div>
                <div className="movie__rating">
                    {personDetailPage ? personDetailPage.popularity: ""} <CiStar />
                </div>  
                <div className="movie__releaseDate">{personDetailPage ? "BirthDay: " + personDetailPage.birthday : ""}</div>
                <div className='bottomGap'>
                <div className='movie__releaseDate'>
                    {personDetailPage ? "Place of Birth:  " + personDetailPage.place_of_birth : ''}
                </div>
                <div className='movie__releaseDate'>
                    {personDetailPage ? "Known for:  " + personDetailPage.known_for_department : ''}
                </div>
                </div>
            </div>
            <div className="movie__detailRightBottom">
                <div className="synopsisText">Biogarphy:</div>
                <div>{personDetailPage ? personDetailPage.biography : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {
            personDetailPage && personDetailPage.homepage && <a href={personDetailPage.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage 
            </span></p></a>
        }
    </div>
    
 </div>
  )
}

export default PersonDetail
