<template>
  <section id="education" class="mf-sec">
    <div class="mf-sec-marker">▸ III · {{ t.nav.education }}</div>
    <div class="mf-edu">
      <div class="mf-edu-card" v-for="(e, i) in t.education.items" :key="i">
        <div class="yr">▸ {{ e.date }}</div>
        <h3>{{ e.title }}</h3>
        <div class="school">{{ e.school }}</div>
        <div class="desc">{{ e.description }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
</script>

<style scoped>
.mf-edu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.mf-edu-card {
  border-top: 2px solid var(--accent);
  padding-top: 24px;
}

.mf-edu-card .yr {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

.mf-edu-card h3 {
  font-family: 'Anton', sans-serif;
  font-size: 32px;
  line-height: 0.95;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 0 0 12px;
  font-weight: 400;
}

.mf-edu-card .school {
  font-size: 13px;
  color: var(--dim);
  margin-bottom: 12px;
  font-weight: 500;
}

.mf-edu-card .desc {
  font-size: 13.5px;
  color: var(--dim);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .mf-edu { grid-template-columns: 1fr; }
}
</style>
