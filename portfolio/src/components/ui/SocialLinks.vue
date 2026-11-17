<template>
  <div class="socials">
    <a
      v-for="item in items"
      :key="item.label"
      class="icon-btn"
      :href="item.href"
      :aria-label="item.label"
      v-bind="item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
    >
      <AppIcon :name="item.icon" />
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import { links } from '../../content/profile.js'

const props = defineProps({
  // which links to show, in this order
  only: { type: Array, default: () => ['github', 'linkedin', 'email'] },
})

const all = {
  github: { label: 'GitHub', icon: 'github', href: links.github, external: true },
  linkedin: { label: 'LinkedIn', icon: 'linkedin', href: links.linkedin, external: true },
  email: { label: 'E-mail', icon: 'mail', href: `mailto:${links.email}`, external: false },
}

const items = computed(() => props.only.map(name => all[name]))
</script>

<style scoped>
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
