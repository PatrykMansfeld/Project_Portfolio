<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-left">
                <span class="footer-logo">PM</span>
                <span class="footer-name">Patryk Mansfeld</span>
            </div>
            <p class="footer-copy">© {{ year }} — {{ t.footer.rights }}</p>
            <p class="footer-made">{{ t.footer.madeWith }} Vue.js</p>
        </div>
    </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
    background-color: #000;
    color: #fff;
    border-top: 3px solid #e9ff70;
    padding: 1.5rem 2rem;
}

.footer-inner {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.footer-logo {
    background-color: #e9ff70;
    color: #000;
    font-weight: 900;
    font-size: 0.9rem;
    padding: 0.15rem 0.5rem;
    border: 2px solid #e9ff70;
}

.footer-name {
    font-weight: 800;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.footer-copy,
.footer-made {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.6;
    letter-spacing: 0.5px;
}

@media (max-width: 600px) {
    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
    }
}
</style>
