<template>
    <section id="about" class="about">
        <div class="about-container">
            <h2 class="about-heading">{{ t.about.heading }}</h2>
            <div class="about-layout">
                <div class="about-photo">
                    <div class="photo-placeholder">PM</div>
                </div>
                <div class="about-grid">
                    <div class="about-card">
                        <h3>{{ t.about.card1Title }}</h3>
                        <p>{{ t.about.card1Text }}</p>
                    </div>
                    <div class="about-card">
                        <h3>{{ t.about.card2Title }}</h3>
                        <p>{{ t.about.card2Text }}</p>
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
    height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
    color: #000;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-container {
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
}

.about-heading {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 3rem;
    display: inline-block;
    background-color: #ff5c5c;
    padding: 0.3rem 1.2rem;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
}

.about-layout {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
}

.about-photo {
    flex-shrink: 0;
}

.photo-placeholder {
    width: 180px;
    height: 180px;
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0 #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    color: #000;
    /* Replace background-color with background-image when you have a real photo:
       background-image: url('/photo.jpg');
       background-size: cover;
       background-position: center;
    */
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    flex: 1;
}

.about-card {
    background-color: #e9ff70;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 2rem;
}

.about-card h3 {
    font-size: 1.4rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.about-card p {
    font-size: 1.05rem;
    line-height: 1.6;
}

@media (max-width: 768px) {
    .about {
        padding: 3rem 1.5rem;
    }
    .about-heading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .about-layout {
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }
    .about-grid {
        grid-template-columns: 1fr;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .about {
        padding: 2rem 1rem;
    }
    .about-heading {
        font-size: 1.8rem;
        padding: 0.2rem 0.8rem;
    }
    .photo-placeholder {
        width: 140px;
        height: 140px;
        font-size: 2.2rem;
        box-shadow: 5px 5px 0 #000;
    }
    .about-card {
        padding: 1.5rem;
        box-shadow: 5px 5px 0px #000;
    }
    .about-card h3 {
        font-size: 1.2rem;
    }
    .about-card p {
        font-size: 0.95rem;
    }
}
</style>
