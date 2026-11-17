// About you: hero card, "About" section, hobbies, contact.
// Text shown in both languages is written as { pl: '…', en: '…' }.

export const profile = {
  firstName: 'Patryk',
  lastName: 'Mansfeld',
  initials: 'PM',
  role: 'Full-Stack Developer & DevOps',
  tagline: {
    pl: 'Tworzę aplikacje webowe i mobilne, wdrażam rozwiązania DevOps i integruję modele AI w skalowalnych systemach.',
    en: 'I build web and mobile applications, deploy DevOps solutions and integrate AI models into scalable systems.',
  },

  location: 'Poznań, PL',
  timeZone: 'Europe/Warsaw',
  careerStart: 2022,
  projectsCount: '10+',
  focus: {
    title: { pl: 'Agenty AI i lokalne modele LLM', en: 'AI agents and local LLMs' },
    sub: 'MSc AI · Voice AI',
  },

  about: {
    lead: {
      pl: 'Buduję nowoczesne aplikacje — mobilne, webowe i oparte na AI — łącząc precyzję dewelopera z myśleniem DevOps.',
      en: 'I build modern applications — mobile, web and AI-powered — combining developer precision with DevOps thinking.',
    },
    body: {
      pl: "Specjalizuję się w pełnym stosie technologicznym, od interfejsów użytkownika po infrastrukturę chmurową. Pracowałem w Capgemini, Bright Coders'Factory i Alliance Technology, prowadząc własne projekty AI. Zawsze szukam nowych wyzwań technicznych i możliwości tworzenia wartościowych produktów.",
      en: "I specialize in the full technology stack, from user interfaces to cloud infrastructure. I have worked at Capgemini, Bright Coders'Factory and Alliance Technology, running my own AI projects on the side. I am always looking for new technical challenges and opportunities to build products that matter.",
    },
  },

  // icon: a name from src/components/ui/icons.js
  hobbies: [
    {
      icon: 'shield',
      title: { pl: 'Sztuki walki', en: 'Martial arts' },
      sub: { pl: 'Dyscyplina ciała i umysłu', en: 'Body and mind discipline' },
    },
    {
      icon: 'flag',
      title: 'Motorsport',
      sub: { pl: 'Prędkość i precyzja inżynierii', en: 'Speed and engineering precision' },
    },
    {
      icon: 'gamepad',
      title: 'Sim racing',
      sub: { pl: 'Technologia spotyka pasję', en: 'Technology meets passion' },
    },
  ],

  contactNote: {
    pl: 'Aktywnie szukam nowych możliwości zawodowych — pełny etat, kontrakt lub projekt freelance. Sprawdź moje kanały i odezwij się.',
    en: 'Actively looking for new professional opportunities — full-time, contract, or freelance. Check my channels and get in touch.',
  },
}

export const links = {
  github: 'https://github.com/patrykmansfeld',
  linkedin: 'https://www.linkedin.com/in/patrykmansfeld',
  email: 'patryk.mansfeld@gmail.com',
}

// CV — put the PDF(s) in public/cv/ and set the path here,
// e.g. 'cv/Patryk_Mansfeld_CV_PL.pdf'. Empty string = button hidden.
// If only one language is filled in, it is used for both.
export const cv = {
  pl: '',
  en: '',
}
