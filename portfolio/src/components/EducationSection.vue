<template>
    <section id="education" class="education">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-heading">{{ t.education.heading }}</h2>
                <p class="section-hint">{{ t.education.tapHint }}</p>
            </div>

            <div class="edu-grid">
                <div
                    class="edu-card"
                    v-for="(edu, index) in t.education.items"
                    :key="index"
                    :class="{ expanded: activeIndex === index }"
                    @click="toggle(index)"
                >
                    <div class="edu-card-accent"></div>
                    <div class="edu-card-inner">
                        <span class="edu-date">{{ edu.date }}</span>
                        <h3 class="edu-title">{{ edu.title }}</h3>
                        <p class="edu-school">{{ edu.school }}</p>
                        <p class="edu-desc" :class="{ visible: activeIndex === index }">
                            {{ edu.description }}
                        </p>
                        <span class="edu-toggle">{{ activeIndex === index ? '−' : '+' }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const activeIndex = ref(null)

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.education {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-container {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    display: inline-block;
    background-color: #a78bfa;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    flex-shrink: 0;
}

.section-hint {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.45;
}

.edu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.8rem;
    align-items: start;
}

.edu-card {
    position: relative;
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.edu-card:hover,
.edu-card.expanded {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

.edu-card-accent {
    height: 6px;
    background-color: #a78bfa;
    border-bottom: 3px solid #000;
}

.edu-card-inner {
    padding: 1.6rem;
    position: relative;
}

.edu-date {
    display: inline-block;
    background-color: #000;
    color: #e9ff70;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.2rem 0.7rem;
    margin-bottom: 0.8rem;
}

.edu-title {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0 0 0.3rem;
    line-height: 1.2;
    padding-right: 2rem;
}

.edu-school {
    font-size: 0.87rem;
    font-weight: 600;
    opacity: 0.6;
    margin: 0;
}

.edu-desc {
    font-size: 0.93rem;
    line-height: 1.65;
    margin-top: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.25s ease, margin-top 0.25s ease;
}

.edu-desc.visible {
    max-height: 150px;
    opacity: 1;
    margin-top: 0.9rem;
    padding-top: 0.9rem;
    border-top: 2px solid rgba(0,0,0,0.15);
}

.edu-toggle {
    display: none;
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1;
    opacity: 0.35;
    transition: opacity 0.15s ease, color 0.15s ease;
}

.edu-card.expanded .edu-toggle {
    opacity: 1;
    color: #7c3aed;
}

@media (hover: hover) {
    .edu-card:hover .edu-toggle {
        opacity: 1;
        color: #7c3aed;
    }

    .edu-card:hover .edu-desc {
        max-height: 150px;
        opacity: 1;
        margin-top: 0.9rem;
        padding-top: 0.9rem;
        border-top: 2px solid rgba(0, 0, 0, 0.15);
    }
}

/* Tablet landscape — keep 2 cols */
@media (max-width: 1024px) {
    .edu-grid { grid-template-columns: repeat(2, 1fr); align-items: start; }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .education { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .edu-grid { grid-template-columns: 1fr; gap: 1.2rem; }
    .edu-card { box-shadow: 5px 5px 0 #000; }
    .edu-toggle { display: block; }
}

/* Mobile */
@media (max-width: 480px) {
    .education { padding: 2.5rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .edu-title { font-size: 1rem; }
    .edu-card-inner { padding: 1.2rem; }
}

/* Very small phones */
@media (max-width: 375px) {
    .education { padding: 2rem 0.85rem; }
    .edu-title { font-size: 0.93rem; }
    .edu-date { font-size: 0.65rem; }
}
</style>
