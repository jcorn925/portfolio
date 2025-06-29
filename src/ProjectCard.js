import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const cardStyle = {
  background: '#fff',
  borderRadius: '16px',
  border: '2px solid #2563eb',
  boxShadow: '0 6px 24px rgba(37,99,235,0.08), 0 1.5px 4px rgba(37,99,235,0.06)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '340px',
  width: '90vw',
  margin: '0 0 2rem 0',
  overflow: 'hidden',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  background: '#2563eb0d',
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1.8rem',
  borderBottom: '1px solid #e2e8f0',
  minHeight: '4rem',
  wordWrap: 'break-word',
  textAlign: 'center',
  width: '100%',
};

const ProjectCard = ({ project, onClick }) => (
  <div style={cardStyle}>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
    >
      {project.name} <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '0.5rem', fontSize: '0.875rem', flexShrink: 0 }} />
    </a>
    <div
      className="project-img"
      onClick={() => onClick(project)}
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: '#f8f9fa'
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="project-image"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
          transition: 'transform 0.3s ease'
        }}
      />
    </div>
  </div>
);

export default ProjectCard;
