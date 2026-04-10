<!--
  AboutSection.vue — sekcja "O mnie".
  Layout: lewa kolumna (zdjęcie + przyciski social), prawa kolumna (bio + statystyki).
  Żeby wstawić prawdziwe zdjęcie zamień .photo-top na background-image.
  Żeby zmienić linki do GitHub/LinkedIn edytuj href w .about-socials.
-->
<template>
    <section id="about" class="about">
        <!-- Tło z siatką kropek -->
        <div class="about-container">

            <!-- Nagłówek z naklejką dekoracyjną -->
            <div class="about-header">
                <h2 class="about-heading">{{ t.about.heading }}</h2>
                <!-- Dekoracyjna naklejka — ukryta na mobile -->
                <div class="about-sticker">FRONTEND<br>DEV ✦</div>
            </div>

            <div class="about-main">
                <!-- ── Lewa kolumna: zdjęcie + przyciski ── -->
                <div class="about-left">
                    <!-- Zdjęcie profilowe — zamień .photo-top na img lub background-image -->
                    <div class="about-photo">
                        <div class="photo-top">PM</div>
                        <div class="photo-label">{{ t.hero.role }}</div>
                    </div>
                    <!-- Przyciski do mediów społecznościowych -->
                    <div class="about-socials">
                        <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="social-btn">GitHub ↗</a>
                        <a href="https://www.linkedin.com/in/patrykmansfeld" target="_blank" rel="noopener" class="social-btn">LinkedIn ↗</a>
                    </div>
                </div>

                <!-- ── Prawa kolumna: teksty + statystyki ── -->
                <div class="about-right">
                    <!-- Główny cytat / statement — tekst z lewą czerwoną kreską -->
                    <p class="about-statement">{{ t.about.card1Text }}</p>

                    <!-- Dekoracyjny separator (linia + gwiazdka + linia) -->
                    <div class="about-rule">
                        <span class="rule-line"></span>
                        <span class="rule-star">✦</span>
                        <span class="rule-line"></span>
                    </div>

                    <!-- Drugi akapit z opisem -->
                    <p class="about-body">{{ t.about.card2Text }}</p>

                    <!-- Czarny pasek ze statystykami (lata / projekty / technologie) -->
                    <div class="about-facts">
                        <div class="fact-block">
                            <span class="fact-num">4+</span>
                            <span class="fact-label">{{ t.hero.statYears }}</span>
                        </div>
                        <div class="fact-divider"></div>
                        <div class="fact-block">
                            <span class="fact-num">20+</span>
                            <span class="fact-label">{{ t.hero.statProjects }}</span>
                        </div>
                        <div class="fact-divider"></div>
                        <div class="fact-block">
                            <span class="fact-num">20+</span>
                            <span class="fact-label">{{ t.hero.statTech }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
// t — tłumaczenia dla aktualnego języka (PL/EN)
const { t } = useLang()
</script>

<style scoped>
/* Białe tło, pełna wysokość ekranu */
.about {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Subtelna siatka kropek w tle */
.about::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.about-container {
    position: relative;
    z-index: 1; /* nad siatką kropek */
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

/* ── Nagłówek ── */
.about-header {
    position: relative;
    margin-bottom: 3rem;
    display: inline-block;
}

/* Nagłówek sekcji z czerwonym tłem i neobrutalist cieniem */
.about-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* Naklejka z lewej strony nagłówka — obrócona, pojawia się przy hover */
.about-sticker {
    position: absolute;
    top: -1.2rem;
    left: calc(100% + 1.2rem); /* przyklejona tuż za nagłówkiem */
    background-color: #000;
    color: #e9ff70;
    padding: 0.5rem 0.75rem;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.4;
    text-align: center;
    letter-spacing: 0.5px;
    transform: rotate(-5deg);
    transition: transform 0.2s ease;
    white-space: nowrap;
    user-select: none;
    border: 3px solid #000;
}

.about-sticker:hover {
    transform: rotate(0deg) scale(1.06);
}

/* ── Layout główny: 2 kolumny ── */
.about-main {
    display: grid;
    grid-template-columns: 220px 1fr; /* lewa: stała szerokość zdjęcia, prawa: reszta */
    gap: 4rem;
    align-items: start;
}

/* ── Lewa kolumna: zdjęcie + social ── */
.about-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Kontener zdjęcia z neobrutalist cieniem */
.about-photo {
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
}

/* Placeholder zdjęcia — fioletowe tło z inicjałami.
   Żeby wstawić prawdziwe zdjęcie, zamień na:
     background-image: url('/photo.jpg');
     background-size: cover;
     background-position: center; */
.photo-top {
    height: 220px;
    background-color: #a78bfa;
    border-bottom: 3px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -4px;
    color: rgba(0, 0, 0, 0.2);
}

/* Podpis pod zdjęciem */
.photo-label {
    padding: 0.6rem 1rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    background-color: #fff;
}

/* Przyciski do social media — żółte z neobrutalist cieniem */
.about-socials {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.social-btn {
    display: block;
    padding: 0.55rem 1rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
    background-color: #e9ff70;
    text-align: center;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

/* Efekt "wciśnięcia" przycisku */
.social-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #000;
}

/* ── Prawa kolumna: treść ── */
.about-right {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding-top: 0.4rem;
}

/* Główny cytat — wyróżniony lewą czerwoną kreską */
.about-statement {
    font-size: clamp(1.05rem, 2vw, 1.25rem);
    font-weight: 600;
    line-height: 1.65;
    margin: 0;
    border-left: 4px solid #ff5c5c;
    padding-left: 1.2rem;
}

/* Separator poziomy (linia - gwiazdka - linia) */
.about-rule {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.rule-line {
    flex: 1;
    height: 2px;
    background-color: #000;
    opacity: 0.15;
}

.rule-star {
    font-size: 0.9rem;
    opacity: 0.35;
}

/* Drugi akapit — ciemniejszy, mniejszy */
.about-body {
    font-size: 0.97rem;
    line-height: 1.75;
    margin: 0;
    opacity: 0.7;
}

/* Czarny pasek ze statystykami */
.about-facts {
    display: flex;
    align-items: center;
    background-color: #000;
    color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    padding: 1rem 1.4rem;
    gap: 0;
}

.fact-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    flex: 1; /* każdy blok zajmuje równą szerokość */
}

/* Żółta liczba na czarnym tle */
.fact-num {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
    color: #e9ff70;
}

.fact-label {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.55;
    text-align: center;
}

/* Pionowy separator między statystykami */
.fact-divider {
    width: 2px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.15);
}

/* ── Responsive ── */

/* Tablet landscape — węższa lewa kolumna */
@media (max-width: 1024px) {
    .about-main { grid-template-columns: 190px 1fr; gap: 2.5rem; }
}

/* Tablet portrait — jedna kolumna, zdjęcie i social obok siebie */
@media (max-width: 768px) {
    .about { padding: 4rem 1.5rem; }
    .about-sticker { display: none; } /* za mało miejsca dla naklejki */
    .about-main { grid-template-columns: 1fr; gap: 2rem; }
    .about-left {
        flex-direction: row;
        align-items: flex-start;
        gap: 1.5rem;
    }
    .about-photo { width: 150px; flex-shrink: 0; }
    .photo-top { height: 160px; font-size: 3rem; }
    .about-socials {
        flex-direction: column;
        justify-content: flex-end;
        flex: 1;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .about { padding: 3rem 1rem; }
    .about-left { flex-direction: column; } /* zdjęcie nad social */
    .about-photo { width: 130px; }
    .photo-top { height: 130px; }
    .about-socials { flex-direction: row; } /* przyciski obok siebie */
    .about-statement { font-size: 1rem; }
}

@media (max-width: 480px) {
    .about { padding: 2.5rem 1rem; }
    .fact-num { font-size: 1.4rem; }
    .fact-label { font-size: 0.55rem; }
}

@media (max-width: 375px) {
    .about { padding: 2rem 0.85rem; }
    .about-photo { width: 110px; }
    .photo-top { height: 110px; font-size: 2.5rem; }
}
</style>
