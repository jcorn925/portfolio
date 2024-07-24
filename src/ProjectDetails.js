import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectDetails = ({ project, onClose }) => {
    if (!project) return null;

    const techStackItems = project.techStack.map((tech, index) => (
        <li key={index} className="tech-stack-item">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> {tech}
        </li>
    ));

    const specialFeatures = project.specialFeatures.map((feature, index) => (
        <div key={index} className="project-detail">
            <h3>{feature.name}</h3>
            <img src={feature.image} alt={feature.name} className="special-feature-image" />
            <p>{feature.description}</p>
        </div>
    ));

    return (
        <div className="project-details-container">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="project-details-row">
                <div className="project-detail">
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className="project-detail">
                    <h3>Purpose</h3>
                    <p>{project.purpose}</p>
                </div>
                <div className="project-detail">
                    <h3>Demo</h3>
                    <img src={project.demo} alt={`${project.name} Demo`} className="project-demo" />
                </div>
                <div className="project-detail">
                    <h3>Tech Stack</h3>
                    <ul>
                        {techStackItems}
                    </ul>
                </div>
                {specialFeatures}
            </div>
        </div>
    );
};

export default ProjectDetails;





