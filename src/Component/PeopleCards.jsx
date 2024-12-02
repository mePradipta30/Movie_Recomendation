import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css';
import "./card.css"
import { Link } from "react-router-dom"
import { FaVoteYea } from "react-icons/fa";

const PeopleCards = ({people}) => {

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
            <Link to={`/person/${people.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards airCards">
                    <img className="cardsImage" src={`https://image.tmdb.org/t/p/original${people ? people.profile_path : ""}`} alt="poster image" />
                    <div className="cardsOverlay">
                        <div className="cardsTitle">
                            {people ? people.name : ""}
                        </div>
                        <div className="cardsRuntime">
                            {people ? people.known_for_department : ""}
                            <span className="cardsVoting">
                                {people ? people.popularity : ""}
                                    <FaVoteYea  className="vote"/>
                            </span>
                        </div>
                        {/* <div className="cardsDesc">
                            {people ? people.overview.slice(0,119) + "..." : ""}
                        </div> */}
                    </div>
                </div>
            </Link>
        }
        </>
    )
}

export default PeopleCards
