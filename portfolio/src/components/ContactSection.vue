<template>
    <section id="contact" class="contact">
        <div class="section-container">
            <h2 class="section-heading">{{ t.contact.heading }}</h2>

            <div class="contact-grid">
                <!-- Form -->
                <div class="contact-form-col">
                    <p class="col-label">{{ t.contact.writeMe }}</p>
                    <form class="contact-form" @submit.prevent="handleSubmit">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">{{ t.contact.name }}</label>
                                <input id="name" v-model="form.name" type="text" :placeholder="t.contact.namePlaceholder" required />
                            </div>
                            <div class="form-group">
                                <label for="email">{{ t.contact.email }}</label>
                                <input id="email" v-model="form.email" type="email" :placeholder="t.contact.emailPlaceholder" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="message">{{ t.contact.message }}</label>
                            <textarea id="message" v-model="form.message" rows="5" :placeholder="t.contact.messagePlaceholder" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            {{ t.contact.btn }} ↗
                        </button>
                    </form>
                </div>

                <!-- Links -->
                <div class="contact-links-col">
                    <p class="col-label">{{ t.contact.findMe }}</p>
                    <div class="links-stack">
                        <a href="mailto:twoj@email.com" class="contact-link">
                            <span class="link-label">Email</span>
                            <span class="link-value">twoj@email.com ↗</span>
                        </a>
                        <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="contact-link">
                            <span class="link-label">GitHub</span>
                            <span class="link-value">PatrykMansfeld ↗</span>
                        </a>
                        <a href="https://linkedin.com/in/twojanazwa" target="_blank" rel="noopener" class="contact-link">
                            <span class="link-label">LinkedIn</span>
                            <span class="link-value">twojanazwa ↗</span>
                        </a>
                    </div>

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
import { reactive } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const form = reactive({ name: '', email: '', message: '' })

function handleSubmit() {
    const subject = encodeURIComponent(`Portfolio — ${form.name}`)
    const body = encodeURIComponent(`Imię / Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:twoj@email.com?subject=${subject}&body=${body}`)
}
</script>

<style scoped>
.contact {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-container {
    max-width: 960px;
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
    background-color: #e9ff70;
    color: #000;
    padding: 0.3rem 1.2rem;
    border: 3px solid #e9ff70;
    box-shadow: 6px 6px 0 #e9ff70;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 3rem;
    align-items: start;
}

.col-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.4;
    margin-bottom: 1.2rem;
}

/* Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.form-group label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.55;
}

.form-group input,
.form-group textarea {
    background-color: #111;
    color: #fff;
    border: 2px solid #333;
    padding: 0.75rem 1rem;
    font-size: 0.93rem;
    font-family: inherit;
    outline: none;
    resize: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #555;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #e9ff70;
    box-shadow: 0 0 0 1px #e9ff70;
}

.submit-btn {
    align-self: flex-start;
    padding: 0.85rem 2rem;
    background-color: #e9ff70;
    color: #000;
    border: 3px solid #e9ff70;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 5px 5px 0 #e9ff70;
    transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.1s ease;
}

.submit-btn:hover {
    background-color: #fff;
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 #e9ff70;
}

.submit-btn:active {
    transform: translate(5px, 5px);
    box-shadow: 0 0 0 #e9ff70;
}

/* Links column */
.links-stack {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.contact-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #222;
    text-decoration: none;
    color: #fff;
    transition: color 0.15s ease, padding-left 0.15s ease;
    gap: 1rem;
}

.contact-link:first-child {
    border-top: 1px solid #222;
}

.contact-link:hover {
    color: #e9ff70;
    padding-left: 0.5rem;
}

.link-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.4;
    flex-shrink: 0;
}

.link-value {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: right;
}

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
    color: #4ade80;
}

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

/* Tablet landscape — tighten right col */
@media (max-width: 1024px) {
    .contact-grid { grid-template-columns: 1fr 280px; gap: 2rem; }
}

/* Tablet portrait — stack */
@media (max-width: 768px) {
    .contact { padding: 4rem 1.5rem; }
    .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .form-row { grid-template-columns: 1fr 1fr; }
    .availability-box { margin-top: 1.5rem; }
}

/* Mobile */
@media (max-width: 600px) {
    .contact { padding: 3rem 1rem; }
    .form-row { grid-template-columns: 1fr; }
    .section-heading { font-size: 1.8rem; }
}

@media (max-width: 480px) {
    .contact { padding: 2.5rem 1rem; }
    .section-heading { padding: 0.2rem 0.8rem; }
    .submit-btn {
        width: 100%;
        justify-content: center;
        box-shadow: 3px 3px 0 #e9ff70;
    }
    .link-value { font-size: 0.82rem; }
    .availability-box { padding: 0.65rem 1rem; font-size: 0.75rem; }
}

/* Very small phones */
@media (max-width: 375px) {
    .contact { padding: 2rem 0.85rem; }
    .section-heading { font-size: 1.6rem; }
    .form-group input,
    .form-group textarea { padding: 0.65rem 0.85rem; font-size: 0.88rem; }
}
</style>
