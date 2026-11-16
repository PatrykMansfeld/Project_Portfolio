<template>
  <section id="about" class="section container reveal">
    <header class="section-head">
      <h2>{{ t.about.title }}</h2>
    </header>

    <div class="bento">
      <div class="card about-main span-2 row-2">
        <p class="lead">{{ t.about.lead }}</p>
        <p class="text">{{ t.about.body }}</p>
      </div>

      <div class="card span-2">
        <h3 class="label"><AppIcon name="heart" :size="14" />{{ t.about.hobbiesTitle }}</h3>
        <ul class="hobbies">
          <li v-for="h in t.about.hobbies" :key="h.title">
            <span class="hobby-icon"><AppIcon :name="h.icon" :size="18" /></span>
            <span>
              <span class="row-title">{{ h.title }}</span>
              <span class="row-sub">{{ h.sub }}</span>
            </span>
          </li>
        </ul>
      </div>

      <div id="contact" class="card contact span-2">
        <h3>{{ t.contact.title }}</h3>
        <p>{{ t.contact.lead }}</p>
        <div class="contact-actions">
          <a class="btn contact-mail" :href="`mailto:${links.email}`">
            <AppIcon name="mail" :size="16" />
            {{ links.email }}
          </a>
          <a v-if="cvHref" class="btn contact-mail" :href="cvHref" download>
            <AppIcon name="download" :size="16" />
            {{ t.contact.cv }}
          </a>
          <button
            type="button"
            class="icon-btn"
            :aria-label="copied ? t.contact.copied : t.contact.copy"
            :title="copied ? t.contact.copied : t.contact.copy"
            @click="copyEmail"
          >
            <AppIcon :name="copied ? 'check' : 'copy'" />
          </button>
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
        </div>
        <span class="sr-only" aria-live="polite">{{ copied ? t.contact.copied : '' }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { useLang, links, cvUrl } from '../composables/useLang.js'

const { lang, t } = useLang()
const cvHref = computed(() => cvUrl(lang.value))

const copied = ref(false)
let resetTimer

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(links.email)
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${links.email}`
  }
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<style scoped>
.about-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 32px;
}
.lead {
  font-size: clamp(20px, 2.2vw, 25px);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.35;
}
.text {
  font-size: 15px;
  color: var(--muted);
}

.hobbies {
  list-style: none;
  display: grid;
  gap: 14px;
  margin-top: 16px;
}
.hobbies li {
  display: flex;
  align-items: center;
  gap: 12px;
}
.hobby-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--acc-soft);
  color: var(--acc);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact {
  --spot: color-mix(in srgb, var(--on-acc) 16%, transparent);
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--acc);
  color: var(--on-acc);
  border-color: transparent;
}
.contact:hover {
  border-color: transparent;
}
.contact h3 {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
}
.contact p {
  font-size: 15px;
  color: color-mix(in srgb, var(--on-acc) 82%, transparent);
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
}
.contact .icon-btn,
.contact-mail {
  background: color-mix(in srgb, var(--on-acc) 12%, transparent);
  border-color: color-mix(in srgb, var(--on-acc) 24%, transparent);
  color: var(--on-acc);
}
.contact .icon-btn:hover,
.contact-mail:hover {
  background: color-mix(in srgb, var(--on-acc) 20%, transparent);
  border-color: color-mix(in srgb, var(--on-acc) 40%, transparent);
}
.contact :focus-visible {
  outline-color: var(--on-acc);
}

@media (max-width: 560px) {
  .about-main {
    padding: 22px 20px;
  }
  .contact h3 {
    font-size: 24px;
  }
  .contact-mail {
    width: 100%;
  }
}
</style>
