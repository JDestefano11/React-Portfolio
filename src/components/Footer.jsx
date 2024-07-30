import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Joe Destefano</h2>
          <p className="tagline">Web Developer</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Explore</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Get in Touch</h2>
          <p className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email">joe@example.com</span>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="social-icon twitter" />
            </a>
          </div>
        </div>
        <div className="footer-section resume">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="footer-resume-link"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
