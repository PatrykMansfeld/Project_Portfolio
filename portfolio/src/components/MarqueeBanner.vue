<template>
  <div class="cn-marquee">
    <div class="cn-marquee-track">
      <span v-for="k in 3" :key="k" class="row">
        <span>FULL-STACK</span>
        <span class="sym cir" />
        <span>DEVOPS</span>
        <span class="sym tri" />
        <span>AI</span>
        <span class="sym cir" />
        <span>{{ lang === 'pl' ? 'DOSTĘPNY 2026' : 'AVAILABLE 2026' }}</span>
        <span class="sym tri" />
        <span>POZNAŃ</span>
        <span class="sym cir" />
        <span>20+ {{ lang === 'pl' ? 'PROJEKTÓW' : 'PROJECTS' }}</span>
        <span class="sym tri" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang } = useLang()
</script>
