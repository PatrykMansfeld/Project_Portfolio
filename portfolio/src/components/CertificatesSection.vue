<template>
  <section id="certificates" class="mf-sec">
    <div class="mf-sec-marker">▸ VI · {{ t.nav.certificates }}</div>
    <div class="mf-certs">
      <div class="mf-cert" v-for="(c, i) in t.certificates.items" :key="i">
        <div class="yr">{{ c.year }}</div>
        <div class="t">{{ c.title }}</div>
        <div class="iss">▸ {{ c.issuer }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
</script>

<style scoped>
.mf-certs { display: flex; flex-direction: column; }

.mf-cert {
  display: grid;
  grid-template-columns: 100px 1fr 200px;
  gap: 30px;
  padding: 28px 0;
  border-top: 1px solid var(--line);
  align-items: baseline;
}

.mf-cert:last-child { border-bottom: 1px solid var(--line); }

.mf-cert .yr {
  font-family: 'Anton', sans-serif;
  font-size: 56px;
  line-height: 0.85;
  letter-spacing: -2px;
  color: var(--accent);
  font-weight: 400;
}

.mf-cert .t {
  font-family: 'Anton', sans-serif;
  font-size: 36px;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  font-weight: 400;
}

.mf-cert .iss {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--dim);
  text-align: right;
}

@media (max-width: 1024px) {
  .mf-cert { grid-template-columns: 60px 1fr; }
  .mf-cert .iss { grid-column: 2; text-align: left; }
}
</style>
