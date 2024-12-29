import React, { useState, useEffect } from 'react';
import './watchlist.css'; // Add styles for the watchlist page
import { useNavigate } from 'react-router-dom';

const WatchlistPage = () => {
    const [watchlist, setWatchlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const removeFromWatchlist = (id) => {
        const updatedWatchlist = watchlist.filter((item) => item.id !== id);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        setWatchlist(updatedWatchlist);
       // alert("Item removed from watchlist.");
    };

    const goToDetails = (item) => {
        if (item.media_type === "movie") {
            navigate(`/movie/${item.id}`);
        } else {
            navigate(`/tv/${item.id}`);
        }
    };

    return (
        <div className="watchlist-page">
            <h1>Your Watchlist</h1>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="watchlist-grid">
                    {watchlist.map((item) => (
                        <div key={item.id} className="watchlist-item">
                            <img
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt={item.title || item.name}
                                onClick={() => goToDetails(item)}
                                className="watchlist-item-image"
                            />
                            <div className="watchlist-item-info">
                                <h3>{item.title || item.name}</h3>
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromWatchlist(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchlistPage;
