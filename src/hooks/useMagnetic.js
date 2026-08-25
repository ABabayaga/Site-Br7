import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Attaches a subtle magnetic pull toward the cursor: the element eases
 * toward the pointer while it's within `radius`, and eases back out on
 * leave. No-ops on touch devices and when reduced motion is requested.
 */
export default function useMagnetic({ strength = 0.35, radius = 90 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      if (Math.hypot(dx, dy) > radius) return
      xTo(dx * strength)
      yTo(dy * strength)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      gsap.killTweensOf(el)
    }
  }, [strength, radius])

  return ref
}
