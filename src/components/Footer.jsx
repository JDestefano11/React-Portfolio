import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Joe Destefano. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://github.com/JDestefano11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a href="/path-to-your-resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
