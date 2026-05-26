<template>
  <section id="about" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          01
          <span class="sub">▶ MANIFEST</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.about.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>KIM</span> <span class="red">JESTEM</span>
          </template>
          <template v-else>
            <span>WHO I</span> <span class="red">AM</span>
          </template>
        </h2>
        <div class="cn-section-meta">SHEET 01 / 08</div>
      </div>
      <div class="cn-about">
        <p class="cn-about-lead">{{ t.about.lead }}</p>
        <p class="cn-about-body">{{ t.about.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
</script>

<style>
.cn-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.cn-about-lead {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: clamp(22px, 2.4vw, 32px);
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0;
}

.cn-about-lead .red-band {
  background: var(--red);
  color: var(--cream);
  padding: 0 0.12em;
  display: inline;
}

.cn-about-body {
  font-size: 15px;
  line-height: 1.7;
  border-left: 4px solid var(--red);
  padding-left: 22px;
}

.cn-about-body::first-letter {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 72px;
  line-height: 0.85;
  float: left;
  padding: 6px 12px 0 0;
  color: var(--red);
}

@media (max-width: 1024px) {
  .cn-about {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
