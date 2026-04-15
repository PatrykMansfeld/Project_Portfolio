<!--
  HeroSection.vue — sekcja powitalna, pierwsza widoczna po otwarciu strony.
  Zajmuje pełną wysokość ekranu (100vh).
  Prawa kolumna (zdjęcie + statystyki) jest zakomentowana — odkomentuj żeby ją przywrócić.
-->
<template>
    <section id="hero" class="hero">
        <!-- Tło z siatką kropek (czysto CSS, bez obrazka) -->
        <div class="hero-dots"></div>

        <div class="hero-inner">
            <!-- ── Lewa kolumna: treść tekstowa ── -->
            <div class="hero-left">
                <!-- Zielona pulsująca odznaka "dostępny do pracy" -->
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    {{ t.hero.available }}
                </div>

                <!-- Imię i nazwisko — duże typograficzne litery -->
                <h1 class="hero-name">
                    <span class="hero-greeting">{{ t.hero.greeting }}</span>
                    <span class="hero-firstname">{{ t.hero.firstname }}</span>
                    <!-- Nazwisko z efektem outline (transparentny fill, widać tylko obrys) -->
                    <span class="hero-lastname">{{ t.hero.lastname }}</span>
                </h1>

                <!-- Etykieta roli z czerwonym tłem neobrutalist -->
                <div class="hero-role-wrap">
                    <span class="hero-role">{{ t.hero.role }}</span>
                </div>

                <!-- Krótki opis / tagline -->
                <p class="hero-subtitle">{{ t.hero.subtitle }}</p>

                <!-- Przyciski CTA -->
                <div class="hero-actions">
                    <button class="hero-btn-primary" @click="scrollToProjects">
                        {{ t.hero.btn }} <span class="btn-arrow">↓</span>
                    </button>
                    <a href="#contact" class="hero-btn-secondary" @click.prevent="scrollToContact">
                        {{ t.hero.contactBtn }}
                    </a>
                </div>
            </div>

            <!-- ── Dekoracyjne naklejki hobby (absolutnie pozycjonowane w tle) ── -->
        <div class="hero-hobby hero-hobby--1" aria-hidden="true">{{ t.hobbies.martial.title }} ✦</div>
        <div class="hero-hobby hero-hobby--2" aria-hidden="true">{{ t.hobbies.racing.title }} ✦</div>
        <div class="hero-hobby hero-hobby--3" aria-hidden="true">{{ t.hobbies.simracing.title }} ✦</div>

        <!-- ── Prawa kolumna: zdjęcie + statystyki (zakomentowana) ──
                 Odkomentuj blok poniżej żeby przywrócić zdjęcie i statystyki.
                 W .photo-inner zamień inicjały "PM" na swoje zdjęcie:
                   background-image: url('/photo.jpg');
                   background-size: cover;
                   background-position: center;
            -->
            <!-- <div class="hero-right">
                <div class="hero-card-stack">
                    <div class="hero-photo">
                        <div class="photo-inner">PM</div>
                        <div class="photo-label">{{ t.hero.role }}</div>
                    </div>
                    <div class="hero-sticker">
                        <span>OPEN TO<br>WORK ✦</span>
                    </div>
                </div>

                <div class="hero-stats">
                    <div class="stat-block">
                        <span class="stat-num">3+</span>
                        <span class="stat-label">{{ t.hero.statYears }}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-block">
                        <span class="stat-num">20+</span>
                        <span class="stat-label">{{ t.hero.statProjects }}</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-block">
                        <span class="stat-num">10+</span>
                        <span class="stat-label">{{ t.hero.statTech }}</span>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

// t — obiekt z tłumaczeniami (PL lub EN zależnie od wybranego języka)
const { t } = useLang()

// Płynne przewijanie do sekcji projektów
function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

// Płynne przewijanie do sekcji kontaktowej
function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Sekcja hero — żółte tło, pełna wysokość ekranu */
.hero {
    position: relative;
    min-height: 100vh;
    padding-top: 64px; /* offset za fixed navbar */
    background-color: #e9ff70;
    color: #000;
    overflow: hidden;
    display: flex;
    align-items: center;
}

/* Tło z siatką kropek — wygenerowane w CSS, bez pliku graficznego */
.hero-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none; /* nie blokuje kliknięć na elementy pod spodem */
}

/* Wewnętrzny kontener — 2-kolumnowy grid (tekst | zdjęcie) */
.hero-inner {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 2rem 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto; /* lewa kolumna zajmuje resztę, prawa tylko tyle ile potrzebuje */
    gap: 3rem;
    align-items: center;
}

/* ── Lewa kolumna ── */
.hero-left {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}

/* Odznaka "Dostępny do pracy" z pulsującą zieloną kropką */
.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #000;
    color: #e9ff70;
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.4rem 1rem;
    border: 2px solid #000;
    width: fit-content;
}

/* Zielona pulsująca kropka (animacja opacity) */
.badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4ade80;
    display: inline-block;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

/* Blok z imieniem — trzy linie ustawione pionowo */
.hero-name {
    display: flex;
    flex-direction: column;
    line-height: 0.9;
    gap: 0;
}

.hero-greeting {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: 0.4rem;
    opacity: 0.7;
    line-height: 1;
}

/* Duże litery imienia i nazwiska — responsywny rozmiar z clamp() */
.hero-firstname,
.hero-lastname {
    font-size: clamp(3.5rem, 8vw, 6.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -3px;
    line-height: 0.92;
    color: #000;
}

/* Nazwisko z efektem outline — fill transparentny, widać tylko obrys liter */
.hero-lastname {
    -webkit-text-stroke: 3px #000;
    color: transparent;
}

/* Etykieta roli (Full-Stack Developer) z neobrutalist box-shadow */
.hero-role-wrap {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.hero-role {
    background-color: #ff5c5c;
    color: #000;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.35rem 1rem;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
}

.hero-subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6;
    max-width: 480px;
    color: #000;
    opacity: 0.75;
}

/* Rząd przycisków CTA */
.hero-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}

/* Główny przycisk — czarny z żółtym tekstem, neobrutalist shadow */
.hero-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 2.2rem;
    font-size: 0.95rem;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: #000;
    color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000; /* neobrutalist efekt cienia */
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    outline: none;
}

/* Efekt "wciśnięcia" — translateX przesuwa przycisk w kierunku cienia */
.hero-btn-primary:hover {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #000;
}
.hero-btn-primary:active {
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 #000;
}

/* Strzałka w przycisku — opada lekko przy hover */
.btn-arrow {
    font-size: 1.1rem;
    transition: transform 0.2s ease;
}
.hero-btn-primary:hover .btn-arrow {
    transform: translateY(3px);
}

/* Drugi przycisk — transparentne tło, border */
.hero-btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.9rem 2.2rem;
    font-size: 0.95rem;
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: transparent;
    color: #000;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
}

.hero-btn-secondary:hover {
    background-color: #fff;
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 #000;
}

/* ── Dekoracyjne naklejki hobby ── */
/* Absolutnie pozycjonowane w prawej części hero — widoczne tylko na szerokich ekranach */
.hero-hobby {
  position: absolute;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.38rem 0.85rem;
  border: 2px solid #000;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  animation: hobbyFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes hobbyFadeIn {
  from { opacity: 0; transform: translateY(8px) rotate(var(--r, 0deg)); }
  to   { opacity: 1; transform: translateY(0)   rotate(var(--r, 0deg)); }
}

.hero-hobby--1 {
  top: 22%;
  right: 7%;
  background-color: #000;
  color: #e9ff70;
  --r: -9deg;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.25);
  animation-delay: 0.8s;
}

.hero-hobby--2 {
  top: 46%;
  right: 4%;
  background-color: #ff5c5c;
  color: #000;
  --r: 5deg;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.25);
  animation-delay: 1.1s;
}

.hero-hobby--3 {
  bottom: 22%;
  right: 9%;
  background-color: #a78bfa;
  color: #000;
  --r: -4deg;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.25);
  animation-delay: 1.4s;
}

/* Naklejki ukryte na mniejszych ekranach (znikają gdy nie ma na nie miejsca) */
@media (max-width: 860px) {
  .hero-hobby { display: none; }
}

/* ── Prawa kolumna (zakomentowana w template) ── */
.hero-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.hero-card-stack {
    position: relative;
}

/* Karta ze zdjęciem — biały kontener z czarną ramką */
.hero-photo {
    width: 260px;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 10px 10px 0 #000;
    overflow: hidden;
}

/* Placeholder zdjęcia — fioletowe tło z inicjałami.
   Żeby wstawić prawdziwe zdjęcie, usuń background-color i dodaj:
     background-image: url('/photo.jpg');
     background-size: cover;
     background-position: center; */
.photo-inner {
    height: 240px;
    background-color: #a78bfa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -4px;
    border-bottom: 3px solid #000;
}

/* Podpis pod zdjęciem (rola) */
.photo-label {
    padding: 0.6rem 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}

/* Naklejka "OPEN TO WORK" — obrócona i przyklejona w rogu zdjęcia */
.hero-sticker {
    position: absolute;
    top: -18px;
    right: -22px;
    background-color: #ff5c5c;
    border: 3px solid #000;
    box-shadow: 4px 4px 0 #000;
    padding: 0.5rem 0.7rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 0.5px;
    transform: rotate(6deg);
    transition: transform 0.2s ease;
}

.hero-sticker:hover {
    transform: rotate(0deg) scale(1.05);
}

/* Box ze statystykami pod zdjęciem */
.hero-stats {
    width: 260px;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0;
}

.stat-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
}

.stat-num {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
}

.stat-label {
    font-size: 0.62rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    text-align: center;
}

/* Pionowy separator między statystykami */
.stat-divider {
    width: 2px;
    height: 36px;
    background-color: #000;
    opacity: 0.15;
}

/* ── Responsive ── */

/* Tablet landscape */
@media (max-width: 1024px) {
    .hero-inner {
        gap: 2rem;
        padding: 3rem 2rem;
    }
    .hero-photo {
        width: 220px;
    }
    .photo-inner {
        height: 210px;
    }
    .hero-stats {
        width: 220px;
    }
}

/* Tablet portrait — jedna kolumna, prawa część obok siebie w wierszu */
@media (max-width: 860px) {
    .hero-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2.5rem 1.5rem 3rem;
    }
    .hero-right {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1.2rem;
    }
    .hero-photo {
        width: 180px;
    }
    .photo-inner {
        height: 195px;
        font-size: 3rem;
    }
    .hero-stats {
        width: 200px;
        padding: 0.9rem 0.8rem;
    }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(2.8rem, 10vw, 5rem);
    }
}

/* Mobile — ukrywa zdjęcie, stats na pełną szerokość */
@media (max-width: 600px) {
    .hero-inner {
        padding: 2rem 1.2rem 2.5rem;
        gap: 1.5rem;
    }
    .hero-card-stack {
        display: none; /* chowamy zdjęcie na małych telefonach */
    }
    .hero-stats {
        width: 100%;
        max-width: 340px;
        box-shadow: 4px 4px 0 #000;
    }
    .hero-right {
        justify-content: flex-start;
    }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(2.6rem, 13vw, 4rem);
        letter-spacing: -2px;
    }
    .hero-btn-primary,
    .hero-btn-secondary {
        padding: 0.8rem 1.8rem;
        font-size: 0.88rem;
    }
}

/* Małe telefony */
@media (max-width: 480px) {
    .hero-inner {
        padding: 1.5rem 1rem 2rem;
    }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(2.2rem, 14vw, 3.2rem);
        letter-spacing: -2px;
    }
    .hero-subtitle {
        font-size: 0.92rem;
    }
    .hero-actions {
        gap: 0.7rem;
    }
    .hero-btn-primary,
    .hero-btn-secondary {
        padding: 0.72rem 1.4rem;
        font-size: 0.82rem;
        box-shadow: 4px 4px 0 #000;
    }
    .stat-num { font-size: 1.3rem; }
    .stat-label { font-size: 0.58rem; }
}

/* Bardzo małe telefony */
@media (max-width: 375px) {
    .hero-inner { padding: 1.2rem 0.85rem 1.8rem; }
    .hero-firstname,
    .hero-lastname {
        font-size: clamp(1.9rem, 14vw, 2.8rem);
        letter-spacing: -1.5px;
    }
    .hero-badge { font-size: 0.68rem; padding: 0.3rem 0.8rem; }
    .hero-role { font-size: 0.75rem; letter-spacing: 1px; }
}
</style>
