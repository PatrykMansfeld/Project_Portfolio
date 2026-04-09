<template>
    <section id="skills" class="skills">
        <div class="skills-container">
            <h2 class="section-heading">{{ t.skills.heading }}</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>{{ t.skills.frontend }}</h3>
                    <ul class="skill-list">
                        <li class="skill-item" v-for="skill in frontendSkills" :key="skill.name">
                            <span class="skill-name">{{ skill.name }}</span>
                            <span class="skill-dots">
                                <span
                                    class="dot"
                                    v-for="n in 5"
                                    :key="n"
                                    :class="{ filled: n <= skill.level }"
                                ></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>{{ t.skills.backend }}</h3>
                    <ul class="skill-list">
                        <li class="skill-item" v-for="skill in backendSkills" :key="skill.name">
                            <span class="skill-name">{{ skill.name }}</span>
                            <span class="skill-dots">
                                <span
                                    class="dot"
                                    v-for="n in 5"
                                    :key="n"
                                    :class="{ filled: n <= skill.level }"
                                ></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>{{ t.skills.tools }}</h3>
                    <ul class="skill-list">
                        <li class="skill-item" v-for="skill in toolSkills" :key="skill.name">
                            <span class="skill-name">{{ skill.name }}</span>
                            <span class="skill-dots">
                                <span
                                    class="dot"
                                    v-for="n in 5"
                                    :key="n"
                                    :class="{ filled: n <= skill.level }"
                                ></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const frontendSkills = [
    { name: 'HTML5',      level: 5 },
    { name: 'CSS3',       level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'Vue.js',     level: 5 },
    { name: 'React',      level: 3 },
]

const backendSkills = [
    { name: 'Node.js',    level: 4 },
    { name: 'Express',    level: 4 },
    { name: 'Python',     level: 3 },
    { name: 'REST API',   level: 5 },
    { name: 'PostgreSQL', level: 4 },
    { name: 'MongoDB',    level: 3 },
]

const toolSkills = [
    { name: 'Git',    level: 5 },
    { name: 'Docker', level: 3 },
    { name: 'Linux',  level: 4 },
    { name: 'Figma',  level: 3 },
    { name: 'CI/CD',  level: 3 },
    { name: 'VS Code', level: 5 },
]
</script>

<style scoped>
.skills {
    height: 100vh;
    padding: 5rem 2rem;
    background-color: #ff5c5c;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skills-container {
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
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.skill-category {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 2rem;
}

.skill-category h3 {
    font-size: 1.4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 1.4rem;
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.skill-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
}

.skill-name {
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
}

.skill-dots {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
}

.dot {
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    background-color: transparent;
    border-radius: 0;
    transition: background-color 0.15s ease;
}

.dot.filled {
    background-color: #ff5c5c;
}

@media (max-width: 768px) {
    .skills {
        padding: 3rem 1.5rem;
    }
    .section-heading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .skills-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .skills {
        padding: 2rem 1rem;
    }
    .section-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
    }
    .skill-category {
        padding: 1.5rem;
        box-shadow: 5px 5px 0px #000;
    }
    .skill-category h3 {
        font-size: 1.2rem;
    }
    .skill-name {
        font-size: 0.8rem;
    }
    .dot {
        width: 10px;
        height: 10px;
    }
}
</style>
