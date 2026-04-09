<template>
    <section id="techstack" class="techstack">
        <div class="section-container">
            <h2 class="section-heading">{{ t.techStack.heading }}</h2>
            <div class="tech-grid">
                <div class="tech-item" v-for="tech in technologies" :key="tech.name">
                    <span class="tech-abbr">{{ tech.abbr }}</span>
                    <span class="tech-name">{{ tech.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const technologies = [
    { name: 'HTML5',      abbr: 'H5'  },
    { name: 'CSS3',       abbr: 'CS'  },
    { name: 'JavaScript', abbr: 'JS'  },
    { name: 'TypeScript', abbr: 'TS'  },
    { name: 'Vue.js',     abbr: 'VUE' },
    { name: 'React',      abbr: 'RCT' },
    { name: 'Node.js',    abbr: 'NOD' },
    { name: 'Express',    abbr: 'EXP' },
    { name: 'Python',     abbr: 'PY'  },
    { name: 'PostgreSQL', abbr: 'SQL' },
    { name: 'MongoDB',    abbr: 'MDB' },
    { name: 'Docker',     abbr: 'DCK' },
    { name: 'Git',        abbr: 'GIT' },
    { name: 'Linux',      abbr: 'LNX' },
    { name: 'Figma',      abbr: 'FIG' },
    { name: 'VS Code',    abbr: 'VSC' },
]
</script>

<style scoped>
.techstack {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.techstack::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.07) 1.5px, transparent 1.5px);
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
    background-color: #e9ff70;
    color: #000;
    padding: 0.3rem 1.2rem;
    border: 3px solid #e9ff70;
    box-shadow: 6px 6px 0 rgba(255, 255, 255, 0.2);
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
}

.tech-item {
    background-color: #111;
    border: 3px solid #333;
    box-shadow: 5px 5px 0 #333;
    padding: 1.4rem 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: default;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
}

.tech-item:hover {
    transform: translate(-2px, -2px);
    background-color: #e9ff70;
    border-color: #e9ff70;
    box-shadow: 7px 7px 0 rgba(233, 255, 112, 0.4);
}

.tech-abbr {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
    color: #e9ff70;
    -webkit-text-stroke: 1.5px #e9ff70;
    transition: color 0.15s ease, -webkit-text-stroke-color 0.15s ease;
}

.tech-item:hover .tech-abbr {
    color: #000;
    -webkit-text-stroke-color: #000;
}

.tech-name {
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    color: rgba(255, 255, 255, 0.55);
    transition: color 0.15s ease;
}

.tech-item:hover .tech-name {
    color: #000;
}

/* Tablet landscape */
@media (max-width: 1024px) {
    .techstack { padding: 4rem 2rem; }
    .tech-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 0.9rem; }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .techstack { padding: 3.5rem 1.5rem; }
    .section-heading { font-size: 2rem; margin-bottom: 2rem; }
    .tech-grid { grid-template-columns: repeat(auto-fill, minmax(95px, 1fr)); gap: 0.8rem; }
    .tech-item { padding: 1.1rem 0.6rem 0.9rem; }
    .tech-abbr { font-size: 1.2rem; }
}

/* Mobile */
@media (max-width: 600px) {
    .techstack { padding: 3rem 1rem; }
    .tech-grid { grid-template-columns: repeat(4, 1fr); gap: 0.7rem; }
    .tech-item { padding: 1rem 0.5rem 0.8rem; box-shadow: 3px 3px 0 #333; }
    .tech-abbr { font-size: 1rem; }
    .tech-name { font-size: 0.62rem; }
}

@media (max-width: 480px) {
    .techstack { padding: 2.5rem 1rem; }
    .section-heading { font-size: 1.8rem; padding: 0.2rem 0.8rem; }
    .tech-grid { grid-template-columns: repeat(4, 1fr); gap: 0.6rem; }
}

/* Very small phones — 3 columns */
@media (max-width: 375px) {
    .techstack { padding: 2rem 0.85rem; }
    .tech-grid { grid-template-columns: repeat(3, 1fr); gap: 0.55rem; }
    .tech-item { padding: 0.85rem 0.4rem 0.7rem; }
    .tech-abbr { font-size: 0.9rem; }
    .tech-name { font-size: 0.58rem; }
}
</style>
