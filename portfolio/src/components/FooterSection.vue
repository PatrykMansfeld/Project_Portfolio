<template>
  <div class="mf-foot">
    <span>© {{ year }} P. MANSFELD</span>
    <span class="c">▸ NO IMAGES · ONLY TYPE</span>
    <span class="r">{{ t.footer.rights }}</span>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const year = new Date().getFullYear()
</script>

<style scoped>
.mf-foot {
  padding: 22px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--dim);
  border-top: 1px solid var(--line);
}

.c { text-align: center; color: var(--accent); }
.r { text-align: right; }

@media (max-width: 720px) {
  .mf-foot { grid-template-columns: 1fr; gap: 8px; }
  .c, .r { text-align: left; }
}
</style>
