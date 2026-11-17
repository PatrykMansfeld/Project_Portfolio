import { enPlural, plPlural } from './plural.js'

// UI strings: navigation, buttons, labels, section titles.
// Content about you (texts, projects, jobs) lives in src/content/.
export const messages = {
  pl: {
    common: {
      downloadCv: 'Pobierz CV',
    },
    nav: {
      label: 'Nawigacja główna',
      projects: 'Projekty',
      experience: 'Doświadczenie',
      about: 'O mnie',
      contact: 'Kontakt',
      menu: 'Menu',
      switchLang: 'Switch to English',
      toLight: 'Włącz jasny motyw',
      toDark: 'Włącz ciemny motyw',
    },
    hero: {
      available: 'Dostępny do pracy',
      primaryCta: 'Zobacz projekty',
      secondaryCta: 'Kontakt',
      localTime: 'czas lokalny',
      since: year => `od ${year}`,
      years: n => plPlural(n, 'rok doświadczenia', 'lata doświadczenia', 'lat doświadczenia'),
      projects: 'projektów',
      focusLabel: 'fokus',
      linksLabel: 'linki',
      stackLabel: 'stack technologiczny',
    },
    projects: {
      title: 'Wybrane projekty',
      featured: 'Wyróżniony',
      code: 'Kod',
      demo: 'Demo',
    },
    career: {
      title: 'Ścieżka zawodowa',
      experience: 'Doświadczenie',
      education: 'Edukacja',
      certificates: 'Certyfikaty',
      ongoing: 'w trakcie',
    },
    about: {
      title: 'O mnie',
      hobbiesTitle: 'Poza kodem',
    },
    contact: {
      title: 'Porozmawiajmy',
      copy: 'Kopiuj adres e-mail',
      copied: 'Skopiowano adres e-mail',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      builtWith: 'Vue 3 + Vite',
      backToTop: 'Do góry',
    },
  },

  en: {
    common: {
      downloadCv: 'Download CV',
    },
    nav: {
      label: 'Main navigation',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      switchLang: 'Przełącz na polski',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    hero: {
      available: 'Available for work',
      primaryCta: 'See projects',
      secondaryCta: 'Contact',
      localTime: 'local time',
      since: year => `since ${year}`,
      years: n => enPlural(n, 'year of experience', 'years of experience'),
      projects: 'projects',
      focusLabel: 'focus',
      linksLabel: 'links',
      stackLabel: 'tech stack',
    },
    projects: {
      title: 'Selected work',
      featured: 'Featured',
      code: 'Code',
      demo: 'Live demo',
    },
    career: {
      title: 'Career path',
      experience: 'Experience',
      education: 'Education',
      certificates: 'Certificates',
      ongoing: 'in progress',
    },
    about: {
      title: 'About',
      hobbiesTitle: 'Beyond the code',
    },
    contact: {
      title: "Let's talk",
      copy: 'Copy email address',
      copied: 'Email address copied',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Vue 3 + Vite',
      backToTop: 'Back to top',
    },
  },
}
