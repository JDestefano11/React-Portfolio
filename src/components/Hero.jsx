import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Hero.css";
import joeImage from '../images/Joe.png';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="name">
            <ReactTypingEffect
              text={["Joe Destefano"]}
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
              cursorRenderer={(cursor) => (
                <span className="cursor">{cursor}</span>
              )}
              displayTextRenderer={(text, i) => (
                <span className="typed-text">
                  {text.split("").map((char, i) => (
                    <span
                      key={i}
                      className={i < 3 ? "white-text" : "orange-text"}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
            />
          </h1>
          <h2 className="tagline">Full Stack Web Developer</h2>
          <p className="bio">
            Passionate about creating innovative web solutions that make a
            difference. Specializing in modern frameworks and clean, efficient
            code.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon twitter" />
            </a>
          </div>
          <div className="cta-buttons">
            <a href="./Contact" className="cta-button contact">
              Get in Touch
            </a>
            <a
              href="./Projects"
              className="cta-button projects"
              style={{
                backgroundColor: "#fff",
                color: "#ff8c00",
                border: "2px solid #ff8c00",
              }}
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={joeImage}
            alt="Joe Destefano"
          />
        </div>
      </div>
    </section>
  );
};
