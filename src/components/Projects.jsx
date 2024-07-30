import React from "react";
import "../styles/Projects.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a brief description of Project 1.",
      image: "project1.jpg",
      liveUrl: "https://project1.com",
      caseStudyUrl: "https://project1.com/case-study",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a brief description of Project 2.",
      image: "project2.jpg",
      liveUrl: "https://project2.com",
      caseStudyUrl: "https://project2.com/case-study",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is a brief description of Project 3.",
      image: "project3.jpg",
      liveUrl: "https://project3.com",
      caseStudyUrl: "https://project3.com/case-study",
    },
    {
      id: 4,
      name: "Project 4",
      description: "This is a brief description of Project 4.",
      image: "project4.jpg",
      liveUrl: "https://project4.com",
      caseStudyUrl: "https://project4.com/case-study",
    },
    {
      id: 5,
      name: "Project 5",
      description: "This is a brief description of Project 5.",
      image: "project5.jpg",
      liveUrl: "https://project5.com",
      caseStudyUrl: "https://project5.com/case-study",
    },
    {
      id: 6,
      name: "Project 6",
      description: "This is a brief description of Project 6.",
      image: "project6.jpg",
      liveUrl: "https://project6.com",
      caseStudyUrl: "https://project6.com/case-study",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Study
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
