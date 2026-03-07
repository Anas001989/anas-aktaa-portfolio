import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { LINKS } from '../data/content';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <span className="footer-label">Quick links</span>
          <button type="button" onClick={() => scrollTo('projects')}>
            Projects
          </button>
          <button type="button" onClick={() => scrollTo('skills')}>
            Skills
          </button>
          <button type="button" onClick={() => scrollTo('resume')}>
            Resume
          </button>
        </div>
        <div className="footer-social">
          <span className="footer-label">Connect</span>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink size={16} />
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink size={16} />
            GitHub
          </a>
        </div>
        <div className="footer-ai">
          <a href="#ai-assistant" className="footer-ai-btn">
            Ask the AI Assistant
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Anas Aktaa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
