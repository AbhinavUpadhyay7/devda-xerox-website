import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUserTie,
  FaStore
} from "react-icons/fa";
import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi";

import "./../styles/navbar.css";
import logo from "../images/Logo1.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (

    <nav className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <div className="logo-section">

          <Link to="/" className="logo">

  <img
    src={logo}
    alt="Devda Xerox Logo"
    className="logo-img"
  />

  <div className="logo-text">

    <h2>
      Devda <span>Xerox</span>
    </h2>

    <p>
      Print with Quality, Leave an Impression
    </p>

  </div>

</Link>

        </div>

        {/* Navigation */}

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Buttons */}

        <div className="phone-buttons">

          <a
            href="tel:9892661010"
            className="call-btn owner-btn"
          >
            <FaUserTie />
            Owner
          </a>

          <a
            href="tel:8433177003"
            className="call-btn shop-btn"
          >
            <FaStore />
            Shop
          </a>

        </div>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

      </div>

    </nav>

  );

}

export default Navbar;