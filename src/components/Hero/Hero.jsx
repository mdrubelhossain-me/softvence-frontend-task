import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="content">
        <div className="left-side" data-aos="fade-up">
          <h1>Florida and Texas Hard Money Lender</h1>
          <p>
            Fast Closing Fix and Flip and Rental Loans For Your Investment
            Properties.
          </p>
          <div className="btn-section">
            <Link to="/" className="cta-button">
              <span className="cta-text">Get Approved Onlin</span>
              <span className="cta-icon-box">
                <span className="cta-icon"></span>
              </span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <p>
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
