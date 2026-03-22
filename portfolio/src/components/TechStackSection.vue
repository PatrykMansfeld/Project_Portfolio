<template>
    <section class="techstack">
        <div class="techstack-container">
            <h2 class="section-heading">Stack technologiczny</h2>
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
const technologies = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '🔀' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Figma', icon: '🖌️' },
    { name: 'VS Code', icon: '💻' },
]
</script>

<style scoped>
.techstack {
    height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

.techstack-container {
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
}

.section-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #e9ff70;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.2rem;
}

.tech-item {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 5px 5px 0px #000;
    padding: 1.2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    cursor: default;
}

.tech-item:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px #000;
}

.tech-icon {
    font-size: 2rem;
}

.tech-name {
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    text-align: center;
}

@media (max-width: 768px) {
    .techstack {
        padding: 3rem 1.5rem;
    }
    .section-heading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .techstack {
        padding: 2rem 1rem;
    }
    .section-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
    }
    .tech-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.8rem;
    }
    .tech-item {
        padding: 0.8rem 0.6rem;
        box-shadow: 3px 3px 0px #000;
    }
    .tech-icon {
        font-size: 1.6rem;
    }
    .tech-name {
        font-size: 0.7rem;
    }
}
</style>
