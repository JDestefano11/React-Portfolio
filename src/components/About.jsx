import React from "react";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaServer,
  FaDesktop,
  FaCloudDownloadAlt,
  FaGit,
} from "react-icons/fa";
import "../styles/About.css";

export const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-intro">
          <h2 className="section-title">About Me</h2>
          <p className="description">
            I'm a passionate full-stack web developer with a love for creating
            innovative and user-friendly web applications. With a strong
            background in modern technologies like React, Node.js, and MongoDB,
            I strive to deliver high-quality solutions that meet the needs of
            clients and users alike.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec tincidunt lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl eget nisl.
          </p>
          <h2 className="section-title">Interests</h2>
          <p className="description">
            Exploring new technologies, contributing to open-source projects,
            and traveling with a focus on nature exploration. I enjoy immersing
            myself in the latest tech trends, collaborating on community-driven
            software, discovering new landscapes and wildlife, and experiencing
            diverse cultures.
          </p>
          <h2 className="section-title">Goals</h2>
          <p className="description">
            Eager to join a dynamic team to work on innovative projects and grow
            as a developer. I aim to leverage my skills in technology and
            passion for open-source contributions to create impactful solutions.
            Additionally, I strive to continuously learn and adapt to new
            challenges while fostering a collaborative and inclusive work
            environment.
          </p>
        </div>
        <h3 className="skills-title">Skills</h3>
        <div className="skill-grid">
          <div className="skill-box">
            <h4>Front-end</h4>
            <ul>
              <li>
                <FaReact /> React
              </li>
              <li>
                <FaAngular /> Angular
              </li>
              <li>
                <FaJs /> JavaScript
              </li>
              <li>
                <FaHtml5 /> HTML/CSS
              </li>
              <li>
                <FaDesktop /> Responsive Design
              </li>
              <li>
                <FaCloudDownloadAlt /> API Integration
              </li>
              <li>
                <FaGit /> Git
              </li>
            </ul>
          </div>
          <div className="skill-box">
            <h4>Back-end</h4>
            <ul>
              <li>
                <FaNodeJs /> Node.js
              </li>
              <li>
                <FaDatabase /> MongoDB
              </li>
              <li>
                <FaGitAlt /> Git
              </li>
              <li>
                <FaAws /> AWS
              </li>
              <li>
                <FaServer /> RESTful API
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
