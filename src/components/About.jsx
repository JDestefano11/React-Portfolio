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
  FaBrain,
  FaUserFriends,
  FaUsers,
  FaPuzzlePiece,
  FaServer,
  FaClipboardList,
  FaHourglassHalf,
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
          <div className="skill-box">
            <h4>Skills</h4>
            <ul>
              <li>
                <FaBrain /> Critical Thinking
              </li>
              <li>
                <FaUserFriends /> Leadership
              </li>
              <li>
                <FaUsers /> Team Collaboration
              </li>
              <li>
                <FaPuzzlePiece /> Problem Solving
              </li>
              <li>
                <FaClipboardList /> Multi-tasking
              </li>
              <li>
                <FaHourglassHalf /> Time Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
