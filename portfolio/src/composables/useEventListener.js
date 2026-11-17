import { onBeforeUnmount, onMounted } from 'vue'

// addEventListener on mount, removeEventListener on unmount.
export function useEventListener(target, type, handler, options) {
  onMounted(() => target.addEventListener(type, handler, options))
  onBeforeUnmount(() => target.removeEventListener(type, handler, options))
}
