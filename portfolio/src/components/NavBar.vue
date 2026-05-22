<template>
  <div class="mf-bar">
    <div class="bar-inner">
      <div class="bl">▸ PATRYK MANSFELD · MANIFESTO</div>
      <nav class="bc">
        <template v-for="(item, i) in navItems" :key="item.id">
          <span v-if="i > 0" class="sep"> · </span>
          <a @click.prevent="scrollTo(item.id)" href="#">{{ item.label }}</a>
        </template>
      </nav>
      <div class="br">
        <span>{{ t.hero.available }}</span>
        <span class="sep"> · </span>
        <button class="lang-btn" @click="toggleLang">{{ lang.toUpperCase() }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t, toggleLang } = useLang()

const navItems = computed(() => [
  { id: 'about', label: t.value.nav.about },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'skills', label: t.value.nav.skills },
  { id: 'contact', label: t.value.nav.contact },
])

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 60
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.mf-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

.bar-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.bl {
  color: var(--accent);
  font-weight: 700;
}

.bc {
  text-align: center;
  color: var(--dim);
  width: 800px;
}

.br {
  text-align: right;
  color: var(--dim);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bc a,
.lang-btn {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  padding: 0;
}

.bc a:hover,
.lang-btn:hover {
  color: var(--ink);
}

.sep {
  color: var(--dim2);
}

@media (max-width: 1024px) {
  .bc { display: none; }
  .bar-inner { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 720px) {
  .bar-inner { padding: 14px 18px; font-size: 9.5px; }
}
</style>
