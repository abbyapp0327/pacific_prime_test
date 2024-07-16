import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../styles/navigation.css';
import '../styles/banner.css';
import '../styles/footer.css';
import '../styles/newsletter.css';
import '../styles/movie.css';
import MovieDetail from '../components/MovieDetails';

const Movie = ()=>{
    return(
        <>
            <Navigation/>
            <Banner/>
            <MovieDetail/>
            <Footer/>
        </>
    )
}

export default Movie;