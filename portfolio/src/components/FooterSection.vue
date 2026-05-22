<template>
    <footer class="footer">
        <div class="footer-inner">
            <!-- Logo + imię — klik przewija na górę -->
            <div class="footer-left">
                <button class="footer-logo" @click="scrollTop">PM</button>
                <span class="footer-name">Patryk Mansfeld</span>
            </div>

            <!-- Linki do mediów społecznościowych -->
            <div class="footer-links">
                <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/patrykmansfeld" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
                <a href="mailto:patryk.mansfeld@gmail.com" class="footer-link">Email</a>
            </div>

            <!-- Copyright z automatycznym rokiem -->
            <div class="footer-right">
                <p class="footer-copy">© {{ year }} {{ t.footer.rights }}</p>
            </div>
        </div>

        <!-- Przycisk powrotu na górę — unosi się nad stopką (position: absolute) -->
        <button class="back-to-top" @click="scrollTop" :title="lang === 'pl' ? 'Wróć na górę' : 'Back to top'">↑</button>
    </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

// Aktualny rok — automatycznie aktualizuje się każdego roku
const year = new Date().getFullYear()

// Płynne przewijanie do góry strony (sekcja hero)
function scrollTop() {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Czarny pasek stopki z żółtą górną krawędzią */
.footer {
    background-color: #000;
    color: #fff;
    border-top: 3px solid #e9ff70;
    padding: 1.5rem 2rem;
    position: relative; /* potrzebne dla .back-to-top z position: absolute */
}

/* Wewnętrzny flex-kontener: logo | linki | copyright */
.footer-inner {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

/* Logo PM — żółte, klikiem przewija na górę */
.footer-logo {
    background-color: #e9ff70;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: -0.5px;
    padding: 0.2rem 0.6rem;
    border: 2px solid #e9ff70;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
}

/* Hover: inwersja — czarne tło, żółty tekst */
.footer-logo:hover {
    background-color: #000;
    color: #e9ff70;
}

/* Imię obok logo — małe i półprzezroczyste */
.footer-name {
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    opacity: 0.5;
}

/* Linki social media w środku stopki */
.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-link {
    color: #fff;
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.45;
    transition: opacity 0.15s ease, color 0.15s ease;
}

/* Hover: pełna widoczność, żółty kolor */
.footer-link:hover {
    opacity: 1;
    color: #e9ff70;
}

/* Tekst copyright po prawej */
.footer-copy {
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.35;
    letter-spacing: 0.5px;
}

/* Przycisk powrotu na górę — "przyklejony" nad stopką (ujemna wartość top) */
.back-to-top {
    position: absolute;
    top: -22px; /* wystaje ponad stopkę */
    right: 2rem;
    width: 44px;
    height: 44px;
    background-color: #e9ff70;
    color: #000;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 #000;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

/* Efekt "uniesienia" przycisku na hover */
.back-to-top:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
}

/* ── Responsive ── */

@media (max-width: 768px) {
    .footer { padding: 1.5rem 1.5rem; }
    .back-to-top { right: 1.5rem; }
}

/* Mobile — wszystko ustawione pionowo */
@media (max-width: 600px) {
    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.7rem;
    }
    .footer-links { gap: 1.2rem; }
    .back-to-top { right: 1rem; width: 40px; height: 40px; font-size: 1rem; }
}

/* Bardzo małe — chowamy imię żeby oszczędzić miejsce */
@media (max-width: 375px) {
    .footer { padding: 1.2rem 0.85rem; }
    .footer-name { display: none; }
    .footer-link { font-size: 0.72rem; }
}
</style>
