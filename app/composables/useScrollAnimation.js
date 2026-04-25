import { onMounted, onUnmounted } from 'vue'

/**
 * Composable that observes `.scroll-reveal` elements and
 * adds the class `is-visible` when they enter the viewport.
 */
export function useScrollAnimation() {
  let observer = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    // small delay to ensure DOM is fully painted
    requestAnimationFrame(() => {
      initObserver()
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
