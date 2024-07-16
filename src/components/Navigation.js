import React from 'react';
import { BiMoviePlay } from "react-icons/bi";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Navigation = () =>{
    return(
   
            <nav className="navigation grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="logo_container">
                    <span className="logo_icon"><BiMoviePlay/></span>
                    <span className="logo_name">Pacific Movie</span>
                </div>
                <header className="header">
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="login-button-container mr-10 ml-10">
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
            </nav>

    )
}

export default Navigation