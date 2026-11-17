<template>
  <header class="section-head">
    <h2>{{ title }}</h2>
    <span v-if="meta" class="mono">{{ meta }}</span>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  meta: { type: String, default: '' },
})
</script>

<style scoped>
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  padding: 0 4px;
}
h2 {
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
}
</style>
