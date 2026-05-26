<template>
  <footer>
    <div class="cn-wrapper">
      <div class="cn-footer">
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
.cn-footer {
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--ink);
}
.cn-footer .c { text-align: center; color: var(--red); }
.cn-footer .r { text-align: right; }
</style>
