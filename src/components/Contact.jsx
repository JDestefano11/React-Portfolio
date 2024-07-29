import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-info">
          <h2 className="contact-info-title">Contact Information</h2>
          <p>Email: your@email.com</p>
          <p>Phone: 123-456-7890</p>
          <p>
            Want me on your team? I am available for hire in the Monmouth county
            area and willing to relocate anywhere. I respond within 48 business
            hours.
          </p>
          <p>Time Zone: Eastern Standard Time (EST)</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
