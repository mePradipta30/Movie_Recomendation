import React, { useEffect, useState } from 'react'
import './detailpage.css'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import MovieReccomend from '../Component/MovieReccomend';

const DetailPage = () => {

    const [detailPage, setDetailPage] = useState([])
    const { id } = useParams()

    useEffect(() => {
     getData()
     window.scrollTo(0,0)
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
        .then(res => res.json())
        .then(data => setDetailPage(data))
    }
    
  return (
    <>
    <div className="movie">
    <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${detailPage ? detailPage.backdrop_path : ""}`} />
    </div>
    <div className="movie__detail">
        <div className="movie__detailLeft">
            <div className="movie__posterBox">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${detailPage ? detailPage.poster_path : ""}`} />
            </div>
        </div>
        <div className="movie__detailRight">
            <div className="movie__detailRightTop">
                <div className="movie__name">{detailPage ? detailPage.original_title : ""}</div>
                <div className="movie__tagline">{detailPage ? detailPage.tagline : ""}</div>
                <div className="movie__rating">
                    {detailPage ? detailPage.vote_average: ""} <CiStar />
                    <span className="movie__voteCount">{detailPage ? "(" + detailPage.vote_count + ") votes" : ""}</span>
                </div>  
                <div className="movie__runtime">{detailPage ? detailPage.runtime + " mins" : ""}</div>
                <div className="movie__releaseDate">{detailPage ? "Release date: " + detailPage.release_date : ""}</div>
                <div className="movie__genres">
                    {
                        detailPage && detailPage.genres
                        ? 
                        detailPage.genres.map(genre => (
                            <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="movie__detailRightBottom">
                <div className="synopsisText">Description</div>
                <div>{detailPage ? detailPage.overview : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {
            detailPage && detailPage.homepage && <a href={detailPage.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage 
            </span></p></a>
        }
        {
            detailPage && detailPage.imdb_id && <a href={"https://www.imdb.com/title/" + detailPage.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb</span></p></a>
        }
    </div>
    <div className="movie__heading">Production companies</div>
    <div className="movie__production">
        {
            detailPage && detailPage.production_companies && detailPage.production_companies.map(company => (
                <>
                    {
                        company.logo_path 
                        && 
                        <span className="productionCompanyImage">
                            <img className="movie__productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                            <span>{company.name}</span>
                        </span>
                    }
                </>
            ))
        }
    </div>
    
</div>

<div>
<h3>Recommended Movies for "{detailPage ? detailPage.original_title : 'this movie'}"</h3>
   <MovieReccomend  />
</div>

</>
  )
}

export default DetailPage
