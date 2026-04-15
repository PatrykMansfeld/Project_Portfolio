// useLang.js — globalny stan języka + wszystkie tłumaczenia
//
// Jak używać w komponencie:
//   import { useLang } from '../composables/useLang.js'
//   const { t } = useLang()         // t.value.hero.firstname
//   const { lang, t, toggleLang } = useLang()
//
// Jak edytować treść strony:
//   Zmień wartości w obiektach 'pl' (po polsku) i 'en' (po angielsku).
//   Klucze muszą być identyczne w obu wersjach językowych.
//
// Jak dodać nowy projekt:
//   Dodaj obiekt do pl.projects.items i en.projects.items (ten sam format).

import { ref, computed } from 'vue'

// Globalny ref języka — jeden dla całej aplikacji (shared state)
// Zmiana lang.value automatycznie aktualizuje wszystkie komponenty
const lang = ref('pl')

export function useLang() {
  // t — computed wrapping tłumaczeń dla aktualnego języka
  // Reaktywny: gdy lang.value się zmienia, t.value też się zmienia
  const t = computed(() => translations[lang.value])

  // Przełącza język między PL a EN
  function toggleLang() {
    lang.value = lang.value === 'pl' ? 'en' : 'pl'
  }
  return { lang, t, toggleLang }
}

// Obiekt ze wszystkimi tłumaczeniami — dwie wersje: 'pl' i 'en'
const translations = {
  pl: {
    nav: {
      about: 'O mnie',
      experience: 'Doświadczenie',
      education: 'Edukacja',
      skills: 'Umiejętności',
      projects: 'Projekty',
      certificates: 'Certyfikaty',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Cześć, jestem',
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      name: 'Patryk Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      subtitle: 'Tworzę aplikacje webowe i mobilne, wdrażam rozwiązania DevOps i integruję modele AI w skalowalnych systemach.',
      btn: 'Zobacz projekty',
      contactBtn: 'Kontakt',
      available: 'Dostępny do pracy',
      statYears: 'Lata doświadczenia',
      statProjects: 'Projektów',
      statTech: 'Technologii',
    },
    about: {
      heading: 'O mnie',
      card1Title: 'Kim jestem',
      card1Text: 'Specjalizuję się w tworzeniu aplikacji mobilnych i webowych z wykorzystaniem JavaScript, Javy oraz Pythona. Posiadam solidne doświadczenie DevOps, w tym automatyzację CI/CD, konteneryzację z Dockerem oraz pracę z AWS i Kubernetes.',
      card2Title: 'Co robię',
      card2Text: 'Pracowałem w firmach takich jak Capgemini i Bright Coders\'Factory, pełniąc rolę Full Stack Developera i DevOpsa. Prowadzę własne projekty — m.in. aplikacje AI — i zawsze szukam nowych wyzwań technicznych.',
    },
    experience: {
      heading: 'Doświadczenie',
      tapHint: 'Dotknij, aby zobaczyć więcej',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Samozatrudnienie',
          description: 'Stworzenie wirtualnego asystenta AI z interfejsem głosowym do zarządzania aplikacjami (mail, zadania). Implementacja lokalnych modeli LLM z architekturą agentową i proaktywnym proponowaniem działań użytkownikowi.',
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          description: 'Projektowanie i wdrażanie aplikacji biznesowych wspierających kluczowe procesy firmy. Współpraca z wieloma zespołami przy implementacji nowych funkcji i modyfikacji istniejących systemów.',
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: 'Bright Coders\' Factory',
          description: 'Tworzenie i utrzymanie aplikacji webowych, desktopowych i mobilnych. Prowadzenie zespołu 4 programistów, implementacja pipeline\'ów CI/CD (Jenkins, GitHub Actions) i konteneryzacja z Dockerem.',
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          description: 'Projektowanie i customizacja rozwiązań dla Microsoft Dynamics 365 Business Central. Wdrażanie integracji systemowych i dopasowanych rozwiązań biznesowych.',
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          description: 'Projektowanie i rozwój skalowalnych aplikacji webowych i mobilnych dla różnych klientów. Implementacja i utrzymanie procesów CI/CD oraz konteneryzacja aplikacji z Dockerem.',
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          description: 'Konfiguracja i utrzymanie systemów IT, wsparcie techniczne w zakresie oprogramowania i sprzętu. Tworzenie oprogramowania automatyzującego procesy firmowe.',
        },
      ],
    },
    education: {
      heading: 'Edukacja',
      tapHint: 'Dotknij, aby zobaczyć więcej',
      items: [
        {
          date: '10/2024 — 06/2026',
          title: 'Informatyka — Magister',
          school: 'Collegium Da Vinci',
          description: 'Specjalizacja: Sztuczna Inteligencja. Studia skupione na uczeniu maszynowym, modelach językowych (LLM), RAG i autonomicznych systemach AI.',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Informatyka — Inżynier',
          school: 'Collegium Da Vinci',
          description: 'Specjalizacja: Aplikacje webowe i mobilne. Projektowanie i wdrażanie nowoczesnych systemów webowych i aplikacji mobilnych.',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Informatyka — Inżynier',
          school: 'Uniwersytet Ekonomiczny w Poznaniu',
          description: 'Specjalizacja: Analiza danych. Podstawy programowania, algorytmy, bazy danych i analityka biznesowa.',
        },
      ],
    },
    skills: {
      heading: 'Umiejętności',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      ai: 'AI & Data',
    },
    projects: {
      heading: 'Projekty',
      demo: 'Demo',
      github: 'GitHub',
      items: [
        {
          num: '01',
          title: 'AI Asystent',
          description: 'Głosowy asystent AI do autonomicznego zarządzania aplikacjami (mail, zadania) z lokalnymi modelami LLM i architekturą agentową.',
          tags: ['Python', 'LLM', 'RAG', 'JavaScript'],
          highlights: [
            'Integracja lokalnych modeli LLM z interfejsem głosowym',
            'Autonomiczne sterowanie aplikacjami (mail, lista zadań) przez agenta AI',
            'Architektura agentowa z proaktywnym proponowaniem działań użytkownikowi',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '02',
          title: 'Analitix',
          description: 'Platforma dla trenerów e-sportowych do zarządzania treningami i analizy wyników graczy w czasie rzeczywistym.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
          highlights: [
            'Analiza wyników e-sportowych w czasie rzeczywistym z intuicyjnym feedbackiem',
            'Pipeline CI/CD i konteneryzacja z Dockerem dla środowisk deweloperskich',
            'Precyzyjne narzędzia trenerskie do zarządzania planami treningowymi',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '03',
          title: 'Zarządzanie Pracownikami',
          description: 'Wieloplatformowa aplikacja dla budownictwa z rejestracją czasu pracy z weryfikacją GPS i monitoringiem zespołów.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
          highlights: [
            'Rejestrowanie czasu pracy z weryfikacją lokalizacji GPS',
            'Monitoring zespołów w czasie rzeczywistym i usprawnienie procesów płacowych',
            'Wieloplatformowa implementacja na urządzenia mobilne i desktop',
          ],
          demo: '#',
          github: '#',
        },
      ],
    },
    certificates: {
      heading: 'Certyfikaty',
      items: [
        { title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' },
      ],
    },
    contact: {
      heading: 'Kontakt',
      findMe: 'Znajdź mnie tutaj',
      writeMe: 'Napisz do mnie',
      name: 'Imię i nazwisko',
      email: 'Email',
      message: 'Wiadomość',
      namePlaceholder: 'Jan Kowalski',
      emailPlaceholder: 'jan@example.com',
      messagePlaceholder: 'Napisz do mnie...',
      btn: 'Wyślij wiadomość',
    },
    hobbies: {
      heading: 'POZA KODEM',
      sub: 'Zainteresowania które mnie nakręcają',
      martial: {
        title: 'SZTUKI WALKI',
        desc: 'Trening to nie tylko fizyczność — to dyscyplina mentalna i ciągłe doskonalenie. Na macie uczę się tyle samo, co przy klawiaturze.',
      },
      racing: {
        title: 'MOTORSPORT',
        desc: 'Adrenalina na torze, strategia w boksie. Bolidy F1 i wyścigi to moja pasja od lat — inżynieria, prędkość i precyzja w jednym.',
      },
      simracing: {
        title: 'SIM RACING',
        desc: 'Symulatory wyścigów to połączenie technologii i pasji motoryzacyjnej. Spędzam godziny doskonaląc technikę jazdy na wirtualnych torach.',
      },
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      madeWith: 'Zrobione z użyciem',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      name: 'Patryk Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      subtitle: 'I build web and mobile applications, deploy DevOps solutions and integrate AI models into scalable systems.',
      btn: 'See my work',
      contactBtn: 'Contact',
      available: 'Available for work',
      statYears: 'Years of exp.',
      statProjects: 'Projects',
      statTech: 'Technologies',
    },
    about: {
      heading: 'About me',
      card1Title: 'Who I am',
      card1Text: 'I specialize in building mobile and web applications using JavaScript, Java, and Python. I have solid DevOps experience, including CI/CD automation with Jenkins and GitHub Actions, Docker containerization, and work with AWS and Kubernetes.',
      card2Title: 'What I do',
      card2Text: "I've worked at companies like Capgemini and Bright Coders' Factory as a Full Stack Developer and DevOps engineer. I run my own projects — including AI applications — and I'm always looking for new technical challenges.",
    },
    experience: {
      heading: 'Experience',
      tapHint: 'Tap to see more',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Self-employment',
          description: 'Built a voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models. Implemented agent architecture with proactive user suggestions.',
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          description: 'Designed and implemented business applications supporting key company processes. Collaborated with multiple teams to deliver new features and modify existing systems.',
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: "Bright Coders' Factory",
          description: 'Developed and maintained web, desktop and mobile applications for clients. Led a team of 4 developers, implemented CI/CD pipelines (Jenkins, GitHub Actions) and Docker containerization.',
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          description: 'Designed and customized solutions for Microsoft Dynamics 365 Business Central. Delivered system integrations and tailored business solutions for clients.',
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          description: 'Designed and developed scalable web and mobile applications for various clients. Implemented and maintained CI/CD processes and Docker containerization.',
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          description: 'Configured and maintained IT systems, provided technical support for software and hardware. Developed software to automate internal company processes.',
        },
      ],
    },
    education: {
      heading: 'Education',
      tapHint: 'Tap to see more',
      items: [
        {
          date: '10/2024 — 06/2026',
          title: 'Computer Science — MSc',
          school: 'Collegium Da Vinci',
          description: 'Specialization: Artificial Intelligence. Studies focused on machine learning, LLMs, RAG and autonomous AI systems.',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Computer Science — BEng',
          school: 'Collegium Da Vinci',
          description: 'Specialization: Web and Mobile Applications. Design and development of modern web systems and mobile applications.',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Computer Science — BEng',
          school: 'University of Economics in Poznań',
          description: 'Specialization: Data Analysis. Programming fundamentals, algorithms, databases and business analytics.',
        },
      ],
    },
    skills: {
      heading: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      ai: 'AI & Data',
    },
    projects: {
      heading: 'Projects',
      demo: 'Demo',
      github: 'GitHub',
      items: [
        {
          num: '01',
          title: 'AI Assistant',
          description: 'Voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models and agent architecture.',
          tags: ['Python', 'LLM', 'RAG', 'JavaScript'],
          highlights: [
            'Local LLM integration with a voice interface',
            'Autonomous app control (email, task list) via AI agent',
            'Agent architecture enabling proactive user suggestions',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '02',
          title: 'Analitix',
          description: 'Platform for e-sports coaches to manage training sessions and analyze player performance in real time.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
          highlights: [
            'Real-time e-sports performance analytics with intuitive feedback tools',
            'CI/CD pipeline and Docker containerization for dev environments',
            'Precise coaching tools for managing training plans and player progress',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '03',
          title: 'Employee Management',
          description: 'Cross-platform construction app with GPS-verified time tracking, live team monitoring and payroll features.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
          highlights: [
            'GPS-verified time tracking for construction site workers',
            'Real-time team monitoring with live location data',
            'Cross-platform implementation with integrated payroll automation',
          ],
          demo: '#',
          github: '#',
        },
      ],
    },
    certificates: {
      heading: 'Certificates',
      items: [
        { title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' },
      ],
    },
    contact: {
      heading: 'Contact',
      findMe: 'Find me here',
      writeMe: 'Write to me',
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      messagePlaceholder: 'Write to me...',
      btn: 'Send message',
    },
    hobbies: {
      heading: 'BEYOND CODE',
      sub: 'Interests that drive me',
      martial: {
        title: 'MARTIAL ARTS',
        desc: 'Training is not just physical — it\'s mental discipline and constant improvement. On the mat I learn as much as at the keyboard.',
      },
      racing: {
        title: 'MOTORSPORT',
        desc: 'Adrenaline on track, strategy in the pits. F1 and motorsport have been my passion for years — engineering, speed and precision combined.',
      },
      simracing: {
        title: 'SIM RACING',
        desc: 'Racing simulators bridge technology and motorsport passion. I spend hours perfecting my driving technique on virtual circuits.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
}
