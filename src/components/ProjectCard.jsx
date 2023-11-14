import React from "react";
import "./projectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="mx-auto">
      <div>
        <a href={project.link} target="_blank" rel="noreferrer">
          <img className="card" src={project.img} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
