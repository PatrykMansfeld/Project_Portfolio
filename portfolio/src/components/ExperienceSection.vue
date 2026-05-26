<template>
  <section id="experience" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          02
          <span class="sub">▶ PRACA</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.experience.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">REJESTR</span> <span>PRACY</span>
          </template>
          <template v-else>
            <span class="ko">WORK</span> <span>LEDGER</span>
          </template>
        </h2>
        <div class="cn-section-meta">{{ t.experience.jobs.length }} ROLES</div>
      </div>
      <div class="cn-experience">
        <div
          v-for="(job, i) in t.experience.jobs"
          :key="i"
          class="cn-experience-row"
          :class="{ open: openIdx === i }"
          @click="openIdx = openIdx === i ? null : i"
        >
          <div class="num">
            <span class="pre">→</span>
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <div class="date">
            {{ job.date }}
            <span class="loc">▶ {{ job.location }}</span>
          </div>
          <div class="body">
            <h3>{{ job.title }}</h3>
            <div class="company">{{ job.company }}</div>
            <div class="desc">{{ job.description }}</div>
          </div>
          <div class="tech">
            <span v-for="tag in job.tech" :key="tag">{{ tag }}</span>
          </div>
          <div class="arr">▶</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()
const openIdx = ref(null)
</script>

<style>
.cn-experience { display: flex; flex-direction: column; }
.cn-experience-row {
  display: grid;
  grid-template-columns: 110px 200px 1fr 1fr 50px;
  gap: 28px;
  align-items: start;
  padding: 26px 0;
  border-top: 3px solid var(--ink);
  cursor: pointer;
  transition: background 0.15s ease;
  position: relative;
}
.cn-experience-row:last-child { border-bottom: 3px solid var(--ink); }
.cn-experience-row:hover { background: rgba(216,40,26,0.06); }
.cn-experience-row.open { background: var(--ink); color: var(--cream); }
.cn-experience-row.open .num { color: var(--red); }
.cn-experience-row.open .date { color: var(--cream); }
.cn-experience-row.open .desc { max-height: 200px; margin-top: 12px; opacity: 1; }
.cn-experience-row .num {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 64px;
  letter-spacing: -3px;
  line-height: 0.85;
  color: var(--ink);
}
.cn-experience-row .num .pre {
  display: block;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 700;
  color: var(--red);
  margin-bottom: 4px;
}
.cn-experience-row .date {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding-top: 8px;
}
.cn-experience-row .date .loc {
  display: block;
  font-size: 10px;
  letter-spacing: 1.4px;
  opacity: 0.55;
  margin-top: 6px;
  font-weight: 500;
}
.cn-experience-row .body { padding-top: 8px; }
.cn-experience-row .body h3 {
  font-family: 'Archivo', sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin: 0 0 4px;
  text-transform: uppercase;
}
.cn-experience-row .body .company {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 13px;
  color: var(--red);
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 700;
}
.cn-experience-row .body .desc {
  font-size: 14px;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, margin 0.2s ease, opacity 0.2s ease;
}
.cn-experience-row .tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-content: flex-start;
  padding-top: 14px;
}
.cn-experience-row .tech span {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border: 2px solid currentColor;
}
.cn-experience-row .arr {
  font-size: 28px;
  font-weight: 900;
  text-align: right;
  align-self: center;
  transition: transform 0.2s;
}
.cn-experience-row.open .arr { transform: rotate(90deg); color: var(--red); }

@media (max-width: 1024px) {
  .cn-experience-row { grid-template-columns: 80px 1fr 40px; gap: 16px; }
  .cn-experience-row .date, .cn-experience-row .tech { grid-column: 1 / -1; padding-top: 0; }
  .cn-experience-row .date { padding-left: 96px; }
}
</style>
