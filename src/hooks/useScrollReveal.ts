import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element when it scrolls into the viewport.
 * Returns a ref to attach to the target element and a boolean
 * indicating whether the element has been revealed.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: {
    threshold?: number
    rootMargin?: string
    once?: boolean
  }
) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } =
    options ?? {}
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
