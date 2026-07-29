# devAbraham | Developer Portfolio

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## About

Brief intro (2–3 sentences):
- Who you are (frontend developer)
- What the site is (3D portfolio)
- What it highlights (projects, experience, contact)

---

## Features

- 3D hero section with interactive desktop model
- About / Overview with resume download
- Work experience timeline
- 3D tech stack showcase
- Project cards with live demo + GitHub links
- Contact form with toast notifications
- Find Me section (email, phone, social links)
- Fully responsive design
- Smooth scroll animations (Framer Motion)

---

## Tech Stack

**Frontend**
- React, Vite, React Router
- Tailwind CSS
- Framer Motion

**3D**
- Three.js, React Three Fiber, Drei

**Other**
- Web3Forms (contact form)
- React Icons

---

## Sections

| Section    | Description                          |
|-----------|--------------------------------------|
| Hero      | Introduction + 3D computer canvas    |
| About     | Overview, services, resume button      |
| Work      | Professional experience timeline     |
| Projects  | Portfolio projects with links        |
| Tech      | Skills displayed as 3D spheres       |
| Contact   | Contact form                         |
| Find Me   | Direct contact + social profiles     |

---

## Screenshots

<!-- Add 2–4 images -->
![Hero Section](./docs/screenshots/hero.png)
![Projects Section](./docs/screenshots/projects.png)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install --legacy-peer-deps
\`\`\`

### Run locally

\`\`\`bash
npm run dev
\`\`\`

Open `http://localhost:5173`

### Build for production

\`\`\`bash
npm run build
npm run preview
\`\`\`

---

## Environment Variables

Create a `.env` file in the root:

\`\`\`env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
\`\`\`

Get your key at [web3forms.com](https://web3forms.com).

---

## Project Structure

\`\`\`
src/
├── components/       # UI sections (Hero, About, Works, etc.)
│   └── canvas/       # Three.js components
├── constants/        # Projects, experience, nav links, contact info
├── assets/           # Images and icons
├── hoc/              # Section wrappers
└── utils/            # Animations (Framer Motion)
\`\`\`

---

## Deployment

Deploy on Vercel, Netlify, or GitHub Pages.

1. Push to GitHub
2. Connect repo to your host
3. Add `VITE_WEB3FORMS_ACCESS_KEY` in environment settings
4. Deploy

**Live URL:** YOUR_LIVE_URL

---

## Contact

**Abraham Ogunwole (devAbraham)**

- Email: ogunwoleabraham21@gmail.com
- GitHub: [@Aoogunwole](https://github.com/Aoogunwole)
- LinkedIn: [Your Profile](YOUR_LINKEDIN)

---

## License

This project is open source and available under the [MIT License](LICENSE).