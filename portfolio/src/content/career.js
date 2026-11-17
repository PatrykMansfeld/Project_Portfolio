// Experience (newest first), education and certificates.
// Dates: "MM/YYYY — MM/YYYY". An education entry whose end date is still
// in the future gets the "in progress" badge automatically.

export const jobs = [
  {
    date: '10/2025 — 01/2026',
    title: 'AI Developer',
    company: { pl: 'Samozatrudnienie', en: 'Self-employment' },
    description: {
      pl: 'Stworzenie wirtualnego asystenta AI z interfejsem głosowym do zarządzania aplikacjami (mail, zadania). Implementacja lokalnych modeli LLM z architekturą agentową i proaktywnym proponowaniem działań.',
      en: 'Built a voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models. Implemented agent architecture with proactive user suggestions.',
    },
    tech: ['Python', 'LLM', 'RAG', 'Agents', 'Voice AI'],
  },
  {
    date: '04/2025 — 09/2025',
    title: 'Developer',
    company: 'Alliance Technology',
    description: {
      pl: 'Projektowanie i wdrażanie aplikacji biznesowych wspierających kluczowe procesy firmy. Współpraca z wieloma zespołami przy implementacji nowych funkcji i modyfikacji istniejących systemów.',
      en: 'Designed and implemented business applications supporting key company processes. Collaborated with multiple teams to deliver new features and modify existing systems.',
    },
    tech: ['JavaScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
  },
  {
    date: '04/2024 — 02/2025',
    title: 'Full Stack Developer / DevOps',
    company: "Bright Coders'Factory",
    description: {
      pl: "Tworzenie i utrzymanie aplikacji webowych, desktopowych i mobilnych. Prowadzenie zespołu 4 programistów, implementacja pipeline'ów CI/CD (Jenkins, GitHub Actions) i konteneryzacja z Dockerem.",
      en: 'Developed and maintained web, desktop and mobile applications. Led a team of 4 developers, implemented CI/CD pipelines (Jenkins, GitHub Actions) and Docker containerization.',
    },
    tech: ['Vue.js', 'Node.js', 'Docker', 'Jenkins', 'CI/CD'],
  },
  {
    date: '06/2023 — 01/2024',
    title: 'ERP Developer',
    company: 'IT.integro',
    description: {
      pl: 'Projektowanie i customizacja rozwiązań dla Microsoft Dynamics 365 Business Central. Wdrażanie integracji systemowych i dopasowanych rozwiązań biznesowych.',
      en: 'Designed and customized solutions for Microsoft Dynamics 365 Business Central. Delivered system integrations and tailored business solutions.',
    },
    tech: ['Business Central', 'AL', 'Dynamics 365'],
  },
  {
    date: '04/2022 — 04/2023',
    title: 'Full Stack Developer / DevOps',
    company: 'Capgemini',
    description: {
      pl: 'Projektowanie i rozwój skalowalnych aplikacji webowych i mobilnych. Implementacja i utrzymanie procesów CI/CD oraz konteneryzacja aplikacji z Dockerem.',
      en: 'Designed and developed scalable web and mobile applications for various clients. Implemented and maintained CI/CD processes and Docker containerization.',
    },
    tech: ['React', 'Java', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    date: '02/2022 — 04/2022',
    title: 'IT Technician / Developer',
    company: 'Raben Group',
    description: {
      pl: 'Konfiguracja i utrzymanie systemów IT. Tworzenie oprogramowania automatyzującego procesy firmowe.',
      en: 'Configured and maintained IT systems. Developed software to automate internal company processes.',
    },
    tech: ['Python', 'PowerShell', 'IT Support'],
  },
]

export const education = [
  {
    date: '10/2024 — 06/2026',
    title: { pl: 'Informatyka — Magister', en: 'Computer Science — MSc' },
    school: 'Collegium Da Vinci',
    spec: 'AI / ML',
  },
  {
    date: '02/2020 — 04/2023',
    title: { pl: 'Informatyka — Inżynier', en: 'Computer Science — BEng' },
    school: 'Collegium Da Vinci',
    spec: 'Web & Mobile',
  },
  {
    date: '10/2018 — 02/2020',
    title: { pl: 'Informatyka — Inżynier', en: 'Computer Science — BEng' },
    school: { pl: 'Uniwersytet Ekonomiczny w Poznaniu', en: 'University of Economics in Poznań' },
    spec: 'Data Analysis',
  },
]

export const certificates = [{ title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' }]
