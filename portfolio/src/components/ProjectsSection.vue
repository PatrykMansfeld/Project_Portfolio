<template>
  <section id="projects" class="mf-sec">
    <div class="mf-sec-marker">▸ V · {{ t.nav.projects }}</div>
    <div class="mf-projects">
      <article class="mf-proj" v-for="(project, i) in t.projects.items" :key="project.num">
        <div class="mf-proj-l">
          <div class="mf-proj-num">{{ project.num }}</div>
          <div class="meta">▸ {{ projectYears[i] }} · {{ project.tags.length }} stack</div>
        </div>
        <div class="mf-proj-r">
          <h3>{{ project.title }}<span class="it">.</span></h3>
          <p>{{ project.description }}</p>
          <ul>
            <li v-for="h in project.highlights" :key="h">{{ h }}</li>
          </ul>
          <div class="mf-proj-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="mf-proj-links">
            <a :href="project.demo" class="mf-btn-sm">{{ t.projects.demo }} ↗</a>
            <a :href="project.github" class="mf-btn-sm ghost" target="_blank" rel="noopener">{{ t.projects.github }} ↗</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const projectYears = ['2025', '2024', '2024']
</script>

<style scoped>
.mf-projects { display: flex; flex-direction: column; }

.mf-proj {
  padding: 50px 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 40px;
  align-items: start;
}

.mf-proj:last-child { border-bottom: 1px solid var(--line); }

.mf-proj-l {
  position: sticky;
  top: 80px;
}

.mf-proj-num {
  font-family: 'Anton', sans-serif;
  font-size: clamp(96px, 14vw, 220px);
  line-height: 0.82;
  letter-spacing: -8px;
  color: transparent;
  -webkit-text-stroke: 2px var(--accent);
  font-weight: 400;
  margin: 0;
}

.mf-proj-l .meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--dim);
  margin-top: 16px;
}

.mf-proj-r h3 {
  font-family: 'Anton', sans-serif;
  font-size: clamp(48px, 6.5vw, 96px);
  line-height: 0.92;
  letter-spacing: -3px;
  text-transform: uppercase;
  margin: 0 0 20px;
  font-weight: 400;
}

.mf-proj-r h3 .it {
  font-style: italic;
  color: var(--accent);
}

.mf-proj-r p {
  font-size: 17px;
  line-height: 1.55;
  color: var(--dim);
  margin: 0 0 22px;
  max-width: 720px;
}

.mf-proj-r ul {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mf-proj-r li {
  font-family: 'Anton', sans-serif;
  font-size: 22px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  color: var(--dim);
  font-weight: 400;
  display: grid;
  grid-template-columns: 32px 1fr;
}

.mf-proj-r li::before {
  content: '/';
  color: var(--accent);
  font-style: italic;
}

.mf-proj-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.mf-proj-tags span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 5px 10px;
  border: 1px solid var(--ink);
  color: var(--ink);
}

.mf-proj-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mf-btn-sm {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 16px;
  background: var(--accent);
  color: var(--bg);
  text-decoration: none;
  border: 1px solid var(--accent);
  transition: background 0.15s ease, color 0.15s ease;
}

.mf-btn-sm:hover { background: var(--ink); border-color: var(--ink); color: var(--bg); }
.mf-btn-sm.ghost { background: transparent; color: var(--ink); border-color: var(--ink); }
.mf-btn-sm.ghost:hover { background: var(--ink); color: var(--bg); }

@media (max-width: 1024px) {
  .mf-proj { grid-template-columns: 1fr; gap: 20px; }
  .mf-proj-l { position: static; }
}
</style>
