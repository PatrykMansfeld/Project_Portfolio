<!--
  ExperienceSection.vue — sekcja "Doświadczenie".
  Wyświetla listę miejsc pracy. Kliknięcie w wiersz (lub hover na desktop)
  rozwija opis stanowiska.
  Dane edytujesz w useLang.js → experience.jobs (PL) i experience.jobs (EN).
-->
<template>
    <section id="experience" class="experience">
        <div class="section-container">

            <div class="section-header">
                <h2 class="section-heading">{{ t.experience.heading }}</h2>
            </div>

            <!-- Lista wpisów doświadczenia — iteracja po tablicy z tłumaczeń -->
            <div class="jobs-list">
                <div
                    class="job-row"
                    v-for="(job, index) in t.experience.jobs"
                    :key="index"
                    :class="{ expanded: activeIndex === index }"
                    @click="toggle(index)"
                >
                    <!-- Duży numer wiersza (01, 02, ...) — outline gdy zaznaczony -->
                    <div class="job-num">{{ String(index + 1).padStart(2, '0') }}</div>

                    <div class="job-content">
                        <!-- Meta: data + nazwa firmy -->
                        <div class="job-meta">
                            <span class="job-date">{{ job.date }}</span>
                            <span class="job-company">{{ job.company }}</span>
                        </div>
                        <!-- Tytuł stanowiska -->
                        <h3 class="job-title">{{ job.title }}</h3>
                        <!-- Opis — ukryty, pojawia się po kliknięciu / hover -->
                        <p class="job-desc" :class="{ visible: activeIndex === index }">
                            {{ job.description }}
                        </p>
                    </div>

                    <!-- Przycisk +/− widoczny na mobile (zamiast hover) -->
                    <span class="job-toggle">{{ activeIndex === index ? '−' : '+' }}</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

// Index aktualnie otwartego wiersza (null = żaden nie jest otwarty)
const activeIndex = ref(null)

// Toggle: kliknięcie otwartego wiersza zamyka go, kliknięcie innego otwiera go
function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Żółte tło sekcji */
.experience {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #e9ff70;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Siatka kropek w tle */
.experience::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.12) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.section-container {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    margin-bottom: 0;
}

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    margin-bottom: 2rem;
}

/* Lista wpisów — pionowa kolumna z separator-liniami */
.jobs-list {
    display: flex;
    flex-direction: column;
}

/* Jeden wiersz pracy — 3-kolumnowy grid: numer | treść | toggle */
.job-row {
    display: grid;
    grid-template-columns: 96px 1fr auto;
    align-items: start;
    gap: 1.8rem;
    padding: 2rem 0;
    border-top: 3px solid #000;
    cursor: pointer;
}

.job-row:last-child {
    border-bottom: 3px solid #000;
}

/* Duży numer — domyślnie transparentny, przy zaznaczeniu czerwony */
.job-num {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -4px;
    line-height: 1;
    -webkit-text-stroke: 2px #000; /* tylko obrys, fill transparentny */
    color: transparent;
    user-select: none;
    transition: color 0.2s ease, -webkit-text-stroke-color 0.2s ease;
    padding-top: 0.15rem;
    flex-shrink: 0;
}

/* Zaznaczony wiersz — czerwony numer */
.job-row.expanded .job-num {
    color: #ff5c5c;
    -webkit-text-stroke-color: #ff5c5c;
}

/* Hover tylko na urządzeniach z myszką (nie ma hover na touch) */
@media (hover: hover) {
    .job-row:hover .job-num {
        color: #000;
        -webkit-text-stroke-color: #000;
    }
}

/* Blok z datą, firmą, tytułem i opisem */
.job-content {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-top: 0.6rem;
}

.job-meta {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
}

/* Badge z datą — czerwone tło */
.job-date {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #ff5c5c;
    color: #000;
    padding: 0.15rem 0.6rem;
    border: 2px solid #000;
}

.job-company {
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.5;
}

.job-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0.1rem 0 0;
    line-height: 1.1;
}

/* Opis — domyślnie ukryty (max-height: 0).
   Klasa 'visible' (lub hover) otwiera go animacją max-height + opacity. */
.job-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    margin-top: 0;
    transition: max-height 0.35s ease, opacity 0.25s ease, margin-top 0.25s ease;
}

.job-desc.visible {
    max-height: 200px; /* wystarczająco duże żeby zmieścić opis */
    opacity: 1;
    margin-top: 0.8rem;
}

/* Na desktop hover też pokazuje opis (bez klikania) */
@media (hover: hover) {
    .job-row:hover .job-desc {
        max-height: 200px;
        opacity: 1;
        margin-top: 0.8rem;
    }
}

/* Przycisk +/− — tylko na mobile (na desktop jest hover) */
.job-toggle {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1;
    opacity: 0.35;
    padding-top: 0.7rem;
    flex-shrink: 0;
    transition: opacity 0.15s ease, color 0.15s ease;
    display: none; /* ukryty na desktop */
}

.job-row.expanded .job-toggle {
    opacity: 1;
    color: #ff5c5c;
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .experience { padding: 4rem 1.5rem; }
    .job-row { grid-template-columns: 72px 1fr auto; gap: 1.2rem; }
    .job-num { font-size: 3.5rem; }
    .section-heading { font-size: 2rem; }
}

@media (max-width: 600px) {
    .experience { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .job-row { grid-template-columns: 56px 1fr auto; gap: 1rem; padding: 1.5rem 0; }
    .job-num { font-size: 2.8rem; letter-spacing: -2px; }
    .job-title { font-size: 1rem; }
    .job-toggle { display: block; } /* pokazujemy +/− na mobile */
}

@media (max-width: 480px) {
    .experience { padding: 2.5rem 1rem; }
    .job-row { grid-template-columns: 48px 1fr auto; gap: 0.8rem; }
    .job-num { font-size: 2.4rem; }
}

@media (max-width: 375px) {
    .experience { padding: 2rem 0.85rem; }
    .job-row { grid-template-columns: 40px 1fr auto; gap: 0.7rem; }
    .job-num { font-size: 2rem; letter-spacing: -1.5px; }
    .job-title { font-size: 0.93rem; }
}
</style>
