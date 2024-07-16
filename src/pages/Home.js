import React from 'react'
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../styles/app.css';
import '../styles/navigation.css';
import '../styles/banner.css';
import '../styles/footer.css';
import '../styles/newsletter.css';


const Home = () =>{
    return(
        <>
            <Navigation/>
            <Banner/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home;