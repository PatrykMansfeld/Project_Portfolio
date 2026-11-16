<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span>© {{ year }} Patryk Mansfeld · {{ t.footer.rights }}</span>
      <span>{{ t.footer.builtWith }}</span>
      <a href="#start" @click.prevent="scrollToId('start')">{{ t.footer.backToTop }} ↑</a>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { scrollToId } from '../utils/scroll.js'

const { t } = useLang()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  margin-top: 72px;
  border-top: 1px solid var(--line);
}
.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding-top: 24px;
  padding-bottom: 32px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
}
a {
  text-decoration: none;
}
a:hover {
  color: var(--text);
}
</style>
