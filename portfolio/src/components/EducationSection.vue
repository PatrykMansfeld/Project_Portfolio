<!--
  EducationSection.vue — sekcja "Edukacja".
  Wyświetla karty edukacji w siatce 2-kolumnowej.
  Dane edytujesz w useLang.js → education.items (PL) i education.items (EN).
  Każdy wpis ma: date, title, school, description.
-->
<template>
    <section id="education" class="education">
        <div class="section-container">

            <div class="section-header">
                <h2 class="section-heading">{{ t.education.heading }}</h2>
            </div>

            <!-- Siatka kart — 2 kolumny na desktop, 1 na mobile -->
            <div class="edu-grid">
                <div class="edu-card" v-for="(edu, index) in t.education.items" :key="index">
                    <!-- Nagłówek karty: skrót (MSc/BSc) + badge z datą -->
                    <div class="edu-card-header">
                        <!-- Skrót wyznaczany automatycznie na podstawie tytułu -->
                        <span class="edu-abbr">{{ getAbbr(edu.title) }}</span>
                        <span class="edu-date-badge">{{ edu.date }}</span>
                    </div>
                    <!-- Treść karty -->
                    <div class="edu-card-body">
                        <p class="edu-school">{{ edu.school }}</p>
                        <h3 class="edu-title">{{ edu.title }}</h3>
                        <p class="edu-desc">{{ edu.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

// Wyznacza skrót (MSc/BSc/EDU) na podstawie tytułu stopnia.
// Obsługuje zarówno polskie jak i angielskie tytuły.
// Żeby dodać nowe skróty, rozszerz warunki if.
function getAbbr(title) {
    const lower = title.toLowerCase()
    if (lower.includes('magister') || lower.includes('msc')) return 'MSc'
    if (lower.includes('licencjat') || lower.includes('bsc')) return 'BSc'
    return 'EDU' // domyślny skrót dla innych tytułów
}
</script>

<style scoped>
/* Białe tło sekcji */
.education {
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
.education::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.section-container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    margin-bottom: 2.5rem;
}

/* Nagłówek z fioletowym tłem */
.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    display: inline-block;
    background-color: #a78bfa;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* ── Siatka kart ── */
.edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 karty obok siebie */
    gap: 2rem;
    align-items: start;
}

/* Karta edukacji — biała z cieniem neobrutalist */
.edu-card {
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
    background-color: #fff;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* Efekt "uniesienia" karty na hover */
.edu-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

/* Nagłówek karty — fioletowe tło z dużym skrótem (MSc/BSc) */
.edu-card-header {
    background-color: #a78bfa;
    border-bottom: 3px solid #000;
    padding: 1.6rem 1.8rem 1.2rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
}

/* Duży skrót tytułu — efekt outline (tylko obrys liter) */
.edu-abbr {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -4px;
    line-height: 1;
    -webkit-text-stroke: 2.5px #000;
    color: transparent;
    user-select: none;
}

/* Badge z zakresem dat — czarne tło, żółty tekst */
.edu-date-badge {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #000;
    color: #e9ff70;
    padding: 0.2rem 0.6rem;
    white-space: nowrap;
    align-self: flex-start; /* przyklejony do góry nagłówka */
}

/* Treść karty */
.edu-card-body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.edu-school {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
    margin: 0;
}

/* Tytuł stopnia — oddzielony cienką linią od opisu */
.edu-title {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.3px;
    margin: 0.2rem 0 0.6rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    line-height: 1.3;
}

.edu-desc {
    font-size: 0.9rem;
    line-height: 1.65;
    margin: 0;
    opacity: 0.65;
}

/* ── Responsive ── */

@media (max-width: 1024px) {
    .edu-grid { gap: 1.5rem; }
}

@media (max-width: 768px) {
    .education { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .edu-abbr { font-size: 4rem; }
    .edu-card-header { padding: 1.3rem 1.5rem 1rem; }
    .edu-card-body { padding: 1.4rem; }
}

/* Mobile — przechodzi na 1 kolumnę */
@media (max-width: 640px) {
    .education { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .edu-grid { grid-template-columns: 1fr; gap: 1.4rem; }
    .edu-card { box-shadow: 5px 5px 0 #000; }
}

@media (max-width: 480px) {
    .education { padding: 2.5rem 1rem; }
    .edu-abbr { font-size: 3.5rem; }
    .edu-card-header { padding: 1.2rem 1.3rem 0.9rem; }
    .edu-card-body { padding: 1.2rem; }
    .edu-title { font-size: 0.92rem; }
}

@media (max-width: 375px) {
    .education { padding: 2rem 0.85rem; }
    .edu-abbr { font-size: 3rem; letter-spacing: -3px; }
    .edu-title { font-size: 0.85rem; }
    .edu-desc { font-size: 0.83rem; }
}
</style>
