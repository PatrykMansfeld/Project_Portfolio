<template>
    <section id="education" class="education">
        <div class="section-container">

            <div class="section-header">
                <h2 class="section-heading">{{ t.education.heading }}</h2>
            </div>

            <div class="edu-grid">
                <div class="edu-card" v-for="(edu, index) in t.education.items" :key="index">
                    <div class="edu-card-header">
                        <span class="edu-abbr">{{ getAbbr(edu.title) }}</span>
                        <span class="edu-date-badge">{{ edu.date }}</span>
                    </div>
                    <div class="edu-card-body">
                        <p class="edu-school">{{ edu.school }}</p>
                        <h3 class="edu-title">{{ edu.title }}</h3>
                        <p class="edu-desc">{{ edu.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

function getAbbr(title) {
    const lower = title.toLowerCase()
    if (lower.includes('magister') || lower.includes('msc')) return 'MSc'
    if (lower.includes('licencjat') || lower.includes('bsc')) return 'BSc'
    return 'EDU'
}
</script>

<style scoped>
.education {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.education::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.section-container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    margin-bottom: 2.5rem;
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
}

/* Grid */
.edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
}

/* Card */
.edu-card {
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
    background-color: #fff;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.edu-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

/* Card header with big abbr */
.edu-card-header {
    background-color: #a78bfa;
    border-bottom: 3px solid #000;
    padding: 1.6rem 1.8rem 1.2rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
}

.edu-abbr {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -4px;
    line-height: 1;
    -webkit-text-stroke: 2.5px #000;
    color: transparent;
    user-select: none;
}

.edu-date-badge {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #000;
    color: #e9ff70;
    padding: 0.2rem 0.6rem;
    white-space: nowrap;
    align-self: flex-start;
}

/* Card body */
.edu-card-body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.edu-school {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
    margin: 0;
}

.edu-title {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.3px;
    margin: 0.2rem 0 0.6rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    line-height: 1.3;
}

.edu-desc {
    font-size: 0.9rem;
    line-height: 1.65;
    margin: 0;
    opacity: 0.65;
}

/* Tablet landscape */
@media (max-width: 1024px) {
    .edu-grid { gap: 1.5rem; }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .education { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .edu-abbr { font-size: 4rem; }
    .edu-card-header { padding: 1.3rem 1.5rem 1rem; }
    .edu-card-body { padding: 1.4rem; }
}

/* Mobile — 1 col */
@media (max-width: 640px) {
    .education { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .edu-grid { grid-template-columns: 1fr; gap: 1.4rem; }
    .edu-card { box-shadow: 5px 5px 0 #000; }
}

@media (max-width: 480px) {
    .education { padding: 2.5rem 1rem; }
    .edu-abbr { font-size: 3.5rem; }
    .edu-card-header { padding: 1.2rem 1.3rem 0.9rem; }
    .edu-card-body { padding: 1.2rem; }
    .edu-title { font-size: 0.92rem; }
}

@media (max-width: 375px) {
    .education { padding: 2rem 0.85rem; }
    .edu-abbr { font-size: 3rem; letter-spacing: -3px; }
    .edu-title { font-size: 0.85rem; }
    .edu-desc { font-size: 0.83rem; }
}
</style>
