<template>
  <section id="about" class="mf-sec">
    <div class="mf-sec-marker">▸ I · {{ t.nav.about }}</div>
    <h2 class="mf-about-display">
      <template v-if="lang === 'pl'">
        Buduję <span class="acc">aplikacje</span><br />jakbym sam<br />miał ich <span class="it">używać</span>.
      </template>
      <template v-else>
        I build <span class="acc">software</span><br />like I would<br /><span class="it">use it</span>.
      </template>
    </h2>
    <div class="mf-about-body">
      <div class="pull">{{ t.about.card1Title }}.</div>
      <p>{{ t.about.card1Text }}</p>
      <p>{{ t.about.card2Text }}</p>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()
</script>

<style scoped>
.mf-about-display {
  font-family: 'Anton', sans-serif;
  font-size: clamp(48px, 7vw, 130px);
  line-height: 0.92;
  letter-spacing: -3px;
  text-transform: uppercase;
  margin: 0 0 32px;
  max-width: 1200px;
  font-weight: 400;
}

.mf-about-display .acc { color: var(--accent); }
.mf-about-display .it { font-style: italic; }

.mf-about-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.mf-about-body .pull {
  font-family: 'Anton', sans-serif;
  font-size: 42px;
  line-height: 0.95;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 400;
}

.mf-about-body p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--dim);
  margin: 0;
}

@media (max-width: 1024px) {
  .mf-about-body { grid-template-columns: 1fr; }
}
</style>
