import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';
import { PROJECTS } from '../data/content';
import './Projects.css';

function getVideoEmbedUrl(url) {
  if (!url) return null;
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?#/]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Selected work and side projects</p>
      </div>
      <div className="projects-list stagger">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card card">
            <div className="project-body">
              <h3>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    <HiExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.iosUrl && (
                  <a href={project.iosUrl} className="btn btn-store btn-sm" target="_blank" rel="noopener noreferrer">
                    <SiAppstore size={18} />
                    App Store
                  </a>
                )}
                {project.androidUrl && (
                  <a href={project.androidUrl} className="btn btn-store btn-sm" target="_blank" rel="noopener noreferrer">
                    <SiGoogleplay size={18} />
                    Google Play
                  </a>
                )}
              </div>
            </div>
            <div className="project-showcase">
              {project.showcase === 'video' && (
                project.videoUrl ? (
                  <iframe
                    src={getVideoEmbedUrl(project.videoUrl)}
                    title={`${project.name} - Video`}
                    className="showcase-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="showcase-placeholder">
                    <span>Video demo</span>
                  </div>
                )
              )}
              {project.showcase === 'embed' && (
                project.embedUrl ? (
                  <iframe
                    src={project.embedUrl}
                    title={`${project.name} - 3D / Design Automation`}
                    className="showcase-iframe"
                  />
                ) : (
                  <div className="showcase-placeholder">
                    <span>{project.embedNote || '3D / Embed'}</span>
                  </div>
                )
              )}
              {(project.showcase === 'screenshots' || !project.showcase) && (
                <div className="showcase-placeholder">
                  <span>Screenshots</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
