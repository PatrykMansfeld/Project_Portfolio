<template>
    <section id="hero" class="hero">
        <div class="hero-content">
            <p class="hero-greeting">{{ t.hero.greeting }}</p>
            <h1 class="hero-title">{{ t.hero.name }}</h1>
            <p class="hero-role">{{ t.hero.role }}</p>
            <p class="hero-subtitle">{{ t.hero.subtitle }}</p>
            <button class="hero-button" @click="scrollToProjects">{{ t.hero.btn }}</button>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

function scrollToProjects() {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
    padding-top: 64px;
    background-color: #e9ff70;
    color: #000;
    scroll-snap-align: start;
}

.hero-content {
    text-align: center;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 3rem 4rem;
    max-width: 640px;
    width: calc(100% - 2rem);
}

.hero-greeting {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    opacity: 0.6;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -2px;
    line-height: 1;
}

.hero-role {
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #ff5c5c;
    display: inline-block;
    padding: 0.2rem 0.8rem;
    border: 2px solid #000;
    margin-bottom: 1.2rem;
}

.hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    opacity: 0.7;
}

.hero-button {
    padding: 14px 36px;
    font-size: 1.1rem;
    background-color: #ff5c5c;
    color: #000;
    border: 3px solid #000;
    box-shadow: 5px 5px 0px #000;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: box-shadow 0.1s ease, transform 0.1s ease;
}

.hero-button:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px #000;
}

.hero-button:active {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px #000;
}

@media (max-width: 768px) {
    .hero-content {
        padding: 2rem 2rem;
        margin: 0 1rem;
    }
    .hero-title {
        font-size: 2.4rem;
    }
    .hero-subtitle {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-content {
        padding: 1.5rem 1.2rem;
    }
    .hero-title {
        font-size: 1.8rem;
    }
    .hero-subtitle {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }
    .hero-button {
        padding: 10px 24px;
        font-size: 0.9rem;
    }
}
</style>
