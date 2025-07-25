import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <span className="ridge">Ridge</span>
          <span className="street">Street</span>
        </Link>
      </div>

      <ul className={`navbar-nav ${isOpen ? "show" : ""}`}>
        {[
          { to: "/fix-and-flip", label: "Fix and Flip" },
          { to: "/rental-loans", label: "Rental Loans" },
          { to: "/where-we-lend", label: "Where We Lend" },
          { to: "/about-us", label: "About Us" },
          { to: "/resources", label: "Resources" },
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/get-approved"
            className="approved-button"
            onClick={() => setIsOpen(false)}
          >
            Get Approved Online
          </Link>
        </li>
      </ul>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
