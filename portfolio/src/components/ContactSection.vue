<template>
    <section id="contact" class="contact">
        <div class="contact-container">
            <h2 class="section-heading">{{ t.contact.heading }}</h2>
            <div class="contact-grid">
                <div class="contact-form-wrapper">
                    <h3 class="contact-sub-heading">{{ t.contact.writeMe }}</h3>
                    <form class="contact-form" @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label for="name">{{ t.contact.name }}</label>
                            <input id="name" v-model="form.name" type="text" :placeholder="t.contact.namePlaceholder" required />
                        </div>
                        <div class="form-group">
                            <label for="email">{{ t.contact.email }}</label>
                            <input id="email" v-model="form.email" type="email" :placeholder="t.contact.emailPlaceholder" required />
                        </div>
                        <div class="form-group">
                            <label for="message">{{ t.contact.message }}</label>
                            <textarea id="message" v-model="form.message" rows="4" :placeholder="t.contact.messagePlaceholder" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">{{ t.contact.btn }}</button>
                    </form>
                </div>

                <div class="contact-links-wrapper">
                    <h3 class="contact-sub-heading">{{ t.contact.findMe }}</h3>
                    <div class="contact-card">
                        <div class="links-list">
                            <!-- Replace with your real email and profiles -->
                            <a href="mailto:twoj@email.com" class="contact-link">
                                <span class="link-icon">✉️</span>
                                <span>twoj@email.com</span>
                            </a>
                            <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="contact-link">
                                <span class="link-icon">🐙</span>
                                <span>github.com/PatrykMansfeld</span>
                            </a>
                            <a href="https://linkedin.com/in/twojanazwa" target="_blank" rel="noopener" class="contact-link">
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
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const form = reactive({ name: '', email: '', message: '' })

function handleSubmit() {
    const subject = encodeURIComponent(`Portfolio — ${form.name}`)
    const body = encodeURIComponent(`Imię / Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    // Replace twoj@email.com with your real email address
    window.open(`mailto:twoj@email.com?subject=${subject}&body=${body}`)
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

.contact-sub-heading {
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.2rem;
    opacity: 0.6;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
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
    background-color: transparent;
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
    color: #fff;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    border: 3px solid #fff;
    box-shadow: 4px 4px 0px #e9ff70;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.contact-link:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #e9ff70;
}

.link-icon {
    font-size: 1.3rem;
}

@media (max-width: 768px) {
    .contact {
        padding: 3rem 1.5rem;
    }
    .section-heading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .contact {
        padding: 2rem 1rem;
    }
    .section-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
    }
    .contact-link {
        font-size: 0.85rem;
        padding: 0.5rem 0.8rem;
        box-shadow: 3px 3px 0px #e9ff70;
    }
    .link-icon {
        font-size: 1.1rem;
    }
}
</style>
