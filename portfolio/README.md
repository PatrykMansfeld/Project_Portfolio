# Patryk Mansfeld — Portfolio

Personal portfolio website for **Patryk Mansfeld**, Full-Stack Developer & DevOps, built with Vue 3 and Vite.

## Tech stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Vue 3 (`<script setup>` SFCs) |
| Build tool | Vite 8 |
| Language | JavaScript (ES Modules) |
| Styling | CSS (custom design system) |

## Features

- **Bilingual** — full Polish / English toggle via a shared `useLang` composable
- **Scroll animations** — IntersectionObserver-driven fade-in for every section
- **Single-page layout** with smooth anchor navigation
- **Sections**: Hero · About · Experience · Education · Skills · Projects · Certificates · Hobbies · Contact · Footer

## Project structure

```text
portfolio/
├── src/
│   ├── App.vue                      # Root component, mounts all sections
│   ├── main.js                      # Vue app entry point
│   ├── style.css                    # Global styles / design tokens
│   ├── composables/
│   │   └── useLang.js               # Shared i18n state (PL / EN)
│   └── components/
│       ├── NavBar.vue
│       ├── HeroSection.vue
│       ├── MarqueeBanner.vue
│       ├── AboutSection.vue
│       ├── ExperienceSection.vue
│       ├── EducationSection.vue
│       ├── SkillsSection.vue
│       ├── TechStackSection.vue
│       ├── ProjectsSection.vue
│       ├── CertificatesSection.vue
│       ├── HobbiesSection.vue
│       ├── ContactSection.vue
│       └── FooterSection.vue
├── package.json
└── vite.config.js
```

## Getting started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content overview

### Experience

| Period | Role | Company |
| ------ | ---- | ------- |
| 10/2025 — 01/2026 | AI Developer | Self-employment |
| 04/2025 — 09/2025 | Developer | Alliance Technology |
| 04/2024 — 02/2025 | Full Stack Developer / DevOps | Bright Coders'Factory |
| 06/2023 — 01/2024 | ERP Developer | IT.integro |
| 04/2022 — 04/2023 | Full Stack Developer / DevOps | Capgemini |
| 02/2022 — 04/2022 | IT Technician / Developer | Raben Group |

### Skills

- **Frontend** — JavaScript, Vue.js, React, TypeScript, HTML/CSS
- **Backend** — Node.js, Python, Java, PostgreSQL, REST API
- **DevOps** — Docker, CI/CD, GitHub Actions, AWS, Kubernetes
- **AI & Data** — LLM/RAG, LangChain, Machine Learning, Voice AI

### Featured projects

| # | Title | Stack |
| - | ----- | ----- |
| 01 | AI Assistant | Python, LLM, RAG, JavaScript |
| 02 | Analitix (esports coaching) | Vue.js, Node.js, Docker, CI/CD |
| 03 | Employee Management | React, Node.js, PostgreSQL, Docker |

## i18n

All UI strings live in `src/composables/useLang.js`. The `useLang()` composable exposes `lang` (reactive `'pl' | 'en'`), `t` (computed translations object), and `toggleLang()`. Switching language is instant with no page reload.

## License

Private project — all rights reserved.
