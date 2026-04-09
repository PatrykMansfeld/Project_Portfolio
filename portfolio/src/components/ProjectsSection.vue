<template>
    <section id="projects" class="projects">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-heading">{{ t.projects.heading }}</h2>
            </div>

            <div class="projects-list">
                <div
                    class="project-item"
                    v-for="(project, i) in t.projects.items"
                    :key="project.num"
                    :style="`--color: ${thumbColors[i]}`"
                >
                    <!-- Colored strip with outlined number -->
                    <div class="project-strip">
                        <div class="strip-dots"></div>
                        <span class="project-num">{{ project.num }}</span>
                    </div>

                    <!-- Content -->
                    <div class="project-body">
                        <div class="project-top">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <div class="project-tags">
                                <span class="project-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <p class="project-desc">{{ project.description }}</p>
                        <div class="project-links">
                            <a :href="project.demo" class="project-btn project-btn--primary">
                                {{ t.projects.demo }} ↗
                            </a>
                            <a :href="project.github" class="project-btn project-btn--ghost" target="_blank" rel="noopener">
                                {{ t.projects.github }} ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const thumbColors = ['#a78bfa', '#ff5c5c', '#e9ff70']
</script>

<style scoped>
.projects {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #e9ff70;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.projects::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.12) 1.5px, transparent 1.5px);
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
    margin-bottom: 2rem;
}

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* List */
.projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Item */
.project-item {
    display: grid;
    grid-template-columns: 130px 1fr;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.project-item:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

/* Colored strip */
.project-strip {
    position: relative;
    background-color: var(--color, #a78bfa);
    border-right: 3px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
}

.strip-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px);
    background-size: 18px 18px;
}

.project-num {
    font-size: 5.5rem;
    font-weight: 700;
    letter-spacing: -5px;
    line-height: 1;
    -webkit-text-stroke: 2.5px #000;
    color: transparent;
    position: relative;
    z-index: 1;
    user-select: none;
    transition: color 0.2s ease;
}

.project-item:hover .project-num {
    color: rgba(0, 0, 0, 0.15);
}

/* Body */
.project-body {
    padding: 1.8rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    justify-content: center;
}

.project-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.project-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0;
    line-height: 1.1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    flex-shrink: 0;
}

.project-tag {
    background-color: #e9ff70;
    border: 2px solid #000;
    padding: 0.18rem 0.6rem;
    font-weight: 600;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.project-desc {
    font-size: 0.93rem;
    line-height: 1.65;
    margin: 0;
    opacity: 0.65;
    border-left: 3px solid var(--color, #a78bfa);
    padding-left: 0.9rem;
}

.project-links {
    display: flex;
    gap: 0.7rem;
}

.project-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1.1rem;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.project-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #000;
}

.project-btn--primary {
    background-color: #000;
    color: #e9ff70;
}

.project-btn--ghost {
    background-color: transparent;
}

/* Tablet */
@media (max-width: 768px) {
    .projects { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .project-item { grid-template-columns: 100px 1fr; }
    .project-num { font-size: 4rem; letter-spacing: -3px; }
    .project-body { padding: 1.4rem 1.6rem; gap: 0.7rem; }
    .project-top { flex-direction: column; gap: 0.5rem; }
}

/* Mobile */
@media (max-width: 600px) {
    .projects { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .projects-list { gap: 1.2rem; }
    .project-item { grid-template-columns: 76px 1fr; box-shadow: 5px 5px 0 #000; }
    .project-num { font-size: 3rem; letter-spacing: -2px; }
    .project-body { padding: 1.2rem; gap: 0.6rem; }
    .project-title { font-size: 1rem; }
    .project-btn { font-size: 0.74rem; padding: 0.4rem 0.8rem; }
}

@media (max-width: 480px) {
    .projects { padding: 2.5rem 1rem; }
    .project-item { grid-template-columns: 62px 1fr; }
    .project-num { font-size: 2.4rem; letter-spacing: -1.5px; -webkit-text-stroke-width: 2px; }
    .project-desc { font-size: 0.87rem; }
}

@media (max-width: 375px) {
    .projects { padding: 2rem 0.85rem; }
    .project-item { grid-template-columns: 52px 1fr; }
    .project-num { font-size: 2rem; }
}
</style>
