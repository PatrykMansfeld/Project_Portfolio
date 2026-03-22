<template>
    <section class="education">
        <div class="education-container">
            <h2 class="section-heading">Edukacja</h2>
            <div class="cubes-grid">
                <div class="cube" v-for="(edu, index) in educations" :key="index">
                    <div class="cube-inner">
                        <div class="cube-front">
                            <span class="cube-date">{{ edu.date }}</span>
                            <h3>{{ edu.title }}</h3>
                            <p class="cube-school">{{ edu.school }}</p>
                        </div>
                        <div class="cube-details">
                            <span class="cube-date">{{ edu.date }}</span>
                            <h3>{{ edu.title }}</h3>
                            <p class="cube-school">{{ edu.school }}</p>
                            <p class="cube-description">{{ edu.description }}</p>
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
            educations: [
                {
                    date: '2020 — 2024',
                    title: 'Informatyka — Magister',
                    school: 'Politechnika Warszawska',
                    description: 'Specjalizacja: Inżynieria oprogramowania. Praca magisterska z zakresu aplikacji webowych.'
                },
                {
                    date: '2017 — 2020',
                    title: 'Informatyka — Licencjat',
                    school: 'Uniwersytet Jagielloński',
                    description: 'Podstawy programowania, algorytmy, bazy danych i sieci komputerowe.'
                }
            ]
        }
    }
}
</script>

<style scoped>
.education {
    height: 100vh;
    padding: 3rem 2rem 2rem;
    background-color: #fff;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.education-container {
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
    background-color: #a78bfa;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
    flex-shrink: 0;
}

.cubes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: start;
    width: 100%;
}

.cube {
    height: 180px;
    cursor: pointer;
    transition: height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1;
}

.cube:hover {
    height: 300px;
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
    background-color: #e9ff70;
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
    background-color: #e9ff70;
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
    background-color: #a78bfa;
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

.cube-school {
    font-weight: 600;
    font-size: 0.9rem;
    opacity: 0.7;
    margin: 0;
}

.cube-details .cube-school {
    margin-bottom: 0.8rem;
}

.cube-description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}

.cube-front .cube-school {
    margin-bottom: 0;
}
</style>
