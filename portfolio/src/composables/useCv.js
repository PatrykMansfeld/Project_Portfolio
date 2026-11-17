import { computed } from 'vue'
import { cv } from '../content/profile.js'
import { useLang } from './useLang.js'

// URL of the CV for the current language (falls back to the other one),
// or null when no CV is configured — the download buttons then stay hidden.
export function useCv() {
  const { lang } = useLang()
  return computed(() => {
    const file = cv[lang.value] || cv.pl || cv.en
    return file ? import.meta.env.BASE_URL + file : null
  })
}
