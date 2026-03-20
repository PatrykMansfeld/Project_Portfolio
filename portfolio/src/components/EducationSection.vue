<template>
    <section class="education">
        <div class="education-container">
            <h2 class="section-heading">Edukacja</h2>
            <div class="education-grid">
                <div class="education-card">
                    <span class="education-year">2020 — 2024</span>
                    <h3>Informatyka — Magister</h3>
                    <p class="education-school">Politechnika Warszawska</p>
                    <p>Specjalizacja: Inżynieria oprogramowania. Praca magisterska z zakresu aplikacji webowych.</p>
                </div>
                <div class="education-card">
                    <span class="education-year">2017 — 2020</span>
                    <h3>Informatyka — Licencjat</h3>
                    <p class="education-school">Uniwersytet Jagielloński</p>
                    <p>Podstawy programowania, algorytmy, bazy danych i sieci komputerowe.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.education {
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

.education-container {
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
    background-color: #a78bfa;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.education-card {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 2rem;
}

.education-year {
    display: inline-block;
    background-color: #a78bfa;
    color: #000;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    padding: 0.2rem 0.8rem;
    border: 2px solid #000;
    margin-bottom: 0.8rem;
}

.education-card h3 {
    font-size: 1.4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.3rem;
}

.education-school {
    font-weight: 600;
    margin-bottom: 0.8rem;
    opacity: 0.7;
}

.education-card p {
    font-size: 1.05rem;
    line-height: 1.6;
}
</style>
