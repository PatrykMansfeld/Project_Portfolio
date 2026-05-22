<template>
  <section id="skills" class="mf-sec">
    <div class="mf-sec-marker">▸ IV · {{ t.nav.skills }}</div>
    <div class="mf-skills">
      <div class="mf-skill-row" v-for="(cat, i) in categories" :key="i">
        <div class="cat">
          <span class="num">▸{{ String(i + 1).padStart(2, '0') }} · {{ cat.skills.length }}</span>
          {{ cat.label }}
        </div>
        <div class="list">
          <span v-for="skill in cat.skills" :key="skill.abbr">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const categories = computed(() => [
  {
    label: t.value.skills.frontend,
    skills: [
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'TypeScript', abbr: 'TS' },
      { name: 'Angular', abbr: 'ANG' },
      { name: 'React', abbr: 'RCT' },
      { name: 'Vue.js', abbr: 'VUE' },
      { name: 'Electron', abbr: 'ELC' },
    ],
  },
  {
    label: t.value.skills.backend,
    skills: [
      { name: 'Node.js', abbr: 'NOD' },
      { name: 'Python', abbr: 'PY' },
      { name: 'Java', abbr: 'JAV' },
      { name: 'C#', abbr: 'C#' },
      { name: 'Go', abbr: 'GO' },
    ],
  },
  {
    label: t.value.skills.devops,
    skills: [
      { name: 'AWS', abbr: 'AWS' },
      { name: 'Docker', abbr: 'DCK' },
      { name: 'Kubernetes', abbr: 'K8S' },
      { name: 'Jenkins', abbr: 'JNK' },
      { name: 'GitHub Actions', abbr: 'GHA' },
      { name: 'CI/CD', abbr: 'CI' },
    ],
  },
  {
    label: t.value.skills.ai,
    skills: [
      { name: 'LLM', abbr: 'LLM' },
      { name: 'RAG', abbr: 'RAG' },
      { name: 'Machine Learning', abbr: 'ML' },
      { name: 'SQL', abbr: 'SQL' },
      { name: 'NoSQL', abbr: 'NSQ' },
    ],
  },
])
</script>

<style scoped>
.mf-skills { display: flex; flex-direction: column; }

.mf-skill-row {
  padding: 30px 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
  align-items: baseline;
}

.mf-skill-row:last-child { border-bottom: 1px solid var(--line); }

.cat {
  font-family: 'Anton', sans-serif;
  font-size: 56px;
  line-height: 0.9;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 400;
}

.cat .num {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--dim);
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 400;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  font-family: 'Anton', sans-serif;
  font-size: 28px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;
}

.list span {
  position: relative;
  display: inline-block;
  cursor: default;
  transition: color 0.2s ease;
}

.list span:hover { color: var(--accent); }

.list span + span::before {
  content: '·';
  margin-right: 18px;
  color: var(--dim2);
  position: relative;
  left: -12px;
  top: -3px;
}

@media (max-width: 1024px) {
  .mf-skill-row { grid-template-columns: 1fr; gap: 14px; }
  .cat { font-size: 40px; }
}

@media (max-width: 720px) {
  .list { font-size: 20px; }
}
</style>
