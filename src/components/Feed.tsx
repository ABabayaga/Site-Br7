import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'
import useMagnetic from '../hooks/useMagnetic'

const posts = [
  { img: '/feed/fl-home.jpg', cliente: 'FL Home', tema: 'Aurora Floral' },
  { img: '/feed/lemeseg.jpg', cliente: 'Lemeseg', tema: 'Seguro de carga' },
  { img: '/feed/galeria-sandra.jpg', cliente: 'Galeria Sandra Novas', tema: 'Arte no ambiente' },
  { img: '/feed/transmano.jpg', cliente: 'Transmano', tema: 'Coleta programada' },
  { img: '/feed/game-truck.jpg', cliente: 'Game Truck', tema: 'Treinamento' },
  { img: '/feed/motora-match.jpg', cliente: 'Motora Match', tema: 'Publique seu frete' },
]

/** Velocidade do auto-scroll em pixels por segundo. */
const SPEED = 40
/** Tempo parado depois de uma interação do usuário, em ms. */
const RESUME_DELAY = 1600

export default function Feed() {
  const trackRef = useRef<HTMLDivElement>(null)
  const prevRef = useMagnetic({ strength: 0.4, radius: 50 })
  const nextRef = useMagnetic({ strength: 0.4, radius: 50 })
  // A trilha renderiza a lista duas vezes; o loop volta ao início na metade.
  const pausedUntilRef = useRef(0)
  const hoverRef = useRef(false)

  const pause = useCallback(() => {
    pausedUntilRef.current = performance.now() + RESUME_DELAY
  }, [])

  /**
   * Distância exata de uma volta: do primeiro card ao seu clone.
   * Medido no DOM porque o padding lateral da trilha não entra na conta.
   */
  const loopWidth = useCallback((el: HTMLDivElement) => {
    const first = el.children[0] as HTMLElement | undefined
    const clone = el.children[posts.length] as HTMLElement | undefined
    if (!first || !clone) return 0
    return clone.offsetLeft - first.offsetLeft
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // O passo por frame é sub-pixel; guardamos a posição em float e gravamos o
    // valor absoluto, porque `scrollLeft += 0.6` arredonda para zero no WebKit.
    let pos = el.scrollLeft
    let moving = false
    let last = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100)
      last = now

      if (hoverRef.current || now < pausedUntilRef.current) {
        moving = false
      } else {
        // Ao voltar de uma pausa, parte de onde o usuário deixou a trilha.
        if (!moving) {
          pos = el.scrollLeft
          moving = true
        }
        pos += (SPEED * dt) / 1000
        const loop = loopWidth(el)
        if (loop > 0 && pos >= loop) pos -= loop
        el.scrollLeft = pos
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [loopWidth])

  // Bloqueia o scroll manual (wheel) sem impedir o auto-scroll via scrollLeft.
  // Precisa ser um listener nativo não-passivo: o onWheel do React é passivo
  // por padrão e preventDefault() ali não teria efeito.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => e.preventDefault()
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const blockKeyScroll = (e: React.KeyboardEvent) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(e.key)) {
      e.preventDefault()
    }
  }

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    pause()
    const card = el.querySelector('figure')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Salta antes de animar para o smooth scroll nunca bater na borda da trilha.
    const loop = loopWidth(el)
    if (loop > 0) {
      if (dir === -1 && el.scrollLeft < step) el.scrollLeft += loop
      else if (dir === 1 && el.scrollLeft > loop - step) el.scrollLeft -= loop
    }
    el.scrollBy({ left: dir * step, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section
      id="feed"
      className="relative overflow-hidden border-b border-asphalt-border bg-asphalt py-10 lg:py-14"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] items-end justify-between gap-8 px-[4vw]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-chalk-muted sm:text-xs"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lane" />
            O Feed
          </motion.p>

          <SplitReveal
            as="h2"
            delay={0.1}
            className="mt-4 max-w-[16ch] font-display text-[9vw] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-chalk sm:text-[7vw] lg:mt-5 lg:text-[3.6vw]"
          >
            Conteúdo que a gente posta <span className="text-lane">toda semana.</span>
          </SplitReveal>
        </div>

        <div className="hidden shrink-0 gap-2 pb-2 sm:flex">
          <button
            ref={prevRef}
            type="button"
            onClick={() => slide(-1)}
            aria-label="Post anterior"
            className="cursor-target flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            ref={nextRef}
            type="button"
            onClick={() => slide(1)}
            aria-label="Próximo post"
            className="cursor-target flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Trilha full-bleed: as peças sangram nas duas bordas e correm sozinhas para a direita */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Carrossel de posts"
        tabIndex={0}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerLeave={() => (hoverRef.current = false)}
        onFocus={() => (hoverRef.current = true)}
        onBlur={() => (hoverRef.current = false)}
        onKeyDown={blockKeyScroll}
        className="mt-7 flex touch-none gap-4 overflow-x-auto px-[4vw] pb-2 lg:mt-9 lg:gap-5 [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...posts, ...posts].map((p, i) => {
          const clone = i >= posts.length
          const n = (i % posts.length) + 1
          return (
            <motion.figure
              key={`${p.img}-${i}`}
              aria-hidden={clone || undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: 'easeOut' }}
              className="cursor-target group relative w-[68vw] shrink-0 sm:w-[42vw] lg:w-[23vw] xl:w-[20vw]"
            >
              <div className="overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-surface">
                <img
                  src={p.img}
                  alt={clone ? '' : `Post ${p.cliente} — ${p.tema}`}
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-2 flex items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-chalk-faint">
                <span className="truncate text-chalk-muted">{p.cliente}</span>
                <span className="shrink-0">{String(n).padStart(2, '0')}</span>
              </figcaption>
            </motion.figure>
          )
        })}
      </div>
    </section>
  )
}
