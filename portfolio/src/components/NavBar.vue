<template>
  <header class="nav" :class="{ scrolled: scrolled || menuOpen }">
    <div class="container nav-inner">
      <a class="brand" href="#start" @click.prevent="go('start')">
        <span class="brand-mark" aria-hidden="true">PM</span>
        <span class="brand-name">Patryk Mansfeld</span>
      </a>

      <nav class="nav-links" :aria-label="t.nav.label">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="go(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav-actions">
        <button
          class="icon-btn lang-btn"
          type="button"
          :aria-label="t.nav.switchLang"
          @click="toggleLang"
        >
          {{ lang === 'pl' ? 'EN' : 'PL' }}
        </button>
        <button
          class="icon-btn"
          type="button"
          :aria-label="theme === 'dark' ? t.nav.toLight : t.nav.toDark"
          @click="toggleTheme"
        >
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button
          class="icon-btn menu-btn"
          type="button"
          :aria-label="t.nav.menu"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'x' : 'menu'" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-show="menuOpen" id="mobile-menu" class="mobile-menu" :aria-label="t.nav.label">
        <div class="container">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="go(item.id)"
          >
            {{ item.label }}
            <AppIcon name="arrow-right" :size="16" />
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { useLang } from '../composables/useLang.js'
import { useTheme } from '../composables/useTheme.js'
import { scrollToId } from '../utils/scroll.js'

const { lang, t, toggleLang } = useLang()
const { theme, toggleTheme } = useTheme()
const menuOpen = ref(false)
const scrolled = ref(false)

const navItems = computed(() => [
  { id: 'projects', label: t.value.nav.projects },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'about', label: t.value.nav.about },
  { id: 'contact', label: t.value.nav.contact },
])

function go(id) {
  menuOpen.value = false
  scrollToId(id)
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onKeydown(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.2s ease,
    background-color 0.3s ease;
}
.nav.scrolled {
  border-bottom-color: var(--line);
}

.nav-inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: var(--acc);
  color: var(--on-acc);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2px;
}
.nav-links a {
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--muted);
  text-decoration: none;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}
.nav-links a:hover {
  color: var(--text);
  background: var(--hover);
}

.nav-actions {
  display: flex;
  gap: 8px;
}
.lang-btn {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
}
.menu-btn {
  display: none;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 24px 40px -24px rgb(0 0 0 / 0.35);
}
.mobile-menu .container {
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-bottom: 12px;
}
.mobile-menu a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid var(--line);
}
.mobile-menu a:last-child {
  border-bottom: none;
}
.mobile-menu a svg {
  color: var(--muted);
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.25s var(--ease);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 760px) {
  .nav-links {
    display: none;
  }
  .menu-btn {
    display: inline-flex;
  }
}
@media (max-width: 360px) {
  .brand-name {
    display: none;
  }
}
</style>
