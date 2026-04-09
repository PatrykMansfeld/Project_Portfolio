<template>
    <section id="certificates" class="certificates">
        <div class="certificates-container">
            <h2 class="section-heading">{{ t.certificates.heading }}</h2>
            <div class="certificates-grid">
                <div class="cert-card" v-for="cert in t.certificates.items" :key="cert.title">
                    <div class="cert-badge">🏆</div>
                    <div class="cert-info">
                        <span class="cert-year">{{ cert.year }}</span>
                        <h3>{{ cert.title }}</h3>
                        <p class="cert-issuer">{{ cert.issuer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
</script>

<style scoped>
.certificates {
    height: 100vh;
    padding: 3rem 2rem 2rem;
    background-color: #a78bfa;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
}

.certificates-container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
}

.section-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    display: inline-block;
    background-color: #fff;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
    flex-shrink: 0;
}

.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding-bottom: 2rem;
}

.cert-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.cert-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 6px 6px 0px #000;
}

.cert-badge {
    font-size: 2rem;
    flex-shrink: 0;
}

.cert-year {
    display: inline-block;
    background-color: #e9ff70;
    font-weight: 800;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0.2rem 0.7rem;
    border: 2px solid #000;
    margin-bottom: 0.5rem;
}

.cert-info h3 {
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 0.3rem;
    line-height: 1.3;
}

.cert-issuer {
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.7;
}

@media (max-width: 768px) {
    .certificates {
        padding: 3rem 1.5rem 2rem;
    }
    .section-heading {
        font-size: 2.2rem;
    }
    .certificates-grid {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .certificates {
        padding: 2rem 1rem 1rem;
        min-height: 100vh;
    }
    .section-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
        margin-bottom: 1.5rem;
    }
    .certificates-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .cert-card {
        padding: 1rem;
        box-shadow: 5px 5px 0px #000;
    }
    .cert-badge {
        font-size: 1.5rem;
    }
    .cert-info h3 {
        font-size: 0.9rem;
    }
}
</style>
