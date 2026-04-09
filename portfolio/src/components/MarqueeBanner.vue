<template>
    <div class="marquee-strip">
        <div class="marquee-track">
            <div class="marquee-content" aria-hidden="true">
                <span v-for="item in items" :key="item" class="marquee-item">
                    {{ item }}<span class="marquee-sep">★</span>
                </span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="marquee-content" aria-hidden="true">
                <span v-for="item in items" :key="'dup-' + item" class="marquee-item">
                    {{ item }}<span class="marquee-sep">★</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        default: () => [
            'FULL-STACK DEVELOPER',
            'VUE.JS',
            'NODE.JS',
            'CLEAN CODE',
            'TYPESCRIPT',
            'OPEN TO WORK',
            'POSTGRESQL',
            'REST API',
            'DOCKER',
        ]
    }
})
</script>

<style scoped>
.marquee-strip {
    background-color: #000;
    color: #e9ff70;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    overflow: hidden;
    padding: 0.7rem 0;
}

.marquee-track {
    display: flex;
    width: 100%;
    overflow: hidden;
}

.marquee-content {
    display: flex;
    align-items: center;
    flex-shrink: 0;
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

.marquee-sep {
    margin: 0 1rem;
    color: #ff5c5c;
    font-size: 0.65rem;
}

@keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-100%); }
}

.marquee-strip:hover .marquee-content {
    animation-play-state: paused;
}
</style>
