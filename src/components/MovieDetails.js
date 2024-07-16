import React, { useState, useEffect } from 'react';
import { TbMovie } from "react-icons/tb";
import { TiStar } from "react-icons/ti";
import { FiDollarSign } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });

        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div id="movie-details" className="h-full grid grid-cols-2 lg:ml-32 lg:mr-32 md:ml-0 md:mr-0 lg:mt-16">
      <div className="poster-image text-center">
          <img 
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
              alt={movie.title} 
              className="w-full"
          />
      </div>
      <div>
        <div className="movie-details-title mb-3">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
        <div className="movie-details-extra-info">
          <p> 
            <TiStar color="#d98e00" fontSize={23} /> 
            <span className="ml-3"> Genres: {movie.genres.map(genre => genre.name).join(', ')} </span>
          </p>
          <p>
            <TbMovie color="#e91f1f" fontSize={22}/> 
            <span className="ml-3"> Release Date: {movie.release_date}</span>
          </p>
          <p>
            <FiDollarSign color="#28f527" fontSize={22}/> 
            <span className="ml-3"> Revenue: ${movie.revenue}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;