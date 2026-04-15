<!--
  App.vue — główny plik aplikacji
  Importuje i układa wszystkie sekcje strony w odpowiedniej kolejności.
  IntersectionObserver dodaje klasę 'in-view' gdy sekcja wchodzi w pole widzenia
  (animacje wejścia sterowane są przez CSS w style.css).
-->
<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBanner from './components/MarqueeBanner.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import HobbiesSection from './components/HobbiesSection.vue'

onMounted(() => {
  // Obserwuje sekcje i dodaje klasę 'in-view' gdy są widoczne w oknie przeglądarki.
  // Hero jest pominięty — jest zawsze widoczny na starcie.
  // threshold: 0.05 oznacza że animacja startuje gdy 5% sekcji wejdzie w widok.
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target) // obserwujemy tylko raz
        }
      })
    },
    { threshold: 0.05 }
  )

  document.querySelectorAll('section:not(#hero), .marquee-strip').forEach(el => observer.observe(el))
})
</script>

<template>
  <NavBar />         <!-- Stały pasek nawigacji na górze -->
  <HeroSection />    <!-- Sekcja powitalna (pełny ekran) -->
  <MarqueeBanner />  <!-- Animowany pasek z technologiami (auto-scroll) -->
  <AboutSection />   <!-- O mnie — zdjęcie, bio, statystyki -->
  <ExperienceSection /> <!-- Doświadczenie — lista rozwijanych wpisów -->
  <EducationSection />  <!-- Edukacja — siatka kart -->
  <SkillsSection />     <!-- Umiejętności — technologie pogrupowane kategoriami -->
  <ProjectsSection />   <!-- Projekty — karty z efektem rozwijania na hover -->
  <CertificatesSection /> <!-- Certyfikaty — lista z rokiem i wydawcą -->
  <HobbiesSection /> <!-- Hobby — sztuki walki, motorsport, sim racing -->
  <ContactSection />    <!-- Kontakt — linki do GitHub/LinkedIn/Email -->
  <FooterSection />     <!-- Stopka z powrotem na górę -->
</template>
