import { onBeforeUnmount, onMounted, ref } from 'vue'

// Current time as a ref, refreshed every `intervalMs` while mounted.
export function useNow(intervalMs = 15_000) {
  const now = ref(new Date())
  let timer

  onMounted(() => {
    timer = setInterval(() => (now.value = new Date()), intervalMs)
  })
  onBeforeUnmount(() => clearInterval(timer))

  return now
}
