<!--
  SkillsSection.vue — sekcja "Umiejętności".
  Wyświetla technologie pogrupowane w 3 kategorie (Frontend, Backend, Narzędzia).
  Każda kategoria to wiersz z numerem, etykietą kategorii i mini-kartami technologii.
  Mini-karty mają skrót (abbr) i pełną nazwę — styl neobrutalist.
  Hover: czarne tło + żółty skrót.
  Żeby dodać/usunąć technologię, edytuj tablicę skills danej kategorii poniżej.
-->
<template>
    <section id="skills" class="skills">
        <div class="section-container">
            <h2 class="section-heading">{{ t.skills.heading }}</h2>

            <!-- Lista kategorii — każda to osobny wiersz -->
            <div class="skills-list">
                <div class="skill-row" v-for="(cat, i) in categories" :key="i">
                    <!-- Lewa kolumna: numer + etykieta kategorii -->
                    <div class="skill-row-left">
                        <!-- Duży numer kategorii (01, 02, 03) — efekt outline -->
                        <span class="skill-num">{{ String(i + 1).padStart(2, '0') }}</span>
                        <!-- Czarna etykieta (Frontend / Backend / Narzędzia) -->
                        <h3 class="skill-cat">{{ cat.label }}</h3>
                    </div>
                    <!-- Prawa kolumna: siatka mini-kart technologii -->
                    <ul class="skill-tags">
                        <li class="skill-tag" v-for="skill in cat.skills" :key="skill.name">
                            <!-- Skrót: JS, TS, VUE, NOD... — duży, bold -->
                            <span class="skill-abbr">{{ skill.abbr }}</span>
                            <!-- Pełna nazwa technologii — mała, pod skrótem -->
                            <span class="skill-name">{{ skill.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

// Lista kategorii z technologiami.
// Etykiety kategorii (label) pobierane z tłumaczeń — zmieniają się z PL/EN.
// Żeby dodać technologię: dodaj { name: 'Nazwa', abbr: 'SKR' } do odpowiedniej tablicy.
// Żeby zmienić skrót — edytuj pole abbr.
const categories = computed(() => [
    {
        label: t.value.skills.frontend,
        skills: [
            { name: 'JavaScript', abbr: 'JS'  },
            { name: 'TypeScript', abbr: 'TS'  },
            { name: 'Angular',    abbr: 'ANG' },
            { name: 'React',      abbr: 'RCT' },
            { name: 'Vue.js',     abbr: 'VUE' },
            { name: 'Electron',   abbr: 'ELC' },
        ],
    },
    {
        label: t.value.skills.backend,
        skills: [
            { name: 'Node.js',    abbr: 'NOD' },
            { name: 'Python',     abbr: 'PY'  },
            { name: 'Java',       abbr: 'JAV' },
            { name: 'C#',         abbr: 'C#'  },
            { name: 'Go',         abbr: 'GO'  },
        ],
    },
    {
        label: t.value.skills.devops,
        skills: [
            { name: 'AWS',            abbr: 'AWS' },
            { name: 'Docker',         abbr: 'DCK' },
            { name: 'Kubernetes',     abbr: 'K8S' },
            { name: 'Jenkins',        abbr: 'JNK' },
            { name: 'GitHub Actions', abbr: 'GHA' },
            { name: 'CI/CD',          abbr: 'CI'  },
        ],
    },
    {
        label: t.value.skills.ai,
        skills: [
            { name: 'LLM',             abbr: 'LLM' },
            { name: 'RAG',             abbr: 'RAG' },
            { name: 'Machine Learning',abbr: 'ML'  },
            { name: 'Local Models',    abbr: 'LCL' },
            { name: 'SQL',             abbr: 'SQL' },
            { name: 'NoSQL',           abbr: 'NSQ' },
        ],
    },
])
</script>

<style scoped>
/* Czerwone tło sekcji */
.skills {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #ff5c5c;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Siatka kropek w tle */
.skills::before {
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

/* Nagłówek sekcji — biały z neobrutalist cieniem */
.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* ── Lista kategorii ── */
.skills-list {
    display: flex;
    flex-direction: column;
}

/* Jeden wiersz kategorii — 2-kolumnowy grid: numer+etykieta | karty technologii */
.skill-row {
    display: grid;
    grid-template-columns: 180px 1fr; /* lewa: stała szerokość, prawa: reszta */
    gap: 2rem;
    padding: 2rem 0;
    border-top: 3px solid #000;
    align-items: start;
}

.skill-row:last-child {
    border-bottom: 3px solid #000; /* dolna linia tylko dla ostatniego wiersza */
}

/* ── Lewa kolumna: numer + etykieta ── */
.skill-row-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* Duży numer kategorii — efekt outline (transparentny fill, widać obrys) */
.skill-num {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -4px;
    line-height: 1;
    -webkit-text-stroke: 2px #000;
    color: transparent;
    user-select: none;
}

/* Etykieta kategorii — czarne tło, biały tekst */
.skill-cat {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    background-color: #000;
    color: #fff;
    padding: 0.25rem 0.8rem;
    width: fit-content;
}

/* ── Prawa kolumna: mini-karty technologii ── */
.skill-tags {
    list-style: none;
    padding: 0.4rem 0 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap; /* zawijanie do kolejnych linii */
    gap: 0.6rem;
}

/* Mini-karta technologii — biała z neobrutalist cieniem */
.skill-tag {
    background-color: #fff;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
    padding: 0.7rem 0.6rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 68px;
    cursor: default;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
}

/* Hover: czarne tło, karta "unosi się" */
.skill-tag:hover {
    background-color: #000;
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.35);
}

/* Duży skrót (JS, TS, VUE...) */
.skill-abbr {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
    color: #000;
    transition: color 0.15s ease;
}

/* Hover: skrót staje się żółty */
.skill-tag:hover .skill-abbr {
    color: #e9ff70;
}

/* Mała nazwa technologii pod skrótem */
.skill-name {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    color: #000;
    opacity: 0.6;
    transition: color 0.15s ease, opacity 0.15s ease;
}

/* Hover: nazwa staje się biała */
.skill-tag:hover .skill-name {
    color: #fff;
    opacity: 0.65;
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .skills { padding: 3.5rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .skill-row { grid-template-columns: 140px 1fr; gap: 1.5rem; padding: 1.8rem 0; }
    .skill-num { font-size: 3.5rem; }
    .skill-tag { min-width: 60px; padding: 0.6rem 0.5rem 0.4rem; }
    .skill-abbr { font-size: 1.1rem; }
}

/* Mobile — lewa i prawa kolumna stają się jedną (stack) */
@media (max-width: 600px) {
    .skills { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .skill-row { grid-template-columns: 1fr; gap: 0.8rem; padding: 1.5rem 0; }
    /* Numer i etykieta obok siebie na mobile */
    .skill-row-left { flex-direction: row; align-items: center; gap: 1rem; }
    .skill-num { font-size: 3rem; letter-spacing: -2px; }
    .skill-tags { padding-top: 0; }
}

@media (max-width: 480px) {
    .skills { padding: 2.5rem 1rem; }
    .section-heading { font-size: 1.8rem; padding: 0.2rem 0.8rem; }
    .skill-num { font-size: 2.5rem; }
    .skill-tag { min-width: 56px; padding: 0.55rem 0.45rem 0.4rem; }
    .skill-abbr { font-size: 1rem; }
    .skill-name { font-size: 0.6rem; }
}

@media (max-width: 375px) {
    .skills { padding: 2rem 0.85rem; }
    .skill-num { font-size: 2.2rem; }
    .skill-tag { min-width: 50px; }
    .skill-abbr { font-size: 0.9rem; }
    .skill-name { font-size: 0.58rem; }
}
</style>
