<template>
  <section id="contact" class="mf-sec" style="border-bottom: none">
    <div class="mf-sec-marker">▸ VIII · {{ t.nav.contact }}</div>
    <h2 class="mf-contact-statement">
      <template v-if="lang === 'pl'">Napisz.<br /><span class="acc">Teraz.</span></template>
      <template v-else>Write.<br /><span class="acc">Now.</span></template>
    </h2>
    <div class="mf-contact-body">
      <form class="mf-form" @submit.prevent>
        <div>
          <label>I · {{ t.contact.name }}</label>
          <input :placeholder="t.contact.namePlaceholder" />
        </div>
        <div>
          <label>II · {{ t.contact.email }}</label>
          <input type="email" :placeholder="t.contact.emailPlaceholder" />
        </div>
        <div>
          <label>III · {{ t.contact.message }}</label>
          <textarea rows="2" :placeholder="t.contact.messagePlaceholder"></textarea>
        </div>
        <button type="submit" class="mf-btn">▸ {{ t.contact.btn }}</button>
      </form>
      <div class="mf-contact-side">
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
.mf-contact-statement {
  font-family: 'Anton', sans-serif;
  font-size: clamp(64px, 11vw, 200px);
  line-height: 0.82;
  letter-spacing: -6px;
  text-transform: uppercase;
  margin: 0 0 40px;
  font-weight: 400;
}

.mf-contact-statement .acc { color: var(--accent); font-style: italic; }

.mf-contact-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: start;
  padding-top: 28px;
  border-top: 1px solid var(--line);
}

.mf-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 640px;
}

.mf-form label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}

.mf-form input,
.mf-form textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  padding: 6px 0 10px;
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: var(--ink);
  resize: none;
  font-weight: 400;
}

.mf-form input:focus,
.mf-form textarea:focus {
  outline: none;
  border-bottom-color: var(--accent);
}

.mf-form input::placeholder,
.mf-form textarea::placeholder {
  color: var(--dim2);
}

.mf-btn {
  appearance: none;
  background: var(--accent);
  color: var(--bg);
  border: none;
  padding: 14px 22px;
  font-family: 'Anton', sans-serif;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 10px;
  font-weight: 400;
  transition: background 0.15s ease;
}

.mf-btn:hover { background: var(--ink); }

.mf-contact-side .ch {
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

@media (max-width: 1024px) {
  .mf-contact-body { grid-template-columns: 1fr; }
}
</style>
