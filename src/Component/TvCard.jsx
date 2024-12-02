import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';
import "./card.css"
import { Link } from "react-router-dom"
import { FaVoteYea } from "react-icons/fa";

const TvCard = ({show}) => {
    // console.log("Show data in TvCard:", show);

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
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            : show ? (
            <Link to={`/tv/${show.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards airCards">
                    <img className="cardsImage" src={`https://image.tmdb.org/t/p/original${show ? show.poster_path : ""}`} alt="poster image" />
                    <div className="cardsOverlay">
                        <div className="cardsTitle">
                        {show ? show.original_title || show.name : ""}
                        </div>
                        <div className="cardsRuntime">
                            {show ? show.release_date : ""}
                            <span className="cardsVoting">
                                {show ? show.vote_average : ""}
                                    <FaVoteYea  className="vote"/>
                            </span>
                        </div>
                        <div className="cardsDesc">
                            {show ? show.overview.slice(0,119) + "..." : ""}
                        </div>
                    </div>
                </div>
            </Link>
            ) : (
                <div className="cards airCards">
                    <p>Show data unavailable.</p>
                </div>
             )}
        </>
    )
}

export default TvCard
