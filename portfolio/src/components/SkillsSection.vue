<template>
    <section id="skills" class="skills">
        <div class="section-container">
            <h2 class="section-heading">{{ t.skills.heading }}</h2>

            <div class="skills-grid">
                <div class="skill-category">
                    <div class="category-header">
                        <span class="category-num">01</span>
                        <h3>{{ t.skills.frontend }}</h3>
                    </div>
                    <ul class="skill-list">
                        <li class="skill-tag" v-for="skill in frontendSkills" :key="skill">{{ skill }}</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <div class="category-header">
                        <span class="category-num">02</span>
                        <h3>{{ t.skills.backend }}</h3>
                    </div>
                    <ul class="skill-list">
                        <li class="skill-tag" v-for="skill in backendSkills" :key="skill">{{ skill }}</li>
                    </ul>
                </div>

                <div class="skill-category">
                    <div class="category-header">
                        <span class="category-num">03</span>
                        <h3>{{ t.skills.tools }}</h3>
                    </div>
                    <ul class="skill-list">
                        <li class="skill-tag" v-for="skill in toolSkills" :key="skill">{{ skill }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue.js', 'React']
const backendSkills  = ['Node.js', 'Express', 'Python', 'REST API', 'PostgreSQL', 'MongoDB']
const toolSkills     = ['Git', 'Docker', 'Linux', 'Figma', 'CI/CD', 'VS Code']
</script>

<style scoped>
.skills {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #ff5c5c;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skills::before {
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

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.skill-category {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.skill-category:hover {
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 0 #000;
}

.category-header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem 1.4rem;
    border-bottom: 3px solid #000;
    background-color: #000;
    color: #fff;
}

.category-num {
    font-size: 0.7rem;
    font-weight: 700;
    color: #ff5c5c;
    letter-spacing: 1px;
    flex-shrink: 0;
}

.category-header h3 {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
}

.skill-list {
    list-style: none;
    padding: 1.2rem;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background-color: #e9ff70;
    border: 2px solid #000;
    padding: 0.35rem 0.85rem;
    font-weight: 600;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
    cursor: default;
}

.skill-tag:hover {
    background-color: #ff5c5c;
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0 #000;
}

/* Tablet landscape — 2 columns */
@media (max-width: 1024px) {
    .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
    /* Third card spans full width */
    .skill-category:last-child { grid-column: 1 / -1; }
    .skill-list { flex-direction: row; }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .skills { padding: 3.5rem 1.5rem; }
    .skills-grid { grid-template-columns: 1fr; gap: 1.2rem; }
    .skill-category:last-child { grid-column: auto; }
    .skill-category { box-shadow: 5px 5px 0 #000; }
}

/* Mobile */
@media (max-width: 480px) {
    .skills { padding: 2.5rem 1rem; }
    .section-heading { font-size: 1.8rem; padding: 0.2rem 0.8rem; }
    .skill-tag { font-size: 0.76rem; padding: 0.28rem 0.6rem; }
    .category-header h3 { font-size: 0.82rem; }
}

/* Very small phones */
@media (max-width: 375px) {
    .skills { padding: 2rem 0.85rem; }
    .skill-tag { font-size: 0.72rem; padding: 0.25rem 0.5rem; }
}
</style>
