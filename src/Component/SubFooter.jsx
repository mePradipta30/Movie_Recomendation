import React from 'react';
import './subfooter.css';

const SubFooter = () => {
  const movie = {
    title: "The Shawshank Redemption",
    description: "A story of hope, friendship, and resilience, following the lives of two imprisoned men bonding over a number of years.",
    movieLink: "https://www.themoviedb.org/movie/278-the-shawshank-redemption",
    imdbLink: "https://www.imdb.com/title/tt0111161/",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" // Movie poster
  };

  return (
    <div className="subfooter">
      <div className="subfooter__content">
        <div className="subfooter__image-container">
          <img
            src={movie.image}
            alt={movie.title}
            className="subfooter__image"
          />
        </div>
        <div className="subfooter__text">
          <h3 className="subfooter__title">{movie.title}</h3>
          <p className="subfooter__description">{movie.description}</p>
          <div className="subfooter__links">
            <a href={movie.movieLink} target="_blank" rel="noopener noreferrer" className="subfooter__button">
              Watch Now
            </a>
            <a href={movie.imdbLink} target="_blank" rel="noopener noreferrer" className="subfooter__button subfooter__button--imdb">
              IMDb Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
