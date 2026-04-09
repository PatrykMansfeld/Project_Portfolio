<template>
    <section id="experience" class="experience">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-heading">{{ t.experience.heading }}</h2>
                <p class="section-hint">{{ t.experience.tapHint }}</p>
            </div>

            <div class="timeline">
                <div
                    class="timeline-item"
                    v-for="(job, index) in t.experience.jobs"
                    :key="index"
                    :class="{ expanded: activeIndex === index }"
                    @click="toggle(index)"
                    @mouseenter="hovered = index"
                    @mouseleave="hovered = null"
                >
                    <div class="timeline-marker">
                        <div class="marker-dot"></div>
                        <div class="marker-line" v-if="index < t.experience.jobs.length - 1"></div>
                    </div>

                    <div class="timeline-card" :class="{ 'is-hovered': hovered === index || activeIndex === index }">
                        <div class="card-top">
                            <div class="card-meta">
                                <span class="card-date">{{ job.date }}</span>
                                <span class="card-company">{{ job.company }}</span>
                            </div>
                            <h3 class="card-title">{{ job.title }}</h3>
                        </div>
                        <p class="card-desc" :class="{ visible: activeIndex === index || hovered === index }">
                            {{ job.description }}
                        </p>
                        <span class="card-toggle">{{ activeIndex === index ? '−' : '+' }}</span>
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
const hovered = ref(null)

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.experience {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #e9ff70;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-container {
    max-width: 800px;
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
    background-color: #fff;
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
    opacity: 0.5;
}

/* Timeline */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.timeline-item {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 1.2rem;
    cursor: pointer;
}

.timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
}

.marker-dot {
    width: 16px;
    height: 16px;
    background-color: #000;
    border: 3px solid #000;
    flex-shrink: 0;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.timeline-item.expanded .marker-dot,
.timeline-item:hover .marker-dot {
    background-color: #ff5c5c;
    transform: scale(1.2);
}

.marker-line {
    width: 3px;
    flex: 1;
    background-color: #000;
    opacity: 0.2;
    min-height: 24px;
    margin-top: 4px;
}

/* Card */
.timeline-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    padding: 1.4rem 1.6rem;
    margin-bottom: 1.2rem;
    position: relative;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.timeline-card.is-hovered {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #000;
}

.card-top {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.card-meta {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
}

.card-date {
    background-color: #ff5c5c;
    color: #000;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.15rem 0.6rem;
    border: 2px solid #000;
}

.card-company {
    font-size: 0.82rem;
    font-weight: 600;
    opacity: 0.55;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.card-title {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0;
}

.card-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    margin-top: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.25s ease, margin-top 0.25s ease;
}

.card-desc.visible {
    max-height: 200px;
    opacity: 1;
    margin-top: 0.8rem;
}

.card-toggle {
    position: absolute;
    top: 1.2rem;
    right: 1.4rem;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1;
    opacity: 0.4;
    transition: opacity 0.15s ease, transform 0.2s ease;
}

.timeline-card.is-hovered .card-toggle {
    opacity: 1;
}

.timeline-item.expanded .card-toggle {
    opacity: 1;
    transform: rotate(0deg);
    color: #ff5c5c;
}

/* Responsive */
@media (max-width: 600px) {
    .experience { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .timeline-item { grid-template-columns: 24px 1fr; gap: 0.8rem; }
    .marker-dot { width: 12px; height: 12px; }
    .timeline-card { padding: 1rem 1.2rem; box-shadow: 4px 4px 0 #000; }
    .card-title { font-size: 1rem; }
}
</style>
