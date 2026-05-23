<template>
  <section id="projects" class="cn-sec">
    <div class="cn-wrap">
      <div class="cn-sec-head">
        <div class="cn-sec-num-display">
          05
          <span class="sub">▶ PROJEKTY</span>
        </div>
        <h2 class="cn-sec-title">
          <span class="kick">{{ t.projects.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">WYBRANE</span> <span>DZIEŁA</span>
          </template>
          <template v-else>
            <span class="ko">SELECTED</span> <span>WORKS</span>
          </template>
        </h2>
        <div class="cn-sec-meta">{{ t.projects.items.length }} POSTERS</div>
      </div>
      <div class="cn-projects">
        <article v-for="(p, i) in t.projects.items" :key="p.num" class="cn-proj">
          <div class="cn-proj-poster">
            <div>
              <div class="cn-proj-num">{{ p.num }}</div>
            </div>
            <div>
              <div class="year">▶ {{ p.year }}</div>
              <div class="tags">
                <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="cn-proj-body">
            <div class="kick">▶ → {{ p.num }} / {{ String(t.projects.items.length).padStart(2, '0') }}</div>
            <h3>{{ p.title }}</h3>
            <div class="tagline">— {{ p.tagline }}</div>
            <p>{{ p.description }}</p>
            <ul>
              <li v-for="(h, j) in p.highlights" :key="j">{{ h }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
</script>
