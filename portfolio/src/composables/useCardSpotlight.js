import { useEventListener } from './useEventListener.js'

// Feeds the cursor position to the hovered .card as --mx / --my,
// which .card::before (styles/ui.css) uses for its soft spotlight.
export function useCardSpotlight() {
  useEventListener(
    window,
    'pointermove',
    e => {
      const card = e.target instanceof Element ? e.target.closest('.card') : null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    },
    { passive: true },
  )
}
