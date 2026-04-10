<template>
    <nav class="navbar" :class="{ scrolled: isScrolled }">
        <div class="navbar-inner">
            <button class="navbar-logo" @click="scrollTo('hero')">PM</button>

            <ul class="navbar-links" :class="{ open: menuOpen }">
                <li v-for="item in navItems" :key="item.id">
                    <button
                        class="nav-link"
                        :class="{ active: activeSection === item.id }"
                        @click="scrollTo(item.id)"
                    >{{ item.label }}</button>
                </li>
            </ul>

            <div class="navbar-actions">
                <button class="lang-btn" @click="toggleLang" :title="lang === 'pl' ? 'Switch to English' : 'Zmień na Polski'">
                    <span :class="{ 'lang-active': lang === 'pl' }">PL</span>
                    <span class="lang-sep">/</span>
                    <span :class="{ 'lang-active': lang === 'en' }">EN</span>
                </button>
                <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <div v-if="menuOpen" class="mobile-menu">
            <ul>
                <li v-for="item in navItems" :key="item.id">
                    <button
                        class="mobile-nav-link"
                        :class="{ active: activeSection === item.id }"
                        @click="scrollTo(item.id)"
                    >{{ item.label }}</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t, toggleLang } = useLang()

const menuOpen = ref(false)
const activeSection = ref('hero')
const isScrolled = ref(false)

const sectionIds = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'certificates', 'contact']

const navItems = computed(() => [
    { id: 'about',        label: t.value.nav.about },
    { id: 'experience',   label: t.value.nav.experience },
    { id: 'education',    label: t.value.nav.education },
    { id: 'skills',       label: t.value.nav.skills },
    { id: 'projects',     label: t.value.nav.projects },
    { id: 'certificates', label: t.value.nav.certificates },
    { id: 'contact',      label: t.value.nav.contact },
])

function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    menuOpen.value = false
}

let sectionObserver = null

function handleScroll() {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) activeSection.value = entry.target.id
            })
        },
        { threshold: 0, rootMargin: '-45% 0px -55% 0px' }
    )
    sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) sectionObserver.observe(el)
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    if (sectionObserver) sectionObserver.disconnect()
})
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.navbar.scrolled {
    border-bottom-color: #000;
    box-shadow: 0 4px 0 #000;
    background-color: #fff;
}

.navbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.navbar-logo {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: -1px;
    background-color: #000;
    color: #e9ff70;
    border: 2px solid #000;
    padding: 0.3rem 0.8rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.15s ease, color 0.15s ease;
}

.navbar-logo:hover {
    background-color: #e9ff70;
    color: #000;
}

.navbar-links {
    display: flex;
    align-items: center;
    gap: 0;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-link {
    background: none;
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    cursor: pointer;
    padding: 0.35rem 0.6rem;
    color: #555;
    position: relative;
    transition: color 0.15s ease;
    white-space: nowrap;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0.6rem;
    right: 0.6rem;
    height: 2px;
    background-color: #ff5c5c;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
}

.nav-link:hover {
    color: #000;
}

.nav-link:hover::after,
.nav-link.active::after {
    transform: scaleX(1);
}

.nav-link.active {
    color: #000;
    font-weight: 700;
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    flex-shrink: 0;
}

.lang-btn {
    background-color: #e9ff70;
    border: 2px solid #000;
    box-shadow: 2px 2px 0 #000;
    padding: 0.25rem 0.65rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 1px;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    display: flex;
    gap: 0.25rem;
    align-items: center;
}

.lang-btn:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 #000;
}

.lang-sep { opacity: 0.35; }

.lang-active {
    color: #ff5c5c;
    font-weight: 700;
}

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background-color: #000;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
    border-top: 2px solid #000;
    background-color: #fff;
    padding: 1rem 1.5rem 1.5rem;
}

.mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.mobile-nav-link {
    background: none;
    border: none;
    border-bottom: 1px solid #eee;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.7rem 0;
    color: #000;
    text-align: left;
    width: 100%;
    letter-spacing: 0.5px;
    transition: color 0.15s ease, padding-left 0.15s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    color: #ff5c5c;
    padding-left: 0.6rem;
}

/* Tablet landscape — collapse nav links */
@media (max-width: 900px) {
    .navbar-links { display: none; }
    .hamburger { display: flex; }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .navbar-inner { padding: 0 1.2rem; gap: 0.7rem; }
    .mobile-menu { padding: 0.8rem 1.2rem 1.2rem; }
    .mobile-nav-link { font-size: 0.95rem; padding: 0.65rem 0; }
}

/* Mobile */
@media (max-width: 480px) {
    .navbar-inner { height: 56px; padding: 0 1rem; }
    .navbar-logo { font-size: 1rem; padding: 0.25rem 0.65rem; }
    .lang-btn { font-size: 0.68rem; padding: 0.22rem 0.55rem; }
    .mobile-menu { padding: 0.7rem 1rem 1.1rem; }
    .mobile-nav-link { font-size: 0.88rem; }
}

/* Very small phones */
@media (max-width: 375px) {
    .navbar-inner { height: 52px; padding: 0 0.85rem; }
    .navbar-logo { font-size: 0.92rem; padding: 0.2rem 0.55rem; }
    .hamburger span { width: 20px; }
}
</style>
