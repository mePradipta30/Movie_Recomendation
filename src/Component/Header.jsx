import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to="/"><img className='headerIcon' src="https://agoodmovietowatch.com/_next/static/images/agmtw_logo-600-5d0a0ee87b56f613.png" alt="" srcset="" /></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span className='line'>Top Movies</span></Link>
        <Link to="/tv/top_rated" style={{ textDecoration: "none" }}><span className='line'>Top Tv Shows</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span className='line'>Upcoming</span></Link>

        <div className="dropdown">
          <button className="dropbtn">Discover</button>
          <div className="dropdownContent">
            <Link to="/discover/movie" style={{ textDecoration: 'none' }}>
              Discover Movies
            </Link>
            <Link to="/discover/tv" style={{ textDecoration: 'none' }}>
              Discover TV
            </Link>
          </div>
        </div>
        <Link to='/watchlist' style={{textDecoration: "none"}}><span className='line'>Watchlist</span></Link>
      </div>

      <div className='headerRight'>
        <Search />
      </div>
    </div>
  )
}

export default Header
