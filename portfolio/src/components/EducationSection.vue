<template>
  <section id="education" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          03
          <span class="sub">▶ EDUKACJA</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.education.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>ETAPY</span> <span class="red">WIEDZY</span>
          </template>
          <template v-else>
            <span>STAGES</span> <span class="red">OF STUDY</span>
          </template>
        </h2>
        <div class="cn-sec-meta">3 PHASES</div>
      </div>
      <div class="cn-edu">
        <div
          v-for="(item, i) in t.education.items"
          :key="i"
          class="cn-edu-card"
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
