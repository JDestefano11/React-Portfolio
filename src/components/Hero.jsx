import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <ReactTypingEffect
              text={["Joe Destefano"]}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 style={{ fontSize: "24px" }}>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={
                            i < 3 ? { color: "white" } : { color: "#ff8c00" }
                          }
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </h1>
          <h1
            className="tagline"
            style={{ fontSize: "3rem", marginTop: "-10px" }}
          >
            Full Stack Web Developer
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            minus minima eos, officiis amet, laborum pariatur vero odio
            obcaecati mollitia quia, accusamus rerum omnis assumenda? Ipsa
            voluptates repudiandae perferendis odio.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <div className="cta-buttons">
            <a href="./Contact" className="cta-button">
              Get in Touch
            </a>
            <a href="./Projects" className="cta-button">
              Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/348909787_1080813219556140_7304975076369353324_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XN9vGZfzsxEQ7kNvgEZNHPJ&_nc_ht=scontent-lga3-1.xx&oh=00_AYA-gpfroYOlPBgEUBtGvT5Q9S59oMzNOYLO31A6t_VGOQ&oe=66A9B0CC"
            alt="Joe Destefano"
          />
        </div>
      </div>
    </section>
  );
};
