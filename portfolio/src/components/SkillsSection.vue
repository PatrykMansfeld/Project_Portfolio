<template>
  <section id="skills" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          04
          <span class="sub">▶ ZDOLNOŚCI</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.skills.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>NARZĘDZIA</span> <span class="red">PRACY</span>
          </template>
          <template v-else>
            <span>TOOLS OF</span> <span class="red">PRODUCTION</span>
          </template>
        </h2>
        <div class="cn-sec-meta">4 CHANNELS</div>
      </div>
      <div class="cn-skills">
        <div v-for="(cat, i) in t.skills.categories" :key="i" class="cn-skill-cat">
          <div class="cn-skill-l">
            <div class="num-big">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ cat.label }}</h3>
            <div class="meta">▶ {{ cat.items.length }} {{ lang === 'pl' ? 'POZYCJI' : 'ITEMS' }}</div>
          </div>
          <div class="cn-skill-r">
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
