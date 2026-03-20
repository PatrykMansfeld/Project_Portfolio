<template>
    <section class="certificates">
        <div class="certificates-container">
            <h2 class="section-heading">Certyfikaty</h2>
            <div class="certificates-grid">
                <div class="cert-card" v-for="cert in certificates" :key="cert.title">
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
const certificates = [
    { title: 'Vue.js — The Complete Guide', issuer: 'Udemy', year: '2024' },
    { title: 'Node.js Developer Course', issuer: 'Udemy', year: '2023' },
    { title: 'CS50: Introduction to Computer Science', issuer: 'Harvard / edX', year: '2022' },
    { title: 'Python Bootcamp', issuer: 'Coursera', year: '2022' },
    { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2021' },
    { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2021' },
]
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
    overflow: hidden;
}

.certificates-container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
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
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-bottom: 2rem;
    scrollbar-width: none;
}

.certificates-grid::-webkit-scrollbar {
    display: none;
}

.cert-card {
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
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
</style>
