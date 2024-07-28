import React, { useState } from "react";
import "../styles/Header.css";
import { FaLaptopCode, FaBars, FaTimes, FaDownload } from "react-icons/fa";

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
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
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
