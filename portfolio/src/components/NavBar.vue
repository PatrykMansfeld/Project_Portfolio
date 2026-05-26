<template>
  <nav class="cn-navbar">
    <div class="cn-navbar-left">
      <span class="mark">PM</span>
      <span>PATRYK <span class="red">MANSFELD</span></span>
    </div>
    <div class="cn-navbar-center">
      <a v-for="item in navItems" :key="item.id" @click="scrollTo(item.id)">
        <span class="n">{{ item.n }}</span>{{ item.label }}
      </a>
    </div>
    <div class="cn-navbar-right">
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

<style>
.cn-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 48px;
  background: var(--ink);
  color: var(--cream);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 28px;
  gap: 24px;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
}
.cn-navbar::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: var(--red);
}
.cn-navbar-left { display: flex; align-items: center; gap: 14px; }
.cn-navbar-left .mark {
  background: var(--red);
  color: var(--cream);
  width: 28px; height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  letter-spacing: 0;
  font-size: 14px;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
}
.cn-navbar-left .red { color: var(--red); }
.cn-navbar-center {
  display: flex;
  gap: 22px;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
.cn-navbar-center a {
  color: var(--cream);
  text-decoration: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s, color 0.15s;
}
.cn-navbar-center a:hover { opacity: 1; color: var(--red); }
.cn-navbar-center a .n { color: var(--red); margin-right: 6px; }
.cn-navbar-right {
  display: flex;
  gap: 14px;
  justify-content: flex-end;
  align-items: center;
}
.cn-navbar-right .dot { width: 8px; height: 8px; background: var(--red); border-radius: 50%; }

@media (max-width: 1024px) { .cn-navbar-center { display: none; } }
@media (max-width: 720px) { .cn-navbar { padding: 0 14px; } }
</style>

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
