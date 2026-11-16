export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  const url = id === 'start' ? location.pathname + location.search : `#${id}`
  history.replaceState(null, '', url)
}
