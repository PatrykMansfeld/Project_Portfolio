<template>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to My Portfolio</h1>
            <p class="hero-subtitle">Full-stack developer crafting digital experiences</p>
            <button class="hero-button">View My Work</button>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #e9ff70;
    color: #000;
    scroll-snap-align: start;
}

.hero-content {
    text-align: center;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 3rem 4rem;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
}

.hero-subtitle {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    font-weight: 500;
}

.hero-button {
    padding: 14px 36px;
    font-size: 1.1rem;
    background-color: #ff5c5c;
    color: #000;
    border: 3px solid #000;
    box-shadow: 5px 5px 0px #000;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: box-shadow 0.1s ease, transform 0.1s ease;
}

.hero-button:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px #000;
}

.hero-button:active {
    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px #000;
}
</style>