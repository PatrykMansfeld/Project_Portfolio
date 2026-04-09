<template>
    <section id="projects" class="projects">
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-heading">{{ t.projects.heading }}</h2>
            </div>

            <div class="projects-grid">
                <div class="project-card" v-for="(project, i) in t.projects.items" :key="project.num">
                    <!-- Thumbnail -->
                    <div class="project-thumb" :style="`--color: ${thumbColors[i]}`">
                        <span class="project-num">{{ project.num }}</span>
                        <div class="project-thumb-bg"></div>
                    </div>

                    <!-- Body -->
                    <div class="project-body">
                        <h3 class="project-title">{{ project.title }}</h3>
                        <p class="project-desc">{{ project.description }}</p>

                        <div class="project-tags">
                            <span class="project-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                        </div>

                        <div class="project-links">
                            <a :href="project.demo" class="project-btn project-btn--primary">
                                {{ t.projects.demo }} ↗
                            </a>
                            <a :href="project.github" class="project-btn project-btn--ghost" target="_blank"
                                rel="noopener">
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
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    margin-bottom: 3rem;
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

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

/* Card */
.project-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.project-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

/* Thumb */
.project-thumb {
    position: relative;
    height: 170px;
    background-color: var(--color, #a78bfa);
    border-bottom: 3px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.project-thumb-bg {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}

.project-num {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -4px;
    color: rgba(0, 0, 0, 0.18);
    position: relative;
    z-index: 1;
    line-height: 1;
    user-select: none;
}

/* Body */
.project-body {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1;
}

.project-title {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0;
    line-height: 1.2;
}

.project-desc {
    font-size: 0.93rem;
    line-height: 1.65;
    opacity: 0.75;
    margin: 0;
    flex: 1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.project-tag {
    background-color: #e9ff70;
    border: 2px solid #000;
    padding: 0.2rem 0.65rem;
    font-weight: 600;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.project-links {
    display: flex;
    gap: 0.7rem;
    margin-top: 0.3rem;
}

.project-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1.1rem;
    font-family: inherit;
    font-size: 0.82rem;
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

/* Tablet landscape — force 2 cols */
@media (max-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .projects {
        padding: 4rem 1.5rem;
    }

    .section-heading {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.2rem;
    }

    .project-thumb {
        height: 140px;
    }

    .project-body {
        padding: 1.2rem;
    }

    .project-title {
        font-size: 1rem;
    }
}

/* Mobile — 1 col */
@media (max-width: 600px) {
    .projects {
        padding: 3rem 1rem;
    }

    .section-heading {
        font-size: 1.8rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.3rem;
    }

    .project-card {
        box-shadow: 5px 5px 0 #000;
    }

    .project-thumb {
        height: 130px;
    }
}

@media (max-width: 480px) {
    .projects {
        padding: 2.5rem 1rem;
    }

    .project-body {
        padding: 1rem;
        gap: 0.6rem;
    }

    .project-desc {
        font-size: 0.88rem;
    }

    .project-btn {
        padding: 0.45rem 0.9rem;
        font-size: 0.78rem;
    }
}

@media (max-width: 375px) {
    .projects {
        padding: 2rem 0.85rem;
    }

    .project-thumb {
        height: 110px;
    }

    .project-num {
        font-size: 3.5rem;
    }
}
</style>
