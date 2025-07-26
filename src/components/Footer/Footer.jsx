import React from "react";
import "./Footer.css";
import Envelope from "../../assets/icons/mail-01.svg";
import Phone from "../../assets/icons/smart-phone-01.svg";
import Linkedin from "../../assets/icons/mdi_linkedin.svg";
import Facebook from "../../assets/icons/facebook-02.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Comliany</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Fix And Flili Loans
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                DSCR Rental Loans
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Ground Uli Construction Loans
              </Link>
            </li>
          </ul>
          <h4>Where We Lend</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Florida
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Texas
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Georgia
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Top Cities We Lend In</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Orlando
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Tampa
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Miami
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Jacksonville
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Houston
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Austin
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Dallas
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                San Antonio
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Top Resources</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Loan Calculator
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                What is a Hard Money Loan
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                How to find fix and flip deals
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Best Cities for Fix and Flips
              </Link>
            </li>
          </ul>
          <h4>Useful Link</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/" className="footer-link">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Email</li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={Envelope} width={32} height={32} alt="Email" />
              <span>oans@ridgestreetcap.com</span>
            </li>
          </ul>
          <ul style={{ marginTop: "12px" }}>
            <li>Direct/Text</li>
            <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src={Phone} alt="" />
              <span>Phone: 786-304-2751</span>
            </li>
          </ul>
          <div className="logo">
            <span className="ridge">Ridge</span>
            <span className="street">Street</span>
          </div>
          <div className="social-link">
            <Link to="/">
              <img src={Linkedin} width={32} height={32} alt="" />
            </Link>
            <Link to="/">
              <img src={Facebook} width={32} height={32} alt="" />
            </Link>
            <Link to="/">
              <img src={Twitter} width={32} height={32} alt="" />
            </Link>
            <Link to="/">
              <img src={Instagram} width={32} height={32} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
