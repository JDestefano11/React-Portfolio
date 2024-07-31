import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaLaptopCode, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setActiveSection(location.state.scrollTo);
    }
  }, [location]);

  const isActive = (section) => activeSection === section;

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
              <Link
                to="/"
                state={{ scrollTo: "home" }}
                onClick={toggleMenu}
                className={isActive("home") ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "about" }}
                onClick={toggleMenu}
                className={isActive("about") ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                onClick={toggleMenu}
                className={isActive("projects") ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "contact" }}
                onClick={toggleMenu}
                className={isActive("contact") ? "active" : ""}
              >
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
