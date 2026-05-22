<template>
    <section id="projects" class="projects">
        <div class="section-rule"><span class="section-rule-text">{{ t.projects.rule }}</span></div>
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-heading">{{ t.projects.heading }}</h2>
            </div>

            <!-- Lista kart projektów -->
            <div class="projects-list">
                <div
                    class="project-item"
                    v-for="(project, i) in t.projects.items"
                    :key="project.num"
                    :style="`--color: ${thumbColors[i]}`"
                    :class="{ 'is-expanded': expanded === i }"
                    @mouseenter="expanded = i"
                    @mouseleave="expanded = null"
                    @click="expanded = expanded === i ? null : i"
                >
                    <!-- Kolorowy pasek boczny z numerem projektu -->
                    <div class="project-strip">
                        <!-- Siatka kropek na pasku (czysto CSS) -->
                        <div class="strip-dots"></div>
                        <!-- Duży numer (01, 02, 03) — efekt outline -->
                        <span class="project-num">{{ project.num }}</span>
                    </div>

                    <!-- Prawa część: treść projektu -->
                    <div class="project-body">
                        <!-- Nagłówek: tytuł + tagi technologii -->
                        <div class="project-top">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <!-- Tagi (Vue.js, Node.js, ...) — żółte badgey -->
                            <div class="project-tags">
                                <span class="project-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                            </div>
                        </div>
                        <!-- Krótki opis z kolorową lewą krawędzią (kolor = kolor paska) -->
                        <p class="project-desc">{{ project.description }}</p>

                        <!-- ── Panel rozwijany (hover/tap) ──
                             Używa grid-template-rows: 0fr → 1fr dla płynnej animacji.
                             Jest to nowoczesna technika CSS — nie wymaga JavaScript do obliczania wysokości. -->
                        <div class="project-expand">
                            <div class="project-expand-inner">
                                <!-- Lista kluczowych funkcji projektu (highlights) -->
                                <ul class="project-highlights">
                                    <li v-for="h in project.highlights" :key="h">{{ h }}</li>
                                </ul>
                                <!-- Przyciski Demo i GitHub — @click.stop zapobiega zamknięciu karty przy kliknięciu linku -->
                                <div class="project-links">
                                    <a :href="project.demo" class="project-btn project-btn--primary" @click.stop>
                                        {{ t.projects.demo }} ↗
                                    </a>
                                    <a :href="project.github" class="project-btn project-btn--ghost" target="_blank" rel="noopener" @click.stop>
                                        {{ t.projects.github }} ↗
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Strzałka wskazująca że karta jest rozwijana — obraca się przy hover/expand -->
                        <span class="expand-arrow">↓</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

// Kolory pasków bocznych dla kolejnych projektów (fioletowy, czerwony, żółty)
// Zmień żeby dopasować do swojego gustu
const thumbColors = ['#a78bfa', '#ff5c5c', '#e9ff70']

// Index aktualnie rozwiniętej karty (null = żadna nie jest rozwinięta)
// Kontroluje zarówno hover (mouseenter/leave) jak i tap (click)
const expanded = ref(null)
</script>

<style scoped>
/* Żółte tło sekcji */
.projects {
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
.projects::before {
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
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
}

.section-header {
    margin-bottom: 2rem;
}

/* Nagłówek z czerwonym tłem */
.section-heading {
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

/* ── Lista projektów ── */
.projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Karta projektu — 2-kolumnowy grid: kolorowy pasek | treść */
.project-item {
    display: grid;
    grid-template-columns: 130px 1fr; /* pasek: stała szerokość, treść: reszta */
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover/expand: karta "unosi się" w lewo-górę */
.project-item:hover,
.project-item.is-expanded {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
}

/* ── Kolorowy pasek boczny ──
   Kolor kontrolowany przez CSS custom property --color (ustawiane przez Vue :style) */
.project-strip {
    position: relative;
    background-color: var(--color, #a78bfa); /* domyślnie fioletowy */
    border-right: 3px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
}

/* Siatka małych kropek na pasku */
.strip-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px);
    background-size: 18px 18px;
}

/* Numer projektu — efekt outline (tylko obrys, bez fill) */
.project-num {
    font-size: 5.5rem;
    font-weight: 700;
    letter-spacing: -5px;
    line-height: 1;
    -webkit-text-stroke: 2.5px #000;
    color: transparent;
    position: relative;
    z-index: 1; /* nad siatką kropek */
    user-select: none;
    transition: color 0.2s ease;
}

/* Hover/expand: numer delikatnie się pojawia (półprzezroczysty fill) */
.project-item:hover .project-num,
.project-item.is-expanded .project-num {
    color: rgba(0, 0, 0, 0.15);
}

/* ── Treść projektu (prawa strona karty) ── */
.project-body {
    position: relative; /* dla strzałki z position: absolute */
    padding: 1.8rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    justify-content: center;
}

/* Nagłówek: tytuł + tagi w jednej linii */
.project-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.project-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0;
    line-height: 1.1;
}

/* Tagi technologii (Vue.js, React...) — żółte badgey */
.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    flex-shrink: 0;
}

.project-tag {
    background-color: #e9ff70;
    border: 2px solid #000;
    padding: 0.18rem 0.6rem;
    font-weight: 600;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

/* Opis projektu z kolorową lewą krawędzią (kolor paska bocznego) */
.project-desc {
    font-size: 0.93rem;
    line-height: 1.65;
    margin: 0;
    opacity: 0.65;
    border-left: 3px solid var(--color, #a78bfa);
    padding-left: 0.9rem;
}

/* ── Strzałka wskazująca rozwijanie ── */
.expand-arrow {
    position: absolute;
    right: 1.2rem;
    bottom: 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    opacity: 0.25;
    transition: transform 0.35s ease, opacity 0.25s ease;
    pointer-events: none; /* nie blokuje kliknięć */
    line-height: 1;
}

/* Hover/expand: strzałka obraca się do góry (↑) */
.project-item:hover .expand-arrow,
.project-item.is-expanded .expand-arrow {
    opacity: 0.5;
    transform: rotate(180deg);
}

/* ── Panel rozwijany z highlights ──
   Technika: grid-template-rows: 0fr → 1fr
   To pozwala animować do 'auto' wysokości bez JavaScript.
   Działa bo 0fr = 0px, 1fr = tyle ile potrzebuje zawartość. */
.project-expand {
    display: grid;
    grid-template-rows: 0fr; /* domyślnie zwinięty */
    transition: grid-template-rows 0.35s ease;
}

/* Hover lub klasa is-expanded: panel się rozwija */
.project-item:hover .project-expand,
.project-item.is-expanded .project-expand {
    grid-template-rows: 1fr;
}

/* Wewnętrzny wrapper — overflow: hidden konieczne dla techniki grid-template-rows */
.project-expand-inner {
    overflow: hidden; /* WAŻNE: bez tego animacja nie działa */
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

/* ── Lista kluczowych funkcji (highlights) ── */
.project-highlights {
    list-style: none;
    padding: 0.85rem 0 0;
    margin: 0;
    border-top: 2px dashed rgba(0, 0, 0, 0.18); /* przerywana linia jako separator */
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.project-highlights li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 0.87rem;
    line-height: 1.5;
    opacity: 0.8;
}

/* Kolorowa strzałka → przed każdym punktem (kolor paska bocznego) */
.project-highlights li::before {
    content: '→';
    color: var(--color, #a78bfa);
    font-weight: 700;
    flex-shrink: 0; /* strzałka nie kurczy się gdy tekst jest długi */
}

/* ── Przyciski Demo i GitHub ── */
.project-links {
    display: flex;
    gap: 0.7rem;
    padding-bottom: 0.2rem;
}

.project-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1.1rem;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

/* Efekt wciśnięcia przycisku */
.project-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #000;
}

/* Główny przycisk (Demo) — czarne tło, żółty tekst */
.project-btn--primary {
    background-color: #000;
    color: #e9ff70;
}

/* Drugi przycisk (GitHub) — transparentne tło */
.project-btn--ghost {
    background-color: transparent;
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .projects { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .project-item { grid-template-columns: 100px 1fr; }
    .project-num { font-size: 4rem; letter-spacing: -3px; }
    .project-body { padding: 1.4rem 1.6rem; gap: 0.7rem; }
    .project-top { flex-direction: column; gap: 0.5rem; }
}

@media (max-width: 600px) {
    .projects { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .projects-list { gap: 1.2rem; }
    .project-item { grid-template-columns: 76px 1fr; box-shadow: 5px 5px 0 #000; }
    .project-num { font-size: 3rem; letter-spacing: -2px; }
    .project-body { padding: 1.2rem; gap: 0.6rem; }
    .project-title { font-size: 1rem; }
    .project-btn { font-size: 0.74rem; padding: 0.4rem 0.8rem; }
    .project-highlights li { font-size: 0.82rem; }
}

@media (max-width: 480px) {
    .projects { padding: 2.5rem 1rem; }
    .project-item { grid-template-columns: 62px 1fr; }
    .project-num { font-size: 2.4rem; letter-spacing: -1.5px; -webkit-text-stroke-width: 2px; }
    .project-desc { font-size: 0.87rem; }
}

@media (max-width: 375px) {
    .projects { padding: 2rem 0.85rem; }
    .project-item { grid-template-columns: 52px 1fr; }
    .project-num { font-size: 2rem; }
}
</style>
