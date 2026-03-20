<template>
    <section class="contact">
        <div class="contact-container">
            <h2 class="section-heading">Kontakt</h2>
            <div class="contact-grid">
                <div class="contact-form-wrapper">
                    <form class="contact-form" @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label for="name">Imię i nazwisko</label>
                            <input id="name" v-model="form.name" type="text" placeholder="Jan Kowalski" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input id="email" v-model="form.email" type="email" placeholder="jan@example.com" required />
                        </div>
                        <div class="form-group">
                            <label for="message">Wiadomość</label>
                            <textarea id="message" v-model="form.message" rows="4" placeholder="Napisz do mnie..." required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Wyślij wiadomość</button>
                    </form>
                </div>
                <div class="contact-links-wrapper">
                    <div class="contact-card">
                        <h3>Znajdź mnie tutaj</h3>
                        <div class="links-list">
                            <a href="mailto:twoj@email.com" class="contact-link">
                                <span class="link-icon">✉️</span>
                                <span>twoj@email.com</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener" class="contact-link">
                                <span class="link-icon">🐙</span>
                                <span>github.com/twojanazwa</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener" class="contact-link">
                                <span class="link-icon">💼</span>
                                <span>linkedin.com/in/twojanazwa</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })

function handleSubmit() {
    console.log('Form submitted:', form)
}
</script>

<style scoped>
.contact {
    height: 100vh;
    padding: 5rem 2rem;
    background-color: #000;
    color: #fff;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

.contact-container {
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
}

.section-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #e9ff70;
    color: #000;
    padding: 0.3rem 1.2rem;
    border: 3px solid #e9ff70;
    box-shadow: 6px 6px 0px #e9ff70;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

@media (max-width: 700px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.form-group label {
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
    background-color: #fff;
    color: #000;
    border: 3px solid #fff;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    resize: none;
    transition: box-shadow 0.1s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    box-shadow: 4px 4px 0px #e9ff70;
    border-color: #e9ff70;
}

.submit-btn {
    padding: 0.8rem 2rem;
    background-color: #e9ff70;
    color: #000;
    border: 3px solid #e9ff70;
    box-shadow: 5px 5px 0px #e9ff70;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    align-self: flex-start;
}

.submit-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px #e9ff70;
}

.submit-btn:active {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px #e9ff70;
}

.contact-card {
    background-color: #fff;
    color: #000;
    border: 3px solid #fff;
    box-shadow: 8px 8px 0px #e9ff70;
    padding: 2rem;
    height: fit-content;
}

.contact-card h3 {
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}

.links-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    border: 3px solid #000;
    box-shadow: 4px 4px 0px #000;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.contact-link:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000;
}

.link-icon {
    font-size: 1.3rem;
}
</style>
