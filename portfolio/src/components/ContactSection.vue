<template>
  <section id="contact" class="cn-sec" style="border-bottom: none;">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          08
          <span class="sub">▶ KONTAKT</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.contact.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">NAPISZ</span> <span>DO MNIE</span>
          </template>
          <template v-else>
            <span class="ko">WRITE</span> <span>TO ME</span>
          </template>
        </h2>
        <div class="cn-sec-meta">DIRECT</div>
      </div>
      <div class="cn-contact">
        <div class="cn-contact-l">
          <h3>
            <template v-if="lang === 'pl'">▶ ZBUDUJMY <span class="red">COŚ.</span></template>
            <template v-else>▶ LET'S BUILD <span class="red">SOMETHING.</span></template>
          </h3>
          <p>{{ t.contact.lead }}</p>
          <form class="cn-form" @submit.prevent>
            <div>
              <label>01 / {{ t.contact.form.name }}</label>
              <input :placeholder="t.contact.form.namePh" />
            </div>
            <div>
              <label>02 / {{ t.contact.form.email }}</label>
              <input type="email" :placeholder="t.contact.form.emailPh" />
            </div>
            <div>
              <label>03 / {{ t.contact.form.message }}</label>
              <textarea rows="3" :placeholder="t.contact.form.messagePh" />
            </div>
            <button type="submit" class="cn-btn">
              <span>▶ {{ t.contact.form.btn }}</span>
            </button>
          </form>
        </div>
        <div class="cn-contact-r">
          <div class="head">▶ {{ lang === 'pl' ? 'KANAŁY BEZPOŚREDNIE' : 'DIRECT CHANNELS' }}</div>
          <a
            v-for="(s, i) in t.contact.socials"
            :key="i"
            class="cn-soc"
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
