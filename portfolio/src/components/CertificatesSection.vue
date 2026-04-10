<!--
  CertificatesSection.vue — sekcja "Certyfikaty".
  Wyświetla listę certyfikatów jako pionowy stos kart.
  Hover: żółte tło + przesunięcie w prawo + animacja gwiazdki.
  Dane edytujesz w useLang.js → certificates.items (obie wersje językowe).
  Każdy wpis: { title, issuer, year }
-->
<template>
    <section id="certificates" class="certificates">
        <div class="section-container">
            <h2 class="section-heading">{{ t.certificates.heading }}</h2>

            <!-- Stos kart certyfikatów — karty "klejone" razem (bez gap, border-bottom usuwany między kartami) -->
            <div class="certs-grid">
                <div
                    class="cert-card"
                    v-for="cert in t.certificates.items"
                    :key="cert.title"
                >
                    <!-- Lewa kolumna: rok certyfikatu -->
                    <div class="cert-left">
                        <span class="cert-year">{{ cert.year }}</span>
                    </div>
                    <!-- Środkowa kolumna: nazwa + wydawca -->
                    <div class="cert-right">
                        <h3 class="cert-title">{{ cert.title }}</h3>
                        <p class="cert-issuer">{{ cert.issuer }}</p>
                    </div>
                    <!-- Dekoracyjna gwiazdka — animowana przy hover (ukryta na mobile) -->
                    <span class="cert-icon">✦</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
// t — tłumaczenia dla aktualnego języka
const { t } = useLang()
</script>

<style scoped>
/* Fioletowe tło sekcji */
.certificates {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #a78bfa;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Siatka kropek w tle */
.certificates::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.section-container {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* Kontener listy — brak gap, karty "przyklejone" do siebie */
.certs-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* Jedna karta certyfikatu — 3-kolumnowy grid: rok | treść | gwiazdka */
.cert-card {
    display: grid;
    grid-template-columns: 70px 1fr auto;
    align-items: center;
    gap: 1.5rem;
    background-color: #fff;
    border: 3px solid #000;
    border-bottom: none; /* usuwa duplikowaną linię między kartami */
    padding: 1.2rem 1.6rem;
    transition: background-color 0.15s ease, transform 0.15s ease;
    position: relative;
}

/* Ostatnia karta ma border-bottom i cień (tylko dolna karta go potrzebuje) */
.cert-card:last-child {
    border-bottom: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

/* Hover: żółte tło, lekkie przesunięcie w prawo */
.cert-card:hover {
    background-color: #e9ff70;
    z-index: 1; /* unosi się nad sąsiednimi kartami */
    transform: translateX(4px);
}

/* Lewa kolumna z rokiem */
.cert-left {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Badge z rokiem — czarne tło, żółty tekst */
.cert-year {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: #000;
    color: #e9ff70;
    padding: 0.25rem 0.55rem;
    white-space: nowrap;
}

/* Środkowa kolumna: tytuł + wydawca */
.cert-right {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.cert-title {
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.3px;
    margin: 0;
    line-height: 1.3;
}

.cert-issuer {
    font-size: 0.82rem;
    font-weight: 500;
    opacity: 0.55;
    margin: 0;
}

/* Gwiazdka dekoracyjna — animowana przy hover, ukryta na mobile */
.cert-icon {
    font-size: 1.4rem;
    opacity: 0.6;
    transition: opacity 0.15s ease, transform 0.2s ease;
    flex-shrink: 0;
}

.cert-card:hover .cert-icon {
    opacity: 1;
    transform: scale(1.15) rotate(-8deg);
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .certificates { padding: 4rem 1.5rem; }
    .section-heading { font-size: 2rem; }
    .cert-card { padding: 1.1rem 1.4rem; }
    .cert-title { font-size: 0.9rem; }
}

/* Mobile — chowamy gwiazdkę, zmniejszamy kolumnę z rokiem */
@media (max-width: 600px) {
    .certificates { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
    .cert-card { grid-template-columns: 56px 1fr; gap: 1rem; padding: 0.95rem 1rem; }
    .cert-icon { display: none; } /* za mało miejsca na gwiazdkę */
    .cert-title { font-size: 0.85rem; }
    .cert-year { font-size: 0.65rem; padding: 0.2rem 0.45rem; }
}

@media (max-width: 480px) {
    .certificates { padding: 2.5rem 1rem; }
    .cert-card { grid-template-columns: 48px 1fr; gap: 0.8rem; }
}

@media (max-width: 375px) {
    .certificates { padding: 2rem 0.85rem; }
    .cert-title { font-size: 0.8rem; }
    .cert-issuer { font-size: 0.75rem; }
}
</style>
