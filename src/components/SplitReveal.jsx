import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function SplitReveal({
  as: Tag = 'p',
  children,
  className,
  delay = 0,
  stagger = 0.035,
  start = 'top 85%',
  ready = true,
}) {
  const elRef = useRef(null)

  useLayoutEffect(() => {
    // Guards content that's already in view at mount (e.g. inside the Hero,
    // behind IntroLoader) — without this, the reveal fires while hidden and
    // the loader uncovers a scene that has already finished animating.
    if (!ready) return

    const el = elRef.current
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitText(el, { type: 'words' })

        gsap.from(split.words, {
          opacity: 0,
          y: 16,
          duration: 0.5,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        })

        return () => split.revert()
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { opacity: 1 })
      })

      return () => mm.revert()
    }, el)

    return () => ctx.revert()
  }, [delay, stagger, start, ready])

  return (
    <Tag ref={elRef} className={className}>
      {children}
    </Tag>
  )
}
