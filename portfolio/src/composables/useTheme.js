import { ref, watch } from 'vue'
import { writeStorage } from '../utils/storage.js'

// Same key as the inline script in index.html, which sets data-theme before
// the app loads (saved choice or system preference) to avoid a flash.
const STORAGE_KEY = 'theme'

function initialTheme() {
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(initialTheme())

watch(theme, value => {
  document.documentElement.dataset.theme = value
  writeStorage(STORAGE_KEY, value)
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

export function useTheme() {
  return { theme, toggleTheme }
}
