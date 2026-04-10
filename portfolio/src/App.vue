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

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05 }
  )

  document.querySelectorAll('section:not(#hero), .marquee-strip').forEach(el => observer.observe(el))
})
</script>

<template>
  <NavBar />
  <HeroSection />
  <MarqueeBanner />
  <AboutSection />
  <ExperienceSection />
  <EducationSection />
  <SkillsSection />
  <ProjectsSection />
  <CertificatesSection />
  <ContactSection />
  <FooterSection />
</template>
