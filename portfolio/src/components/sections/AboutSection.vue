<template>
  <section id="about" class="section container reveal">
    <SectionHeader :title="t.about.title" />

    <div class="bento">
      <div class="card about-main span-2 row-2">
        <p class="lead">{{ me.about.lead }}</p>
        <p class="text">{{ me.about.body }}</p>
      </div>

      <div class="card span-2">
        <h3 class="label"><AppIcon name="heart" :size="14" />{{ t.about.hobbiesTitle }}</h3>
        <ul class="hobbies">
          <li v-for="h in me.hobbies" :key="h.icon">
            <span class="icon-tile"><AppIcon :name="h.icon" :size="18" /></span>
            <span>
              <span class="row-title">{{ h.title }}</span>
              <span class="row-sub">{{ h.sub }}</span>
            </span>
          </li>
        </ul>
      </div>

      <div id="contact" class="card contact span-2">
        <h3>{{ t.contact.title }}</h3>
        <p>{{ me.contactNote }}</p>
        <div class="contact-actions">
          <a class="btn contact-btn" :href="`mailto:${links.email}`">
            <AppIcon name="mail" :size="16" />
            {{ links.email }}
          </a>
          <a v-if="cvHref" class="btn contact-btn" :href="cvHref" download>
            <AppIcon name="download" :size="16" />
            {{ t.common.downloadCv }}
          </a>
          <button
            type="button"
            class="icon-btn"
            :aria-label="copyLabel"
            :title="copyLabel"
            @click="copyEmail"
          >
            <AppIcon :name="copied ? 'check' : 'copy'" />
          </button>
          <SocialLinks :only="['github', 'linkedin']" />
        </div>
        <span class="sr-only" aria-live="polite">{{ copied ? t.contact.copied : '' }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from '../ui/AppIcon.vue'
import SectionHeader from '../ui/SectionHeader.vue'
import SocialLinks from '../ui/SocialLinks.vue'
import { links, profile } from '../../content/profile.js'
import { useClipboard } from '../../composables/useClipboard.js'
import { useCv } from '../../composables/useCv.js'
import { useLang, useLocalized } from '../../composables/useLang.js'

const { t } = useLang()
const me = useLocalized(profile)
const cvHref = useCv()

const { copied, copy } = useClipboard()
const copyLabel = computed(() => (copied.value ? t.value.contact.copied : t.value.contact.copy))

async function copyEmail() {
  // No clipboard access (old browser, insecure context) → open the mail app instead.
  if (!(await copy(links.email))) window.location.href = `mailto:${links.email}`
}
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

/* Contact card: filled with the accent color, controls drawn in --on-acc */
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
.contact :deep(.icon-btn),
.contact-btn {
  background: color-mix(in srgb, var(--on-acc) 12%, transparent);
  border-color: color-mix(in srgb, var(--on-acc) 24%, transparent);
  color: var(--on-acc);
}
.contact :deep(.icon-btn:hover),
.contact-btn:hover {
  background: color-mix(in srgb, var(--on-acc) 20%, transparent);
  border-color: color-mix(in srgb, var(--on-acc) 40%, transparent);
}
.contact :deep(:focus-visible) {
  outline-color: var(--on-acc);
}

@media (max-width: 560px) {
  .about-main {
    padding: 22px 20px;
  }
  .contact h3 {
    font-size: 24px;
  }
  .contact-btn {
    width: 100%;
  }
}
</style>
