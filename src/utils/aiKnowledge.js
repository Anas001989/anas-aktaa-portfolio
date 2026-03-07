// Client-side knowledge base for the portfolio AI assistant
import { BIO, EDUCATION, SKILLS, PROJECTS, LINKS } from '../data/content';

const allSkillNames = [
  ...SKILLS.languages.map((s) => s.name),
  ...SKILLS.frameworks.map((s) => s.name),
  ...SKILLS.cloudDevOps.map((s) => s.name),
  ...SKILLS.cicd.map((s) => s.name),
  ...SKILLS.databases.map((s) => s.name),
  ...SKILLS.architecture.map((s) => s.name),
];

const projectSummaries = PROJECTS.map(
  (p) =>
    `${p.name}: ${p.tagline}. Tech: ${p.tech.join(', ')}. ${p.description}`
).join('\n');

const normalized = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function getReply(userInput) {
  const q = normalized(userInput);

  // Quiz Companion
  if (
    q.includes('quiz companion') ||
    q.includes('quiz companion') ||
    (q.includes('quiz') && (q.includes('project') || q.includes('tell')))
  ) {
    const p = PROJECTS.find((x) => x.id === 'quiz-companion');
    return `${p.name} is an ${p.tagline}. ${p.description} Tech stack: ${p.tech.join(', ')}.`;
  }

  // Variant
  if (
    q.includes('variant') ||
    (q.includes('design automation') && q.includes('system'))
  ) {
    const p = PROJECTS.find((x) => x.id === 'variant');
    return `${p.name} is a ${p.tagline}. ${p.description} Tech: ${p.tech.join(', ')}. System design includes multi-tenant architecture, Forge Viewer integration, and cloud deployment (AWS, Azure).`;
  }

  // River4Beauty
  if (q.includes('river') || q.includes('river4beauty') || q.includes('ecommerce')) {
    const p = PROJECTS.find((x) => x.id === 'river4beauty');
    return `${p.name}: ${p.tagline}. ${p.description} Tech: ${p.tech.join(', ')}.`;
  }

  // Tech stack / skills
  if (
    q.includes('tech stack') ||
    q.includes('technologies') ||
    q.includes('skills') ||
    q.includes('what do you use') ||
    q.includes('what technologies')
  ) {
    return `My tech stack includes: Languages: ${SKILLS.languages.map((s) => s.name).join(', ')}. Frameworks: ${SKILLS.frameworks.map((s) => s.name).join(', ')}. Cloud & DevOps: ${SKILLS.cloudDevOps.map((s) => s.name).join(', ')}. Databases: ${SKILLS.databases.map((s) => s.name).join(', ')}. Architecture: ${SKILLS.architecture.map((s) => s.name).join(', ')}.`;
  }

  // System design
  if (
    q.includes('system design') ||
    q.includes('architecture') ||
    (q.includes('variant') && q.includes('design'))
  ) {
    return `I have system design experience across several projects: Quiz Companion (microservices, event-driven, API design), Variant (multi-tenant CAD, Forge Viewer, AWS/Azure), River4Beauty (e-commerce, real-time sync, Lambda, EC2, S3). Scroll to the "System Design" section for diagrams.`;
  }

  // Resume
  if (q.includes('resume') || q.includes('cv') || q.includes('experience')) {
    return `${BIO} Education: ${EDUCATION.map((e) => `${e.title} (${e.org})`).join('; ')}. You can download my resume from the Resume section or visit LinkedIn: ${LINKS.linkedin}.`;
  }

  // About / who are you
  if (
    q.includes('who are you') ||
    q.includes('about you') ||
    q.includes('about anas') ||
    q.includes('introduce')
  ) {
    return `${BIO} I'm Anas Aktaa, a Senior Full-Stack Developer. Check the Home and Resume sections for more.`;
  }

  // Projects list
  if (q.includes('projects') || q.includes('what have you built')) {
    const list = PROJECTS.map((p) => `• ${p.name}: ${p.tagline}`).join('\n');
    return `Here are my featured projects:\n${list}\nScroll to the Projects section for details.`;
  }

  // Greeting
  if (
    /^(hi|hello|hey|howdy|hi there)\s*!?\.?$/i.test(q) ||
    (q.length < 15 && (q.includes('hi') || q.includes('hello')))
  ) {
    return `Hello! I'm the portfolio assistant for Anas Aktaa. You can ask about his projects, tech stack, system design, or resume. Try: "Tell me about Quiz Companion" or "What is your tech stack?"`;
  }

  // Fallback
  return `I can answer questions about Anas's projects (e.g. Quiz Companion, Variant, River4Beauty), tech stack, system design, and resume. Try: "Tell me about Quiz Companion", "What is your tech stack?", or "Show system design for Variant".`;
}

export { getReply, allSkillNames, projectSummaries };
