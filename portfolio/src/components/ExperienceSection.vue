<template>
    <section class="experience">
        <div class="experience-container">
            <h2 class="section-heading">Doświadczenie</h2>
            <div class="cubes-grid">
                <div class="cube" v-for="(job, index) in jobs" :key="index">
                    <div class="cube-inner">
                        <div class="cube-front">
                            <span class="cube-date">{{ job.date }}</span>
                            <h3>{{ job.title }}</h3>
                            <p class="cube-company">{{ job.company }}</p>
                        </div>
                        <div class="cube-details">
                            <span class="cube-date">{{ job.date }}</span>
                            <h3>{{ job.title }}</h3>
                            <p class="cube-company">{{ job.company }}</p>
                            <p class="cube-description">{{ job.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    date: '2024 — Obecnie',
                    title: 'Full-Stack Developer',
                    company: 'Firma XYZ',
                    description: 'Tworzenie aplikacji webowych w Vue.js i Node.js. Projektowanie REST API oraz zarządzanie bazami danych.'
                },
                {
                    date: '2022 — 2024',
                    title: 'Frontend Developer',
                    company: 'Agencja ABC',
                    description: 'Budowanie responsywnych interfejsów użytkownika. Współpraca z zespołem UX/UI przy wdrażaniu designów.'
                },
                {
                    date: '2021 — 2022',
                    title: 'Junior Developer',
                    company: 'Startup DEF',
                    description: 'Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.'
                },
                {
                    date: '2021 — 2022',
                    title: 'Junior Developer',
                    company: 'Startup DEF',
                    description: 'Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.'
                },
                {
                    date: '2021 — 2022',
                    title: 'Junior Developer',
                    company: 'Startup DEF',
                    description: 'Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.'
                },
                {
                    date: '2021 — 2022',
                    title: 'Junior Developer',
                    company: 'Startup DEF',
                    description: 'Nauka technologii webowych w praktyce. Udział w projektach wewnętrznych i wdrażanie poprawek.'
                }
            ]
        }
    }
}
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

.cubes-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
}

.cube {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1;
}

.cube:hover {
    width: 360px;
    height: 320px;
    z-index: 10;
}

.cube-inner {
    width: 100%;
    height: 100%;
    position: relative;
}

.cube-front {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    transition: opacity 0.2s ease;
}

.cube:hover .cube-front {
    opacity: 0;
    pointer-events: none;
    position: absolute;
}

.cube-details {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease 0.15s;
    overflow: hidden;
}

.cube:hover .cube-details {
    opacity: 1;
    pointer-events: auto;
}

.cube-date {
    display: inline-block;
    background-color: #ff5c5c;
    color: #000;
    font-weight: 800;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0.15rem 0.6rem;
    border: 2px solid #000;
    margin-bottom: 0.6rem;
}

.cube-front h3 {
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.2rem;
    line-height: 1.2;
}

.cube-details h3 {
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.2rem;
    line-height: 1.2;
}

.cube-company {
    font-weight: 600;
    font-size: 0.9rem;
    opacity: 0.7;
    margin: 0;
}

.cube-details .cube-company {
    margin-bottom: 0.8rem;
}

.cube-description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}

.cube-front .cube-company {
    margin-bottom: 0;
}
</style>
