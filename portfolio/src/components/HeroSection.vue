<template>
  <div class="cn-hero-background" id="hero">
    <div class="cn-hero-shapes" aria-hidden="true">
      <div class="cn-shape-line-diag" />
      <div class="cn-shape-circle-big" />
      <div class="cn-shape-circle-out" />
      <div class="cn-shape-tri" />
      <div class="cn-shape-bars" />
      <div class="cn-shape-dot" />
    </div>

    <div class="cn-hero-issue-badge">
      <span class="lbl">{{ lang === 'pl' ? 'WYD.' : 'ISSUE' }}</span>
      <span class="num">04</span>
    </div>

    <div class="cn-wrapper cn-hero-content">
      <div class="cn-hero">
        <div class="cn-hero-left">
          <div class="cn-hero-tag">
            <span class="label">PORTFOLIO · 04</span>
            <span>·</span>
            <span>{{ t.hero.location }}</span>
            <span>·</span>
            <span class="red">● {{ t.hero.available }}</span>
          </div>
          <h1 class="cn-hero-display">
            <span class="first">{{ t.hero.firstname }}</span>
            <span class="last">{{ t.hero.lastname }}</span>
          </h1>
          <div class="cn-hero-role">{{ t.hero.role }}</div>
          <p class="cn-hero-tagline">{{ t.hero.tagline }}</p>
          <div class="cn-hero-actions">
            <a class="cn-button" href="#" @click.prevent="scrollTo('projects')">
              <span>{{ t.hero.primaryCta }}</span>
              <span class="arrow">▶</span>
            </a>
            <a class="cn-button alt" href="#" @click.prevent="scrollTo('contact')">
              <span>{{ t.hero.secondaryCta }}</span>
              <span class="arrow">▶</span>
            </a>
          </div>
        </div>
        <div class="cn-hero-right">
          <div class="cn-stat-block red">
            <div class="lbl">{{ t.hero.statYears }}</div>
            <div class="val">04+</div>
            <div class="sub">{{ lang === 'pl' ? 'od 2022' : 'since 2022' }}</div>
          </div>
          <div class="cn-stat-block dark">
            <div class="lbl">{{ t.hero.statProjects }}</div>
            <div class="val">20+</div>
            <div class="sub">{{ lang === 'pl' ? 'dostarczonych' : 'shipped' }}</div>
          </div>
          <div class="cn-stat-block">
            <div class="lbl">{{ t.hero.statTech }}</div>
            <div class="val">20+</div>
            <div class="sub">{{ lang === 'pl' ? 'w aktywnym użyciu' : 'in active use' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { lang, t } = useLang()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
.cn-hero-background {
  position: relative;
  overflow: hidden;
  border-bottom: 4px solid var(--ink);
  min-height: 100vh;
}
.cn-hero-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.cn-hero-content {
  position: relative;
  z-index: 1;
  padding-top: calc(48px + 70px);
  padding-bottom: 70px;
}
.cn-hero {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 36px;
  align-items: end;
  min-height: calc(100vh - 48px - 140px);
}
.cn-shape-circle-big {
  position: absolute;
  right: -120px; top: 50px;
  width: 480px; height: 480px;
  background: var(--red);
  border-radius: 50%;
}
.cn-shape-circle-out {
  position: absolute;
  right: 10%; top: 60px;
  width: 200px; height: 200px;
  border: 14px solid var(--ink);
  border-radius: 50%;
  background: transparent;
}
.cn-shape-tri {
  position: absolute;
  right: 8%; bottom: 18%;
  width: 0; height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-bottom: 130px solid var(--ink);
  transform: rotate(18deg);
}
.cn-shape-bars {
  position: absolute;
  left: -40px; top: 30%;
  width: 12px; height: 240px;
  background: var(--ink);
  transform: rotate(-15deg);
  box-shadow: 24px 6px 0 0 var(--red), 48px 12px 0 0 var(--ink);
}
.cn-shape-dot {
  position: absolute;
  left: 38%; bottom: 12%;
  width: 60px; height: 60px;
  background: var(--ink);
  border-radius: 50%;
}
.cn-shape-line-diag {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(120deg, transparent 35%, var(--ink) 35%, var(--ink) 36%, transparent 36%, transparent 60%, var(--red) 60%, var(--red) 61%, transparent 61%);
  opacity: 0.08;
}
.cn-hero-left { position: relative; z-index: 1; }
.cn-hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
}
.cn-hero-tag .label { background: var(--ink); color: var(--cream); padding: 4px 10px; }
.cn-hero-tag .red { color: var(--red); }
.cn-hero-issue-badge {
  position: absolute;
  right: clamp(18px, 3vw, 60px); top: calc(48px + 32px);
  width: 86px; height: 86px;
  background: var(--ink);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Archivo', sans-serif;
  border-radius: 50%;
  z-index: 2;
  transform: rotate(-8deg);
}
.cn-hero-issue-badge .lbl {
  font-size: 9px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 1px;
  font-weight: 700;
}
.cn-hero-issue-badge .num {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1;
  color: var(--red);
}
.cn-hero-display {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: clamp(70px, 13vw, 210px);
  line-height: 0.85;
  letter-spacing: -7px;
  margin: 0 0 24px;
  text-transform: uppercase;
  position: relative;
}
.cn-hero-display .first { display: block; color: var(--ink); }
.cn-hero-display .last {
  display: block;
  color: var(--cream);
  background: var(--ink);
  padding: 0 0.08em;
  width: fit-content;
  line-height: 0.92;
  margin-top: -0.05em;
}
.cn-hero-role {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 3px solid var(--ink);
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
}
.cn-hero-role::before {
  content: '';
  width: 14px; height: 14px;
  background: var(--red);
  border-radius: 50%;
  display: inline-block;
}
.cn-hero-tagline {
  font-size: 16px;
  line-height: 1.55;
  max-width: 540px;
  margin: 0 0 30px;
}
.cn-hero-actions {
  display: flex;
  gap: 0;
  border: 3px solid var(--ink);
  width: fit-content;
}
.cn-hero-right {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.cn-stat-block {
  border: 3px solid var(--ink);
  padding: 22px 24px;
  position: relative;
  background: var(--cream);
}
.cn-stat-block + .cn-stat-block { border-top: none; }
.cn-stat-block.dark { background: var(--ink); color: var(--cream); }
.cn-stat-block.red { background: var(--red); color: var(--cream); }
.cn-stat-block .lbl {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  opacity: 0.65;
  margin-bottom: 6px;
}
.cn-stat-block .val {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 56px;
  letter-spacing: -2.5px;
  line-height: 0.9;
}
.cn-stat-block .sub {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  margin-top: 4px;
  font-weight: 600;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .cn-hero { grid-template-columns: 1fr; gap: 32px; min-height: auto; }
  .cn-hero-content { padding-bottom: 50px; }
  .cn-hero-issue-badge { top: calc(48px + 16px); right: 16px; width: 72px; height: 72px; }
  .cn-hero-shapes { opacity: 0.6; }
  .cn-shape-circle-big { width: 320px; height: 320px; right: -100px; top: 60px; }
}
@media (max-width: 720px) {
  .cn-hero-content { padding-top: calc(48px + 36px); padding-bottom: 36px; }
  .cn-hero-display { font-size: clamp(44px, 15vw, 80px); letter-spacing: -3px; }
  .cn-hero-actions { width: 100%; flex-direction: column; }
  .cn-hero-shapes { opacity: 0.3; }
  .cn-hero-issue-badge { width: 60px; height: 60px; top: calc(48px + 10px); right: 12px; }
  .cn-hero-issue-badge .num { font-size: 24px; }
  .cn-hero-right { flex-direction: row; }
  .cn-stat-block { flex: 1; padding: 16px 14px; }
  .cn-stat-block .val { font-size: 38px; }
  .cn-stat-block + .cn-stat-block { border-top: 3px solid var(--ink); border-left: none; }
}
</style>
