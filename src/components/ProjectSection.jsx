import React from 'react';
import '../App.css';

const ProjectSection = ({ title, description, link, images }) => {
  return (
    <div className="project-section">
      {images && images.length > 0 && (
        <div className={`project-images ${images.length > 1 ? 'multiple-images' : ''}`}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} ${index + 1}`}
              className={images.length > 1 ? 'project-image-small' : 'project-image'}
            />
          ))}
        </div>
      )}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
        
      </div>
    </div>
  );
};

export default ProjectSection;
