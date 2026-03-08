// Portfolio content and links
export const LINKS = {
  linkedin: 'https://linkedin.com/in/anas-aktaa-7abb88150',
  github: 'https://github.com/Anas001989',
  resumePdf: '/resume.pdf', // Place resume.pdf in public folder
  profilePhoto: '/profile.png', // e.g. '/profile.jpg' (put image in public folder) or full URL
};

export const BIO = `Senior Software Engineer with 10+ years experience designing and developing high-performance, distributed, and cloud-native systems using Node.js, .NET Core, AWS, and other modern technologies. Experienced leading cross-functional teams and delivering complex software systems aligned with business goals.`;

export const EDUCATION = [
  { title: 'Bachelor of Science in Information Systems Engineering', org: 'SVU University' },
  { title: 'Diploma in Information Processing', org: 'ATI Telecommunications Institute' },
  { title: 'Advanced English Language Studies', org: 'KPU University' },
];

export const SKILLS = {
  languages: [
    { name: 'C#', icon: 'csharp' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Java', icon: 'java' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Python', icon: 'python' },
  ],
  frameworks: [
    { name: 'Node.js', icon: 'node' },
    { name: 'Express.js', icon: 'express' },
    { name: 'ASP.NET Core', icon: 'dotnet' },
    { name: 'Next.js', icon: 'next' },
    { name: 'React.js', icon: 'react' },
  ],
  cloudDevOps: [
    { name: 'AWS (EC2, S3, Lambda, API Gateway)', icon: 'aws' },
    { name: 'Azure', icon: 'azure' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Terraform', icon: 'terraform' },
  ],
  cicd: [
    { name: 'GitHub Actions', icon: 'github' },
    { name: 'AWS CodePipeline', icon: 'aws' },
  ],
  databases: [
    { name: 'DynamoDB', icon: 'dynamodb' },
    { name: 'PostgreSQL', icon: 'postgres' },
    { name: 'SQL Server', icon: 'sqlserver' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
  ],
  architecture: [
    { name: 'Microservices', icon: 'micro' },
    { name: 'RESTful APIs', icon: 'api' },
    { name: 'Serverless', icon: 'serverless' },
    { name: 'Event-Driven', icon: 'event' },
    { name: 'Agile/Scrum', icon: 'agile' },
  ],
};

export const PROJECTS = [
  {
    id: 'quiz-companion',
    name: 'Quiz Companion',
    tagline: 'AI-driven quiz platform',
    tech: ['Next.js', 'React.js', 'PostgreSQL', 'Google Vertex AI', 'OpenAI', 'Supabase'],
    description: 'AI-powered quiz system supporting dynamic content and image generation, modular animation system, gamified feedback, and scalable attempt tracking.',
    demoUrl: null,
    videoUrl: null,
    embedUrl: null,
  },
  {
    id: 'variant',
    name: 'Variant',
    tagline: 'Design Automation Engine',
    tech: ['Node.js', 'React.js', 'MongoDB', 'C#', 'AWS', 'Azure'],
    description: 'Multi-tenant CAD automation platform with dynamic model generation and Forge Viewer integration.',
    demoUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=BiGdrH9wzXY',
    embedUrl: 'https://trial.variantconfigurator.com/?product=UtilityTrailer&productAuth=0&referrerUrl=https%3A%2F%2Fwww.solidcad.ca%2Fproducts%2Fsolidcad-products%2Fvariant-product-configurator%2F/',
  },
  {
    id: 'river4beauty',
    name: 'River4Beauty',
    tagline: 'E-commerce and mobile apps',
    tech: ['PHP', 'Node.js', 'React.js', 'Thunkable', 'Firebase'],
    description: 'Full-stack e-commerce platform with hybrid mobile apps (iOS/Android), real-time provider sync, promotion engine, and admin dashboard.',
    demoUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=oW5lVxFAHTE',
    embedUrl: null,
    androidUrl: 'https://play.google.com/store/apps/details?id=com.river4beauty.ca&hl=en_US',
    iosUrl: 'https://apps.apple.com/us/app/river4beauty/id6612023303',
  },
  {
    id: 'professional-lawyer',
    name: 'Professional Lawyer / المحامي المحترف',
    tagline: 'Enterprise Archiving System',
    tech: ['C#', 'Windows Forms', 'SQL Server'],
    description: 'Desktop application for lawyers with advanced document archiving, search, account and case management.',
    demoUrl: null,
    videoUrl: null,
    embedUrl: null,
  },
  {
    id: 'compvoip',
    name: 'CompVoIP',
    tagline: 'Android VOIP App',
    tech: ['Java', 'UDP', 'VOIP over Wi-Fi'],
    description: 'Mobile app for secure voice calls over Wi-Fi between connected devices without internet or service providers.',
    demoUrl: null,
    videoUrl: null,
    embedUrl: null,
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'System Design', href: '#system-design' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
