import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TbMovie } from "react-icons/tb";
import { TiStar } from "react-icons/ti";
import { FaCircleArrowDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import axios from 'axios';


const Main = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const cursorRef = useRef(null);
    // Search   
    const [searchQuery, setSearchQuery] = useState('');
    /** Cursor Pointer */
    const [showPointer, setShowPointer] = useState(false);


    const LoadMoreButtonHandler = (event) =>{
        setPage(prevPage => prevPage + 1)
        
        //Update cursor position and add smooth move down
        cursorRef.current.style.transition = `transform 0.5s ease`;
        cursorRef.current.style.transform = `translateY(${-500}px)`;

        //Hide pointer
        setShowPointer(false);
    }

    const handleSearch = async (event) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                api_key: process.env.REACT_APP_TMDB_API_KEY,
                query: searchQuery,
                },
            }); 
            setMovies([])
            setMovies([...response.data.results]);
            cursorRef.current?.scrollIntoView({behavior: 'smooth'});
            
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    }

    /* Cursor Pointer*/ 
    useEffect(() => {
        const handleScroll = (event) => {
            const newX = event.clientX;
            const newY = event.clientY;

            // update cursor set to 0px
            cursorRef.current.style.transform = `translateY(${0}px)`;

            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if user is near the bottom of the page
            if (scrollTop + windowHeight >= scrollHeight - 100) {
                setShowPointer(true);
            } else {
                setShowPointer(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /** Fetch Data from TMDB */
    useEffect(() => {
        const fetchMovies = async () => {
            try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
                params: {
                api_key: process.env.REACT_APP_TMDB_API_KEY,
                page: page,
                },
            }); 
            setMovies(prevMovies => [...prevMovies, ...response.data.results]);
            } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    fetchMovies();
    }, [page]);

  return (
    <>  
        <div ref={cursorRef} className="h-full grid grid-cols-1 lg:ml-32 lg:mr-32 md:ml-0 md:mr-0 lg:mt-10">
            <div className="pt-2 relative mx-auto text-gray-600 w-full">
                <input className="border-2 border-gray-300 bg-white h-14 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                    type="text" 
                    name="search" 
                    placeholder="Search Movies"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button 
                    onClick={handleSearch}  
                    className="absolute right-0 top-0 mt-5 mr-4">
                    <CiSearch fontSize={34} color='#ff0b0bee'/>
                </button>
            </div>
        </div>

        <div className="outlined-text lg:ml-32 lg:mr-32 md:ml-0 mt-5">
            <h2> Popular Movies </h2>
        </div>
        {movies.length > 0 ? (
                <div ref={cursorRef} id="poster-items" className="h-full grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:ml-32 lg:mr-32 md:ml-0 md:mr-0 lg:mt-5">
                    {movies.map( (movie, indx) => (
                        <Link to={`/movie/${movie.id}?#move-detail`}>
                            <div className="grow-trans mt-4 text-center" key={indx}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="w-full"
                                />
                                <h5 className="mt-2 font-bold heading-card">{movie.title}</h5>
                                <span className="span-text text-base mt-2">
                                    <span className="span-info-text">
                                        <TiStar color="#d98e00" fontSize={23} />
                                        { movie.vote_count}
                                    </span> 
                                    <span className="span-info-text">|</span>
                                    <span className="span-info-text">
                                        <TbMovie color="#e91f1f" fontSize={22}/> 
                                        { movie.release_date}
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            ):(
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            )
        }
    

        {/* Your infinite scroll content */}
        { movies.length > 0 && showPointer && (
            <div className="cursor-pointer">
                <button onClick={LoadMoreButtonHandler}>
                    <FaCircleArrowDown className="icon-load-more"/> <span>LOAD MORE</span>
                </button>
            </div>
            )
        }
    </>
  );
};

export default Main;