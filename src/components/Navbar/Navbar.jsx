import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="ridge">Ridge</span>
          <span className="street">Street</span>
        </Link>
      </div>

      <ul className={`navbar-nav ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/fix-and-flip" className="nav-link">
            Fix and Flip
          </Link>
        </li>
        <li>
          <Link to="/rental-loans" className="nav-link">
            Rental Loans
          </Link>
        </li>
        <li>
          <Link to="/where-we-lend" className="nav-link">
            Where We Lend
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/get-approved" className="approved-button">
            Get Approved Online
          </Link>
        </li>
      </ul>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <span>&#9776;</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
