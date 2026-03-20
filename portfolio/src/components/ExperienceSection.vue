<template>
    <section class="experience">
        <div class="experience-container">
            <h2 class="section-heading">Doświadczenie</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-card">
                        <span class="timeline-date">2024 — Obecnie</span>
                        <h3>Full-Stack Developer</h3>
                        <p class="timeline-company">Firma XYZ</p>
                        <p>Tworzenie aplikacji webowych w Vue.js i Node.js. Projektowanie REST API oraz zarządzanie bazami danych.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-card">
                        <span class="timeline-date">2022 — 2024</span>
                        <h3>Frontend Developer</h3>
                        <p class="timeline-company">Agencja ABC</p>
                        <p>Budowanie responsywnych interfejsów użytkownika. Współpraca z zespołem UX/UI przy wdrażaniu designów.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-card">
                        <span class="timeline-date">2021 — 2022</span>
                        <h3>Junior Developer</h3>
                        <p class="timeline-company">Startup DEF</p>
                        <p>Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.experience {
    height: 100vh;
    padding: 3rem 2rem 2rem;
    background-color: #e9ff70;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.experience-container {
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
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
    flex-shrink: 0;
}

.timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-bottom: 2rem;
    scrollbar-width: none;
}

.timeline::-webkit-scrollbar {
    display: none;
}

.timeline-item {
    display: flex;
}

.timeline-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 2rem;
}

.timeline-date {
    display: inline-block;
    background-color: #ff5c5c;
    color: #000;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    padding: 0.2rem 0.8rem;
    border: 2px solid #000;
    margin-bottom: 0.8rem;
}

.timeline-card h3 {
    font-size: 1.4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.3rem;
}

.timeline-company {
    font-weight: 600;
    margin-bottom: 0.8rem;
    opacity: 0.7;
}

.timeline-card p {
    font-size: 1.05rem;
    line-height: 1.6;
}
</style>
