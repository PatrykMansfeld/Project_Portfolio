<template>
    <section class="skills">
        <div class="skills-container">
            <h2 class="section-heading">Umiejętności</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">HTML5</li>
                        <li class="skill-tag">CSS3</li>
                        <li class="skill-tag">JavaScript</li>
                        <li class="skill-tag">TypeScript</li>
                        <li class="skill-tag">Vue.js</li>
                        <li class="skill-tag">React</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Backend</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">Node.js</li>
                        <li class="skill-tag">Express</li>
                        <li class="skill-tag">Python</li>
                        <li class="skill-tag">REST API</li>
                        <li class="skill-tag">PostgreSQL</li>
                        <li class="skill-tag">MongoDB</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Narzędzia</h3>
                    <ul class="skill-list">
                        <li class="skill-tag">Git</li>
                        <li class="skill-tag">Docker</li>
                        <li class="skill-tag">Linux</li>
                        <li class="skill-tag">VS Code</li>
                        <li class="skill-tag">Figma</li>
                        <li class="skill-tag">CI/CD</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.skills {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #ff5c5c;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

.skills-container {
    max-width: 960px;
    margin: 0 auto;
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
    margin: 0 0 1.2rem;
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.skill-tag {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 4px 4px 0px #000;
    padding: 0.4rem 1rem;
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
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
    .skill-tag {
        font-size: 0.85rem;
        padding: 0.3rem 0.7rem;
        box-shadow: 3px 3px 0px #000;
    }
}
</style>
