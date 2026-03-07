# Anas Aktaa – Senior Full-Stack Developer Portfolio

A professional, responsive portfolio site built with React. It is static and can be hosted on **GitHub Pages** with no backend.

## Features

- **Header / Navbar**: Logo (name), nav links, light/dark mode toggle, mobile menu
- **Home / About Me**: Bio, education, quick links (Resume, LinkedIn, GitHub)
- **Skills**: Categories with icons (languages, frameworks, cloud, CI/CD, databases, architecture)
- **Projects**: Quiz Companion, Variant, River4Beauty, Professional Lawyer, CompVoIP with tech stack and descriptions
- **System Design**: Placeholders for architecture diagrams (Quiz Companion, Variant, River4Beauty)
- **AI Assistant**: Client-side Q&A about projects, skills, system design, resume
- **Resume**: PDF embed + download, links to LinkedIn, GitHub, portfolio
- **Contact**: Form with EmailJS (configurable via env), validation, success/error messages
- **Footer**: Quick links, social links, AI assistant shortcut, copyright

## Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/Anas001989/anas-aktaa-portfolio.git
   cd anas-aktaa-portfolio
   npm install
   ```

2. **Resume PDF**  
   Put your resume file in the `public` folder as `resume.pdf`. The site will embed it and offer a download button.

3. **Contact form (EmailJS)**  
   - Create a service and template at [EmailJS](https://www.emailjs.com/).  
   - Copy `.env.example` to `.env` and set:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   Template variables supported: `from_name`, `from_email`, `subject`, `message`.

4. **Run locally**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

1. In `package.json`, ensure `homepage` matches your repo:
   ```json
   "homepage": "https://anas001989.github.io/anas-aktaa-portfolio"
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```
   This pushes the `build` output to the `gh-pages` branch. GitHub Pages will serve the site from that branch.

3. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **gh-pages** → Save.

The site will be available at `https://<username>.github.io/anas-aktaa-portfolio`.

## Tech Stack

- React 19
- Plain CSS (variables, no backend)
- EmailJS for contact form
- react-icons for skill icons
- Client-side only; suitable for GitHub Pages

## Content

- Copy and links live in `src/data/content.js`.  
- AI assistant answers are in `src/utils/aiKnowledge.js`.  
- Add project screenshots/videos by updating `src/sections/Projects.js` and placing assets in `public` or using external URLs.

## License

Private use. © Anas Aktaa.
