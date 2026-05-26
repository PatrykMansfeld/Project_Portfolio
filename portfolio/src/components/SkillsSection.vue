<template>
  <section id="skills" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          04
          <span class="sub">▶ ZDOLNOŚCI</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.skills.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>NARZĘDZIA</span> <span class="red">PRACY</span>
          </template>
          <template v-else>
            <span>TOOLS OF</span> <span class="red">PRODUCTION</span>
          </template>
        </h2>
        <div class="cn-section-meta">4 CHANNELS</div>
      </div>
      <div class="cn-skills">
        <div v-for="(cat, i) in t.skills.categories" :key="i" class="cn-skill-category">
          <div class="cn-skill-left">
            <div class="num-big">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ cat.label }}</h3>
            <div class="meta">▶ {{ cat.items.length }} {{ lang === 'pl' ? 'POZYCJI' : 'ITEMS' }}</div>
          </div>
          <div class="cn-skill-right">
            <div v-for="s in cat.items" :key="s.abbr" class="cn-skill-item">
              <div class="name">
                <span class="n">{{ s.name }}</span>
                <span class="lvl">{{ s.level }}</span>
              </div>
              <div class="cn-skill-bar">
                <div :style="{ width: s.level + '%' }" />
              </div>
            </div>
          </div>
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
.cn-skills {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 0;
  border-top: 3px solid var(--ink);
  border-bottom: 3px solid var(--ink);
}
.cn-skill-category { display: contents; }
.cn-skill-left {
  padding: 28px 24px;
  border-right: 3px solid var(--ink);
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.cn-skill-category:last-child .cn-skill-left,
.cn-skill-category:last-child .cn-skill-right { border-bottom: none; }
.cn-skill-left .num-big {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 56px;
  letter-spacing: -2.5px;
  line-height: 0.85;
  color: var(--red);
}
.cn-skill-left h3 {
  font-family: 'Archivo', sans-serif;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.05;
}
.cn-skill-left .meta {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--dim);
  text-transform: uppercase;
  font-weight: 700;
}
.cn-skill-right {
  padding: 24px 26px;
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 18px 28px;
}
.cn-skill-item { display: flex; flex-direction: column; gap: 6px; }
.cn-skill-item .name {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.cn-skill-item .name .n {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.cn-skill-item .name .lvl {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 14px;
  color: var(--red);
  letter-spacing: -0.5px;
}
.cn-skill-bar {
  height: 6px;
  background: rgba(20,17,13,0.10);
  position: relative;
  overflow: hidden;
}
.cn-skill-bar > div {
  height: 100%;
  background: var(--ink);
  position: relative;
}
.cn-skill-bar > div::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(45deg, transparent 0 4px, var(--red) 4px 5px);
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .cn-skills { grid-template-columns: 1fr; }
  .cn-skill-left { border-right: none; border-bottom: 2px solid var(--ink); }
  .cn-skill-right { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 720px) { .cn-skill-right { grid-template-columns: 1fr; } }
</style>
