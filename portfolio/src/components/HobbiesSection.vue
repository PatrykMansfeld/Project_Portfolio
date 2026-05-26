<template>
  <section id="hobbies" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          07
          <span class="sub">▶ POZA PRACĄ</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.hobbies.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>POZA</span> <span class="red">KODEM</span>
          </template>
          <template v-else>
            <span>BEYOND</span> <span class="red">THE CODE</span>
          </template>
        </h2>
        <div class="cn-section-meta">OFF-PAGE</div>
      </div>
      <div class="cn-hobbies">
        <div v-for="(h, i) in t.hobbies.items" :key="i" class="cn-hobby-card">
          <div class="num">▶ → {{ String(i + 1).padStart(2, '0') }} / 03</div>
          <h4>{{ h.title }}</h4>
          <div class="sub">▶ {{ h.sub }}</div>
          <p>{{ h.description }}</p>
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
.cn-hobbies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 3px solid var(--ink);
}
.cn-hobby-card {
  padding: 26px 24px;
  border-right: 3px solid var(--ink);
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--cream);
  overflow: hidden;
}
.cn-hobby-card:last-child { border-right: none; }
.cn-hobby-card::before {
  content: '';
  position: absolute;
  width: 80px; height: 80px;
  right: -20px; top: -20px;
  background: var(--red);
  border-radius: 50%;
  opacity: 0.20;
}
.cn-hobby-card:nth-child(2)::before {
  background: var(--ink);
  border-radius: 0;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  opacity: 0.15;
}
.cn-hobby-card:nth-child(3)::before {
  background: transparent;
  border: 6px solid var(--ink);
  opacity: 0.20;
}
.cn-hobby-card .num {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 18px;
  color: var(--red);
  position: relative;
}
.cn-hobby-card h4 {
  font-family: 'Archivo', sans-serif;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.8px;
  text-transform: uppercase;
  margin: 0 0 6px;
  line-height: 1;
  position: relative;
}
.cn-hobby-card .sub {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--dim);
  margin-bottom: 14px;
}
.cn-hobby-card p { font-size: 13.5px; line-height: 1.65; margin: 0; }

@media (max-width: 1024px) {
  .cn-hobbies { grid-template-columns: 1fr; }
  .cn-hobby-card { border-right: none; border-bottom: 3px solid var(--ink); }
  .cn-hobby-card:last-child { border-bottom: none; }
}
</style>
