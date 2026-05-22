<template>
  <section id="hobbies" class="hobbies">
    <!-- Górny separator — ta sama klasa co w pozostałych sekcjach -->
    <div class="section-rule" style="position:relative; z-index:1;">
      <span class="section-rule-text">{{ t.hobbies.sub }}</span>
    </div>

    <div class="hobbies-container">

      <!-- Nagłówek -->
      <div class="hobbies-header">
        <h2 class="hobbies-heading">{{ t.hobbies.heading }}</h2>
      </div>

      <!-- Siatka trzech kart -->
      <div class="hobbies-grid">

        <!-- Karta 1: Sztuki walki -->
        <article class="hobby-card hobby-card--yellow">
          <!-- Dekoracyjny duży numer w tle karty -->
          <span class="card-bg-num" aria-hidden="true">01</span>

          <div class="card-inner">
            <div class="hobby-icon" aria-hidden="true">
              <!-- Pięść -->
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="18" width="10" height="16" rx="5" fill="currentColor"/>
                <rect x="25" y="14" width="10" height="18" rx="5" fill="currentColor"/>
                <rect x="36" y="14" width="10" height="18" rx="5" fill="currentColor"/>
                <rect x="47" y="18" width="10" height="16" rx="5" fill="currentColor"/>
                <rect x="12" y="30" width="40" height="22" rx="6" fill="currentColor"/>
                <rect x="4"  y="32" width="12" height="14" rx="6" fill="currentColor"/>
                <rect x="14" y="28" width="44" height="5"  rx="2" fill="rgba(0,0,0,0.18)"/>
              </svg>
            </div>

            <div class="card-text">
              <h3 class="hobby-title">{{ t.hobbies.martial.title }}</h3>
              <p class="hobby-desc">{{ t.hobbies.martial.desc }}</p>
            </div>
          </div>

          <div class="hobby-sticker">FIGHT ✦</div>
        </article>

        <!-- Karta 2: Motorsport -->
        <article class="hobby-card hobby-card--red">
          <span class="card-bg-num" aria-hidden="true">02</span>

          <div class="card-inner">
            <div class="hobby-icon hobby-icon--wide" aria-hidden="true">
              <!-- Bolid F1 -->
              <svg viewBox="0 0 96 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 22 L80 22 L87 28 L80 34 L14 34 L7 28 Z" fill="currentColor"/>
                <path d="M34 22 L59 22 L55 11 L38 11 Z" fill="currentColor"/>
                <rect x="78" y="33" width="17" height="4" rx="1" fill="currentColor"/>
                <rect x="81" y="28" width="10" height="5" rx="1" fill="currentColor"/>
                <rect x="8"  y="17" width="14" height="4" rx="1" fill="currentColor"/>
                <rect x="13" y="17" width="4"  height="17" rx="1" fill="currentColor"/>
                <circle cx="72" cy="37" r="9"  fill="currentColor"/>
                <circle cx="72" cy="37" r="5"  fill="rgba(255,255,255,0.22)"/>
                <circle cx="72" cy="37" r="2"  fill="currentColor"/>
                <circle cx="22" cy="37" r="11" fill="currentColor"/>
                <circle cx="22" cy="37" r="6"  fill="rgba(255,255,255,0.22)"/>
                <circle cx="22" cy="37" r="2"  fill="currentColor"/>
              </svg>
            </div>

            <div class="card-text">
              <h3 class="hobby-title">{{ t.hobbies.racing.title }}</h3>
              <p class="hobby-desc">{{ t.hobbies.racing.desc }}</p>
            </div>
          </div>

          <div class="hobby-sticker">RACE ✦</div>
        </article>

        <!-- Karta 3: Sim Racing -->
        <article class="hobby-card hobby-card--purple">
          <span class="card-bg-num" aria-hidden="true">03</span>

          <div class="card-inner">
            <div class="hobby-icon" aria-hidden="true">
              <!-- Kierownica -->
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="26" stroke="currentColor" stroke-width="7" fill="none"/>
                <line x1="32" y1="23" x2="32" y2="8"  stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                <line x1="24" y1="37" x2="11" y2="46" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                <line x1="40" y1="37" x2="53" y2="46" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                <circle cx="32" cy="32" r="9" fill="currentColor"/>
                <circle cx="32" cy="32" r="5" fill="rgba(255,255,255,0.35)"/>
              </svg>
            </div>

            <div class="card-text">
              <h3 class="hobby-title">{{ t.hobbies.simracing.title }}</h3>
              <p class="hobby-desc">{{ t.hobbies.simracing.desc }}</p>
            </div>
          </div>

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
/* ── Sekcja: białe tło, wyraźna granica z czarnym Contact ── */
.hobbies {
  background-color: #fff;
  color: #000;
  padding: 0 0 5rem;
  position: relative;
  border-bottom: 3px solid #000;
}

/* Pasek górny obsługiwany przez globalną klasę .section-rule w style.css */

/* ── Kontener treści ── */
.hobbies-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem 0;
  width: 100%;
}

/* ── Nagłówek ── */
.hobbies-header {
  margin-bottom: 3rem;
}

.hobbies-heading {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  display: inline-block;
  background-color: #ff5c5c;
  color: #000;
  padding: 0.3rem 1.2rem;
  border: 3px solid #000;
  box-shadow: 6px 6px 0 #000;
}

/* ── Siatka kart ── */
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ── Karta bazowa ── */
.hobby-card {
  position: relative;
  border: 3px solid #000;
  padding: 2.4rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  overflow: hidden;
  cursor: default;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

/* Kolory i cienie — każda karta ma własny czarny cień neobrutalist */
.hobby-card--yellow {
  background-color: #e9ff70;
  box-shadow: 10px 10px 0 #000;
}
.hobby-card--red {
  background-color: #ff5c5c;
  box-shadow: 10px 10px 0 #000;
}
.hobby-card--purple {
  background-color: #a78bfa;
  box-shadow: 10px 10px 0 #000;
}

/* Hover — karta "wciska się" w kierunku cienia */
.hobby-card:hover {
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 0 #000;
}

/* Dekoracyjny duży numer w tle karty */
.card-bg-num {
  position: absolute;
  bottom: -0.6rem;
  right: 0.5rem;
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(0, 0, 0, 0.08);
  letter-spacing: -6px;
  user-select: none;
  pointer-events: none;
}

/* Wewnętrzny flex — ikona nad tekstem */
.card-inner {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  flex: 1;
}

/* ── Ikona SVG ── */
.hobby-icon {
  width: 100px;
  height: 100px;
  color: #000;
  flex-shrink: 0;
}

.hobby-icon--wide {
  width: 130px;
  height: 72px;
}

.hobby-icon svg {
  width: 100%;
  height: 100%;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hobby-card:hover .hobby-icon svg {
  transform: scale(1.12) rotate(-4deg);
}

.hobby-card:hover .hobby-icon--wide svg {
  transform: scale(1.1) translateX(6px);
}

/* ── Tekst ── */
.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.hobby-title {
  font-size: 1.45rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 1;
  margin: 0;
}

.hobby-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
  opacity: 0.72;
  max-width: 26ch;
}

/* ── Naklejka w rogu ── */
.hobby-sticker {
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: #000;
  color: #e9ff70;
  padding: 0.28rem 0.65rem;
  border: 2px solid #000;
  transform: rotate(4deg);
  transition: transform 0.2s ease;
  user-select: none;
}

.hobby-card:hover .hobby-sticker {
  transform: rotate(0deg) scale(1.1);
}

/* ── Responsive ── */

@media (max-width: 900px) {
  .hobbies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hobby-card:nth-child(3) {
    grid-column: 1 / -1;
  }
  .hobby-desc { max-width: none; }
}

@media (max-width: 600px) {
  .hobbies { padding-bottom: 3.5rem; }
  .hobbies-container { padding: 3rem 1.2rem 0; }

  .hobbies-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hobby-card:nth-child(3) { grid-column: auto; }
  .hobby-card { min-height: auto; padding: 2rem 1.6rem 2.6rem; }

  .hobby-icon { width: 76px; height: 76px; }
  .hobby-icon--wide { width: 100px; height: 56px; }
  .hobby-title { font-size: 1.2rem; }
  .card-bg-num { font-size: 6rem; }
}

@media (max-width: 480px) {
  .hobbies-container { padding: 2.5rem 1rem 0; }
  .hobbies-grid { gap: 1.2rem; }
  .hobby-card { padding: 1.6rem 1.4rem 2.2rem; }
}
</style>
