import React from "react";
import "../styles/projects.css";

const ProjectCard = ({ project, visible, index }) => {
  return (
    <div
      className={`flip-card project-appear ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <span className="tag">{project.category}</span>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
        </div>

        <div className="flip-back">
          <h3>{project.title}</h3>
          {project.desc && (
            <p>
              <i>{project.desc}</i>
            </p>
          )}
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
