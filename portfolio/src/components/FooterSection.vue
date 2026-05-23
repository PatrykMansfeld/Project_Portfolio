<template>
  <footer>
    <div class="cn-wrap">
      <div class="cn-foot">
        <span>© {{ year }} PATRYK MANSFELD</span>
        <span class="c">▶ {{ t.footer.rights }}</span>
        <span class="r">{{ lang === 'pl' ? 'WYD. 04' : 'ISSUE 04' }} · {{ year }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang, t } = useLang()
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  position: relative;
  z-index: 1;
  background: var(--bg);
  border-top: 3px solid var(--ink);
}
</style>
