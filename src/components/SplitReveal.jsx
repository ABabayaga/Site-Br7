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

  // Content gated behind `ready` (e.g. inside the Hero, under IntroLoader) is
  // still painted while it waits. Hiding it up front is what keeps the loader
  // from uncovering finished text that then snaps back and replays.
  useLayoutEffect(() => {
    if (ready) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.set(elRef.current, { opacity: 0 })
  }, [ready])

  useLayoutEffect(() => {
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

        // O pré-estado escondia o bloco inteiro; agora quem controla a
        // visibilidade são as palavras (já zeradas pelo `from` acima).
        gsap.set(el, { opacity: 1 })

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
