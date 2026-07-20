import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  { code: '04', label: 'Presença com autoridade', width: '58%', apex: true },
  { code: '03', label: 'Execução', width: '72%' },
  { code: '02', label: 'Posicionamento', width: '86%' },
  { code: '01', label: 'Identidade', width: '100%' },
]

export default function PyramidRoute() {
  const containerRef = useRef(null)
  const rowRefs = useRef([])
  const barRefs = useRef([])
  const glowRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = rowRefs.current
      const bars = barRefs.current
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 78%',
            once: true,
          },
        })

        for (let i = rows.length - 1; i >= 0; i--) {
          tl.fromTo(
            rows[i],
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
            '<0.18',
          ).fromTo(
            bars[i],
            { scaleX: 0 },
            { scaleX: 1, duration: 0.5, ease: 'power2.out' },
            '<0.05',
          )
        }

        tl.call(() => {
          gsap.to(glowRef.current, {
            opacity: 0.4,
            scale: 1.8,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(rows, { opacity: 1, y: 0 })
        gsap.set(bars, { scaleX: 1 })
        gsap.set(glowRef.current, { opacity: 0.4 })
      })

      return () => mm.revert()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-md">
      <span className="eyebrow block text-center">Da base à autoridade</span>
      <div className="mt-6 flex flex-col items-center">
        {tiers.map((tier, i) => (
          <div key={tier.code} className="flex w-full flex-col items-center">
            {i !== 0 && <span className="h-4 w-px bg-lane-dim" aria-hidden="true" />}
            <div
              ref={(el) => (rowRefs.current[i] = el)}
              className={`relative flex items-center gap-3 border bg-asphalt-surface/60 px-4 py-3 backdrop-blur-sm ${
                tier.apex ? 'border-lane/50' : 'border-asphalt-border'
              }`}
              style={{ width: tier.width }}
            >
              <span className="font-mono text-[10px] text-lane">{tier.code}</span>
              <span
                className={`flex-1 font-display text-xs leading-tight tracking-wide sm:text-sm ${
                  tier.apex ? 'font-600 text-chalk' : 'text-chalk-muted'
                }`}
              >
                {tier.label}
              </span>
              {tier.apex && (
                <span
                  ref={glowRef}
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-lane opacity-0"
                  aria-hidden="true"
                />
              )}
              <span
                ref={(el) => (barRefs.current[i] = el)}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-lane"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
