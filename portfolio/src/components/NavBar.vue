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
        <div class="lang-switcher">
          <button
            class="lang-opt"
            :class="{ active: lang === 'pl' }"
            @click="lang === 'en' && toggleLang()"
          >PL</button>
          <span class="lang-sep">/</span>
          <button
            class="lang-opt"
            :class="{ active: lang === 'en' }"
            @click="lang === 'pl' && toggleLang()"
          >EN</button>
        </div>
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

.bc a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.bc a:hover {
  color: var(--ink);
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--line);
  padding: 3px 8px;
  border-radius: 2px;
}

.lang-sep {
  color: var(--dim2);
  font-size: 11px;
}

.lang-opt {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  padding: 0;
  cursor: pointer;
  color: var(--dim2);
  transition: color 0.15s ease;
}

.lang-opt.active {
  color: var(--accent);
  font-weight: 700;
}

.lang-opt:not(.active):hover {
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
