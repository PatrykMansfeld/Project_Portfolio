<template>
  <section id="hobbies" class="mf-sec">
    <div class="mf-sec-marker">▸ VII · {{ t.hobbies.heading }}</div>
    <div class="mf-hob">
      <div class="mf-hob-card" v-for="(hobby, i) in hobbies" :key="i">
        <div class="n">▸{{ String(i + 1).padStart(2, '0') }}</div>
        <h4>{{ hobby.title }}</h4>
        <div class="sub">▸ {{ hobby.sub || t.hobbies.sub }}</div>
        <p>{{ hobby.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const hobbies = computed(() => [
  t.value.hobbies.martial,
  t.value.hobbies.racing,
  t.value.hobbies.simracing,
])
</script>

<style scoped>
.mf-hob {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.mf-hob-card {
  padding: 36px 24px;
  border-right: 1px solid var(--line);
}

.mf-hob-card:last-child { border-right: none; }

.mf-hob-card .n {
  font-family: 'Anton', sans-serif;
  font-size: 72px;
  line-height: 0.85;
  letter-spacing: -2.5px;
  color: var(--accent);
  margin-bottom: 20px;
  font-weight: 400;
}

.mf-hob-card h4 {
  font-family: 'Anton', sans-serif;
  font-size: 32px;
  line-height: 0.95;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 0 0 6px;
  font-weight: 400;
}

.mf-hob-card .sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

.mf-hob-card p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--dim);
  margin: 0;
}

@media (max-width: 1024px) {
  .mf-hob { grid-template-columns: 1fr; }
  .mf-hob-card { border-right: none; border-bottom: 1px solid var(--line); }
  .mf-hob-card:last-child { border-bottom: none; }
}
</style>
