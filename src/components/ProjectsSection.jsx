import React from 'react';
import textHumanizer from '../assets/Ai_text_humanizer.png';
import BgRemover from '../assets/BgRemover.png';
import QrGenerator from '../assets/QrGenerator.png';

const ProjectCard = ({ title, description, technologies, imageUrl, liveDemo, sourceCode }) => {
  return (
    <div className="card project-card h-100">
      <img src={imageUrl} className="card-img-top project-image" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-light text-dark me-1 mb-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between gap-2 mt-auto">
          {liveDemo && (
            <a
              href={liveDemo}
              className="btn btn-outline-primary btn-sm flex-grow-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              className="btn btn-outline-dark btn-sm flex-grow-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Text Humanizer',
      description: 'Transform AI-generated text into natural, human-like content',
      technologies: ['React', 'Vite', 'Node.js', 'CSS'],
      imageUrl: textHumanizer,
      liveDemo: 'https://anuragggggggggggg.github.io/ai-text-humanizer/',
      sourceCode: 'https://github.com/ANURAGGGGGGGGGGGG/ai-text-humanizer',
    },
    {
      title: 'Image Background Remover',
      description: 'Remove image backgrounds using AI-powered API integration',
      technologies: ['React', 'CSS', 'API'],
      imageUrl: BgRemover,
      liveDemo: 'https://anuragggggggggggg.github.io/imageBgRemover/',
      sourceCode: 'https://github.com/ANURAGGGGGGGGGGGG/imageBgRemover',
    },
    {
      title: 'QR Code Generator',
      description: 'Generate customizable QR codes from user input',
      technologies: ['React', 'CSS'],
      imageUrl: QrGenerator,
      liveDemo: 'https://anuragggggggggggg.github.io/qr-code-generator/',
      sourceCode: 'https://github.com/ANURAGGGGGGGGGGGG/qr-code-generator',
    },
  ];

  return (
    <section id="projects" className="projects-section py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-heading text-center mb-5">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                liveDemo={project.liveDemo}
                sourceCode={project.sourceCode}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a
            href="https://github.com/ANURAGGGGGGGGGGGG?tab=repositories"
            className="btn btn-primary px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
