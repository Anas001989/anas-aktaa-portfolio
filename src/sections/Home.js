import React from 'react';
import { HiDocumentDownload, HiOutlineExternalLink } from 'react-icons/hi';
import { BIO, EDUCATION, LINKS } from '../data/content';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-grid stagger">
        <div className="home-intro">
          <h1 className="home-title">
            Hi, I'm <span className="accent">Anas Aktaa</span>
          </h1>
          <p className="home-subtitle">Senior Full-Stack Developer</p>
          <p className="home-bio">{BIO}</p>
          <div className="home-links">
            <a href={LINKS.resumePdf} className="btn btn-primary" download>
              <HiDocumentDownload size={20} />
              Resume
            </a>
            <a href={LINKS.linkedin} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <HiOutlineExternalLink size={18} />
              LinkedIn
            </a>
            <a href={LINKS.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <HiOutlineExternalLink size={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className="home-side">
          <div className="home-photo-placeholder">
            {LINKS.profilePhoto ? (
              <img
                src={LINKS.profilePhoto.startsWith('http') ? LINKS.profilePhoto : `${process.env.PUBLIC_URL || ''}${LINKS.profilePhoto}`}
                alt="Anas Aktaa"
                className="home-photo-img"
              />
            ) : (
              <span className="photo-text">Photo</span>
            )}
          </div>
          <div className="home-education card">
            <h3>Education</h3>
            <ul>
              {EDUCATION.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}</strong>
                  <span>{item.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
