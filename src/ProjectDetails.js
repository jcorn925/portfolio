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
        <div key={index} className="project-detail" style={{ border: '2px solid #2563eb', borderRadius: '12px', boxShadow: '0 4px 12px rgba(37,99,235,0.1)', margin: '16px', padding: '15px', background: 'white' }}>
            <h3>{feature.name}</h3>
            <img
                src={feature.image}
                alt={feature.name}
                className="special-feature-image"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: '10px'
                }}
            />
            <p>{feature.description}</p>
        </div>
    ));

    const detailStyle = {
        border: '2px solid #2563eb',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(37,99,235,0.1)',
        margin: '16px',
        padding: '15px',
        background: 'white',
        maxWidth: '340px',
        width: '90vw',
        boxSizing: 'border-box',
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    return (
        <div className="project-details-container">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="project-details-row" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%'
            }}>
                <div className="project-detail" style={detailStyle}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} className="project-image" />
                </div>
                <div className="project-detail" style={detailStyle}>
                    <h3>Purpose</h3>
                    <p>{project.purpose}</p>
                </div>
                <div className="project-detail" style={detailStyle}>
                    <h3>Demo</h3>
                    <img src={project.demo} alt={`${project.name} Demo`} className="project-demo" />
                </div>
                <div className="project-detail" style={detailStyle}>
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





