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
      role: 'Full-Stack Developer',
      subtitle: 'Buduję śmiałe i funkcjonalne aplikacje webowe z czystym, skalowalnym kodem.',
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
      card1Text: 'Jestem full-stack developerem z pasją do tworzenia śmiałych i funkcjonalnych aplikacji webowych. Lubię czysty kod, kreatywny design i zamienianie pomysłów w rzeczywistość.',
      card2Title: 'Co robię',
      card2Text: 'Pracowałem nad różnorodnymi projektami — od interaktywnych interfejsów po rozbudowane API backendowe. Zawsze szukam nowych wyzwań i możliwości rozwoju.',
    },
    experience: {
      heading: 'Doświadczenie',
      tapHint: 'Dotknij, aby zobaczyć więcej',
      jobs: [
        {
          date: '2024 — Obecnie',
          title: 'Full-Stack Developer',
          company: 'Firma XYZ',
          description: 'Tworzenie aplikacji webowych w Vue.js i Node.js. Projektowanie REST API oraz zarządzanie bazami danych.',
        },
        {
          date: '2022 — 2024',
          title: 'Frontend Developer',
          company: 'Agencja ABC',
          description: 'Budowanie responsywnych interfejsów użytkownika. Współpraca z zespołem UX/UI przy wdrażaniu designów.',
        },
        {
          date: '2021 — 2022',
          title: 'Junior Developer',
          company: 'Startup DEF',
          description: 'Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.',
        },
      ],
    },
    education: {
      heading: 'Edukacja',
      tapHint: 'Dotknij, aby zobaczyć więcej',
      items: [
        {
          date: '2020 — 2024',
          title: 'Informatyka — Magister',
          school: 'Politechnika Warszawska',
          description: 'Specjalizacja: Inżynieria oprogramowania. Praca magisterska z zakresu aplikacji webowych.',
        },
        {
          date: '2017 — 2020',
          title: 'Informatyka — Licencjat',
          school: 'Uniwersytet Jagielloński',
          description: 'Podstawy programowania, algorytmy, bazy danych i sieci komputerowe.',
        },
      ],
    },
    skills: {
      heading: 'Umiejętności',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Narzędzia',
    },
    projects: {
      heading: 'Projekty',
      demo: 'Demo',
      github: 'GitHub',
      items: [
        {
          num: '01',
          title: 'E-commerce Platform',
          description: 'Pełny sklep internetowy z koszykiem, płatnościami i panelem admina.',
          tags: ['Vue.js', 'Node.js', 'MongoDB'],
          highlights: [
            'Integracja płatności Stripe z obsługą webhooków',
            'Panel admina: zarządzanie produktami, zamówieniami i użytkownikami',
            'Koszyk z persystencją stanu i synchronizacją z serwerem',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '02',
          title: 'Task Manager App',
          description: 'Aplikacja do zarządzania zadaniami z drag & drop i powiadomieniami.',
          tags: ['React', 'Express', 'PostgreSQL'],
          highlights: [
            'Drag & drop z live aktualizacją kolejności zadań',
            'System powiadomień push i e-mail z harmonogramem',
            'Widok Kanban z filtrami priorytetu i terminu wykonania',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '03',
          title: 'Weather Dashboard',
          description: 'Dashboard pogodowy z wykresami, mapami i prognozą na 7 dni.',
          tags: ['JavaScript', 'API', 'CSS'],
          highlights: [
            'Dane pogodowe w czasie rzeczywistym z Open-Meteo API',
            'Wykresy prognozy generowane przez Chart.js',
            'Geolokalizacja i wyszukiwarka miast z autocomplete',
          ],
          demo: '#',
          github: '#',
        },
      ],
    },
    certificates: {
      heading: 'Certyfikaty',
      items: [
        { title: 'Vue.js — The Complete Guide', issuer: 'Udemy', year: '2024' },
        { title: 'Node.js Developer Course', issuer: 'Udemy', year: '2023' },
        { title: 'CS50: Introduction to Computer Science', issuer: 'Harvard / edX', year: '2022' },
        { title: 'Python Bootcamp', issuer: 'Coursera', year: '2022' },
        { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2021' },
        { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2021' },
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
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      madeWith: 'Zrobione z użyciem',
    },
  },
  // English translations
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
      role: 'Full-Stack Developer',
      subtitle: 'I build bold and functional web applications with clean, scalable code.',
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
      card1Text: "I'm a full-stack developer with a passion for building bold and functional web applications. I love clean code, creative design, and turning ideas into reality.",
      card2Title: 'What I do',
      card2Text: "I've worked on diverse projects — from interactive UIs to complex backend APIs. I'm always looking for new challenges and growth opportunities.",
    },
    experience: {
      heading: 'Experience',
      tapHint: 'Tap to see more',
      jobs: [
        {
          date: '2024 — Present',
          title: 'Full-Stack Developer',
          company: 'Company XYZ',
          description: 'Building web applications with Vue.js and Node.js. Designing REST APIs and managing databases.',
        },
        {
          date: '2022 — 2024',
          title: 'Frontend Developer',
          company: 'Agency ABC',
          description: 'Building responsive user interfaces. Collaborating with the UX/UI team to implement designs.',
        },
        {
          date: '2021 — 2022',
          title: 'Junior Developer',
          company: 'Startup DEF',
          description: 'Learning web technologies in practice. Participating in internal projects and implementing fixes.',
        },
      ],
    },
    education: {
      heading: 'Education',
      tapHint: 'Tap to see more',
      items: [
        {
          date: '2020 — 2024',
          title: 'Computer Science — MSc',
          school: 'Warsaw University of Technology',
          description: 'Specialization: Software Engineering. Master thesis on web application architecture.',
        },
        {
          date: '2017 — 2020',
          title: 'Computer Science — BSc',
          school: 'Jagiellonian University',
          description: 'Fundamentals of programming, algorithms, databases and computer networks.',
        },
      ],
    },
    skills: {
      heading: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
    },
    projects: {
      heading: 'Projects',
      demo: 'Demo',
      github: 'GitHub',
      items: [
        {
          num: '01',
          title: 'E-commerce Platform',
          description: 'Full online store with cart, payments and admin panel.',
          tags: ['Vue.js', 'Node.js', 'MongoDB'],
          highlights: [
            'Stripe payment integration with full webhook support',
            'Admin panel: manage products, orders and users',
            'Cart with local state persistence and server sync',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '02',
          title: 'Task Manager App',
          description: 'Task management app with drag & drop and notifications.',
          tags: ['React', 'Express', 'PostgreSQL'],
          highlights: [
            'Drag & drop with live task order updates',
            'Push and email notification system with scheduler',
            'Kanban view with priority and deadline filters',
          ],
          demo: '#',
          github: '#',
        },
        {
          num: '03',
          title: 'Weather Dashboard',
          description: 'Weather dashboard with charts, maps and 7-day forecast.',
          tags: ['JavaScript', 'API', 'CSS'],
          highlights: [
            'Real-time weather data from Open-Meteo API',
            'Forecast charts generated with Chart.js',
            'Geolocation and city search with autocomplete',
          ],
          demo: '#',
          github: '#',
        },
      ],
    },
    certificates: {
      heading: 'Certificates',
      items: [
        { title: 'Vue.js — The Complete Guide', issuer: 'Udemy', year: '2024' },
        { title: 'Node.js Developer Course', issuer: 'Udemy', year: '2023' },
        { title: 'CS50: Introduction to Computer Science', issuer: 'Harvard / edX', year: '2022' },
        { title: 'Python Bootcamp', issuer: 'Coursera', year: '2022' },
        { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2021' },
        { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2021' },
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
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
    },
  },
}
