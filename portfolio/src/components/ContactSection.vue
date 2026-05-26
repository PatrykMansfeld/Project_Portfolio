<template>
  <section id="contact" class="cn-section" style="border-bottom: none;">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          08
          <span class="sub">▶ KONTAKT</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.contact.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">NAPISZ</span> <span>DO MNIE</span>
          </template>
          <template v-else>
            <span class="ko">WRITE</span> <span>TO ME</span>
          </template>
        </h2>
        <div class="cn-section-meta">DIRECT</div>
      </div>
      <div class="cn-contact">
        <div class="cn-contact-left">
          <h3>
            <template v-if="lang === 'pl'">▶ DOSTĘPNY <span class="red">DO PRACY.</span></template>
            <template v-else>▶ OPEN <span class="red">TO WORK.</span></template>
          </h3>
          <p>{{ t.contact.lead }}</p>
        </div>
        <div class="cn-contact-right">
          <div class="head">▶ {{ lang === 'pl' ? 'KANAŁY BEZPOŚREDNIE' : 'DIRECT CHANNELS' }}</div>
          <a
            v-for="(s, i) in t.contact.socials"
            :key="i"
            class="cn-social"
            :href="s.url"
            target="_blank"
            rel="noopener"
          >
            <div>
              <div class="lbl">→ {{ String(i + 1).padStart(2, '0') }} · {{ s.label }}</div>
              <div class="handle">{{ s.handle }}</div>
            </div>
            <span class="arr">▶</span>
          </a>
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
.cn-contact {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 0;
  border: 3px solid var(--ink);
}
.cn-contact-left {
  padding: 36px 36px 30px;
  border-right: 3px solid var(--ink);
  background: var(--ink);
  color: var(--cream);
  position: relative;
  overflow: hidden;
}
.cn-contact-left::before {
  content: '';
  position: absolute;
  width: 280px; height: 280px;
  background: var(--red);
  border-radius: 50%;
  right: -120px; bottom: -120px;
}
.cn-contact-left h3 {
  font-family: 'Archivo', sans-serif;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  margin: 0 0 18px;
  line-height: 0.95;
  position: relative;
}
.cn-contact-left h3 .red { color: var(--red); }
.cn-contact-left p {
  font-size: 15px;
  line-height: 1.55;
  margin: 0 0 24px;
  max-width: 440px;
  opacity: 0.85;
  position: relative;
}
.cn-contact-right { padding: 36px 32px; }
.cn-contact-right .head {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 22px;
  font-weight: 700;
}
.cn-social {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 16px 0;
  border-top: 2px solid var(--ink);
  text-decoration: none;
  color: var(--ink);
  transition: padding 0.15s;
}
.cn-social:last-of-type { border-bottom: 2px solid var(--ink); }
.cn-social:hover { padding-left: 8px; color: var(--red); }
.cn-social .lbl {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--dim);
  font-weight: 700;
  margin-bottom: 4px;
}
.cn-social .handle {
  font-family: 'Archivo', sans-serif;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.3px;
}
.cn-social .arr { color: var(--red); font-size: 22px; align-self: center; }

@media (max-width: 1024px) {
  .cn-contact { grid-template-columns: 1fr; }
  .cn-contact-left { border-right: none; border-bottom: 3px solid var(--ink); }
}
@media (max-width: 720px) {
  .cn-contact-left, .cn-contact-right { padding: 26px 22px; }
}
</style>
