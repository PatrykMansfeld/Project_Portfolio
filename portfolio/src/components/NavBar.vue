<template>
  <nav class="cn-navbar">
    <div class="cn-navbar-left" @click="scrollTop" style="cursor:pointer">
      <span class="mark">PM</span>
      <span>PATRYK <span class="red">MANSFELD</span></span>
    </div>
    <div class="cn-navbar-center">
      <a v-for="item in navItems" :key="item.id" @click="scrollTo(item.id)">
        <span class="n">{{ item.n }}</span>{{ item.label }}
      </a>
    </div>
    <div class="cn-navbar-right">
      <span class="dot cn-navbar-avail" />
      <span class="cn-navbar-status">{{ t.hero.available }}</span>
      <span class="cn-navbar-sep" style="opacity:0.5">·</span>
      <button class="lang-toggle" @click="toggleLang" aria-label="Toggle language">
        <span :class="{ active: lang === 'pl' }">PL</span>
        <span class="sep">/</span>
        <span :class="{ active: lang === 'en' }">EN</span>
      </button>
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
  </nav>
  <div class="cn-mobile-menu" :class="{ open: menuOpen }" @click.self="menuOpen = false">
    <div class="cn-mobile-menu-inner">
      <a v-for="item in navItems" :key="item.id" class="cn-mobile-nav-item" @click="scrollTo(item.id)">
        <span class="n">{{ item.n }}</span>
        <span class="lbl">{{ item.label }}</span>
        <span class="arr">▶</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t, toggleLang } = useLang()
const menuOpen = ref(false)

const navItems = computed(() => [
  { id: 'about', n: '01', label: t.value.nav.about },
  { id: 'experience', n: '02', label: t.value.nav.experience },
  { id: 'education', n: '03', label: t.value.nav.education },
  { id: 'skills', n: '04', label: t.value.nav.skills },
  { id: 'projects', n: '05', label: t.value.nav.projects },
  { id: 'certificates', n: '06', label: t.value.nav.certificates },
  { id: 'hobbies', n: '07', label: t.value.nav.hobbies },
  { id: 'contact', n: '08', label: t.value.nav.contact },
])

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  menuOpen.value = false
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background: var(--red);
}

.cn-navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cn-navbar-left .mark {
  background: var(--red);
  color: var(--cream);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  letter-spacing: 0;
  font-size: 14px;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
}

.cn-navbar-left .red {
  color: var(--red);
}

.cn-navbar-center {
  display: flex;
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}

.cn-navbar-center a {
  font-size: 11px;
  color: var(--cream);
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.15s, color 0.15s;
}

.cn-navbar-center a:hover {
  opacity: 1;
  color: var(--red);
}

.cn-navbar-center a .n {
  color: var(--red);
  margin-right: 5px;
}

.cn-navbar-right {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
}

.cn-navbar-right .dot {
  width: 10px;
  height: 10px;
  background: var(--red);
  border-radius: 50%;
}

/* hamburger menu widoczne tylko na urządzeniach mobilnych */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: 32px;
  height: 32px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--cream);
  transition: transform 0.22s ease, opacity 0.15s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* slide down na urządzeniach mobilnych */
.cn-mobile-menu {
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 999;
  background: var(--ink);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.cn-mobile-menu.open {
  max-height: 640px;
}

.cn-mobile-menu-inner {
  border-top: 3px solid var(--red);
  display: flex;
  flex-direction: column;
}

.cn-mobile-nav-item {
  display: grid;
  grid-template-columns: 36px 1fr 24px;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(239, 233, 216, 0.10);
  color: var(--cream);
  text-decoration: none;
  cursor: pointer;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.15s, padding-left 0.15s;
}

.cn-mobile-nav-item:last-child {
  border-bottom: none;
}

.cn-mobile-nav-item:hover {
  background: rgba(216, 40, 26, 0.15);
  padding-left: 28px;
}

.cn-mobile-nav-item .n {
  color: var(--red);
  font-size: 11px;
}

.cn-mobile-nav-item .lbl {
  font-size: 13px;
}

.cn-mobile-nav-item .arr {
  color: var(--red);
  opacity: 0.6;
  justify-self: end;
}

@media (max-width: 1024px) {
  .cn-navbar-center {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .cn-navbar-status,
  .cn-navbar-avail,
  .cn-navbar-sep {
    display: none;
  }
}

@media (max-width: 720px) {
  .cn-navbar {
    padding: 0 14px;
  }
}
</style>

<style scoped>
.lang-toggle {
  background: none;
  border: 1.5px solid rgba(239, 233, 216, 0.3);
  color: var(--cream);
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: border-color 0.15s;
}
.lang-toggle:hover {
  border-color: var(--red);
}
.lang-toggle span {
  opacity: 0.4;
  transition: opacity 0.15s, color 0.15s;
}
.lang-toggle span.active {
  opacity: 1;
  color: var(--cream);
}
.lang-toggle:hover span.active {
  color: var(--red);
}
.lang-toggle .sep {
  opacity: 0.25;
}
</style>
