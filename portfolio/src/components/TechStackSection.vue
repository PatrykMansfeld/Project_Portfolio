<template>
    <section id="techstack" class="techstack">
        <div class="section-container">
            <h2 class="section-heading">{{ t.techStack.heading }}</h2>
            <div class="tech-grid">
                <div class="tech-item" v-for="tech in technologies" :key="tech.name">
                    <span class="tech-icon">{{ tech.icon }}</span>
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
    { name: 'HTML5',      icon: '🌐' },
    { name: 'CSS3',       icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Vue.js',     icon: '💚' },
    { name: 'React',      icon: '⚛️' },
    { name: 'Node.js',    icon: '🟢' },
    { name: 'Express',    icon: '🚂' },
    { name: 'Python',     icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB',    icon: '🍃' },
    { name: 'Docker',     icon: '🐳' },
    { name: 'Git',        icon: '🔀' },
    { name: 'Linux',      icon: '🐧' },
    { name: 'Figma',      icon: '🖌️' },
    { name: 'VS Code',    icon: '💻' },
]
</script>

<style scoped>
.techstack {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-container {
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
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
}

.tech-item {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 5px 5px 0 #000;
    padding: 1.4rem 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: default;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
}

.tech-item:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
    background-color: #e9ff70;
}

.tech-icon {
    font-size: 2.2rem;
    line-height: 1;
}

.tech-name {
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    opacity: 0.8;
}

.tech-item:hover .tech-name {
    opacity: 1;
}

@media (max-width: 768px) {
    .techstack { padding: 3rem 1.5rem; }
    .section-heading { font-size: 2rem; margin-bottom: 2rem; }
    .tech-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 0.8rem; }
}

@media (max-width: 480px) {
    .techstack { padding: 2rem 1rem; }
    .section-heading { font-size: 1.8rem; padding: 0.2rem 0.8rem; }
    .tech-grid { grid-template-columns: repeat(4, 1fr); gap: 0.6rem; }
    .tech-item { padding: 1rem 0.5rem 0.8rem; box-shadow: 3px 3px 0 #000; }
    .tech-icon { font-size: 1.6rem; }
    .tech-name { font-size: 0.62rem; }
}
</style>
