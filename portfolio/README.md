# Patryk Mansfeld — Portfolio

Personal portfolio website for **Patryk Mansfeld**, Full-Stack Developer & DevOps, built with Vue 3 and Vite.

## Tech stack

| Layer      | Technology                                                       |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Vue 3 (`<script setup>` SFCs, composables)                       |
| Build tool | Vite 8                                                           |
| Language   | JavaScript (ES Modules)                                          |
| Styling    | CSS custom properties (light / dark tokens), Geist + Geist Mono  |
| Fonts      | Self-hosted via `@fontsource-variable` (no Google Fonts request) |
| Quality    | ESLint (`eslint-plugin-vue`) + Prettier + Vitest                 |

## Features

- **Bento grid layout** — cards of different sizes on a 4 → 2 column grid
- **Light / dark theme** — follows the system by default, toggle in the navbar, choice saved in `localStorage`
- **Bilingual** — language picker on the first visit (browser language pre-selected), choice remembered, PL / EN toggle in the navbar
- **Small touches** — cursor spotlight on cards, live Poznań clock, expandable experience list, copy-email button
- **Accessible** — real links and buttons, `aria-expanded` on toggles, `prefers-reduced-motion` respected
- **Link previews** — Open Graph / Twitter card with a 1200×630 image (`public/og-image.png`)
- **Ready for project links and CV** — buttons appear as soon as you fill in the URLs
- **Sections**: Start (hero + stack) · Projects · Career path (experience, education, certificates) · About (hobbies + contact)

## Project structure

```text
portfolio/
├── index.html                  # Meta / link previews, favicon, theme-before-paint script
├── og/og-image.html            # Source of the link-preview image
├── public/
│   ├── og-image.png            # Link-preview image (1200×630)
│   └── cv/                     # Put CV PDFs here
└── src/
    ├── main.js                 # Entry: fonts, styles, mount
    ├── App.vue                 # Page layout, scroll reveal, card spotlight
    ├── content/                # ✏️ Everything about you — edit these files
    │   ├── profile.js          #    name, hero texts, about, hobbies, links, CV
    │   ├── projects.js         #    projects (+ repo / demo links)
    │   ├── career.js           #    jobs, education, certificates
    │   └── skills.js           #    tech stack card
    ├── i18n/
    │   ├── messages.js         # UI strings (buttons, labels, titles) — PL / EN
    │   ├── localize.js         # { pl, en } pairs → current language
    │   └── plural.js           # Polish / English plural forms
    ├── composables/            # useLang, useTheme, useCv, useNow, useClipboard,
    │                           # useScrollReveal, useCardSpotlight, useEventListener
    ├── utils/                  # dates, scroll, storage (safe localStorage)
    ├── styles/                 # tokens · base · layout · ui (imported by index.css)
    └── components/
        ├── layout/             # NavBar, SiteFooter, LanguagePicker
        ├── sections/           # HeroSection, ProjectsSection, CareerSection, AboutSection
        └── ui/                 # AppIcon (+ icons.js), SectionHeader, SocialLinks
```

## Getting started

**Prerequisites:** Node.js 20.19+ or 22.12+ (required by Vite 8; CI uses Node 24)

```bash
npm install          # install dependencies
npm run dev          # dev server
npm run build        # production build → dist/
npm run preview      # serve the production build

npm run lint         # ESLint
npm test             # Vitest (unit tests + content checks)
npm run format       # Prettier — rewrites files
npm run format:check # Prettier — check only
```

CI (`.github/workflows/deploy.yml`) runs lint → tests → build on every push to `main` and deploys to GitHub Pages only if all pass.

## Editing content

All content lives in `src/content/`. Text shown in both languages is written as a pair:

```js
title: { pl: 'AI Asystent', en: 'AI Assistant' },   // translated
year: '2025',                                         // same in both languages
```

- **Project links** — in `projects.js`, set `repo` / `demo` to a full `https://…` URL. Empty string hides the button.
- **CV** — copy the PDF(s) to `public/cv/` and set `cv.pl` / `cv.en` in `profile.js` to e.g. `'cv/Patryk_Mansfeld_CV_PL.pdf'`. If only one is set, it is used for both languages. Buttons appear in the hero and contact cards.
- **Icons** — `icon: 'mic'` etc. refer to names in `src/components/ui/icons.js`.

`npm test` checks the content: every `{ pl, en }` pair filled in, PL / EN UI strings in sync, icon names valid, dates in `MM/YYYY — MM/YYYY` format, links well-formed.

## i18n

- `useLang()` → `lang` (`'pl' | 'en'`), `t` (UI strings from `i18n/messages.js`), `setLang()`, `toggleLang()`, `langChosen`.
- `useLocalized(data)` → a computed copy of content with every `{ pl, en }` pair resolved to the current language.
- The chosen language is stored in `localStorage` (`lang`); clear it to see the first-visit picker again.

## Theming

Colors are CSS custom properties in `src/styles/tokens.css`: light values on `:root`, dark overrides on `:root[data-theme='dark']`. Change `--acc` / `--acc-text` / `--on-acc` in both blocks to re-color the whole site.

## Link-preview image

`public/og-image.png` is rendered from `og/og-image.html` with headless Chrome — the exact command is in the comment at the top of that file. After deploying, check the preview with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## License

Private project — all rights reserved.
