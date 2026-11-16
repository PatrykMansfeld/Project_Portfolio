<template>
  <Transition name="picker">
    <div v-if="!langChosen" class="backdrop">
      <div
        ref="dialog"
        class="card picker"
        role="dialog"
        aria-modal="true"
        aria-labelledby="picker-title"
        @keydown="onKeydown"
      >
        <span class="brand-mark" aria-hidden="true">PM</span>
        <h2 id="picker-title">
          Wybierz język
          <span class="sub">Choose your language</span>
        </h2>

        <div class="options">
          <button
            v-for="opt in options"
            :key="opt.code"
            type="button"
            class="option"
            :class="{ suggested: opt.code === suggestedLang }"
            :lang="opt.code"
            :data-code="opt.code"
            @click="setLang(opt.code)"
          >
            <span class="code">{{ opt.code.toUpperCase() }}</span>
            <span class="text">
              <span class="name">{{ opt.name }}</span>
              <span class="hint">{{ opt.hint }}</span>
            </span>
            <AppIcon name="arrow-right" :size="18" class="arrow" />
          </button>
        </div>

        <p class="foot">
          <AppIcon name="globe" :size="14" />
          Zmienisz to później · You can change it later
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'
import { useLang } from '../composables/useLang.js'

const { setLang, langChosen, suggestedLang } = useLang()
const dialog = ref(null)

const options = [
  { code: 'pl', name: 'Polski', hint: 'Wersja polska' },
  { code: 'en', name: 'English', hint: 'English version' },
]

function buttons() {
  return dialog.value ? [...dialog.value.querySelectorAll('.option')] : []
}

function onKeydown(e) {
  const list = buttons()
  const idx = list.indexOf(document.activeElement)

  if (e.key === 'Escape') {
    // closing = accept the suggested language
    setLang(suggestedLang)
  } else if (e.key === 'Tab' || e.key.startsWith('Arrow')) {
    // keep focus inside the dialog, arrows move between the two options
    e.preventDefault()
    const back = e.shiftKey || e.key === 'ArrowUp' || e.key === 'ArrowLeft'
    const next = (idx + (back ? -1 : 1) + list.length) % list.length
    list[next]?.focus()
  }
}

// Lock page scroll and focus the suggested option while the picker is open.
watch(
  langChosen,
  async chosen => {
    document.documentElement.style.overflow = chosen ? '' : 'hidden'
    if (!chosen) {
      await nextTick()
      dialog.value?.querySelector(`[data-code="${suggestedLang}"]`)?.focus()
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 16px;
  background: color-mix(in srgb, var(--bg) 55%, transparent);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
}

.picker {
  width: 100%;
  max-width: 440px;
  padding: 28px;
  box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.45);
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--acc);
  color: var(--on-acc);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

h2 {
  margin-top: 18px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
}
.sub {
  display: block;
  margin-top: 2px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--muted);
}

.options {
  display: grid;
  gap: 10px;
  margin-top: 22px;
}

.option {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--card-2);
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    transform 0.15s ease;
}
.option:hover {
  border-color: var(--acc);
}
.option:active {
  transform: scale(0.99);
}
.option.suggested {
  border-color: var(--acc);
  background: var(--acc-soft);
}

.code {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--card);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 500;
}
.suggested .code {
  background: var(--acc);
  border-color: transparent;
  color: var(--on-acc);
}

.name {
  display: block;
  font-size: 16px;
  font-weight: 600;
}
.hint {
  display: block;
  font-size: 13px;
  color: var(--muted);
}

.arrow {
  color: var(--muted);
  transition:
    transform 0.15s ease,
    color 0.15s ease;
}
.option:hover .arrow,
.suggested .arrow {
  color: var(--acc);
}
.option:hover .arrow {
  transform: translateX(2px);
}

.foot {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
}

.picker-enter-active,
.picker-leave-active {
  transition: opacity 0.3s ease;
}
.picker-enter-active .picker,
.picker-leave-active .picker {
  transition: transform 0.3s var(--ease);
}
.picker-enter-from,
.picker-leave-to {
  opacity: 0;
}
.picker-enter-from .picker,
.picker-leave-to .picker {
  transform: translateY(12px) scale(0.98);
}

@media (max-width: 560px) {
  .picker {
    padding: 22px 18px;
  }
}
</style>
