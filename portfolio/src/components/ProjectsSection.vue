<template>
  <section id="projects" class="cn-section">
    <div class="cn-wrapper">
      <div class="cn-section-head">
        <div class="cn-section-number">
          05
          <span class="sub">▶ PROJEKTY</span>
        </div>
        <h2 class="cn-section-title">
          <span class="kick">{{ t.projects.kicker }}</span>
          <template v-if="lang === 'pl'">
            <span class="ko">WYBRANE</span> <span>DZIEŁA</span>
          </template>
          <template v-else>
            <span class="ko">SELECTED</span> <span>WORKS</span>
          </template>
        </h2>
        <div class="cn-section-meta">{{ t.projects.items.length }} POSTERS</div>
      </div>
      <div class="cn-projects">
        <article v-for="(p, i) in t.projects.items" :key="p.num" class="cn-project">
          <div class="cn-project-poster">
            <div>
              <div class="cn-project-number">{{ p.num }}</div>
            </div>
            <div>
              <div class="year">▶ {{ p.year }}</div>
              <div class="tags">
                <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
          <div class="cn-project-body">
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

<style>
.cn-projects { display: flex; flex-direction: column; }
.cn-project {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 0;
  border-top: 3px solid var(--ink);
  position: relative;
}
.cn-project:last-child { border-bottom: 3px solid var(--ink); }
.cn-project-poster {
  background: var(--ink);
  color: var(--cream);
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 3px solid var(--ink);
  position: relative;
  overflow: hidden;
  min-height: 320px;
}
.cn-project:nth-child(odd) .cn-project-poster { background: var(--red); }
.cn-project-poster::before {
  content: '';
  position: absolute;
  width: 200px; height: 200px;
  border: 8px solid var(--cream);
  border-radius: 50%;
  right: -60px; bottom: -60px;
  opacity: 0.18;
}
.cn-project:nth-child(2) .cn-project-poster::before {
  border-radius: 0;
  border: none;
  background: linear-gradient(45deg, transparent 48%, var(--cream) 48%, var(--cream) 52%, transparent 52%);
  width: 220px; height: 220px;
  right: -40px; bottom: -40px;
}
.cn-project:nth-child(3) .cn-project-poster::before {
  border: none;
  background: var(--cream);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: 180px; height: 180px;
  right: 30px; bottom: 30px;
  border-radius: 0;
}
.cn-project-number {
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: clamp(80px, 8vw, 130px);
  letter-spacing: -6px;
  line-height: 0.85;
  position: relative;
}
.cn-project-poster .year {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.6;
  font-weight: 700;
  position: relative;
}
.cn-project-poster .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  position: relative;
}
.cn-project-poster .tags span {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border: 2px solid var(--cream);
}
.cn-project-body { padding: 32px 32px 28px; }
.cn-project-body .kick {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--red);
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}
.cn-project-body .kick::after {
  content: '';
  flex: 1;
  height: 2px;
  background: var(--ink);
}
.cn-project-body h3 {
  font-family: 'Archivo', sans-serif;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  margin: 0 0 6px;
  line-height: 1;
}
.cn-project-body .tagline {
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 14px;
  font-style: italic;
  color: var(--dim);
  margin-bottom: 18px;
}
.cn-project-body p { font-size: 15px; line-height: 1.65; margin: 0 0 16px; }
.cn-project-body ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
.cn-project-body li {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 8px;
  font-size: 13.5px;
  padding: 8px 0;
  border-top: 1px dashed var(--line);
  align-items: baseline;
  line-height: 1.5;
}
.cn-project-body li:last-child { border-bottom: 1px dashed var(--line); }
.cn-project-body li::before { content: '▶'; color: var(--red); font-size: 12px; }

@media (max-width: 1024px) {
  .cn-project { grid-template-columns: 1fr; }
  .cn-project-poster { border-right: none; border-bottom: 3px solid var(--ink); min-height: 200px; }
}
@media (max-width: 720px) {
  .cn-project-body { padding: 24px; }
  .cn-project-body h3 { font-size: 28px; }
}
</style>
