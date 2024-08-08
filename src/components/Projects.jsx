import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import movieFlixHubImage from "../images/MoviesFlix-Hub.png";
import meetAppImage from "../images/MeetAppCaseStudy.png";
import movie from "../images/453321966_511122678039876_4012628457751247270_n.png";
import chat from "../images/Chatapp.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "MoviesFlix-Hub",
      description:
        "MoviesFlix-Hub is a React-based client-side application designed for movie enthusiasts. It offers a dynamic and user-friendly interface where users can browse and search for movies, view detailed information, and manage their favorite films. The application also includes features for updating user profiles, such as changing personal details and managing favorite movie lists. With a focus on seamless user experience and responsive design, MoviesFlix-Hub provides an engaging platform for discovering and organizing movie content.",
      image: movieFlixHubImage,
      liveUrl: "https://moviesflix-hub.netlify.app/",
      caseStudyUrl: "https://project2.com/case-study",
      githubUrl: "https://github.com/JDestefano11/MoviesFlix-Hub.git",
    },
    {
      id: 2,
      name: "Meet-App",
      description:
        "The Meet App is a web application designed to help users discover and  keep track of upcoming events. The app provides various features to enhance the user experience, such as filtering events by city, showing/hiding event details, specifying the number of events to display, offline usage capabilities, adding the app as a shortcut to the  home screen, and displaying charts to visualize event details.",
      image: meetAppImage,
      liveUrl: "https://jdestefano11.github.io/meet-app/",
      caseStudyUrl: "https://project3.com/meetapp-case-study",
      githubUrl: "https://github.com/JDestefano11/meet-app",
    },
    {
      id: 3,
      name: "MoviesFlix-Hub Api",
      description:
        "A robust backend API for managing movie-related data, built with Node.js and Express. It supports user authentication, movie management, and user favorites, utilizing JWT for secure access and MongoDB for data storage. Key features include user registration, movie retrieval, and dynamic endpoints for genres and directors. Designed with CORS and Passport for secure and flexible API access.",
      image: movie,
      liveUrl: "https://project1.com",
      caseStudyUrl: "https://project1.com/case-study",
      githubUrl: "https://github.com/JDestefano11/MoviesFlix-hub-api.git",
    },
    {
      id: 4,
      name: "Chat App",
      description:
        "A mobile chat application developed with React Native, leveraging Firebase for real-time data synchronization and user authentication. This app allows users to create accounts, join chat rooms, and send instant messages. Firebase handles user authentication, message storage, and real-time updates, ensuring seamless communication. The application features a clean, intuitive interface and robust performance on both iOS and Android platforms, providing users with a reliable and engaging messaging experience.",
      image: chat,
      liveUrl: "https://project4.com",
      caseStudyUrl: "https://project4.com/case-study",
      githubUrl: "https://github.com/JDestefano11/Chat.git",
    },
    {
      id: 5,
      name: "Project 5",
      description: "This is a brief description of Project 5.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://project5.com",
      caseStudyUrl: "https://project5.com/case-study",
      githubUrl: "https://github.com/your-username/project5",
    },
    {
      id: 6,
      name: "Project 6",
      description: "This is a brief description of Project 6.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://project6.com",
      caseStudyUrl: "https://project6.com/case-study",
      githubUrl: "https://github.com/your-username/project6",
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
                delay: project.id * 0.1,
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Site
                </a>
                {project.id === 2 ? (
                  <Link to="/moviesflix-case-study" className="project-link">
                    Case Study
                  </Link>
                ) : project.id === 3 ? (
                  <Link to="/meetapp-case-study" className="project-link">
                    Case Study
                  </Link>
                ) : (
                  <Link
                    to={`/case-study/${project.id}`}
                    className="project-link"
                  >
                    Case Study
                  </Link>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
