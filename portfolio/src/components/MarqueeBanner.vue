<!--
  MarqueeBanner.vue — animowany pasek scrollujący między Hero a About.
  Zawiera zduplikowaną listę elementów żeby pętla była płynna i bez przerw.
  Hover zatrzymuje animację.
  Możesz zmienić zawartość tablicy 'items' — każdy string to jeden kafelek.
-->
<template>
    <div class="marquee-strip">
        <div class="marquee-track">
            <!-- Pierwsza kopia listy -->
            <div class="marquee-content" aria-hidden="true">
                <span v-for="item in items" :key="item" class="marquee-item">
                    {{ item }}<span class="marquee-sep">★</span>
                </span>
            </div>
            <!-- Duplikat — konieczny do płynnej pętli bez przerwy (animacja translateX(-100%)) -->
            <div class="marquee-content" aria-hidden="true">
                <span v-for="item in items" :key="'dup-' + item" class="marquee-item">
                    {{ item }}<span class="marquee-sep">★</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
// Tablica elementów wyświetlanych w pasku — możesz dowolnie zmieniać zawartość
defineProps({
    items: {
        type: Array,
        default: () => [
            'FULL-STACK DEVELOPER',
            'DEVOPS',
            'JAVASCRIPT',
            'TYPESCRIPT',
            'VUE.JS',
            'REACT',
            'ANGULAR',
            'NODE.JS',
            'PYTHON',
            'DOCKER',
            'KUBERNETES',
            'AWS',
            'AI / ML',
            'OPEN TO WORK',
        ]
    }
})
</script>

<style scoped>
/* Czarny pasek z żółtym tekstem — neobrutalistyczny separator między sekcjami */
.marquee-strip {
    background-color: #000;
    color: #e9ff70;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    overflow: hidden;
    padding: 0.7rem 0;
}

/* Kontener toru — flex żeby obie kopie leżały obok siebie */
.marquee-track {
    display: flex;
    width: 100%;
    overflow: hidden;
}

/* Każda kopia listy elementów — animuje się w nieskończoność w lewo */
.marquee-content {
    display: flex;
    align-items: center;
    flex-shrink: 0; /* zapobiega zgnieceniu kopii */
    animation: marquee 22s linear infinite;
    white-space: nowrap;
}

.marquee-item {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0 0.3rem;
}

/* Czerwona gwiazdka jako separator między elementami */
.marquee-sep {
    margin: 0 1rem;
    color: #ff5c5c;
    font-size: 0.65rem;
}

/* Animacja: przesuwa element o -100% własnej szerokości, potem drugi element wchodzi płynnie */
@keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-100%); }
}

/* Hover zatrzymuje animację — użytkownik może odczytać tekst */
.marquee-strip:hover .marquee-content {
    animation-play-state: paused;
}
</style>
