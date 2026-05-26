<template>
  <section id="education" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          03
          <span class="sub">▶ EDUKACJA</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.education.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>ETAPY</span> <span class="red">WIEDZY</span>
          </template>
          <template v-else>
            <span>STAGES</span> <span class="red">OF STUDY</span>
          </template>
        </h2>
        <div class="cn-section-meta">3 PHASES</div>
      </div>
      <div class="cn-education">
        <div
          v-for="(item, i) in t.education.items"
          :key="i"
          class="cn-education-card"
          :class="{ red: i === 0, dark: i === 1 }"
        >
          <div class="num-big">0{{ i + 1 }}</div>
          <div class="stage">
            <span class="dot" />
            {{ lang === 'pl' ? (i === 0 ? 'AKTUALNIE' : 'UKOŃCZONE') : (i === 0 ? 'CURRENT' : 'COMPLETED') }}
          </div>
          <div class="date">{{ item.date }}</div>
          <h3>{{ item.title }}</h3>
          <div class="school">▶ {{ item.school }}</div>
          <div class="spec">{{ item.spec }}</div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
</script>

<style>
.cn-education {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 3px solid var(--ink);
}
.cn-education-card {
  padding: 26px 24px;
  border-right: 3px solid var(--ink);
  position: relative;
  display: flex;
  flex-direction: column;
}
.cn-education-card:last-child { border-right: none; }
.cn-education-card.dark { background: var(--ink); color: var(--cream); }
.cn-education-card.red { background: var(--red); color: var(--cream); }
.cn-education-card .num-big {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 72px;
  line-height: 0.85;
  letter-spacing: -3px;
  margin-bottom: 18px;
}
.cn-education-card.dark .num-big { color: var(--red); }
.cn-education-card.red .num-big { color: var(--cream); -webkit-text-stroke: 2px var(--cream); }
.cn-education-card:not(.dark):not(.red) .num-big { -webkit-text-stroke: 2px var(--ink); color: transparent; }
.cn-education-card .stage {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.cn-education-card .stage .dot { width: 8px; height: 8px; background: currentColor; border-radius: 50%; }
.cn-education-card .date {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 1.4px;
  margin-bottom: 14px;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: 600;
}
.cn-education-card h3 {
  font-family: 'Archivo', sans-serif;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.4px;
  line-height: 1.1;
  margin: 0 0 6px;
  text-transform: uppercase;
}
.cn-education-card .school {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 13px;
  margin-bottom: 14px;
  font-weight: 600;
  letter-spacing: 1.2px;
}
.cn-education-card .spec {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 4px 8px;
  border: 2px solid currentColor;
  display: inline-block;
  margin-bottom: 16px;
  font-weight: 700;
}
.cn-education-card .desc { font-size: 13px; line-height: 1.65; opacity: 0.85; }

@media (max-width: 1024px) {
  .cn-education { grid-template-columns: 1fr; }
  .cn-education-card { border-right: none; border-bottom: 3px solid var(--ink); }
  .cn-education-card:last-child { border-bottom: none; }
}
</style>
