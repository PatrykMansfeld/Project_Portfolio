<!--
  HobbiesSection.vue — sekcja "Poza kodem" z hobby.
  Dekoracyjna sekcja z kartami: sztuki walki, motorsport, sim racing.
  Ikony rysowane jako inline SVG — bez zewnętrznych zależności.
-->
<template>
  <section id="hobbies" class="hobbies">
    <div class="hobbies-container">

      <!-- Nagłówek sekcji -->
      <div class="hobbies-header">
        <h2 class="hobbies-heading">{{ t.hobbies.heading }}</h2>
        <p class="hobbies-sub">{{ t.hobbies.sub }}</p>
      </div>

      <!-- Siatka trzech kart hobby -->
      <div class="hobbies-grid">

        <!-- Karta 1: Sztuki walki -->
        <article class="hobby-card hobby-card--yellow">
          <span class="hobby-num">01</span>
          <div class="hobby-icon" aria-hidden="true">
            <!-- Stylizowana pięść / rękawica -->
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Cztery palce (prostokąty zaokrąglone) -->
              <rect x="14" y="18" width="10" height="16" rx="5" fill="currentColor"/>
              <rect x="25" y="14" width="10" height="18" rx="5" fill="currentColor"/>
              <rect x="36" y="14" width="10" height="18" rx="5" fill="currentColor"/>
              <rect x="47" y="18" width="10" height="16" rx="5" fill="currentColor"/>
              <!-- Dłoń / pięść -->
              <rect x="12" y="30" width="40" height="22" rx="6" fill="currentColor"/>
              <!-- Kciuk -->
              <rect x="4"  y="32" width="12" height="14" rx="6" fill="currentColor"/>
              <!-- Linia kłykci -->
              <rect x="14" y="28" width="44" height="5"  rx="2" fill="rgba(0,0,0,0.18)"/>
            </svg>
          </div>
          <h3 class="hobby-title">{{ t.hobbies.martial.title }}</h3>
          <p class="hobby-desc">{{ t.hobbies.martial.desc }}</p>
          <!-- Dekoracyjna naklejka w rogu -->
          <div class="hobby-sticker">FIGHT ✦</div>
        </article>

        <!-- Karta 2: Motorsport / Bolidy -->
        <article class="hobby-card hobby-card--red">
          <span class="hobby-num">02</span>
          <div class="hobby-icon hobby-icon--wide" aria-hidden="true">
            <!-- Bolid F1 — widok z boku, nos skierowany w prawo -->
            <svg viewBox="0 0 96 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Główny kadłub -->
              <path d="M14 22 L80 22 L87 28 L80 34 L14 34 L7 28 Z" fill="currentColor"/>
              <!-- Kokpit / kabina pilota -->
              <path d="M34 22 L59 22 L55 11 L38 11 Z" fill="currentColor"/>
              <!-- Przedni spoiler (dolny + górny płat) -->
              <rect x="78" y="33" width="17" height="4" rx="1" fill="currentColor"/>
              <rect x="81" y="28" width="10" height="5" rx="1" fill="currentColor"/>
              <!-- Tylne skrzydło (pionowa belka + pozioma listwa) -->
              <rect x="8"  y="17" width="14" height="4" rx="1" fill="currentColor"/>
              <rect x="13" y="17" width="4"  height="17" rx="1" fill="currentColor"/>
              <!-- Przednie koło -->
              <circle cx="72" cy="37" r="9"  fill="currentColor"/>
              <circle cx="72" cy="37" r="5"  fill="rgba(255,255,255,0.22)"/>
              <circle cx="72" cy="37" r="2"  fill="currentColor"/>
              <!-- Tylne koło (nieco większe) -->
              <circle cx="22" cy="37" r="11" fill="currentColor"/>
              <circle cx="22" cy="37" r="6"  fill="rgba(255,255,255,0.22)"/>
              <circle cx="22" cy="37" r="2"  fill="currentColor"/>
            </svg>
          </div>
          <h3 class="hobby-title">{{ t.hobbies.racing.title }}</h3>
          <p class="hobby-desc">{{ t.hobbies.racing.desc }}</p>
          <div class="hobby-sticker">RACE ✦</div>
        </article>

        <!-- Karta 3: Sim Racing -->
        <article class="hobby-card hobby-card--purple">
          <span class="hobby-num">03</span>
          <div class="hobby-icon" aria-hidden="true">
            <!-- Kierownica wyścigowa — pierścień + 3 szprychy + piasta -->
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Zewnętrzny pierścień -->
              <circle cx="32" cy="32" r="26" stroke="currentColor" stroke-width="7" fill="none"/>
              <!-- Szprycha górna -->
              <line x1="32" y1="23" x2="32" y2="8"  stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
              <!-- Szprycha dolna-lewa -->
              <line x1="24" y1="37" x2="11" y2="46" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
              <!-- Szprycha dolna-prawa -->
              <line x1="40" y1="37" x2="53" y2="46" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
              <!-- Piasta środkowa -->
              <circle cx="32" cy="32" r="9" fill="currentColor"/>
              <!-- Podświetlenie piasty -->
              <circle cx="32" cy="32" r="5" fill="rgba(255,255,255,0.35)"/>
            </svg>
          </div>
          <h3 class="hobby-title">{{ t.hobbies.simracing.title }}</h3>
          <p class="hobby-desc">{{ t.hobbies.simracing.desc }}</p>
          <div class="hobby-sticker">SIM ✦</div>
        </article>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
</script>

<style scoped>
/* Sekcja — czarne tło, kontrast z sąsiednimi białymi sekcjami */
.hobbies {
  background-color: #000;
  color: #fff;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Subtelna siatka kropek w tle (jaśniejsza wersja na czarnym) */
.hobbies::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  pointer-events: none;
}

.hobbies-container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

/* ── Nagłówek ── */
.hobbies-header {
  margin-bottom: 3rem;
}

.hobbies-heading {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  display: inline-block;
  background-color: #e9ff70;
  color: #000;
  padding: 0.3rem 1.2rem;
  border: 3px solid #e9ff70;
  box-shadow: 6px 6px 0 rgba(233,255,112,0.35);
  margin-bottom: 0.8rem;
}

.hobbies-sub {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.45;
  margin-top: 0.6rem;
}

/* ── Siatka kart ── */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* ── Karta bazowa ── */
.hobby-card {
  position: relative;
  border: 3px solid #000;
  padding: 2rem 1.8rem 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: default;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  overflow: hidden;
}

/* Kolor tła — żółty */
.hobby-card--yellow {
  background-color: #e9ff70;
  color: #000;
  box-shadow: 8px 8px 0 #e9ff70;
}

/* Kolor tła — czerwony */
.hobby-card--red {
  background-color: #ff5c5c;
  color: #000;
  box-shadow: 8px 8px 0 #ff5c5c;
}

/* Kolor tła — fioletowy */
.hobby-card--purple {
  background-color: #a78bfa;
  color: #000;
  box-shadow: 8px 8px 0 #a78bfa;
}

/* Hover — efekt "wciśnięcia" w kierunku cienia */
.hobby-card:hover {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0 currentColor;
}

.hobby-card--yellow:hover { box-shadow: 4px 4px 0 #e9ff70; }
.hobby-card--red:hover    { box-shadow: 4px 4px 0 #ff5c5c; }
.hobby-card--purple:hover { box-shadow: 4px 4px 0 #a78bfa; }

/* Numer karty — duży, półprzezroczysty */
.hobby-num {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.4;
}

/* Kontener ikony SVG */
.hobby-icon {
  width: 80px;
  height: 80px;
  color: #000;
}

/* Szerszy wariant dla ikony bolidu */
.hobby-icon--wide {
  width: 110px;
  height: 60px;
}

.hobby-icon svg,
.hobby-icon--wide svg {
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Lekkie odbicie ikony przy hover na karcie */
.hobby-card:hover .hobby-icon svg {
  transform: scale(1.1) rotate(-3deg);
}

.hobby-card:hover .hobby-icon--wide svg {
  transform: scale(1.08) translateX(4px);
}

/* Tytuł hobby */
.hobby-title {
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 1;
  margin: 0;
}

/* Opis */
.hobby-desc {
  font-size: 0.88rem;
  line-height: 1.65;
  margin: 0;
  opacity: 0.75;
  flex: 1;
}

/* Dekoracyjna naklejka w prawym dolnym rogu karty */
.hobby-sticker {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: #000;
  color: #e9ff70;
  padding: 0.25rem 0.6rem;
  transform: rotate(4deg);
  transition: transform 0.2s ease;
  user-select: none;
}

.hobby-card:hover .hobby-sticker {
  transform: rotate(0deg) scale(1.08);
}

/* ── Responsive ── */

/* Tablet — dwie kolumny, trzecia pod spodem */
@media (max-width: 900px) {
  .hobbies-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hobby-card:nth-child(3) {
    grid-column: 1 / -1;
    max-width: 460px;
  }
}

/* Mobile — jedna kolumna */
@media (max-width: 600px) {
  .hobbies { padding: 3.5rem 1.2rem; }

  .hobbies-grid {
    grid-template-columns: 1fr;
  }

  .hobby-card:nth-child(3) {
    grid-column: auto;
    max-width: none;
  }

  .hobby-icon { width: 64px; height: 64px; }
  .hobby-icon--wide { width: 90px; height: 50px; }
  .hobby-title { font-size: 1.1rem; }
}

@media (max-width: 480px) {
  .hobbies { padding: 2.5rem 1rem; }
  .hobbies-header { margin-bottom: 2rem; }
}
</style>
