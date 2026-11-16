<template>
  <section id="start" class="hero container">
    <div class="bento">
      <div class="card hero-main span-2 row-2">
        <span class="chip accent status">
          <span class="pulse" aria-hidden="true" />
          {{ t.hero.available }}
        </span>
        <div>
          <h1>
            {{ t.hero.firstname }} <span class="last">{{ t.hero.lastname }}</span>
          </h1>
          <p class="role">{{ t.hero.role }}</p>
          <p class="tagline">{{ t.hero.tagline }}</p>
        </div>
        <div class="actions">
          <a class="btn primary" href="#projects" @click.prevent="scrollToId('projects')">
            {{ t.hero.primaryCta }}
            <AppIcon name="arrow-down" :size="16" />
          </a>
          <a class="btn" href="#contact" @click.prevent="scrollToId('contact')">{{
            t.hero.secondaryCta
          }}</a>
          <a v-if="cvHref" class="btn" :href="cvHref" download>
            <AppIcon name="download" :size="16" />
            {{ t.hero.cv }}
          </a>
        </div>
      </div>

      <div class="card tile">
        <span class="label"><AppIcon name="map-pin" :size="14" />{{ t.hero.location }}</span>
        <div>
          <p class="big clock">{{ time }}</p>
          <span class="mono">{{ t.hero.localTime }}</span>
        </div>
      </div>

      <div class="card tile">
        <span class="label"
          ><AppIcon name="briefcase" :size="14" />{{ t.hero.since(CAREER_START) }}</span
        >
        <div class="stats">
          <div>
            <p class="big">{{ years }}+</p>
            <span class="mono">{{ t.hero.years(years) }}</span>
          </div>
          <div>
            <p class="big">10+</p>
            <span class="mono">{{ t.hero.projects }}</span>
          </div>
        </div>
      </div>

      <div class="card tile">
        <span class="label"
          ><AppIcon name="sparkles" :size="14" class="acc" />{{ t.hero.focusLabel }}</span
        >
        <div>
          <p class="focus">{{ t.hero.focusTitle }}</p>
          <span class="mono">{{ t.hero.focusSub }}</span>
        </div>
      </div>

      <div class="card tile">
        <span class="label"><AppIcon name="link" :size="14" />{{ t.hero.linksLabel }}</span>
        <div class="socials">
          <a
            class="icon-btn"
            :href="links.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AppIcon name="github" />
          </a>
          <a
            class="icon-btn"
            :href="links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AppIcon name="linkedin" />
          </a>
          <a class="icon-btn" :href="`mailto:${links.email}`" aria-label="E-mail">
            <AppIcon name="mail" />
          </a>
        </div>
      </div>

      <div class="card stack span-4">
        <span class="label"><AppIcon name="terminal" :size="14" />{{ t.hero.stackLabel }}</span>
        <div class="stack-grid">
          <div v-for="cat in skills" :key="cat.label">
            <h3 class="stack-title">{{ cat.label }}</h3>
            <div class="chips">
              <span v-for="s in cat.items" :key="s" class="chip">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { useLang, links, skills, cvUrl, CAREER_START } from '../composables/useLang.js'
import { scrollToId } from '../utils/scroll.js'

const { lang, t } = useLang()
const cvHref = computed(() => cvUrl(lang.value))

const years = new Date().getFullYear() - CAREER_START

const now = ref(new Date())
let timer
const time = computed(() =>
  new Intl.DateTimeFormat(lang.value === 'pl' ? 'pl-PL' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Warsaw',
  }).format(now.value),
)

onMounted(() => {
  timer = setInterval(() => (now.value = new Date()), 15_000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.hero {
  padding-top: 20px;
}

.hero-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 32px;
  min-height: 400px;
}

.status {
  width: fit-content;
}
.pulse {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--acc);
}
.pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--acc);
  animation: ping 2s var(--ease) infinite;
}
@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  80%,
  100% {
    transform: scale(2.8);
    opacity: 0;
  }
}

h1 {
  font-size: clamp(42px, 5.6vw, 64px);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
}
.last {
  color: var(--muted);
}

.role {
  margin-top: 16px;
  font-size: 17px;
  font-weight: 500;
  color: var(--acc-text);
}
.tagline {
  margin-top: 8px;
  max-width: 46ch;
  font-size: 15px;
  color: var(--muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 180px;
}

.big {
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.clock {
  font-family: var(--mono);
  font-weight: 500;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.tile .mono {
  display: block;
  line-height: 1.4;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
}

.focus {
  margin-bottom: 4px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
}
.acc {
  color: var(--acc);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.stack-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
.stack-title {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 900px) {
  .hero-main {
    min-height: 0;
  }
  .stack-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 12px;
  }
  .hero-main {
    padding: 24px 20px;
    gap: 24px;
  }
  .tile {
    min-height: 150px;
    gap: 16px;
  }
  .big {
    font-size: 28px;
  }
  .focus {
    font-size: 15px;
  }
  .socials {
    gap: 6px;
  }
  .socials .icon-btn {
    width: 36px;
    height: 36px;
  }
  .stack-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
