<template>
  <section id="experience" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          02
          <span class="sub">▶ PRACA</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.experience.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">REJESTR</span> <span>PRACY</span>
          </template>
          <template v-else>
            <span class="ko">WORK</span> <span>LEDGER</span>
          </template>
        </h2>
        <div class="cn-sec-meta">{{ t.experience.jobs.length }} ROLES</div>
      </div>
      <div class="cn-exp">
        <div
          v-for="(job, i) in t.experience.jobs"
          :key="i"
          class="cn-exp-row"
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
