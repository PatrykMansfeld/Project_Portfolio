<template>
  <nav class="cn-rail">
    <div class="cn-rail-l">
      <span class="mark">PM</span>
      <span>PATRYK <span class="red">MANSFELD</span></span>
    </div>
    <div class="cn-rail-c">
      <a v-for="item in navItems" :key="item.id" @click="scrollTo(item.id)">
        <span class="n">{{ item.n }}</span>{{ item.label }}
      </a>
    </div>
    <div class="cn-rail-r">
      <span class="dot" />
      <span>{{ t.hero.available }}</span>
      <span style="opacity:0.5">·</span>
      <button class="lang-toggle" @click="toggleLang">{{ lang.toUpperCase() }}</button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t, toggleLang } = useLang()

const navItems = computed(() => [
  { id: 'about',        n: '01', label: t.value.nav.about },
  { id: 'experience',   n: '02', label: t.value.nav.experience },
  { id: 'education',    n: '03', label: t.value.nav.education },
  { id: 'skills',       n: '04', label: t.value.nav.skills },
  { id: 'projects',     n: '05', label: t.value.nav.projects },
  { id: 'certificates', n: '06', label: t.value.nav.certificates },
  { id: 'hobbies',      n: '07', label: t.value.nav.hobbies },
  { id: 'contact',      n: '08', label: t.value.nav.contact },
])

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.lang-toggle {
  background: none;
  border: none;
  color: var(--cream);
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 0;
  transition: color 0.15s;
}
.lang-toggle:hover { color: var(--red); }
</style>
