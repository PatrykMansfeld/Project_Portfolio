import { onBeforeUnmount, onMounted } from 'vue'

// Adds .in-view to each matching element the first time it scrolls into view
// (the fade-up itself is CSS: .reveal / .reveal.in-view in styles/ui.css).
export function useScrollReveal(selector = '.reveal') {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
