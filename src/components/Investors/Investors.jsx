import React from "react";
import "./Investors.css";
import { Link } from "react-router-dom";

import iconOne from "../../assets/icons/ad.svg";
import iconTwo from "../../assets/icons/pa.svg";
import iconThree from "../../assets/icons/sc.svg";
import arrow from "../../assets/icons/arrow-l-1.svg";

const Investors = () => {
  return (
    <div className="investors-container" data-aos="fade-up">
      <h2 className="title">Interested In Working With Us?</h2>
      <p className="sub-title">
        We work with real estate investors across the country every day. How can
        we help?
      </p>
      <div className="investors-grid">
        {/* Card 1 */}
        <div className="i-card">
          <div className="rectangle">
            <div className="icon-container">
              <img src={iconOne} alt="Advisory Icon" className="icon" />
            </div>
          </div>
          <h3>Active Deal</h3>
          <p className="card-description">
            I have an active deal and would like a Term Sheet
          </p>
          <div>
            <Link to="/" className="find-home-link">
              Find a home
              <img src={arrow} alt="Arrow" />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="i-card">
          <div className="rectangle">
            <div className="icon-container">
              <img src={iconTwo} alt="Partner Icon" className="icon" />
            </div>
          </div>
          <h3>Pre-Approval</h3>
          <p className="card-description">
            I’d like to to get pre-approved so I can find my next deal.
          </p>
          <div>
            <Link to="/" className="find-home-link">
              Find a home
              <img src={arrow} alt="Arrow" />
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="i-card">
          <div className="rectangle">
            <div className="icon-container">
              <img src={iconThree} alt="Schedule Icon" className="icon" />
            </div>
          </div>
          <h3>Schedule A Call</h3>
          <p className="card-description">I’d like to schedule a call.</p>
          <div>
            <Link to="/" className="find-home-link">
              Find a home
              <img src={arrow} alt="Arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
