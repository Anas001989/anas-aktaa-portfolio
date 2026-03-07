import React from 'react';
import './SystemDesign.css';

const DIAGRAMS = [
  { id: 'quiz-companion', name: 'Quiz Companion', note: 'Microservices, event-driven, API design, DB schema' },
  { id: 'variant', name: 'Variant', note: 'Multi-tenant, Forge Viewer, cloud deployment' },
  { id: 'river4beauty', name: 'River4Beauty', note: 'E-commerce, real-time sync, cloud (Lambda, EC2, Azure, S3)' },
];

export default function SystemDesign() {
  return (
    <section id="system-design" className="section system-design-section">
      <div className="section-title">
        <h2>System Design & Architecture</h2>
        <p>Diagrams and high-level architecture for key projects</p>
      </div>
      <div className="diagrams-grid stagger">
        {DIAGRAMS.map((d) => (
          <div key={d.id} className="diagram-card card">
            <h3>{d.name}</h3>
            <p className="diagram-note">{d.note}</p>
            <div className="diagram-placeholder">
              <span>Architecture diagram</span>
              <span className="hint">Add Mermaid, image, or embed</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
