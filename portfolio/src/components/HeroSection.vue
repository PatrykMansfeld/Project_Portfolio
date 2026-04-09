<template>
    <section id="hero" class="hero">
        <!-- Dot grid background -->
        <div class="hero-dots"></div>

        <div class="hero-inner">
            <!-- Left column -->
            <div class="hero-left">
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    {{ t.hero.available }}
                </div>

                <h1 class="hero-name">
                    <span class="hero-greeting">{{ t.hero.greeting }}</span>
                    <span class="hero-firstname">{{ t.hero.firstname }}</span>
                    <span class="hero-lastname">{{ t.hero.lastname }}</span>
                </h1>

                <div class="hero-role-wrap">
                    <span class="hero-role">{{ t.hero.role }}</span>
                </div>

                <p class="hero-subtitle">{{ t.hero.subtitle }}</p>

                <div class="hero-actions">
                    <button class="hero-btn-primary" @click="scrollToProjects">
                        {{ t.hero.btn }} <span class="btn-arrow">↓</span>
                    </button>
                    <a href="#contact" class="hero-btn-secondary" @click.prevent="scrollToContact">
                        {{ t.hero.contactBtn }}
                    </a>
                </div>
            </div>

            <!-- Right column -->
            <div class="hero-right">
                <div class="hero-card-stack">
                    <div class="hero-photo">
                        <div class="photo-inner">PM</div>
                        <div class="photo-label">{{ t.hero.role }}</div>
                    </div>
                    <div class="hero-sticker">
                        <span>OPEN TO<br>WORK ✦</span>
                    </div>
                </div>

                <div class="hero-stats">
                    <div class="stat-block">
                        <span class="stat-num">3+</span>
                        <span class="stat-label">{{ t.hero.statYears }}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-block">
                        <span class="stat-num">20+</span>
                        <span class="stat-label">{{ t.hero.statProjects }}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-block">
                        <span class="stat-num">10+</span>
                        <span class="stat-label">{{ t.hero.statTech }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 100vh;
    padding-top: 64px;
    background-color: #e9ff70;
    color: #000;
    overflow: hidden;
    display: flex;
    align-items: center;
}

/* Dot grid */
.hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
}

.hero-inner {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 2rem 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem;
    align-items: center;
}

/* LEFT */
.hero-left {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #000;
    color: #e9ff70;
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.4rem 1rem;
    border: 2px solid #000;
    width: fit-content;
}

.badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4ade80;
    display: inline-block;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.hero-name {
    display: flex;
    flex-direction: column;
    line-height: 0.9;
    gap: 0;
}

.hero-greeting {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: 0.4rem;
    opacity: 0.7;
    line-height: 1;
}

.hero-firstname,
.hero-lastname {
    font-size: clamp(3.5rem, 8vw, 6.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: 0.92;
    color: #000;
}

.hero-lastname {
    -webkit-text-stroke: 3px #000;
    color: transparent;
}

.hero-role-wrap {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.hero-role {
    background-color: #ff5c5c;
    color: #000;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.35rem 1rem;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
}

.hero-subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6;
    max-width: 480px;
    color: #000;
    opacity: 0.75;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}

.hero-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2.2rem;
    font-size: 0.95rem;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #000;
    color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    outline: none;
}

.hero-btn-primary:hover {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #000;
}
.hero-btn-primary:active {
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 #000;
}

.btn-arrow {
    font-size: 1.1rem;
    transition: transform 0.2s ease;
}
.hero-btn-primary:hover .btn-arrow {
    transform: translateY(3px);
}

.hero-btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.9rem 2.2rem;
    font-size: 0.95rem;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: transparent;
    color: #000;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
}

.hero-btn-secondary:hover {
    background-color: #fff;
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #000;
}

/* RIGHT */
.hero-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.hero-card-stack {
    position: relative;
}

.hero-photo {
    width: 220px;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 10px 10px 0 #000;
    overflow: hidden;
}

.photo-inner {
    height: 240px;
    background-color: #a78bfa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -4px;
    border-bottom: 3px solid #000;
    /* swap with real photo:
       background-image: url('/photo.jpg');
       background-size: cover; background-position: center; */
}

.photo-label {
    padding: 0.6rem 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}

.hero-sticker {
    position: absolute;
    top: -18px;
    right: -22px;
    background-color: #ff5c5c;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 #000;
    padding: 0.5rem 0.7rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 0.5px;
    transform: rotate(6deg);
    transition: transform 0.2s ease;
}

.hero-sticker:hover {
    transform: rotate(0deg) scale(1.05);
}

.hero-stats {
    width: 220px;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    padding: 1rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0;
}

.stat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
}

.stat-num {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
}

.stat-label {
    font-size: 0.62rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    text-align: center;
}

.stat-divider {
    width: 2px;
    height: 36px;
    background-color: #000;
    opacity: 0.15;
}

/* ── Responsive ── */
@media (max-width: 860px) {
    .hero-inner {
        grid-template-columns: 1fr;
        text-align: left;
        gap: 2.5rem;
        padding: 2rem 1.5rem 3rem;
    }
    .hero-right {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
    }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(3rem, 12vw, 5rem);
    }
}

@media (max-width: 480px) {
    .hero-inner {
        padding: 1.5rem 1rem 2.5rem;
    }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(2.4rem, 14vw, 3.5rem);
        letter-spacing: -2px;
    }
    .hero-subtitle {
        font-size: 0.95rem;
    }
    .hero-btn-primary,
    .hero-btn-secondary {
        padding: 0.75rem 1.5rem;
        font-size: 0.85rem;
    }
    .hero-photo {
        width: 180px;
    }
    .photo-inner {
        height: 190px;
        font-size: 3rem;
    }
    .hero-stats {
        width: 180px;
    }
    .stat-num {
        font-size: 1.3rem;
    }
}
</style>
