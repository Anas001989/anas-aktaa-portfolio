import React from 'react';
import { getSkillIcon } from '../utils/skillIcons';
import { SKILLS } from '../data/content';
import './Skills.css';

const CATEGORIES = [
  { key: 'languages', title: 'Programming Languages' },
  { key: 'frameworks', title: 'Frameworks & Platforms' },
  { key: 'cloudDevOps', title: 'Cloud & DevOps' },
  { key: 'cicd', title: 'CI/CD' },
  { key: 'databases', title: 'Databases' },
  { key: 'architecture', title: 'Architecture & Concepts' },
];

function SkillBadge({ name, icon }) {
  const Icon = getSkillIcon(icon);
  return (
    <span className="skill-badge">
      {Icon ? <Icon className="skill-icon" size={20} /> : <span className="skill-label">{name.slice(0, 2)}</span>}
      <span>{name}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-title">
        <h2>Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>
      <div className="skills-grid stagger">
        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="skills-category card">
            <h3>{cat.title}</h3>
            <div className="skill-badges">
              {SKILLS[cat.key].map((skill, i) => (
                <SkillBadge key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
