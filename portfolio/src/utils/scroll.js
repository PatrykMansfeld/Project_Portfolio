export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  const url = id === 'start' ? location.pathname + location.search : `#${id}`
  history.replaceState(null, '', url)
}

// Deep link (e.g. /#projects): the target only exists once the app has mounted,
// so the browser's own jump on load misses it.
export function scrollToCurrentHash() {
  if (location.hash) scrollToId(decodeURIComponent(location.hash.slice(1)))
}
