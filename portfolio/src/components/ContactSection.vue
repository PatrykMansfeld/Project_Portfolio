<template>
    <section id="contact" class="contact">
        <div class="section-rule"><span class="section-rule-text">{{ t.contact.rule }}</span></div>
        <div class="section-container">
            <h2 class="section-heading">{{ t.contact.heading }}</h2>

            <div class="contact-grid">
                <!-- Kolumna z linkami kontaktowymi -->
                <div class="contact-links-col">
                    <p class="col-label">{{ t.contact.findMe }}</p>
                    <!-- Linki do kontaktu — każdy ma etykietę i wartość -->
                    <div class="links-stack">
                        <a href="mailto:patryk.mansfeld@gmail.com" class="contact-link">
                            <span class="link-label">Email</span>
                            <span class="link-value">patryk.mansfeld@gmail.com ↗</span>
                        </a>
                        <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="contact-link">
                            <span class="link-label">GitHub</span>
                            <span class="link-value">PatrykMansfeld ↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/patrykmansfeld" target="_blank" rel="noopener" class="contact-link">
                            <span class="link-label">LinkedIn</span>
                            <span class="link-value">patrykmansfeld ↗</span>
                        </a>
                    </div>

                    <!-- Badge "Dostępny do pracy" z pulsującą zieloną kropką -->
                    <div class="availability-box">
                        <span class="avail-dot"></span>
                        <span>{{ t.hero.available }}</span>
                    </div>
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
/* Czarne tło sekcji kontaktowej */
.contact {
    position: relative;
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Delikatna siatka kropek (biała, słabo widoczna na czarnym) */
.contact::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
}

.section-container {
    position: relative;
    z-index: 1;
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
}

/* Nagłówek z żółtym tłem (kontrast z czarną sekcją) */
.section-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #e9ff70;
    color: #000;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 rgba(255, 255, 255, 0.25);
}

/* Grid z jedną kolumną (wcześniej była też kolumna z formularzem) */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 480px;
    gap: 3rem;
    align-items: start;
}

/* Etykieta nad listą linków ("Znajdź mnie tutaj") */
.col-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.4;
    margin-bottom: 1.2rem;
}

/* Stos linków kontaktowych — bez gap, podzielone linią */
.links-stack {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* Jeden link kontaktowy — etykieta po lewej, wartość po prawej */
.contact-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #222; /* subtelna linia między linkami */
    text-decoration: none;
    color: #fff;
    transition: color 0.15s ease, padding-left 0.15s ease;
    gap: 1rem;
}

.contact-link:first-child {
    border-top: 1px solid #222; /* linia nad pierwszym linkiem */
}

/* Hover: żółty kolor + lekkie wcięcie */
.contact-link:hover {
    color: #e9ff70;
    padding-left: 0.5rem;
}

/* Mała etykieta po lewej (Email, GitHub, LinkedIn) */
.link-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.4;
    flex-shrink: 0;
}

/* Wartość linku po prawej (adres/nazwa) */
.link-value {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: right;
}

/* Badge "Dostępny do pracy" — ciemne tło, zielony tekst */
.availability-box {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: #111;
    border: 1px solid #333;
    padding: 0.8rem 1.2rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4ade80; /* zielony — kolor "dostępności" */
}

/* Pulsująca zielona kropka (ta sama animacja co w HeroSection) */
.avail-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4ade80;
    flex-shrink: 0;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .contact { padding: 4rem 1.5rem; }
    .availability-box { margin-top: 1.5rem; }
}

@media (max-width: 600px) {
    .contact { padding: 3rem 1rem; }
    .section-heading { font-size: 1.8rem; }
}

@media (max-width: 480px) {
    .contact { padding: 2.5rem 1rem; }
    .section-heading { padding: 0.2rem 0.8rem; }
    .link-value { font-size: 0.82rem; }
    .availability-box { padding: 0.65rem 1rem; font-size: 0.75rem; }
}

@media (max-width: 375px) {
    .contact { padding: 2rem 0.85rem; }
    .section-heading { font-size: 1.6rem; }
}
</style>
