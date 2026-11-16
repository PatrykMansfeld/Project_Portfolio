import { ref, computed, watchEffect } from 'vue'

const STORAGE_KEY = 'lang'

function readStoredLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'pl' || value === 'en' ? value : null
  } catch {
    return null
  }
}

// Browser's first preferred language: Polish → 'pl', anything else → 'en'.
const suggestedLang = (navigator.languages?.[0] || navigator.language || 'pl')
  .toLowerCase()
  .startsWith('pl')
  ? 'pl'
  : 'en'

const storedLang = readStoredLang()
const lang = ref(storedLang ?? suggestedLang)
// false until the visitor picks a language (LanguagePicker shows meanwhile)
const langChosen = ref(storedLang !== null)

watchEffect(() => {
  document.documentElement.lang = lang.value
})

function setLang(value) {
  lang.value = value
  langChosen.value = true
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // storage blocked — choice still applies for this visit
  }
}

export function useLang() {
  const t = computed(() => translations[lang.value])
  function toggleLang() {
    setLang(lang.value === 'pl' ? 'en' : 'pl')
  }
  return { lang, t, toggleLang, setLang, langChosen, suggestedLang }
}

// Polish plural: 1 rok, 2–4 lata, 5+ lat (12–14 also "many")
function plPlural(n, one, few, many) {
  if (n === 1) return one
  const d = n % 10
  const dd = n % 100
  return d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? few : many
}
const enPlural = (n, one, many) => (n === 1 ? one : many)

// ── Language-independent content ──

export const CAREER_START = 2022

export const links = {
  github: 'https://github.com/patrykmansfeld',
  linkedin: 'https://www.linkedin.com/in/patrykmansfeld',
  email: 'patryk.mansfeld@gmail.com',
}

// Project links — paste full URLs here. Empty string = button hidden.
// Keys match the project `num` in the translations below.
export const projectLinks = {
  '01': { repo: '', demo: '' },
  '02': { repo: '', demo: '' },
  '03': { repo: '', demo: '' },
}

// CV — put the PDF(s) in portfolio/public/cv/ and set the path here,
// e.g. 'cv/Patryk_Mansfeld_CV_PL.pdf'. Empty string = button hidden.
// If only one language is filled in, it is used for both.
export const cv = {
  pl: '',
  en: '',
}

export function cvUrl(language) {
  const file = cv[language] || cv.pl || cv.en
  return file ? import.meta.env.BASE_URL + file : null
}

export const skills = [
  { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'HTML / CSS'] },
  { label: 'Backend', items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'REST API'] },
  { label: 'DevOps', items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS', 'Kubernetes'] },
  { label: 'AI & Data', items: ['LLM / RAG', 'LangChain', 'Machine Learning', 'Voice AI'] },
]

const certs = [{ title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' }]

// ── Translations ──

const translations = {
  pl: {
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
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      tagline:
        'Tworzę aplikacje webowe i mobilne, wdrażam rozwiązania DevOps i integruję modele AI w skalowalnych systemach.',
      primaryCta: 'Zobacz projekty',
      secondaryCta: 'Kontakt',
      cv: 'Pobierz CV',
      location: 'Poznań, PL',
      localTime: 'czas lokalny',
      since: year => `od ${year}`,
      years: n => plPlural(n, 'rok doświadczenia', 'lata doświadczenia', 'lat doświadczenia'),
      projects: 'projektów',
      focusLabel: 'fokus',
      focusTitle: 'Agenty AI i lokalne modele LLM',
      focusSub: 'MSc AI · Voice AI',
      linksLabel: 'linki',
      stackLabel: 'stack technologiczny',
    },
    projects: {
      title: 'Wybrane projekty',
      featured: 'Wyróżniony',
      code: 'Kod',
      demo: 'Demo',
      items: [
        {
          num: '01',
          year: '2025',
          icon: 'mic',
          title: 'AI Asystent',
          tagline: 'Głos, który myśli i działa za Ciebie.',
          description:
            'Głosowy asystent AI do autonomicznego zarządzania aplikacjami (mail, zadania) z lokalnymi modelami LLM i architekturą agentową.',
          tags: ['Python', 'LLM', 'RAG', 'JavaScript'],
          highlights: [
            'Integracja lokalnych modeli LLM z interfejsem głosowym',
            'Autonomiczne sterowanie aplikacjami przez agenta AI',
            'Architektura agentowa z proaktywnym proponowaniem działań',
          ],
        },
        {
          num: '02',
          year: '2024',
          icon: 'activity',
          title: 'Analitix',
          tagline: 'Coaching e-sportowy w czasie rzeczywistym.',
          description:
            'Platforma dla trenerów e-sportowych do zarządzania treningami i analizy wyników graczy w czasie rzeczywistym.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
        },
        {
          num: '03',
          year: '2024',
          icon: 'clock',
          title: 'Zarządzanie Pracownikami',
          tagline: 'Czas pracy pod pełną kontrolą.',
          description:
            'Wieloplatformowa aplikacja dla budownictwa z rejestracją czasu pracy z weryfikacją GPS i monitoringiem zespołów.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        },
      ],
    },
    journey: {
      title: 'Ścieżka zawodowa',
      experience: 'Doświadczenie',
      education: 'Edukacja',
      certificates: 'Certyfikaty',
      ongoing: 'w trakcie',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Samozatrudnienie',
          description:
            'Stworzenie wirtualnego asystenta AI z interfejsem głosowym do zarządzania aplikacjami (mail, zadania). Implementacja lokalnych modeli LLM z architekturą agentową i proaktywnym proponowaniem działań.',
          tech: ['Python', 'LLM', 'RAG', 'Agents', 'Voice AI'],
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          description:
            'Projektowanie i wdrażanie aplikacji biznesowych wspierających kluczowe procesy firmy. Współpraca z wieloma zespołami przy implementacji nowych funkcji i modyfikacji istniejących systemów.',
          tech: ['JavaScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: "Bright Coders'Factory",
          description:
            "Tworzenie i utrzymanie aplikacji webowych, desktopowych i mobilnych. Prowadzenie zespołu 4 programistów, implementacja pipeline'ów CI/CD (Jenkins, GitHub Actions) i konteneryzacja z Dockerem.",
          tech: ['Vue.js', 'Node.js', 'Docker', 'Jenkins', 'CI/CD'],
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          description:
            'Projektowanie i customizacja rozwiązań dla Microsoft Dynamics 365 Business Central. Wdrażanie integracji systemowych i dopasowanych rozwiązań biznesowych.',
          tech: ['Business Central', 'AL', 'Dynamics 365'],
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          description:
            'Projektowanie i rozwój skalowalnych aplikacji webowych i mobilnych. Implementacja i utrzymanie procesów CI/CD oraz konteneryzacja aplikacji z Dockerem.',
          tech: ['React', 'Java', 'Docker', 'AWS', 'CI/CD'],
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          description:
            'Konfiguracja i utrzymanie systemów IT. Tworzenie oprogramowania automatyzującego procesy firmowe.',
          tech: ['Python', 'PowerShell', 'IT Support'],
        },
      ],
      schools: [
        {
          date: '10/2024 — 06/2026',
          title: 'Informatyka — Magister',
          school: 'Collegium Da Vinci',
          spec: 'AI / ML',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Informatyka — Inżynier',
          school: 'Collegium Da Vinci',
          spec: 'Web & Mobile',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Informatyka — Inżynier',
          school: 'Uniwersytet Ekonomiczny w Poznaniu',
          spec: 'Data Analysis',
        },
      ],
      certs,
    },
    about: {
      title: 'O mnie',
      lead: 'Buduję nowoczesne aplikacje — mobilne, webowe i oparte na AI — łącząc precyzję dewelopera z myśleniem DevOps.',
      body: "Specjalizuję się w pełnym stosie technologicznym, od interfejsów użytkownika po infrastrukturę chmurową. Pracowałem w Capgemini, Bright Coders'Factory i Alliance Technology, prowadząc własne projekty AI. Zawsze szukam nowych wyzwań technicznych i możliwości tworzenia wartościowych produktów.",
      hobbiesTitle: 'Poza kodem',
      hobbies: [
        { icon: 'shield', title: 'Sztuki walki', sub: 'Dyscyplina ciała i umysłu' },
        { icon: 'flag', title: 'Motorsport', sub: 'Prędkość i precyzja inżynierii' },
        { icon: 'gamepad', title: 'Sim racing', sub: 'Technologia spotyka pasję' },
      ],
    },
    contact: {
      title: 'Porozmawiajmy',
      lead: 'Aktywnie szukam nowych możliwości zawodowych — pełny etat, kontrakt lub projekt freelance. Sprawdź moje kanały i odezwij się.',
      copy: 'Kopiuj adres e-mail',
      copied: 'Skopiowano adres e-mail',
      cv: 'Pobierz CV',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      builtWith: 'Vue 3 + Vite',
      backToTop: 'Do góry',
    },
  },

  en: {
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
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      tagline:
        'I build web and mobile applications, deploy DevOps solutions and integrate AI models into scalable systems.',
      primaryCta: 'See projects',
      secondaryCta: 'Contact',
      cv: 'Download CV',
      location: 'Poznań, PL',
      localTime: 'local time',
      since: year => `since ${year}`,
      years: n => enPlural(n, 'year of experience', 'years of experience'),
      projects: 'projects',
      focusLabel: 'focus',
      focusTitle: 'AI agents and local LLMs',
      focusSub: 'MSc AI · Voice AI',
      linksLabel: 'links',
      stackLabel: 'tech stack',
    },
    projects: {
      title: 'Selected work',
      featured: 'Featured',
      code: 'Code',
      demo: 'Live demo',
      items: [
        {
          num: '01',
          year: '2025',
          icon: 'mic',
          title: 'AI Assistant',
          tagline: 'The voice that thinks and acts for you.',
          description:
            'Voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models and agent architecture.',
          tags: ['Python', 'LLM', 'RAG', 'JavaScript'],
          highlights: [
            'Local LLM integration with a voice interface',
            'Autonomous app control via AI agent',
            'Agent architecture enabling proactive user suggestions',
          ],
        },
        {
          num: '02',
          year: '2024',
          icon: 'activity',
          title: 'Analitix',
          tagline: 'Real-time esports coaching.',
          description:
            'Platform for e-sports coaches to manage training sessions and analyze player performance in real time.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
        },
        {
          num: '03',
          year: '2024',
          icon: 'clock',
          title: 'Employee Management',
          tagline: 'Time tracking under full control.',
          description:
            'Cross-platform construction app with GPS-verified time tracking, live team monitoring and payroll features.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        },
      ],
    },
    journey: {
      title: 'Career path',
      experience: 'Experience',
      education: 'Education',
      certificates: 'Certificates',
      ongoing: 'in progress',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Self-employment',
          description:
            'Built a voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models. Implemented agent architecture with proactive user suggestions.',
          tech: ['Python', 'LLM', 'RAG', 'Agents', 'Voice AI'],
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          description:
            'Designed and implemented business applications supporting key company processes. Collaborated with multiple teams to deliver new features and modify existing systems.',
          tech: ['JavaScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: "Bright Coders'Factory",
          description:
            'Developed and maintained web, desktop and mobile applications. Led a team of 4 developers, implemented CI/CD pipelines (Jenkins, GitHub Actions) and Docker containerization.',
          tech: ['Vue.js', 'Node.js', 'Docker', 'Jenkins', 'CI/CD'],
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          description:
            'Designed and customized solutions for Microsoft Dynamics 365 Business Central. Delivered system integrations and tailored business solutions.',
          tech: ['Business Central', 'AL', 'Dynamics 365'],
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          description:
            'Designed and developed scalable web and mobile applications for various clients. Implemented and maintained CI/CD processes and Docker containerization.',
          tech: ['React', 'Java', 'Docker', 'AWS', 'CI/CD'],
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          description:
            'Configured and maintained IT systems. Developed software to automate internal company processes.',
          tech: ['Python', 'PowerShell', 'IT Support'],
        },
      ],
      schools: [
        {
          date: '10/2024 — 06/2026',
          title: 'Computer Science — MSc',
          school: 'Collegium Da Vinci',
          spec: 'AI / ML',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Computer Science — BEng',
          school: 'Collegium Da Vinci',
          spec: 'Web & Mobile',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Computer Science — BEng',
          school: 'University of Economics in Poznań',
          spec: 'Data Analysis',
        },
      ],
      certs,
    },
    about: {
      title: 'About',
      lead: 'I build modern applications — mobile, web and AI-powered — combining developer precision with DevOps thinking.',
      body: "I specialize in the full technology stack, from user interfaces to cloud infrastructure. I have worked at Capgemini, Bright Coders'Factory and Alliance Technology, running my own AI projects on the side. I am always looking for new technical challenges and opportunities to build products that matter.",
      hobbiesTitle: 'Beyond the code',
      hobbies: [
        { icon: 'shield', title: 'Martial arts', sub: 'Body and mind discipline' },
        { icon: 'flag', title: 'Motorsport', sub: 'Speed and engineering precision' },
        { icon: 'gamepad', title: 'Sim racing', sub: 'Technology meets passion' },
      ],
    },
    contact: {
      title: "Let's talk",
      lead: 'Actively looking for new professional opportunities — full-time, contract, or freelance. Check my channels and get in touch.',
      copy: 'Copy email address',
      copied: 'Email address copied',
      cv: 'Download CV',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Vue 3 + Vite',
      backToTop: 'Back to top',
    },
  },
}
