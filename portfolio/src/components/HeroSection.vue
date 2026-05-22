<template>
  <section id="hero" class="mf-hero">
    <div class="mf-hero-statement l">
      <span class="small">{{ t.hero.greeting }}</span><br />
      {{ t.hero.firstname }}
    </div>
    <div class="mf-hero-statement r">
      <span class="acc">{{ t.hero.lastname }}.</span>
    </div>
    <div class="mf-cta">
      <a class="mf-btn" @click.prevent="scrollTo('projects')" href="#">▸ {{ t.hero.btn }}</a>
      <a class="mf-btn ghost" @click.prevent="scrollTo('contact')" href="#">{{ t.hero.contactBtn }}</a>
    </div>
    <div class="mf-hero-foot">
      <div class="col">
        <h2>04+</h2>
        <div class="lbl">{{ t.hero.statYears }}</div>
      </div>
      <div class="col">
        <h2>20+</h2>
        <div class="lbl">{{ t.hero.statProjects }}</div>
      </div>
      <div class="col">
        <p>{{ t.hero.subtitle }}</p>
        <div class="lbl" style="margin-top: 14px">▸ {{ t.hero.role }} · Poznań, PL</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 60
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.mf-hero {
  padding: 60px 0 120px;
  position: relative;
}

.mf-hero-statement {
  font-family: 'Anton', 'Arial Black', sans-serif;
  font-size: clamp(72px, 16vw, 320px);
  line-height: 0.78;
  letter-spacing: -8px;
  text-transform: uppercase;
  margin: 0 0 -0.05em;
  font-weight: 400;
}

.mf-hero-statement.l { text-align: left; }
.mf-hero-statement.r { text-align: right; }

.mf-hero-statement .acc {
  color: var(--accent);
  font-style: italic;
}

.mf-hero-statement .small {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  font-size: 0.2em;
  letter-spacing: -2px;
  text-transform: none;
  vertical-align: super;
  color: var(--dim);
}

.mf-cta {
  margin-top: 50px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
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
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  transition: background 0.15s ease, color 0.15s ease;
}

.mf-btn:hover { background: var(--ink); color: var(--bg); }
.mf-btn.ghost { background: transparent; color: var(--ink); border: 1px solid var(--ink); }
.mf-btn.ghost:hover { background: var(--ink); color: var(--bg); }

.mf-hero-foot {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid var(--line);
  align-items: end;
}

.mf-hero-foot .col h2 {
  font-family: 'Anton', sans-serif;
  font-size: 96px;
  line-height: 0.85;
  letter-spacing: -3px;
  margin: 0;
  font-weight: 400;
  color: var(--accent);
}

.mf-hero-foot .col .lbl {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--dim);
  margin-top: 8px;
}

.mf-hero-foot .col p {
  font-size: 14px;
  color: var(--dim);
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 1024px) {
  .mf-hero-foot { grid-template-columns: 1fr; gap: 20px; }
}

@media (max-width: 720px) {
  .mf-hero { padding: 40px 0 80px; }
  .mf-hero-statement { letter-spacing: -4px; }
}
</style>
