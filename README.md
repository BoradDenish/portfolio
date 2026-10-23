# Denish Borad — Python Backend Developer & Systems Engineer

> High-performance developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion, and Lucide React. Engineered for speed, responsive accessibility, and deep architectural case studies.

[![Live Demo](https://img.shields.io/badge/Demo-denish--borad.vercel.app-cyan?style=flat&logo=vercel)](https://denish-borad.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🚀 Key Highlights

- **Restrained Dark Visual Theme**: Built with deep charcoal and slate palettes, electric cyan accents, and clear visual hierarchy.
- **Production Architecture Case Studies**: Dedicated deep dive pages (`/projects/:slug`) for 10+ production systems featuring system architecture diagrams, problem statements, verified benchmarks, and technical challenges.
- **Minimalist Terminal Visual Component**: Hero code snippet demonstrating real-world FastAPI async route handlers, connection pooling, and non-blocking Celery dispatching.
- **Type-Safe Modular Architecture**: Clean separation of data models, reusable UI primitives, layout structures, and sections.
- **Client-Side SPA Routing with Vercel Rewrites**: Direct URL support for case studies with clean fallback handling and optimized bundle chunking.
- **Accessible & Responsive**: Keyboard operable, high contrast, WCAG compliant, reduced-motion preference support, and tested across mobile (320px), tablet, and desktop viewports.

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Language**: TypeScript (strict mode)
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation**: Motion (`motion/react`)
- **Icons**: Lucide React
- **Routing**: React Router 7 (`react-router-dom`)
- **Deployment Target**: Vercel

---

## 📁 Project Architecture

```
src/
├── types/                 # TypeScript interfaces (Project, Experience, Skill, etc.)
├── data/                  # Single source of truth for technical data
│   ├── personal.ts        # Bio, stats, socials, and contact metadata
│   ├── projects.ts        # 10 production projects with architectures and metrics
│   ├── skills.ts          # Categorized engineering competencies
│   ├── experience.ts      # Career history and production achievements
│   └── education.ts       # Formal degrees and certifications
├── components/
│   ├── layout/            # Navbar, Footer, ScrollToTop
│   ├── ui/                # Button, Badge, SectionHeading, TerminalSnippet, ArchitectureDiagram, ProjectCard
│   └── shared/            # BackgroundGrid with subtle radial glow
├── sections/              # Hero, About, Skills, Experience, Projects, Education, Contact
├── pages/                 # HomePage, ProjectDetailPage, NotFoundPage
├── index.css              # Tailwind v4 import & theme root
├── App.tsx                # Client-side router configuration & lazy loading
└── main.tsx               # DOM root mount
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (TypeScript check + Vite bundle)
npm run build

# 4. Preview production build locally
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🌐 Production Deployment (Vercel)

The repository includes a production-ready `vercel.json` configured with:
- Client-side SPA route rewrites (`/projects/:slug` -> `/index.html`)
- Immutable asset caching headers (`/assets/*`)
- Content-type headers for `sitemap.xml` and `robots.txt`
- Strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)

---

## 📬 Contact & Links

- **Production URL**: [https://denish-borad.vercel.app/](https://denish-borad.vercel.app/)
- **Email**: [danishpatel5106@gmail.com](mailto:danishpatel5106@gmail.com)
- **LinkedIn**: [https://linkedin.com/in/denish-borad-5249b1250](https://linkedin.com/in/denish-borad-5249b1250)
- **GitHub**: [https://github.com/BoradDenish](https://github.com/BoradDenish)
