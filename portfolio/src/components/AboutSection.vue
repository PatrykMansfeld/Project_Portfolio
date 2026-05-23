<template>
  <section id="about" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          01
          <span class="sub">▶ MANIFEST</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.about.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>KIM</span> <span class="red">JESTEM</span>
          </template>
          <template v-else>
            <span>WHO I</span> <span class="red">AM</span>
          </template>
        </h2>
        <div class="cn-sec-meta">SHEET 01 / 08</div>
      </div>
      <div class="cn-about">
        <p class="cn-about-lead">{{ t.about.lead }}</p>
        <p class="cn-about-body">{{ t.about.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
</script>
