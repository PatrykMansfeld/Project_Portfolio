<template>
    <section class="about">
        <div class="about-container">
            <h2 class="about-heading">O mnie</h2>
            <div class="about-grid">
                <div class="about-card">
                    <h3>Kim jestem</h3>
                    <p>
                        Jestem full-stack developerem z pasją do tworzenia śmiałych i funkcjonalnych
                        aplikacji webowych. Lubię czysty kod, kreatywny design i zamienianie pomysłów
                        w rzeczywistość.
                    </p>
                </div>
                <div class="about-card">
                    <h3>Doświadczenie</h3>
                    <p>
                        Pracowałem nad różnorodnymi projektami — od interaktywnych interfejsów
                        po rozbudowane API backendowe. Zawsze szukam nowych wyzwań i możliwości
                        rozwoju.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.about {
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

.about-container {
    max-width: 960px;
    margin: 0 auto;
}

.about-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
}

.about-card {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 2rem;
}

.about-card h3 {
    font-size: 1.4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.about-card p {
    font-size: 1.05rem;
    line-height: 1.6;
}
</style>
