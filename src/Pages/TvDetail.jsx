import React, { useEffect, useState } from 'react'
import './detailpage.css'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import TvRecommend from '../Component/TvRecommend';

    const TvDetail = () => {

        const [tvDetailPage, setTvDetailPage] = useState([])
        const { id } = useParams()
    
        useEffect(() => {
         getData()
         window.scrollTo(0,0)
        }, [id])
    
        const getData = () => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`)
            .then(res => res.json())
            .then(data => setTvDetailPage(data))
        }

  return (
    <>
    <div className="movie">
    <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${tvDetailPage ? tvDetailPage.backdrop_path : ""}`} />
    </div>
    <div className="movie__detail">
        <div className="movie__detailLeft">
            <div className="movie__posterBox">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${tvDetailPage ? tvDetailPage.poster_path : ""}`} />
            </div>
        </div>
        <div className="movie__detailRight">
            <div className="movie__detailRightTop">
                <div className="movie__name">{tvDetailPage ? tvDetailPage.name : ""}</div>
                <div className="movie__tagline">{tvDetailPage ? tvDetailPage.tagline : ""}</div>
                <div className="movie__rating">
                    {tvDetailPage ? tvDetailPage.vote_average: ""} <CiStar />
                    <span className="movie__voteCount">{tvDetailPage ? "(" + tvDetailPage.vote_count + ") votes" : ""}</span>
                </div>  
                <div className="movie__runtime">{tvDetailPage ? tvDetailPage.episode_run_time + " mins" : ""}</div>
                <div className="movie__releaseDate">{tvDetailPage ? "Release date: " + tvDetailPage.first_air_date : ""}</div>
                <div className="movie__releaseDate">{tvDetailPage ? " Latest Release date: " + tvDetailPage.last_air_date : ""}</div>
                <div className='bottomGap'>
                <div className='movie__releaseDate'>
                    {tvDetailPage ? "Total Episodes:  " + tvDetailPage.number_of_episodes : ''}
                </div>
                <div className='movie__releaseDate'>
                    {tvDetailPage ? "Total Seasons:  " + tvDetailPage.number_of_seasons : ''}
                </div>
                </div>
                {/* <div className='movie__releaseDate'>
                    {tvDetailPage ? "Language used:  " + tvDetailPage.english_name : ''}
                </div> */}
                <div className="movie__genres">
                    {
                        tvDetailPage && tvDetailPage.genres
                        ? 
                        tvDetailPage.genres.map(genre => (
                            <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="movie__detailRightBottom">
                <div className="synopsisText">Description</div>
                <div>{tvDetailPage ? tvDetailPage.overview : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {
            tvDetailPage && tvDetailPage.homepage && <a href={tvDetailPage.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage 
            </span></p></a>
        }
        {
            tvDetailPage && tvDetailPage.imdb_id && <a href={"https://www.imdb.com/title/" + tvDetailPage.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb</span></p></a>
        }
    </div>
    <div className="movie__heading">Production companies</div>
    <div className="movie__production">
        {
            tvDetailPage && tvDetailPage.production_companies && tvDetailPage.production_companies.map(company => (
                <>
                    {
                        company.logo_path 
                        && 
                        <span className="productionCompanyImage">
                            <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                            <span>{company.name}</span>
                        </span>
                    }
                </>
            ))
        }
    </div>
 </div>

 <div>
<h3>Recommended Movies for {tvDetailPage ? tvDetailPage.original_title || tvDetailPage.name : 'this movie'}</h3>
   <TvRecommend  />
</div>
 </>
  )
}

export default TvDetail
