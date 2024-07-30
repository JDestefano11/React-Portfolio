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
import { motion } from "framer-motion";
import "../styles/About.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const About = () => {
  return (
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="about-container" variants={containerVariants}>
        <motion.div className="about-intro" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <p className="description">
            Hello, and welcome to my portfolio! My name is Joe Destefano, and I
            am a full-stack web developer with a passion for building innovative
            and user-friendly web applications. Through the rigorous curriculum
            of the CareerFoundry bootcamp, I gained a strong foundation in
            modern technologies like React, Node.js, and MongoDB. I strive to
            deliver high-quality solutions that meet the needs of clients and
            users alike. My development philosophy revolves around creating
            intuitive and engaging websites that provide seamless user
            experiences. Whether it's building custom web applications or
            optimizing existing ones for better performance, I believe in
            delivering scalable and reliable solutions that exceed client
            expectations.
          </p>
        </motion.div>
        <motion.div className="about-intro" variants={itemVariants}>
          <h2 className="section-title">Interests</h2>
          <p className="description">
            In my free time, I am always exploring new technologies to keep up
            with the latest industry trends. I find joy in collaborating on
            community-driven software initiatives and pushing the boundaries of
            what's possible in the digital world. Outside of the tech realm, I
            have a deep passion for traveling, especially when it involves
            nature exploration. Venturing into new landscapes and immersing
            myself in wildlife habitats allows me to find inspiration and
            appreciation for the natural world. I also cherish the opportunity
            to experience diverse cultures and traditions as I travel,
            continuously expanding my horizons and understanding of the world
            around me.
          </p>
        </motion.div>
        <motion.div className="about-intro" variants={itemVariants}>
          <h2 className="section-title">Goals</h2>
          <p className="description">
            I am eager to join a dynamic team where I can work on innovative
            projects and further develop my skills as a developer. My primary
            goal is to leverage my expertise in technology to create impactful
            solutions that make a difference. I am committed to continuously
            learning and adapting to new challenges in the ever-evolving tech
            industry. Moreover, I firmly believe in fostering a collaborative
            and inclusive work environment where diverse perspectives are valued
            and creativity can thrive. By achieving these goals, I am confident
            in my ability to contribute to the success of a team and make a
            meaningful impact on the projects I engage with.
          </p>
        </motion.div>
        <motion.h3 className="skills-title" variants={itemVariants}>
          Skills
        </motion.h3>
        <motion.div className="skill-grid" variants={containerVariants}>
          <motion.div className="skill-box" variants={itemVariants}>
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
          </motion.div>
          <motion.div className="skill-box" variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
