import React, { useEffect, useState } from 'react';
import './detailpage.css';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import TvRecommend from '../Component/TvRecommend';
import { Save } from 'lucide-react';

const TvDetail = () => {
    const [tvDetailPage, setTvDetailPage] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [id]);

    const addWatchlist = () => {
        const currWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        if (!currWatchlist.some(show => show.id === tvDetailPage.id)) {
            localStorage.setItem("watchlist", JSON.stringify([...currWatchlist, tvDetailPage]));
          //  alert(`${tvDetailPage.name} has been added to your watchlist!`);
        } else {
          //  alert(`${tvDetailPage.name} is already in your watchlist!`);
        }
    };

    const getData = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US`);
            const data = await res.json();
            setTvDetailPage(data);
        } catch (error) {
            console.error("Failed to fetch TV details:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <>
            <div className="movie">
                <div className="movie__intro">
                    <img
                        className="movie__backdrop"
                        src={`https://image.tmdb.org/t/p/original${tvDetailPage?.backdrop_path || ""}`}
                        alt="Backdrop"
                    />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img
                                className="movie__poster"
                                src={`https://image.tmdb.org/t/p/original${tvDetailPage?.poster_path || ""}`}
                                alt="Poster"
                            />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{tvDetailPage?.name || ""}</div>
                            <div className="movie__tagline">{tvDetailPage?.tagline || ""}</div>
                            <div className="movie__rating">
                                {tvDetailPage?.vote_average || ""} <CiStar />
                                <span className="movie__voteCount">
                                    {tvDetailPage ? `(${tvDetailPage.vote_count}) votes` : ""}
                                </span>
                            </div>
                            <div className="movie__runtime">
                                {tvDetailPage?.episode_run_time && tvDetailPage.episode_run_time.length > 0
                                    ? `${tvDetailPage.episode_run_time.join(", ")} mins`
                                    : ""}
                            </div>
                            <div className="movie__releaseDate">
                                {`First Air Date: ${tvDetailPage?.first_air_date || ""}`}
                            </div>
                            <div className="movie__releaseDate">
                                {`Latest Air Date: ${tvDetailPage?.last_air_date || ""}`}
                            </div>
                            <div className="bottomGap">
                                <div>{`Total Episodes: ${tvDetailPage?.number_of_episodes || ""}`}</div>
                                <div>{`Total Seasons: ${tvDetailPage?.number_of_seasons || ""}`}</div>
                            </div>
                            <div className="movie__genres">
                                {tvDetailPage?.genres?.map((genre) => (
                                    <span className="movie__genre" key={genre.id}>
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                            <button className="watchlist_button" onClick={addWatchlist}>
                                <Save />
                            </button>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{tvDetailPage?.overview || ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie__links">
                    <div className="movie__heading">Useful Links</div>
                    {tvDetailPage?.homepage && (
                        <a href={tvDetailPage.homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <p>
                                <span className="movie__homeButton movie__Button">Homepage</span>
                            </p>
                        </a>
                    )}
                    {tvDetailPage?.imdb_id && (
                        <a
                            href={`https://www.imdb.com/title/${tvDetailPage.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            <p>
                                <span className="movie__imdbButton movie__Button">IMDb</span>
                            </p>
                        </a>
                    )}
                </div>
                <div className="movie__heading">Production companies</div>
                <div className="movie__production">
                    {tvDetailPage?.production_companies?.map(
                        (company) =>
                            company.logo_path && (
                                <span className="productionCompanyImage" key={company.id}>
                                    <img
                                        className="movie__productionCompany"
                                        src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                                        alt={company.name}
                                    />
                                    <span>{company.name}</span>
                                </span>
                            )
                    )}
                </div>
            </div>
            <div>
                <h3>Recommended Shows for {tvDetailPage?.name || "this show"}</h3>
                <TvRecommend />
            </div>
        </>
    );
};

export default TvDetail;
