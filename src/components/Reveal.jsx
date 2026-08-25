import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wraps a group of elements (cards, list items) and reveals its direct
 * children with a wipe + lift + scale as the group scrolls into view —
 * the "container" counterpart to SplitReveal's word-level text reveal.
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  className,
  itemSelector = ':scope > *',
  stagger = 0.08,
  delay = 0,
  start = 'top 85%',
}) {
  const elRef = useRef(null)

  useLayoutEffect(() => {
    const el = elRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const items = el.querySelectorAll(itemSelector)
      const targets = items.length ? items : el

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          targets,
          {
            opacity: 0,
            y: 28,
            scale: 0.97,
            clipPath: 'inset(0% 0% 100% 0%)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.9,
            delay,
            stagger,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start, once: true },
          },
        )
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(targets, { opacity: 1, clipPath: 'none' })
      })

      return () => mm.revert()
    }, el)

    return () => ctx.revert()
  }, [itemSelector, stagger, delay, start])

  return (
    <Tag ref={elRef} className={className}>
      {children}
    </Tag>
  )
}
