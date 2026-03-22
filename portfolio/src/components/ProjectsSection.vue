<template>
    <section class="projects">
        <div class="projects-container">
            <h2 class="section-heading">Projekty</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">01</div>
                    <div class="project-info">
                        <h3>E-commerce Platform</h3>
                        <p>Pełny sklep internetowy z koszykiem, płatnościami i panelem admina.</p>
                        <div class="project-tags">
                            <span class="project-tag">Vue.js</span>
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">MongoDB</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-btn">Demo</a>
                            <a href="#" class="project-btn project-btn-alt">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">02</div>
                    <div class="project-info">
                        <h3>Task Manager App</h3>
                        <p>Aplikacja do zarządzania zadaniami z drag & drop i powiadomieniami.</p>
                        <div class="project-tags">
                            <span class="project-tag">React</span>
                            <span class="project-tag">Express</span>
                            <span class="project-tag">PostgreSQL</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-btn">Demo</a>
                            <a href="#" class="project-btn project-btn-alt">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">03</div>
                    <div class="project-info">
                        <h3>Weather Dashboard</h3>
                        <p>Dashboard pogodowy z wykresami, mapami i prognozą na 7 dni.</p>
                        <div class="project-tags">
                            <span class="project-tag">JavaScript</span>
                            <span class="project-tag">API</span>
                            <span class="project-tag">CSS</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-btn">Demo</a>
                            <a href="#" class="project-btn project-btn-alt">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.projects {
    height: 100vh;
    padding: 3rem 2rem 2rem;
    background-color: #e9ff70;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.projects-container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    width: 100%;
}

.section-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
    flex-shrink: 0;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-bottom: 2rem;
}

.project-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    overflow: hidden;
}

.project-image {
    background-color: #a78bfa;
    border-bottom: 3px solid #000;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 900;
    color: #000;
}

.project-info {
    padding: 1.5rem;
}

.project-info h3 {
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.6rem;
}

.project-info > p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
}

.project-tag {
    background-color: #e9ff70;
    border: 2px solid #000;
    padding: 0.2rem 0.7rem;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.project-links {
    display: flex;
    gap: 0.8rem;
}

.project-btn {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    background-color: #ff5c5c;
    border: 3px solid #000;
    box-shadow: 4px 4px 0px #000;
    transition: box-shadow 0.1s ease, transform 0.1s ease;
}

.project-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000;
}

.project-btn-alt {
    background-color: #fff;
    border: 3px solid #000;
}

@media (max-width: 768px) {
    .projects {
        padding: 3rem 1.5rem 2rem;
    }
    .section-heading {
        font-size: 2.2rem;
    }
    .projects-grid {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
    }
    .project-image {
        height: 120px;
    }
}

@media (max-width: 480px) {
    .projects {
        padding: 2rem 1rem 1rem;
        height: auto;
        min-height: 100vh;
    }
    .section-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
        margin-bottom: 1.5rem;
    }
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    .project-card {
        box-shadow: 5px 5px 0px #000;
    }
    .project-image {
        height: 100px;
        font-size: 2rem;
    }
    .project-info {
        padding: 1rem;
    }
    .project-info h3 {
        font-size: 1.1rem;
    }
    .project-info > p {
        font-size: 0.9rem;
    }
    .project-btn {
        padding: 0.4rem 0.9rem;
        font-size: 0.8rem;
        box-shadow: 3px 3px 0px #000;
    }
}
</style>
