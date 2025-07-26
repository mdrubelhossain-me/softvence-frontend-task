import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="rgs-container">
      <div className="content">
        <div className="left-side" data-aos="fade-up">
          <h1>Ready To Get Started</h1>
          <p>
            With Ridge Street, obtaining a private mortgage loan is easier than
            you think! You can get pre-approved online and a Term Sheet that
            Meet’s your needs will be sent to you within the hour.
          </p>
          <div className="btn-section">
            <Link to="/" className="cta-button">
              <span className="cta-text">Get Pre-Approved Online</span>
              <span className="cta-icon-box">
                <span className="cta-icon"></span>
              </span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
