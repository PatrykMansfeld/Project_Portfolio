<template>
  <section id="hobbies" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          07
          <span class="sub">▶ POZA PRACĄ</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.hobbies.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>POZA</span> <span class="red">KODEM</span>
          </template>
          <template v-else>
            <span>BEYOND</span> <span class="red">THE CODE</span>
          </template>
        </h2>
        <div class="cn-sec-meta">OFF-PAGE</div>
      </div>
      <div class="cn-hob">
        <div v-for="(h, i) in t.hobbies.items" :key="i" class="cn-hob-card">
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
