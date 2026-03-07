import React from 'react';
import { HiDocumentDownload, HiOutlineExternalLink } from 'react-icons/hi';
import { LINKS } from '../data/content';
import './Resume.css';

// Use PUBLIC_URL so the PDF path is correct in dev and on GitHub Pages (e.g. /anas-aktaa-portfolio/resume.pdf)
const resumePdfUrl = `${process.env.PUBLIC_URL || ''}/resume.pdf`;

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="section-title">
        <h2>Resume</h2>
        <p>Download or view my resume and profiles</p>
      </div>
      <div className="resume-actions">
        <a href={resumePdfUrl} className="btn btn-primary" download="resume.pdf">
          <HiDocumentDownload size={20} />
          Download Resume (PDF)
        </a>
        <div className="resume-links">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink size={18} />
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <HiOutlineExternalLink size={18} />
            GitHub
          </a>
          <a href="#home">Portfolio (this site)</a>
        </div>
      </div>
      <div className="resume-embed-wrapper card">
        <embed
          src={resumePdfUrl}
          type="application/pdf"
          title="Anas Aktaa Resume PDF"
          className="resume-iframe"
        />
        <p className="resume-fallback">
          If the PDF does not appear above, <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">open it in a new tab</a> or use the Download button.
        </p>
      </div>
    </section>
  );
}
