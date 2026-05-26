import { ref, computed } from 'vue'

const lang = ref('pl')

export function useLang() {
  const t = computed(() => translations[lang.value])
  function toggleLang() {
    lang.value = lang.value === 'pl' ? 'en' : 'pl'
  }
  return { lang, t, toggleLang }
}

const translations = {
  pl: {
    nav: {
      about: 'O mnie',
      experience: 'Doświadczenie',
      education: 'Edukacja',
      skills: 'Umiejętności',
      projects: 'Projekty',
      certificates: 'Certyfikaty',
      hobbies: 'Hobby',
      contact: 'Kontakt',
    },
    hero: {
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      tagline: 'Tworzę aplikacje webowe i mobilne, wdrażam rozwiązania DevOps i integruję modele AI w skalowalnych systemach.',
      location: 'Poznań, PL',
      available: 'Dostępny do pracy',
      primaryCta: 'Zobacz projekty',
      secondaryCta: 'Kontakt',
      statYears: 'Lata doświadczenia',
      statProjects: 'Projektów',
      statTech: 'Technologii',
    },
    about: {
      kicker: 'MANIFEST',
      lead: 'Buduję nowoczesne aplikacje — mobilne, webowe i oparte na AI — łącząc precyzję dewelopera z myśleniem DevOps.',
      body: 'Specjalizuję się w pełnym stosie technologicznym, od interfejsów użytkownika po infrastrukturę chmurową. Pracowałem w Capgemini, Bright Coders\'Factory i Alliance Technology, prowadząc własne projekty AI. Zawsze szukam nowych wyzwań technicznych i możliwości tworzenia wartościowych produktów.',
    },
    experience: {
      kicker: 'HISTORIA',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Samozatrudnienie',
          location: 'Poznań, PL',
          description: 'Stworzenie wirtualnego asystenta AI z interfejsem głosowym do zarządzania aplikacjami (mail, zadania). Implementacja lokalnych modeli LLM z architekturą agentową i proaktywnym proponowaniem działań.',
          tech: ['Python', 'LLM', 'RAG', 'Agents', 'Voice AI'],
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          location: 'Poznań, PL',
          description: 'Projektowanie i wdrażanie aplikacji biznesowych wspierających kluczowe procesy firmy. Współpraca z wieloma zespołami przy implementacji nowych funkcji i modyfikacji istniejących systemów.',
          tech: ['JavaScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: 'Bright Coders\'Factory',
          location: 'Poznań, PL',
          description: 'Tworzenie i utrzymanie aplikacji webowych, desktopowych i mobilnych. Prowadzenie zespołu 4 programistów, implementacja pipeline\'ów CI/CD (Jenkins, GitHub Actions) i konteneryzacja z Dockerem.',
          tech: ['Vue.js', 'Node.js', 'Docker', 'Jenkins', 'CI/CD'],
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          location: 'Poznań, PL',
          description: 'Projektowanie i customizacja rozwiązań dla Microsoft Dynamics 365 Business Central. Wdrażanie integracji systemowych i dopasowanych rozwiązań biznesowych.',
          tech: ['Business Central', 'AL', 'Dynamics 365'],
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          location: 'Poznań, PL',
          description: 'Projektowanie i rozwój skalowalnych aplikacji webowych i mobilnych. Implementacja i utrzymanie procesów CI/CD oraz konteneryzacja aplikacji z Dockerem.',
          tech: ['React', 'Java', 'Docker', 'AWS', 'CI/CD'],
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          location: 'Poznań, PL',
          description: 'Konfiguracja i utrzymanie systemów IT. Tworzenie oprogramowania automatyzującego procesy firmowe.',
          tech: ['Python', 'PowerShell', 'IT Support'],
        },
      ],
    },
    education: {
      kicker: 'AKADEMIA',
      items: [
        {
          date: '10/2024 — 06/2026',
          title: 'Informatyka — Magister',
          school: 'Collegium Da Vinci',
          spec: 'AI / ML',
          description: 'Specjalizacja: Sztuczna Inteligencja. Studia skupione na uczeniu maszynowym, modelach językowych (LLM), RAG i autonomicznych systemach AI.',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Informatyka — Inżynier',
          school: 'Collegium Da Vinci',
          spec: 'Web & Mobile',
          description: 'Specjalizacja: Aplikacje webowe i mobilne. Projektowanie i wdrażanie nowoczesnych systemów webowych i aplikacji mobilnych.',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Informatyka — Inżynier',
          school: 'Uniwersytet Ekonomiczny w Poznaniu',
          spec: 'Data Analysis',
          description: 'Specjalizacja: Analiza danych. Podstawy programowania, algorytmy, bazy danych i analityka biznesowa.',
        },
      ],
    },
    skills: {
      kicker: 'ARSENAŁ',
      categories: [
        {
          label: 'Frontend',
          items: [
            { name: 'JavaScript', abbr: 'js', level: 90 },
            { name: 'Vue.js', abbr: 'vue', level: 88 },
            { name: 'React', abbr: 'react', level: 80 },
            { name: 'TypeScript', abbr: 'ts', level: 75 },
            { name: 'HTML / CSS', abbr: 'html', level: 92 },
          ],
        },
        {
          label: 'Backend',
          items: [
            { name: 'Node.js', abbr: 'node', level: 85 },
            { name: 'Python', abbr: 'py', level: 82 },
            { name: 'Java', abbr: 'java', level: 74 },
            { name: 'PostgreSQL', abbr: 'pg', level: 78 },
            { name: 'REST API', abbr: 'rest', level: 88 },
          ],
        },
        {
          label: 'DevOps',
          items: [
            { name: 'Docker', abbr: 'docker', level: 85 },
            { name: 'CI/CD', abbr: 'cicd', level: 82 },
            { name: 'GitHub Actions', abbr: 'gha', level: 80 },
            { name: 'AWS', abbr: 'aws', level: 70 },
            { name: 'Kubernetes', abbr: 'k8s', level: 62 },
          ],
        },
        {
          label: 'AI & Data',
          items: [
            { name: 'LLM / RAG', abbr: 'llm', level: 78 },
            { name: 'LangChain', abbr: 'lc', level: 72 },
            { name: 'Machine Learning', abbr: 'ml', level: 65 },
            { name: 'Voice AI', abbr: 'vai', level: 70 },
          ],
        },
      ],
    },
    projects: {
      kicker: 'REALIZACJE',
      items: [
        {
          num: '01',
          year: '2025',
          title: 'AI Asystent',
          tagline: 'Głos, który myśli i działa za Ciebie.',
          description: 'Głosowy asystent AI do autonomicznego zarządzania aplikacjami (mail, zadania) z lokalnymi modelami LLM i architekturą agentową.',
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
          title: 'Analitix',
          tagline: 'Coaching e-sportowy w czasie rzeczywistym.',
          description: 'Platforma dla trenerów e-sportowych do zarządzania treningami i analizy wyników graczy w czasie rzeczywistym.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
          highlights: [
            'Analiza wyników e-sportowych w czasie rzeczywistym',
            'Pipeline CI/CD i konteneryzacja z Dockerem',
            'Precyzyjne narzędzia trenerskie do zarządzania planami treningów',
          ],
        },
        {
          num: '03',
          year: '2024',
          title: 'Zarządzanie Pracownikami',
          tagline: 'Czas pracy pod pełną kontrolą.',
          description: 'Wieloplatformowa aplikacja dla budownictwa z rejestracją czasu pracy z weryfikacją GPS i monitoringiem zespołów.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
          highlights: [
            'Rejestrowanie czasu pracy z weryfikacją lokalizacji GPS',
            'Monitoring zespołów w czasie rzeczywistym',
            'Wieloplatformowa implementacja z automatyzacją procesów płacowych',
          ],
        },
      ],
    },
    certificates: {
      kicker: 'POTWIERDZENIA',
      items: [
        { title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' },
      ],
    },
    hobbies: {
      kicker: 'POZA BIURKIEM',
      items: [
        {
          title: 'Sztuki Walki',
          sub: 'Dyscyplina ciała i umysłu',
          description: 'Trening to nie tylko fizyczność — to dyscyplina mentalna i ciągłe doskonalenie. Na macie uczę się tyle samo, co przy klawiaturze.',
        },
        {
          title: 'Motorsport',
          sub: 'Prędkość i precyzja inżynierii',
          description: 'Adrenalina na torze, strategia w boksie. Bolidy F1 i wyścigi to moja pasja od lat — inżynieria, prędkość i precyzja w jednym.',
        },
        {
          title: 'Sim Racing',
          sub: 'Technologia spotyka pasję',
          description: 'Symulatory wyścigów to połączenie technologii i pasji motoryzacyjnej. Spędzam godziny doskonaląc technikę jazdy na wirtualnych torach.',
        },
      ],
    },
    contact: {
      kicker: 'TRANSMISJA',
      lead: 'Aktywnie szukam nowych możliwości zawodowych — pełny etat, kontrakt lub projekt freelance. Sprawdź moje kanały i odezwij się.',
      form: {
        name: 'Imię i nazwisko',
        namePh: 'Jan Kowalski',
        email: 'Email',
        emailPh: 'jan@example.com',
        message: 'Wiadomość',
        messagePh: 'Napisz do mnie...',
        btn: 'Wyślij wiadomość',
      },
      socials: [
        { label: 'GitHub', handle: 'github.com/patrykmansfeld', url: 'https://github.com/' },
        { label: 'LinkedIn', handle: 'linkedin.com/in/patrykmansfeld', url: 'https://linkedin.com/' },
        { label: 'Email', handle: 'patryk.mansfeld@gmail.com', url: 'mailto:patryk.mansfeld@gmail.com' },
      ],
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
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
      hobbies: 'Hobbies',
      contact: 'Contact',
    },
    hero: {
      firstname: 'Patryk',
      lastname: 'Mansfeld',
      role: 'Full-Stack Developer & DevOps',
      tagline: 'I build web and mobile applications, deploy DevOps solutions and integrate AI models into scalable systems.',
      location: 'Poznań, PL',
      available: 'Available for work',
      primaryCta: 'See projects',
      secondaryCta: 'Contact',
      statYears: 'Years of exp.',
      statProjects: 'Projects',
      statTech: 'Technologies',
    },
    about: {
      kicker: 'MANIFESTO',
      lead: 'I build modern applications — mobile, web and AI-powered — combining developer precision with DevOps thinking.',
      body: 'I specialize in the full technology stack, from user interfaces to cloud infrastructure. I have worked at Capgemini, Bright Coders\'Factory and Alliance Technology, running my own AI projects on the side. I am always looking for new technical challenges and opportunities to build products that matter.',
    },
    experience: {
      kicker: 'HISTORY',
      jobs: [
        {
          date: '10/2025 — 01/2026',
          title: 'AI Developer',
          company: 'Self-employment',
          location: 'Poznań, PL',
          description: 'Built a voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models. Implemented agent architecture with proactive user suggestions.',
          tech: ['Python', 'LLM', 'RAG', 'Agents', 'Voice AI'],
        },
        {
          date: '04/2025 — 09/2025',
          title: 'Developer',
          company: 'Alliance Technology',
          location: 'Poznań, PL',
          description: 'Designed and implemented business applications supporting key company processes. Collaborated with multiple teams to deliver new features and modify existing systems.',
          tech: ['JavaScript', 'Vue.js', 'Node.js', 'PostgreSQL'],
        },
        {
          date: '04/2024 — 02/2025',
          title: 'Full Stack Developer / DevOps',
          company: 'Bright Coders\'Factory',
          location: 'Poznań, PL',
          description: 'Developed and maintained web, desktop and mobile applications. Led a team of 4 developers, implemented CI/CD pipelines (Jenkins, GitHub Actions) and Docker containerization.',
          tech: ['Vue.js', 'Node.js', 'Docker', 'Jenkins', 'CI/CD'],
        },
        {
          date: '06/2023 — 01/2024',
          title: 'ERP Developer',
          company: 'IT.integro',
          location: 'Poznań, PL',
          description: 'Designed and customized solutions for Microsoft Dynamics 365 Business Central. Delivered system integrations and tailored business solutions.',
          tech: ['Business Central', 'AL', 'Dynamics 365'],
        },
        {
          date: '04/2022 — 04/2023',
          title: 'Full Stack Developer / DevOps',
          company: 'Capgemini',
          location: 'Poznań, PL',
          description: 'Designed and developed scalable web and mobile applications for various clients. Implemented and maintained CI/CD processes and Docker containerization.',
          tech: ['React', 'Java', 'Docker', 'AWS', 'CI/CD'],
        },
        {
          date: '02/2022 — 04/2022',
          title: 'IT Technician / Developer',
          company: 'Raben Group',
          location: 'Poznań, PL',
          description: 'Configured and maintained IT systems. Developed software to automate internal company processes.',
          tech: ['Python', 'PowerShell', 'IT Support'],
        },
      ],
    },
    education: {
      kicker: 'ACADEMIA',
      items: [
        {
          date: '10/2024 — 06/2026',
          title: 'Computer Science — MSc',
          school: 'Collegium Da Vinci',
          spec: 'AI / ML',
          description: 'Specialization: Artificial Intelligence. Studies focused on machine learning, LLMs, RAG and autonomous AI systems.',
        },
        {
          date: '02/2020 — 04/2023',
          title: 'Computer Science — BEng',
          school: 'Collegium Da Vinci',
          spec: 'Web & Mobile',
          description: 'Specialization: Web and Mobile Applications. Design and development of modern web systems and mobile applications.',
        },
        {
          date: '10/2018 — 02/2020',
          title: 'Computer Science — BEng',
          school: 'University of Economics in Poznań',
          spec: 'Data Analysis',
          description: 'Specialization: Data Analysis. Programming fundamentals, algorithms, databases and business analytics.',
        },
      ],
    },
    skills: {
      kicker: 'ARSENAL',
      categories: [
        {
          label: 'Frontend',
          items: [
            { name: 'JavaScript', abbr: 'js', level: 90 },
            { name: 'Vue.js', abbr: 'vue', level: 88 },
            { name: 'React', abbr: 'react', level: 80 },
            { name: 'TypeScript', abbr: 'ts', level: 75 },
            { name: 'HTML / CSS', abbr: 'html', level: 92 },
          ],
        },
        {
          label: 'Backend',
          items: [
            { name: 'Node.js', abbr: 'node', level: 85 },
            { name: 'Python', abbr: 'py', level: 82 },
            { name: 'Java', abbr: 'java', level: 74 },
            { name: 'PostgreSQL', abbr: 'pg', level: 78 },
            { name: 'REST API', abbr: 'rest', level: 88 },
          ],
        },
        {
          label: 'DevOps',
          items: [
            { name: 'Docker', abbr: 'docker', level: 85 },
            { name: 'CI/CD', abbr: 'cicd', level: 82 },
            { name: 'GitHub Actions', abbr: 'gha', level: 80 },
            { name: 'AWS', abbr: 'aws', level: 70 },
            { name: 'Kubernetes', abbr: 'k8s', level: 62 },
          ],
        },
        {
          label: 'AI & Data',
          items: [
            { name: 'LLM / RAG', abbr: 'llm', level: 78 },
            { name: 'LangChain', abbr: 'lc', level: 72 },
            { name: 'Machine Learning', abbr: 'ml', level: 65 },
            { name: 'Voice AI', abbr: 'vai', level: 70 },
          ],
        },
      ],
    },
    projects: {
      kicker: 'PORTFOLIO',
      items: [
        {
          num: '01',
          year: '2025',
          title: 'AI Assistant',
          tagline: 'The voice that thinks and acts for you.',
          description: 'Voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models and agent architecture.',
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
          title: 'Analitix',
          tagline: 'Real-time esports coaching.',
          description: 'Platform for e-sports coaches to manage training sessions and analyze player performance in real time.',
          tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
          highlights: [
            'Real-time e-sports performance analytics',
            'CI/CD pipeline and Docker containerization',
            'Precise coaching tools for managing training plans',
          ],
        },
        {
          num: '03',
          year: '2024',
          title: 'Employee Management',
          tagline: 'Time tracking under full control.',
          description: 'Cross-platform construction app with GPS-verified time tracking, live team monitoring and payroll features.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
          highlights: [
            'GPS-verified time tracking for construction workers',
            'Real-time team monitoring with live location data',
            'Cross-platform implementation with payroll automation',
          ],
        },
      ],
    },
    certificates: {
      kicker: 'CREDENTIALS',
      items: [
        { title: 'JavaScript Developer', issuer: 'CodersLab', year: '2021' },
      ],
    },
    hobbies: {
      kicker: 'OFF DUTY',
      items: [
        {
          title: 'Martial Arts',
          sub: 'Body and mind discipline',
          description: 'Training is not just physical — it\'s mental discipline and constant improvement. On the mat I learn as much as at the keyboard.',
        },
        {
          title: 'Motorsport',
          sub: 'Speed and engineering precision',
          description: 'Adrenaline on track, strategy in the pits. F1 and motorsport have been my passion for years — engineering, speed and precision combined.',
        },
        {
          title: 'Sim Racing',
          sub: 'Technology meets passion',
          description: 'Racing simulators bridge technology and motorsport passion. I spend hours perfecting my driving technique on virtual circuits.',
        },
      ],
    },
    contact: {
      kicker: 'TRANSMISSION',
      lead: 'Actively looking for new professional opportunities — full-time, contract, or freelance. Check my channels and get in touch.',
      form: {
        name: 'Full name',
        namePh: 'John Doe',
        email: 'Email',
        emailPh: 'john@example.com',
        message: 'Message',
        messagePh: 'Write to me...',
        btn: 'Send message',
      },
      socials: [
        { label: 'GitHub', handle: 'github.com/patrykmansfeld', url: 'https://github.com/' },
        { label: 'LinkedIn', handle: 'linkedin.com/in/patrykmansfeld', url: 'https://linkedin.com/' },
        { label: 'Email', handle: 'patryk.mansfeld@gmail.com', url: 'mailto:patryk.mansfeld@gmail.com' },
      ],
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
}
