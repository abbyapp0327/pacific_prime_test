import React from 'react';
import { BiMoviePlay } from "react-icons/bi";
import NewsletterForm from './Newsletter';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
                <div className="logo_container">
                    <span className="logo_icon"><BiMoviePlay/></span>
                    <span className="logo_name">Pacific Movie</span>
                </div>
                <p className="footer-logo-label">This is sample website for pacific prime assestment</p>
          </div>
          <div className="footer-links">
            <NewsletterForm/>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Pacific Prime Test Exam. All rights reserved.</p>
        </div>
      </footer>
    );
};
  
export default Footer;