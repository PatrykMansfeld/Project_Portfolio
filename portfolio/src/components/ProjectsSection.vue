<template>
  <section id="projects" class="section container reveal">
    <header class="section-head">
      <h2>{{ t.projects.title }}</h2>
      <span class="mono">{{ String(t.projects.items.length).padStart(2, '0') }}</span>
    </header>

    <div class="bento">
      <article
        v-for="(p, i) in t.projects.items"
        :key="p.num"
        class="card project"
        :class="i === 0 ? 'featured span-2 row-2' : 'span-2'"
      >
        <div class="top">
          <span v-if="i === 0" class="chip accent">{{ t.projects.featured }}</span>
          <span v-else class="project-icon"><AppIcon :name="p.icon" :size="20" /></span>
          <span class="mono">{{ p.num }} · {{ p.year }}</span>
        </div>

        <div v-if="i === 0" class="visual" aria-hidden="true">
          <AppIcon :name="p.icon" :size="44" />
        </div>

        <div class="body">
          <h3>{{ p.title }}</h3>
          <p class="tagline">{{ p.tagline }}</p>
          <p class="desc">{{ p.description }}</p>
          <ul v-if="p.highlights" class="highlights">
            <li v-for="(h, j) in p.highlights" :key="j">{{ h }}</li>
          </ul>
        </div>

        <div class="chips">
          <span v-for="tag in p.tags" :key="tag" class="chip">{{ tag }}</span>
        </div>

        <div v-if="projectLinks[p.num]?.repo || projectLinks[p.num]?.demo" class="project-links">
          <a
            v-if="projectLinks[p.num].repo"
            class="btn sm"
            :href="projectLinks[p.num].repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="github" :size="16" />
            {{ t.projects.code }}
          </a>
          <a
            v-if="projectLinks[p.num].demo"
            class="btn sm"
            :href="projectLinks[p.num].demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t.projects.demo }}
            <AppIcon name="arrow-up-right" :size="16" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { useLang, projectLinks } from '../composables/useLang.js'

const { t } = useLang()
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.project-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--acc-soft);
  color: var(--acc);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.visual {
  flex: 1;
  min-height: 160px;
  border-radius: 14px;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--acc);
  background:
    radial-gradient(
      circle at center,
      color-mix(in srgb, var(--acc) 20%, transparent),
      transparent 60%
    ),
    radial-gradient(circle, color-mix(in srgb, var(--acc) 32%, transparent) 1px, transparent 1.6px)
      0 0 / 18px 18px,
    var(--card-2);
}

.body {
  flex: 1;
}
.featured .body {
  flex: none;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
}
.featured h3 {
  font-size: 26px;
}

.tagline {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  color: var(--acc-text);
}
.desc {
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
}

.highlights {
  margin-top: 16px;
  list-style: none;
  display: grid;
  gap: 8px;
}
.highlights li {
  position: relative;
  padding-left: 20px;
  font-size: 14px;
}
.highlights li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.55em;
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background: var(--acc);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

@media (max-width: 560px) {
  .featured h3 {
    font-size: 22px;
  }
  .visual {
    min-height: 130px;
  }
}
</style>
