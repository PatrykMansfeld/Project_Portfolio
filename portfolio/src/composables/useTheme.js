import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

// index.html sets data-theme before the app loads (saved choice or system
// preference), so the first paint already has the right colors.
function initialTheme() {
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(initialTheme())

watch(theme, value => {
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // storage blocked (private mode etc.) — theme still works for this visit
  }
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
