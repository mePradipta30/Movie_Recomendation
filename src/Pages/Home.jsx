import React, { useEffect , useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './home.css'
import MovieList from '../Component/MovieList';
import { MdOndemandVideo } from "react-icons/md";
import AirCards from '../Component/AirCards';
import LatestMovies from '../Component/LatestMovies';
import PopularPeoples from '../Component/PopularPeople';
import Footer from '../Component/Footer';
import SubFooter from '../Component/SubFooter';



const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setShowOverlay(true);
            } else {
                setShowOverlay(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const [airingToday, setAiringToday] = useState([])

    const [nowPlaying, setNowPLaying] = useState([])

    const [popularPerson, setPopularPerson] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US&page=1")
        .then(res => res.json())
        .then(res => setPopularMovies(res.results))
    }, [])

    useEffect(() => {
     fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US&page=1`)
     .then((res) => res.json())
     .then((air) => setAiringToday(air.results))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US&page=1`)
        .then((res) => res.json())
        .then((now) => setNowPLaying(now.results))
       }, [])

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/person/popular?api_key=46478e6cf1e109cb336bc398e8239119&language=en-US&page=1`)
              .then((res) => res.json())
              .then((person) => {
                const allKnownFor = person.results.flatMap((person) => person.known_for); // Flatten known_for from all persons
                setPopularPerson(allKnownFor); // Update the state with the combined array
              })
     }, [])
    
  return (
   <>
    <div className='poster'>
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={60}
        infiniteLoop={true}        
        showStatus={false}
        >
            {
                popularMovies.map(movie => ( 
                    <Link style={{textDecoration: "none", color: "#fff"}} to={`/movie/${movie.id}`}>
                        <div className='posterImage'>
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="images" srcset="" />
                        </div>
                        <div className={`posterOverlay ${
                                showOverlay ? "show" : "hidden"
                            }`}>
                            <div className='posterOverlay_title'>
                                {movie ? movie.original_title : ''}
                            </div>
                            <div className='posterOverlay_runtime'>
                                {movie ? movie.release_date : ''}
                            </div>
                            <span className='posterOverlay_rating'>
                                {movie ? movie.vote_average : ''}
                                    <FaStar  className='star'/>
                            </span>
                            <div className='posterOverlay_desc'>
                                {movie ? movie.overview : ''}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </Carousel>
     </div>    

     <MovieList />

        <div className='separate'></div>


        <div className='airTodayPoster'>
            <h1 className='airingTitle'>Airing Tv Series Today</h1>
            <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={50}
        infiniteLoop={true}        
        showStatus={false}
        >
            {
                airingToday.map(series => (
                    <Link style={{textDecoration: "none", color: "#fff"}} to={`/series/${series.id}`}>
                        <div className='seriesPosterImage'>
                            <img src={`https://image.tmdb.org/t/p/original${series && series.backdrop_path}`} alt="series shows" srcset="" />
                        </div>
                        <div className='seriesOverlay'>
                            <div className='seriesTitle'>
                                {series ? series.original_name : ''}
                            </div>
                            <div className='seriesAirDate'>
                                {series ? series.first_air_date : ''}
                            </div>
                            <div className='seriesRating'>
                                {series ? series.vote_average : ''}
                                  <FaStar  className='star'/>
                            </div>
                            <div className='seriesLang'>
                                <h4 className='lang'>Language in 
                                    <span>
                                    {series ? series.original_language.toUpperCase() : '' }
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))
            }

          </Carousel> 
        </div>


        <div className='separate'></div>


        <div className='parent'>
            <h1 className='airingTitle'>Find More</h1>
        <div className='totalContent'>
            <aside className='sidebar'>
            <Link to="/tv/popular" style={{ textDecoration: 'none', color:"#fff"}}>
              <button className='sideBtn'>Popular Tv Series</button>
            </Link>
            <Link to="/tv/top_rated" style={{ textDecoration: 'none', color:"#fff"}}>
              <button  className='sideBtn'>Top Tv Series</button>
            </Link>
            </aside>
            <div className='nowPlaying'>
                <h1 className='play'> Now Playing <MdOndemandVideo className='videoIcon'/></h1>
                <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={40}
                infiniteLoop={true}        
                showStatus={false}
                >
                 {
                     nowPlaying.map(playing => (
                    <Link style={{textDecoration: "none", color: "#fff"}} to={`/now_playing/${playing.id}`}>
                        <div className='nowPlaying'>
                            <img src={`https://image.tmdb.org/t/p/original${playing && playing.backdrop_path}`} alt="series shows" srcset="" />
                        </div>
                        <div className='alignLeft'>
                        <div className='seriesOverlay'>
                            <div className='seriesTitle'>
                                {playing ? playing.original_title : ''}
                            </div>
                            <div className='seriesAirDate'>
                                {playing ? playing.release_date : ''}
                            </div>
                            <div className='seriesRating'>
                                {playing ? playing.vote_average : ''}
                                  <FaStar  className='star'/>
                            </div>
                            {/* <div className='posterOverlay_desc'>
                                {playing ? playing.overview.slice(0,400) + "..." : ''}
                            </div> */}
                        </div>
                        </div>
                    </Link>
                ))
            }    
                
                </Carousel>
            </div>
        </div>
        </div>

    <AirCards />

    <div className='separate'></div>

    {/* <LatestMovies /> */}

    <div className='popularPeople'>
     <h1 className='airingTitle'>Popular List's of Movies and Shows</h1>
            <Carousel
             showThumbs={false}
             autoPlay={true}
             transitionTime={50}
             infiniteLoop={true}        
             showStatus={false}
             >
               {
                popularPerson.map((person,index) => (
                    <Link key={index} style={{textDecoration: "none", color: "#fff"}} to={`/person/${person.id}`}>
                        <div className='seriesPosterImage'>
                            <img src={`https://image.tmdb.org/t/p/original${person ? person.backdrop_path : ''}`} alt="series shows" srcset="" />
                        </div>
                        <div className='popularOverlay'>
                            <div className='seriesTitle'>
                                {person ? person.title : ''}
                            </div>
                            <div className='seriesAirDate'>
                                {person ? person.release_date : ''}
                            </div>
                            <div className='seriesRating'>
                                {person ? person.vote_average : ''}
                                  <FaStar  className='star'/>
                            </div>
                            <div className='popularity'>
                               <h2>Popularity : {person ? person.popularity : ''}</h2> 
                            </div>
                            <div className='seriesLang'>
                                <h4 className='lang'>Language in 
                                    <span>
                                    {person ? person.original_language.toUpperCase() : '' }
                                    </span>
                                </h4>
                            </div>
                            <div className='posterOverlay_desc'>
                                {person ? person.overview.slice(0,400) + "...": ''}
                            </div>
                        </div>
                    </Link>
                ))
            }  
            </Carousel>
    </div>

    <PopularPeoples />

    <div className='separate'></div>

    <SubFooter />
    <div className='separate'></div>

    <Footer />
   </>
  )
}

export default Home
