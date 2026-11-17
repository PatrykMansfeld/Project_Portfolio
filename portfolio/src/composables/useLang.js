import { computed, ref, watchEffect } from 'vue'
import { localize } from '../i18n/localize.js'
import { messages } from '../i18n/messages.js'
import { readStorage, writeStorage } from '../utils/storage.js'

const STORAGE_KEY = 'lang'
const isLang = value => value === 'pl' || value === 'en'

// Browser's first preferred language: Polish → 'pl', anything else → 'en'.
const suggestedLang = (navigator.languages?.[0] || navigator.language || 'pl')
  .toLowerCase()
  .startsWith('pl')
  ? 'pl'
  : 'en'

// Shared, app-wide state (module scope = one instance for every component).
const storedLang = readStorage(STORAGE_KEY, isLang)
const lang = ref(storedLang ?? suggestedLang)
const langChosen = ref(storedLang !== null) // false → LanguagePicker is shown
const t = computed(() => messages[lang.value])

watchEffect(() => {
  document.documentElement.lang = lang.value
})

function setLang(value) {
  lang.value = value
  langChosen.value = true
  writeStorage(STORAGE_KEY, value)
}

function toggleLang() {
  setLang(lang.value === 'pl' ? 'en' : 'pl')
}

export function useLang() {
  return { lang, t, setLang, toggleLang, langChosen, suggestedLang }
}

// Content written with { pl, en } pairs → the same shape in the current language.
export function useLocalized(source) {
  return computed(() => localize(source, lang.value))
}
