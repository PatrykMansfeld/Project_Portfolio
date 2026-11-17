import { onBeforeUnmount, ref } from 'vue'

// copy(text) → true on success; `copied` stays true for `resetMs`.
export function useClipboard(resetMs = 2000) {
  const copied = ref(false)
  let resetTimer

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      return false
    }
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), resetMs)
    return true
  }

  onBeforeUnmount(() => clearTimeout(resetTimer))

  return { copied, copy }
}
