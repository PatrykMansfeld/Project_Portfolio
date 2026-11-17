<script setup>
import { onMounted } from 'vue'
import LanguagePicker from './components/layout/LanguagePicker.vue'
import NavBar from './components/layout/NavBar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import AboutSection from './components/sections/AboutSection.vue'
import CareerSection from './components/sections/CareerSection.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import { useCardSpotlight } from './composables/useCardSpotlight.js'
import { useLang } from './composables/useLang.js'
import { useScrollReveal } from './composables/useScrollReveal.js'
import { scrollToCurrentHash } from './utils/scroll.js'

const { langChosen } = useLang()

useScrollReveal()
useCardSpotlight()
onMounted(() => requestAnimationFrame(scrollToCurrentHash))
</script>

<template>
  <!-- inert: the page behind the language picker can't be focused or clicked -->
  <div class="page" :inert="!langChosen">
    <NavBar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <CareerSection />
      <AboutSection />
    </main>
    <SiteFooter />
  </div>
  <LanguagePicker />
</template>
