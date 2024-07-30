import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Hero.css";

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
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/348909787_1080813219556140_7304975076369353324_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XN9vGZfzsxEQ7kNvgEZNHPJ&_nc_ht=scontent-lga3-1.xx&oh=00_AYDR80SZZ7KWzt1n3aI4pfPPR08xRYPQI0SV8oWyQNU49w&oe=66AB024C"
            alt="Joe Destefano"
          />
        </div>
      </div>
    </section>
  );
};
