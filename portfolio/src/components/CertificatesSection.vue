<template>
  <section id="certificates" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          06
          <span class="sub">▶ CERTYFIKATY</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.certificates.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span>POŚWIADCZENIA</span>
          </template>
          <template v-else>
            <span>CREDENTIALS</span>
          </template>
        </h2>
        <div class="cn-section-meta">VERIFIED</div>
      </div>
      <div class="cn-certificates">
        <div v-for="(c, i) in t.certificates.items" :key="i" class="cn-certificate">
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

<style>
.cn-certificates {
  border: 3px solid var(--ink);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.cn-certificate {
  padding: 22px 24px;
  border-right: 3px solid var(--ink);
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 18px;
  align-items: center;
}
.cn-certificate:last-child { border-right: none; }
.cn-certificate .ic {
  width: 36px; height: 36px;
  background: var(--ink);
  color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 14px;
  border-radius: 50%;
}
.cn-certificate .title {
  font-family: 'Archivo', sans-serif;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.3px;
  text-transform: uppercase;
}
.cn-certificate .issuer {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10.5px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--dim);
  margin-top: 4px;
  font-weight: 600;
}
.cn-certificate .year {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -1.5px;
  color: var(--red);
  line-height: 1;
}

@media (max-width: 1024px) {
  .cn-certificates { grid-template-columns: 1fr; }
  .cn-certificate { border-right: none; border-bottom: 3px solid var(--ink); }
  .cn-certificate:last-child { border-bottom: none; }
}
</style>
