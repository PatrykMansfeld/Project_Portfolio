<template>
  <section id="experience" class="section container reveal">
    <SectionHeader :title="t.career.title" />

    <div class="bento">
      <div class="card span-2">
        <h3 class="label card-title">
          <AppIcon name="briefcase" :size="14" />{{ t.career.experience }}
        </h3>
        <ul class="rows">
          <li v-for="(job, i) in jobList" :key="job.date" :class="{ open: openIdx === i }">
            <button
              type="button"
              class="job-btn"
              :aria-expanded="openIdx === i"
              :aria-controls="`job-${i}`"
              @click="toggle(i)"
            >
              <span class="main">
                <span class="row-title">{{ job.title }}</span>
                <span class="row-sub">{{ job.company }}</span>
              </span>
              <span class="mono job-date">{{ job.date }}</span>
              <AppIcon name="chevron-down" :size="16" class="chev" />
            </button>
            <div :id="`job-${i}`" class="job-detail" :aria-hidden="openIdx !== i">
              <div class="job-detail-inner">
                <p>{{ job.description }}</p>
                <div class="chips">
                  <span v-for="tag in job.tech" :key="tag" class="chip">{{ tag }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="card span-2">
        <h3 class="label card-title">
          <AppIcon name="graduation-cap" :size="14" />{{ t.career.education }}
        </h3>
        <ul class="rows">
          <li v-for="item in schoolList" :key="item.date" class="static-row">
            <span class="main">
              <span class="row-title">{{ item.title }}</span>
              <span class="row-sub">{{ item.school }} · {{ item.spec }}</span>
            </span>
            <span class="side">
              <span v-if="isOngoing(item.date)" class="chip accent">{{ t.career.ongoing }}</span>
              <span class="mono">{{ item.date }}</span>
            </span>
          </li>
        </ul>

        <h3 class="label card-title certs-title">
          <AppIcon name="award" :size="14" />{{ t.career.certificates }}
        </h3>
        <ul class="rows">
          <li v-for="c in certificates" :key="c.title" class="static-row">
            <span class="main">
              <span class="row-title">{{ c.title }}</span>
              <span class="row-sub">{{ c.issuer }}</span>
            </span>
            <span class="mono">{{ c.year }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AppIcon from '../ui/AppIcon.vue'
import SectionHeader from '../ui/SectionHeader.vue'
import { certificates, education, jobs } from '../../content/career.js'
import { useLang, useLocalized } from '../../composables/useLang.js'
import { isOngoing } from '../../utils/dates.js'

const { t } = useLang()
const jobList = useLocalized(jobs)
const schoolList = useLocalized(education)

// Accordion: one job open at a time, the most recent one to start with.
const openIdx = ref(0)
function toggle(i) {
  openIdx.value = openIdx.value === i ? null : i
}
</script>

<style scoped>
.card-title {
  margin-bottom: 4px;
}
.certs-title {
  margin-top: 24px;
}

.main {
  min-width: 0;
}

.job-btn {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}
.job-btn .row-title {
  transition: color 0.15s ease;
}
.job-btn:hover .row-title {
  color: var(--acc-text);
}

.chev {
  color: var(--muted);
  transition: transform 0.25s var(--ease);
}
.open .chev {
  transform: rotate(180deg);
}

/* Height animation via grid rows 0fr → 1fr */
.job-detail {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s var(--ease);
}
.open .job-detail {
  grid-template-rows: 1fr;
}
.job-detail-inner {
  overflow: hidden;
}
.job-detail p {
  padding-bottom: 12px;
  font-size: 14px;
  color: var(--muted);
}
.job-detail .chips {
  padding-bottom: 16px;
}

.static-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
}
.side {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

@media (max-width: 560px) {
  .job-btn {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 4px;
  }
  .job-date {
    grid-column: 1;
    grid-row: 2;
  }
  .chev {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  .static-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
