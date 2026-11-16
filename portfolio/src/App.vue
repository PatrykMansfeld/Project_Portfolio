<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import JourneySection from './components/JourneySection.vue'
import AboutSection from './components/AboutSection.vue'
import FooterSection from './components/FooterSection.vue'
import LanguagePicker from './components/LanguagePicker.vue'
import { useLang } from './composables/useLang.js'
import { scrollToId } from './utils/scroll.js'

const { langChosen } = useLang()

let observer

// Feeds the cursor position to the hovered card's spotlight (see .card::before).
function onPointerMove(e) {
  const card = e.target instanceof Element ? e.target.closest('.card') : null
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - r.left}px`)
  card.style.setProperty('--my', `${e.clientY - r.top}px`)
}

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

  window.addEventListener('pointermove', onPointerMove, { passive: true })

  // Deep link (e.g. /#projects): the target didn't exist before mount.
  if (location.hash)
    requestAnimationFrame(() => scrollToId(decodeURIComponent(location.hash.slice(1))))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <!-- inert: page behind the language picker can't be focused or clicked -->
  <div class="page" :inert="!langChosen">
    <NavBar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <JourneySection />
      <AboutSection />
    </main>
    <FooterSection />
  </div>
  <LanguagePicker />
</template>
