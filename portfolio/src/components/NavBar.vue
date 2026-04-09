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

        <!-- Mobile overlay -->
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

const sectionIds = ['hero', 'about', 'experience', 'education', 'skills', 'techstack', 'projects', 'certificates', 'contact']

const navItems = computed(() => [
    { id: 'about',        label: t.value.nav.about },
    { id: 'experience',   label: t.value.nav.experience },
    { id: 'education',    label: t.value.nav.education },
    { id: 'skills',       label: t.value.nav.skills },
    { id: 'techstack',    label: t.value.nav.techstack },
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
    background-color: #fff;
    border-bottom: 3px solid transparent;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.navbar.scrolled {
    border-bottom-color: #000;
    box-shadow: 0 4px 0 #000;
}

.navbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
}

.navbar-logo {
    font-size: 1.3rem;
    font-weight: 900;
    letter-spacing: -1px;
    background-color: #000;
    color: #e9ff70;
    border: 3px solid #000;
    padding: 0.2rem 0.7rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: box-shadow 0.1s ease, transform 0.1s ease;
    box-shadow: 4px 4px 0 #e9ff70;
}

.navbar-logo:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 #e9ff70;
}

.navbar-links {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
}

.nav-link {
    background: none;
    border: none;
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    color: #000;
    position: relative;
    transition: color 0.1s ease;
    white-space: nowrap;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    right: 0.5rem;
    height: 3px;
    background-color: #ff5c5c;
    transform: scaleX(0);
    transition: transform 0.15s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    transform: scaleX(1);
}

.navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-shrink: 0;
}

.lang-btn {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 3px 3px 0 #000;
    padding: 0.25rem 0.7rem;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
    letter-spacing: 1px;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    display: flex;
    gap: 0.2rem;
    align-items: center;
}

.lang-btn:hover {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #000;
}

.lang-sep {
    opacity: 0.4;
}

.lang-active {
    color: #ff5c5c;
    text-decoration: underline;
    text-underline-offset: 2px;
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
    width: 24px;
    height: 3px;
    background-color: #000;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
    opacity: 0;
}
.hamburger.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* Mobile menu overlay */
.mobile-menu {
    border-top: 3px solid #000;
    background-color: #fff;
    padding: 1rem 1.5rem 1.5rem;
}

.mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.mobile-nav-link {
    background: none;
    border: none;
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.5rem 0;
    color: #000;
    text-align: left;
    width: 100%;
    border-bottom: 2px solid #f0f0f0;
    transition: color 0.1s ease, padding-left 0.15s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    color: #ff5c5c;
    padding-left: 0.5rem;
}

@media (max-width: 900px) {
    .navbar-links {
        display: none;
    }
    .hamburger {
        display: flex;
    }
}
</style>
