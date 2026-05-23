<template>
  <section id="certificates" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          06
          <span class="sub">▶ CERTYFIKATY</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.certificates.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>POŚWIADCZENIA</span>
          </template>
          <template v-else>
            <span>CREDENTIALS</span>
          </template>
        </h2>
        <div class="cn-sec-meta">VERIFIED</div>
      </div>
      <div class="cn-certs">
        <div v-for="(c, i) in t.certificates.items" :key="i" class="cn-cert">
          <div class="ic">{{ String(i + 1).padStart(2, '0') }}</div>
          <div>
            <div class="title">{{ c.title }}</div>
            <div class="issuer">▶ {{ c.issuer }}</div>
          </div>
          <div class="year">'{{ c.year.slice(2) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
</script>
