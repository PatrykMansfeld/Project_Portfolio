<template>
  <!-- eslint-disable vue/no-v-html -- markup comes only from the static map in icons.js -->
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="icons[name]"
  />
</template>

<script setup>
import { icons } from './icons.js'

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
})
</script>
