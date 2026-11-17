// Projects, newest first. The first one is shown large as "featured".
// repo / demo: paste full URLs — an empty string hides the button.
// icon: a name from src/components/ui/icons.js

export const projects = [
  {
    num: '01',
    year: '2025',
    icon: 'mic',
    title: { pl: 'AI Asystent', en: 'AI Assistant' },
    tagline: {
      pl: 'Głos, który myśli i działa za Ciebie.',
      en: 'The voice that thinks and acts for you.',
    },
    description: {
      pl: 'Głosowy asystent AI do autonomicznego zarządzania aplikacjami (mail, zadania) z lokalnymi modelami LLM i architekturą agentową.',
      en: 'Voice-controlled AI assistant for autonomous management of apps (email, tasks) using local LLM models and agent architecture.',
    },
    highlights: {
      pl: [
        'Integracja lokalnych modeli LLM z interfejsem głosowym',
        'Autonomiczne sterowanie aplikacjami przez agenta AI',
        'Architektura agentowa z proaktywnym proponowaniem działań',
      ],
      en: [
        'Local LLM integration with a voice interface',
        'Autonomous app control via AI agent',
        'Agent architecture enabling proactive user suggestions',
      ],
    },
    tags: ['Python', 'LLM', 'RAG', 'JavaScript'],
    repo: '',
    demo: '',
  },
  {
    num: '02',
    year: '2024',
    icon: 'activity',
    title: 'Analitix',
    tagline: {
      pl: 'Coaching e-sportowy w czasie rzeczywistym.',
      en: 'Real-time esports coaching.',
    },
    description: {
      pl: 'Platforma dla trenerów e-sportowych do zarządzania treningami i analizy wyników graczy w czasie rzeczywistym.',
      en: 'Platform for e-sports coaches to manage training sessions and analyze player performance in real time.',
    },
    tags: ['Vue.js', 'Node.js', 'Docker', 'CI/CD'],
    repo: '',
    demo: '',
  },
  {
    num: '03',
    year: '2024',
    icon: 'clock',
    title: { pl: 'Zarządzanie Pracownikami', en: 'Employee Management' },
    tagline: {
      pl: 'Czas pracy pod pełną kontrolą.',
      en: 'Time tracking under full control.',
    },
    description: {
      pl: 'Wieloplatformowa aplikacja dla budownictwa z rejestracją czasu pracy z weryfikacją GPS i monitoringiem zespołów.',
      en: 'Cross-platform construction app with GPS-verified time tracking, live team monitoring and payroll features.',
    },
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    repo: '',
    demo: '',
  },
]
