<template>
    <section id="about" class="about">
        <div class="about-container">
            <h2 class="about-heading">{{ t.about.heading }}</h2>

            <div class="about-main">
                <!-- Photo -->
                <div class="about-photo-wrap">
                    <div class="about-photo">
                        <div class="photo-placeholder">PM</div>
                    </div>
                    <div class="about-socials">
                        <a href="https://github.com/PatrykMansfeld" target="_blank" rel="noopener" class="social-btn">GitHub ↗</a>
                        <a href="https://linkedin.com/in/twojanazwa" target="_blank" rel="noopener" class="social-btn">LinkedIn ↗</a>
                    </div>
                </div>

                <!-- Content -->
                <div class="about-content">
                    <div class="about-cards">
                        <div class="about-card">
                            <h3>{{ t.about.card1Title }}</h3>
                            <p>{{ t.about.card1Text }}</p>
                        </div>
                        <div class="about-card about-card--accent">
                            <h3>{{ t.about.card2Title }}</h3>
                            <p>{{ t.about.card2Text }}</p>
                        </div>
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
.about {
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-container {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

.about-heading {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0 #000;
}

.about-main {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 3rem;
    align-items: start;
}

/* Photo column */
.about-photo-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about-photo {
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    overflow: hidden;
}

.photo-placeholder {
    width: 100%;
    aspect-ratio: 1;
    background-color: #a78bfa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -3px;
    /* Swap with real photo:
       background-image: url('/photo.jpg');
       background-size: cover; background-position: center;
       font-size: 0; color: transparent;
    */
}

.about-socials {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.social-btn {
    display: block;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
    border: 2px solid #000;
    box-shadow: 3px 3px 0 #000;
    background-color: #e9ff70;
    text-align: center;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.social-btn:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #000;
}

/* Content column */
.about-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.about-card {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    padding: 1.8rem;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.about-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 6px 6px 0 #000;
}

.about-card--accent {
    background-color: #fff;
    border-color: #000;
}

.about-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.8rem;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid #000;
}

.about-card p {
    font-size: 0.97rem;
    line-height: 1.7;
    font-weight: 400;
}

/* Responsive */

/* Tablet landscape */
@media (max-width: 1024px) {
    .about-main {
        grid-template-columns: 200px 1fr;
        gap: 2rem;
    }
}

/* Tablet portrait */
@media (max-width: 768px) {
    .about {
        padding: 4rem 1.5rem;
    }
    .about-main {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .about-photo-wrap {
        flex-direction: row;
        align-items: flex-start;
        gap: 1.5rem;
    }
    .about-photo {
        width: 150px;
        flex-shrink: 0;
    }
    .about-socials {
        flex-direction: column;
        justify-content: center;
        flex: 1;
    }
    .social-btn {
        font-size: 0.75rem;
    }
    .about-cards {
        grid-template-columns: 1fr;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .about {
        padding: 2.5rem 1rem;
    }
    .about-photo-wrap {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    .about-photo {
        width: 130px;
    }
    .about-socials {
        flex-direction: row;
        gap: 0.5rem;
    }
    .social-btn {
        font-size: 0.72rem;
        padding: 0.4rem 0.8rem;
    }
    .about-card {
        padding: 1.2rem;
        box-shadow: 5px 5px 0 #000;
    }
    .about-card h3 {
        font-size: 0.95rem;
        margin-bottom: 0.6rem;
        padding-bottom: 0.5rem;
    }
    .about-card p {
        font-size: 0.9rem;
        line-height: 1.6;
    }
}

/* Very small phones */
@media (max-width: 375px) {
    .about { padding: 2rem 0.85rem; }
    .about-heading { padding: 0.2rem 0.8rem; }
    .about-photo { width: 110px; }
}
</style>
