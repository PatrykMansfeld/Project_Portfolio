<template>
  <div class="cn-hero-bg" id="hero">
    <!-- Shapes — pełna szerokość, overflow hidden na rodzicu -->
    <div class="cn-hero-shapes" aria-hidden="true">
      <div class="cn-shape-line-diag" />
      <div class="cn-shape-circle-big" />
      <div class="cn-shape-circle-out" />
      <div class="cn-shape-tri" />
      <div class="cn-shape-bars" />
      <div class="cn-shape-dot" />
    </div>

    <!-- Badge absolutny względem pełno-szerokościowego tła -->
    <div class="cn-hero-num-issue">
      <span class="lbl">{{ lang === 'pl' ? 'WYD.' : 'ISSUE' }}</span>
      <span class="num">04</span>
    </div>

    <!-- Treść w max-width wrapperze -->
    <div class="cn-wrap cn-hero-content">
      <div class="cn-hero">
        <div class="cn-hero-l">
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
          <div class="cn-actions">
            <a class="cn-btn" href="#" @click.prevent="scrollTo('projects')">
              <span>{{ t.hero.primaryCta }}</span>
              <span class="arrow">▶</span>
            </a>
            <a class="cn-btn alt" href="#" @click.prevent="scrollTo('contact')">
              <span>{{ t.hero.secondaryCta }}</span>
              <span class="arrow">▶</span>
            </a>
          </div>
        </div>
        <div class="cn-hero-r">
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
