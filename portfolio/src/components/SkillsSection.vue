<template>
    <section id="skills" class="skills">
        <div class="section-container">
            <h2 class="section-heading">{{ t.skills.heading }}</h2>

            <div class="skills-list">
                <div class="skill-row" v-for="(cat, i) in categories" :key="i">
                    <div class="skill-row-left">
                        <span class="skill-num">{{ String(i + 1).padStart(2, '0') }}</span>
                        <h3 class="skill-cat">{{ cat.label }}</h3>
                    </div>
                    <ul class="skill-tags">
                        <li class="skill-tag" v-for="skill in cat.skills" :key="skill">{{ skill }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const categories = computed(() => [
    {
        label: t.value.skills.frontend,
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue.js', 'React'],
    },
    {
        label: t.value.skills.backend,
        skills: ['Node.js', 'Express', 'Python', 'REST API', 'PostgreSQL', 'MongoDB'],
    },
    {
        label: t.value.skills.tools,
        skills: ['Git', 'Docker', 'Linux', 'Figma', 'CI/CD', 'VS Code'],
    },
])
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
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* List */
.skills-list {
    display: flex;
    flex-direction: column;
}

.skill-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    padding: 2rem 0;
    border-top: 3px solid #000;
    align-items: start;
}

.skill-row:last-child {
    border-bottom: 3px solid #000;
}

/* Left: number + label */
.skill-row-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skill-num {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -4px;
    line-height: 1;
    -webkit-text-stroke: 2px #000;
    color: transparent;
    user-select: none;
}

.skill-cat {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    background-color: #000;
    color: #fff;
    padding: 0.25rem 0.8rem;
    width: fit-content;
}

/* Right: tags */
.skill-tags {
    list-style: none;
    padding: 0.6rem 0 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background-color: #fff;
    border: 2px solid #000;
    padding: 0.4rem 0.9rem;
    font-weight: 600;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    cursor: default;
    transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease, color 0.1s ease;
}

.skill-tag:hover {
    background-color: #000;
    color: #e9ff70;
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
}

/* Tablet */
@media (max-width: 768px) {
    .skills { padding: 3.5rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .skill-row { grid-template-columns: 140px 1fr; gap: 1.5rem; padding: 1.8rem 0; }
    .skill-num { font-size: 3.5rem; }
}

/* Mobile — stack */
@media (max-width: 600px) {
    .skills { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .skill-row { grid-template-columns: 1fr; gap: 0.8rem; padding: 1.5rem 0; }
    .skill-row-left { flex-direction: row; align-items: center; gap: 1rem; }
    .skill-num { font-size: 3rem; letter-spacing: -2px; }
    .skill-tags { padding-top: 0; }
}

@media (max-width: 480px) {
    .skills { padding: 2.5rem 1rem; }
    .section-heading { font-size: 1.8rem; padding: 0.2rem 0.8rem; }
    .skill-num { font-size: 2.5rem; }
    .skill-tag { font-size: 0.76rem; padding: 0.32rem 0.7rem; }
}

@media (max-width: 375px) {
    .skills { padding: 2rem 0.85rem; }
    .skill-num { font-size: 2.2rem; }
    .skill-tag { font-size: 0.72rem; padding: 0.28rem 0.55rem; }
}
</style>
