import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import movieFlixHubImage from "../images/MoviesFlix-Hub.png";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a brief description of Project 1.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://project1.com",
      caseStudyUrl: "https://project1.com/case-study",
      githubUrl: "https://github.com/your-username/project1",
    },
    {
      id: 2,
      name: "MoviesFlix-Hub",
      description:
        "MoviesFlix-Hub is a React-based client-side application for movie enthusiasts. It allows users to browse, search, and manage their favorite movies, as well as update their profile information.",
      image: movieFlixHubImage,
      liveUrl: "https://moviesflix-hub.netlify.app/",
      caseStudyUrl: "https://project2.com/case-study",
      githubUrl: "https://github.com/JDestefano11/MoviesFlix-Hub.git",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is a brief description of Project 3.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://project3.com",
      caseStudyUrl: "https://project3.com/case-study",
      githubUrl: "https://github.com/your-username/project3",
    },
    {
      id: 4,
      name: "Project 4",
      description: "This is a brief description of Project 4.",
      image: "https://placehold.co/600x400",
      liveUrl: "https://project4.com",
      caseStudyUrl: "https://project4.com/case-study",
      githubUrl: "https://github.com/your-username/project4",
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
    <div className="projects-section">
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
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Case Study
                </a>
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
