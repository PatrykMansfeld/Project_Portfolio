<template>
  <section id="contact" class="mf-sec" style="border-bottom: none">
    <div class="mf-sec-marker">▸ VIII · {{ t.nav.contact }}</div>
    <div class="mf-contact-socials">
      <div class="ch">▸ {{ lang === 'pl' ? 'Bezpośrednie kanały' : 'Direct channels' }}</div>
      <a
        v-for="(s, i) in socials"
        :key="i"
        class="mf-soc"
        :href="s.url"
        target="_blank"
        rel="noopener"
      >
        <span class="lbl">▸{{ String(i + 1).padStart(2, '0') }} · {{ s.label }}</span>
        {{ s.handle }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

const socials = [
  { label: 'Email', handle: 'patryk.mansfeld@gmail.com', url: 'mailto:patryk.mansfeld@gmail.com' },
  { label: 'GitHub', handle: 'PatrykMansfeld', url: 'https://github.com/PatrykMansfeld' },
  { label: 'LinkedIn', handle: 'patryk-mansfeld', url: 'https://linkedin.com/in/patryk-mansfeld' },
]
</script>

<style scoped>
.mf-contact-socials {
  padding-top: 28px;
  border-top: 1px solid var(--line);
  max-width: 640px;
}

.mf-contact-socials .ch {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 14px;
}

.mf-soc {
  display: block;
  padding: 18px 0;
  border-top: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
  font-family: 'Anton', sans-serif;
  font-size: 26px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  font-weight: 400;
  transition: color 0.15s ease;
}

.mf-soc:last-of-type { border-bottom: 1px solid var(--line); }
.mf-soc:hover { color: var(--accent); }

.mf-soc .lbl {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 4px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
