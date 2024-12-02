import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Component/Header'
import Home from './Pages/Home'
import MovieList from './Component/MovieList'
import TvList from './Component/TvList'
import MovieDiscover from './Component/MovieDiscover'
import TvDiscover from './Component/TvDiscover'
import TvSeriesPopular from './Component/TvSeriesPopular'
import TvRatedSeries from './Component/TvRatedSeries'
import DetailPage from './Pages/DetailPage'
import TvDetail from './Pages/TvDetail'
import PersonDetail from './Pages/PersonDetail'
import Search from './Component/Search'
import MovieWrapper from './Component/MovieWrapper'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Search />} />
        <Route path="/movies" element={<MovieWrapper />} />
        <Route path="tv/:id" element={<TvDetail />}></Route>
        <Route path="movie/:id" element={<DetailPage />}></Route>
        <Route path="person/:id" element={<PersonDetail />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='tv/:type' element={<TvList />}></Route>
        <Route path="/discover/movie" element={<MovieDiscover />} />
        <Route path="/discover/tv" element={<TvDiscover />} />
        <Route path="/tv/popular" element={<TvSeriesPopular />} />
        <Route path="/tv/top_rated" element={<TvRatedSeries />} />
        <Route path='/*' element={<h1>404 error page</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App
