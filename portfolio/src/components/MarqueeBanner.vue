<template>
  <div class="cn-marquee">
    <div class="cn-marquee-track">
      <span v-for="k in 3" :key="k" class="row">
        <span>FULL-STACK</span>
        <span class="sym cir" />
        <span>DEVOPS</span>
        <span class="sym tri" />
        <span>AI</span>
        <span class="sym cir" />
        <span>{{ lang === 'pl' ? 'DOSTĘPNY 2026' : 'AVAILABLE 2026' }}</span>
        <span class="sym tri" />
        <span>POZNAŃ</span>
        <span class="sym cir" />
        <span>20+ {{ lang === 'pl' ? 'PROJEKTÓW' : 'PROJECTS' }}</span>
        <span class="sym tri" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { lang } = useLang()
</script>

<style>
.cn-marquee {
  background: var(--red);
  color: var(--cream);
  font-family: 'Archivo', sans-serif;
  font-weight: 900;
  font-size: 28px;
  letter-spacing: -1px;
  text-transform: uppercase;
  padding: 12px 0;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  z-index: 9;
  border-bottom: 4px solid var(--ink);
}

.cn-marquee-track {
  display: inline-flex;
  animation: cn-march 42s linear infinite;
}

.cn-marquee-track .row {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
}

.cn-marquee-track .sym {
  font-weight: 900;
  font-size: 22px;
  line-height: 1;
}

.cn-marquee-track .sym.tri::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 18px solid var(--cream);
  vertical-align: middle;
}

.cn-marquee-track .sym.cir::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background: var(--ink);
  border-radius: 50%;
  vertical-align: middle;
}

@keyframes cn-march {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 720px) {
  .cn-marquee {
    font-size: 22px;
  }
}
</style>
