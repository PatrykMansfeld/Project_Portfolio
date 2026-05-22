<template>
  <section id="experience" class="mf-sec">
    <div class="mf-sec-marker">▸ II · {{ t.nav.experience }}</div>
    <div class="mf-exp">
      <div
        class="mf-exp-row"
        v-for="(job, i) in t.experience.jobs"
        :key="i"
      >
        <div class="mf-exp-num">{{ String(i + 1).padStart(2, '0') }}</div>
        <div class="mf-exp-title">
          {{ job.title }}<br />
          <span class="mf-exp-company">@ {{ job.company }}</span>
        </div>
        <div class="mf-exp-desc">{{ job.description }}</div>
        <div class="mf-exp-meta">
          <span class="date">{{ job.date }}</span>
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
.mf-exp { display: flex; flex-direction: column; }

.mf-exp-row {
  display: grid;
  grid-template-columns: 120px 1fr 1fr 200px;
  gap: 24px;
  padding: 26px 0;
  border-top: 1px solid var(--line);
  align-items: baseline;
  cursor: default;
  transition: padding-left 0.2s ease;
  position: relative;
}

.mf-exp-row:last-child { border-bottom: 1px solid var(--line); }
.mf-exp-row:hover { padding-left: 18px; }

.mf-exp-row::before {
  content: '▸';
  position: absolute;
  left: -28px;
  top: 36px;
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.2s ease;
  font-family: 'Anton', sans-serif;
  font-size: 22px;
}

.mf-exp-row:hover::before { opacity: 1; }

.mf-exp-num {
  font-family: 'Anton', sans-serif;
  font-size: 64px;
  line-height: 0.85;
  letter-spacing: -2px;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--ink);
  font-weight: 400;
  transition: color 0.2s ease, -webkit-text-stroke-color 0.2s ease;
}

.mf-exp-row:hover .mf-exp-num {
  color: var(--accent);
  -webkit-text-stroke-color: var(--accent);
}

.mf-exp-title {
  font-family: 'Anton', sans-serif;
  font-size: 32px;
  line-height: 0.95;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 400;
}

.mf-exp-company { color: var(--accent); }

.mf-exp-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--dim);
}

.mf-exp-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--dim2);
  text-align: right;
  line-height: 1.6;
}

.mf-exp-meta .date {
  color: var(--ink);
  display: block;
  margin-bottom: 6px;
}

@media (max-width: 1024px) {
  .mf-exp-row { grid-template-columns: 60px 1fr; gap: 14px; }
  .mf-exp-num { font-size: 36px; }
  .mf-exp-title { font-size: 22px; grid-column: 2; }
  .mf-exp-desc { grid-column: 2; }
  .mf-exp-meta { grid-column: 2; text-align: left; }
}
</style>
