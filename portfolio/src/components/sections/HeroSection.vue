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
            {{ me.firstName }} <span class="last">{{ me.lastName }}</span>
          </h1>
          <p class="role">{{ me.role }}</p>
          <p class="tagline">{{ me.tagline }}</p>
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
            {{ t.common.downloadCv }}
          </a>
        </div>
      </div>

      <div class="card tile">
        <span class="label"><AppIcon name="map-pin" :size="14" />{{ me.location }}</span>
        <div>
          <p class="big clock">{{ localTime }}</p>
          <span class="mono">{{ t.hero.localTime }}</span>
        </div>
      </div>

      <div class="card tile">
        <span class="label"
          ><AppIcon name="briefcase" :size="14" />{{ t.hero.since(me.careerStart) }}</span
        >
        <div class="stats">
          <div>
            <p class="big">{{ years }}+</p>
            <span class="mono">{{ t.hero.years(years) }}</span>
          </div>
          <div>
            <p class="big">{{ me.projectsCount }}</p>
            <span class="mono">{{ t.hero.projects }}</span>
          </div>
        </div>
      </div>

      <div class="card tile">
        <span class="label"
          ><AppIcon name="sparkles" :size="14" class="acc" />{{ t.hero.focusLabel }}</span
        >
        <div>
          <p class="focus">{{ me.focus.title }}</p>
          <span class="mono">{{ me.focus.sub }}</span>
        </div>
      </div>

      <div class="card tile">
        <span class="label"><AppIcon name="link" :size="14" />{{ t.hero.linksLabel }}</span>
        <SocialLinks />
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
import { computed } from 'vue'
import AppIcon from '../ui/AppIcon.vue'
import SocialLinks from '../ui/SocialLinks.vue'
import { profile } from '../../content/profile.js'
import { skills } from '../../content/skills.js'
import { useCv } from '../../composables/useCv.js'
import { useLang, useLocalized } from '../../composables/useLang.js'
import { useNow } from '../../composables/useNow.js'
import { yearsSince } from '../../utils/dates.js'
import { scrollToId } from '../../utils/scroll.js'

const { lang, t } = useLang()
const me = useLocalized(profile)
const cvHref = useCv()

const years = yearsSince(profile.careerStart)

const now = useNow()
const localTime = computed(() =>
  new Intl.DateTimeFormat(lang.value === 'pl' ? 'pl-PL' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timeZone,
  }).format(now.value),
)
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
.tile .mono {
  display: block;
  line-height: 1.4;
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
  /* three link buttons must fit one row in the narrow tile */
  .socials {
    gap: 6px;
  }
  .socials :deep(.icon-btn) {
    width: 36px;
    height: 36px;
  }
  .stack-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
