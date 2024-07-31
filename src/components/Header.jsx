import React, { useState } from "react";
import "../styles/Header.css";
import { FaLaptopCode, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <FaLaptopCode className="icon" />
          <h1>Portfolio</h1>
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/" state={{ scrollTo: "home" }} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "about" }} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "contact" }} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/path/to/your/resume.pdf"
                download="JoeDestefanoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <FaDownload /> Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};