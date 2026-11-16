# Patryk Mansfeld — Portfolio

Personal portfolio website for **Patryk Mansfeld**, Full-Stack Developer & DevOps, built with Vue 3 and Vite.

## Tech stack

| Layer      | Technology                                                       |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Vue 3 (`<script setup>` SFCs)                                    |
| Build tool | Vite 8                                                           |
| Language   | JavaScript (ES Modules)                                          |
| Styling    | CSS custom properties (light / dark tokens), Geist + Geist Mono  |
| Fonts      | Self-hosted via `@fontsource-variable` (no Google Fonts request) |
| Quality    | ESLint (flat config, `eslint-plugin-vue`) + Prettier             |

## Features

- **Bento grid layout** — cards of different sizes on a 4 → 2 column grid
- **Light / dark theme** — follows the system by default, toggle in the navbar, choice saved in `localStorage`
- **Bilingual** — language picker on the first visit (browser language pre-selected), choice remembered, PL / EN toggle in the navbar
- **Small touches** — cursor spotlight on cards, live Poznań clock, expandable experience list, copy-email button
- **Accessible** — real links and buttons, `aria-expanded` on toggles, `prefers-reduced-motion` respected
- **Link previews** — Open Graph / Twitter card with a 1200×630 image (`public/og-image.png`)
- **Ready for project links and CV** — buttons appear as soon as you fill in the URLs (see below)
- **Sections**: Start (hero + stack) · Projects · Career path (experience, education, certificates) · About (hobbies + contact)

## Project structure

```text
portfolio/
├── index.html                       # Meta / link previews, favicon, theme-before-paint script
├── eslint.config.js / .prettierrc.json
├── og/og-image.html                 # Source of the link-preview image
├── public/
│   ├── og-image.png                 # Link-preview image (1200×630)
│   └── cv/                          # Put CV PDFs here
├── src/
│   ├── App.vue                      # Mounts sections, scroll reveal, card spotlight
│   ├── main.js                      # Vue app entry point
│   ├── style.css                    # Design tokens (light/dark), bento grid, shared UI
│   ├── composables/
│   │   ├── useLang.js               # Content + i18n state (PL / EN)
│   │   └── useTheme.js              # Light / dark theme state
│   ├── utils/
│   │   └── scroll.js                # Smooth scroll to section + URL hash
│   └── components/
│       ├── AppIcon.vue              # Inline stroke icons
│       ├── LanguagePicker.vue       # First-visit PL / EN dialog
│       ├── NavBar.vue
│       ├── HeroSection.vue          # Intro, clock, stats, focus, links, stack
│       ├── ProjectsSection.vue
│       ├── JourneySection.vue       # Experience + education + certificates
│       ├── AboutSection.vue         # About + hobbies + contact
│       └── FooterSection.vue
├── package.json
└── vite.config.js
```

## Getting started

**Prerequisites:** Node.js 20.19+ or 22.12+ (required by Vite 8; CI uses Node 24)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint / format
npm run lint          # ESLint (also runs in CI before deploy)
npm run format        # Prettier — rewrites files
npm run format:check  # Prettier — check only
```

## Filling in links and CV

All in `src/composables/useLang.js`, top of the file:

- **Project links** — `projectLinks['01' | '02' | '03']` → `{ repo: 'https://…', demo: 'https://…' }`. Empty string hides the button.
- **CV** — copy the PDF(s) to `public/cv/` and set `cv.pl` / `cv.en` to e.g. `'cv/Patryk_Mansfeld_CV_PL.pdf'`. If only one is set, it is used for both languages. Buttons appear in the hero and contact cards.

## Link-preview image

`public/og-image.png` is rendered from `og/og-image.html` with headless Chrome — the exact command is in the comment at the top of that file. After deploying, check the preview with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Content overview

### Experience

| Period            | Role                          | Company               |
| ----------------- | ----------------------------- | --------------------- |
| 10/2025 — 01/2026 | AI Developer                  | Self-employment       |
| 04/2025 — 09/2025 | Developer                     | Alliance Technology   |
| 04/2024 — 02/2025 | Full Stack Developer / DevOps | Bright Coders'Factory |
| 06/2023 — 01/2024 | ERP Developer                 | IT.integro            |
| 04/2022 — 04/2023 | Full Stack Developer / DevOps | Capgemini             |
| 02/2022 — 04/2022 | IT Technician / Developer     | Raben Group           |

### Skills

- **Frontend** — JavaScript, Vue.js, React, TypeScript, HTML/CSS
- **Backend** — Node.js, Python, Java, PostgreSQL, REST API
- **DevOps** — Docker, CI/CD, GitHub Actions, AWS, Kubernetes
- **AI & Data** — LLM/RAG, LangChain, Machine Learning, Voice AI

### Featured projects

| #   | Title                       | Stack                              |
| --- | --------------------------- | ---------------------------------- |
| 01  | AI Assistant                | Python, LLM, RAG, JavaScript       |
| 02  | Analitix (esports coaching) | Vue.js, Node.js, Docker, CI/CD     |
| 03  | Employee Management         | React, Node.js, PostgreSQL, Docker |

## i18n and content

All UI strings and content live in `src/composables/useLang.js`. The `useLang()` composable exposes `lang` (reactive `'pl' | 'en'`), `t` (computed translations object), `toggleLang()`, `setLang()` and `langChosen`. The chosen language is stored in `localStorage` (`lang`); clear it to see the first-visit picker again. Language-independent data (`links`, `projectLinks`, `cv`, `skills`, `CAREER_START`) is exported from the same file. Switching language is instant with no page reload.

## Theming

Colors are CSS custom properties in `src/style.css`: light values on `:root`, dark overrides on `:root[data-theme='dark']`. Change `--acc` / `--acc-text` / `--on-acc` in both blocks to re-color the whole site.

## License

Private project — all rights reserved.
