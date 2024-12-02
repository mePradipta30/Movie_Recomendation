import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';
import "./card.css"
import { Link } from "react-router-dom"
import { FaVoteYea } from "react-icons/fa";

const Card = ({movie}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1600);
    }, [])
    
  return (
        <>
        {
            loading ? 
            <div className="cards airCards">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={1} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards airCards">
                    <img className="cardsImage" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="poster image" />
                    <div className="cardsOverlay">
                        <div className="cardsTitle">
                            {movie ? movie.original_title : ""}
                        </div>
                        <div className="cardsRuntime">
                            {movie ? movie.release_date : ""}
                            <span className="cardsVoting">
                                {movie ? movie.vote_average : ""}
                                    <FaVoteYea  className="vote"/>
                            </span>
                        </div>
                        <div className="cardsDesc">
                            {movie ? movie.overview.slice(0,119) + "..." : ""}
                        </div>
                    </div>
                </div>
            </Link>
        }
        </>
    )
}

export default Card
