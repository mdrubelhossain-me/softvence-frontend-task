import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

import map from "../../assets/icons/map.svg";

const Location = () => {
  return (
    <div className="location-section">
      <div>
        <h2 className="title">Where We Lend</h2>
        <p className="sub-title">
          Ridge Street provides hard money loans to real estate investors in 35 states.
        </p>
        <p className="sub-title">
          We focus our efforts in <span>Texas</span> and <span>Florida</span>.
        </p>
      </div>

      <div className="map-container">
        <img src={map} alt="Map showing locations" />
      </div>

      <div className="location">
        <div className="l-card texas">
          <h2>Texas</h2>
          <p>Hard Money Loans | DSCR Loans</p>
          <div>
            <Link to="/" className="view-btn">
              View All Locations
            </Link>
          </div>
        </div>

        <div className="l-card florida">
          <h2>Florida</h2>
          <p>Hard Money Loans | DSCR Loans</p>
          <div>
            <Link to="/" className="view-btn">
              View All Locations
            </Link>
          </div>
        </div>
      </div>

      <div className="btn-section">
        <Link to="/" className="cta-button">
          <span className="cta-text">View All Locations</span>
          <span className="cta-icon-box">
            <span className="cta-icon"></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Location;
