import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'
import SplitReveal from './SplitReveal'
import useMagnetic from '../hooks/useMagnetic'

/** Velocidade do auto-scroll em pixels por segundo. */
const SPEED = 40
/** Tempo parado depois de uma interação do usuário, em ms. */
const RESUME_DELAY = 1600

const displayUrl = (href) => href.replace(/^https?:\/\//, '').replace(/\/$/, '')

const statusStyles = {
  'No ar': 'bg-lane/10 text-lane-bright border-lane/30',
  Construindo: 'bg-brake/10 text-brake border-brake/30',
  Refazendo: 'bg-chalk-muted/10 text-chalk-muted border-chalk-muted/30',
}

const apps = [
  {
    nome: 'Motora Match',
    desc: 'Feed social do app que conecta motoristas e transportadoras.',
    img: '/appmoto.PNG',
    framed: false,
  },
  {
    nome: 'RepenseTrack',
    desc: 'Painel de rastreamento de frota em tempo real.',
    img: '/apprt.png',
    framed: true,
  },
]

const trabalhos = [
  {
    nome: 'Upper GR',
    status: 'No ar',
    tags: 'Branding · Site · Posicionamento',
    desc: 'Reposicionamento digital de um grupo de gestão de risco com 20 anos de estrada e 6× GPTW.',
    href: 'https://www.grupouppergr.com.br/',
    img: '/siteupper.png',
  },
  {
    nome: 'Galeria Sandra Novas',
    status: 'No ar',
    tags: 'Posicionamento premium · Site',
    desc: 'Presença premium para uma artista plástica de Campo Grande.',
    href: 'https://www.galeriasandranovas.com.br/',
    img: '/gale.webp',
  },
  {
    nome: 'Avante Global',
    status: 'No ar',
    tags: 'Site · Posicionamento',
    desc: 'Presença digital para uma corretora de seguros, com mais clareza e confiança.',
    href: 'https://www.avanteglobalseguros.com.br/',
    img: '/avanteglobal.png',
  },
  {
    nome: 'Motora Match',
    status: 'No ar',
    tags: 'App · Site · Marca',
    desc: 'A plataforma que conecta motoristas e transportadoras, do nome ao app.',
    href: 'https://motoramatch.com.br/',
    img: '/moto.webp',
  },
  {
    nome: 'Transmano',
    status: 'No ar',
    tags: 'Site · Marca',
    desc: 'Site institucional para uma transportadora que leva a carga a sério.',
    href: 'https://site-transmano-red.vercel.app/',
    img: '/transmano.png',
  },
]

export default function Trabalhos() {
  const trackRef = useRef(null)
  const prevRef = useMagnetic({ strength: 0.4, radius: 50 })
  const nextRef = useMagnetic({ strength: 0.4, radius: 50 })
  // A trilha renderiza a lista duas vezes; o loop volta ao início na metade.
  const pausedUntilRef = useRef(0)
  // Hover e foco por teclado seguram a trilha para dar tempo de ler e clicar no case.
  const holdRef = useRef(false)

  const pause = useCallback(() => {
    pausedUntilRef.current = performance.now() + RESUME_DELAY
  }, [])

  /** Distância exata de uma volta: do primeiro card ao seu clone. */
  const loopWidth = useCallback((el) => {
    const first = el.children[0]
    const clone = el.children[trabalhos.length]
    if (!first || !clone) return 0
    return clone.offsetLeft - first.offsetLeft
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Posição em float: `scrollLeft += 0.6` arredonda para zero no WebKit.
    let pos = el.scrollLeft
    let moving = false
    let last = performance.now()
    let raf = 0

    const tick = (now) => {
      const dt = Math.min(now - last, 100)
      last = now

      if (holdRef.current || now < pausedUntilRef.current) {
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

  // Bloqueia só o wheel horizontal, que brigaria com o auto-scroll; o vertical
  // passa direto. Listener nativo não-passivo para o preventDefault valer.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const slide = (dir) => {
    const el = trackRef.current
    if (!el) return
    pause()
    const card = el.children[0]
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
      id="trabalhos"
      className="relative overflow-hidden border-b border-asphalt-border py-10 sm:py-12"
    >
      <SectionBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="eyebrow inline-flex items-center gap-2">
              Cases
              <span
                aria-hidden="true"
                className="h-[3px] w-8 bg-lane-dash bg-repeat-x"
                style={{ backgroundSize: '10px 3px' }}
              />
            </span>
            <SplitReveal as="h2" className="mt-3 font-display text-3xl font-500 text-chalk sm:text-4xl">
              Marcas que já estão em movimento
            </SplitReveal>
            <SplitReveal as="p" delay={0.1} className="mt-2 max-w-lg text-chalk-muted">
              Clientes do transporte, logística e negócios locais.
            </SplitReveal>
          </div>

          <div className="hidden shrink-0 gap-2 pb-1 sm:flex">
            <button
              ref={prevRef}
              type="button"
              onClick={() => slide(-1)}
              aria-label="Case anterior"
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
              aria-label="Próximo case"
              className="cursor-target flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trilha full-bleed em loop: os cases sangram nas bordas e correm sozinhos */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Carrossel de cases"
        onMouseEnter={() => { holdRef.current = true }}
        onMouseLeave={() => { holdRef.current = false }}
        onFocus={() => { holdRef.current = true }}
        onBlur={() => { holdRef.current = false }}
        onTouchStart={pause}
        className="relative z-10 mt-7 flex touch-pan-y gap-4 overflow-x-auto px-[4vw] pb-1 lg:gap-5 [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...trabalhos, ...trabalhos].map((t, i) => {
          const clone = i >= trabalhos.length
          const n = (i % trabalhos.length) + 1
          return (
            <motion.a
              key={`${t.nome}-${i}`}
              href={t.href}
              target={t.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              // Os clones existem só para o loop visual: ficam fora da ordem de tabulação.
              aria-hidden={clone || undefined}
              tabIndex={clone ? -1 : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              className="cursor-target group relative flex w-[82vw] shrink-0 flex-col justify-between rounded-2xl border border-asphalt-border bg-asphalt-surface p-4 transition-colors hover:border-lane/40 hover:bg-asphalt-light sm:w-[46vw] lg:w-[30vw]"
            >
              <div>
                {t.img && (
                  <div className="mb-3 w-full overflow-hidden rounded-lg border border-asphalt-border bg-asphalt">
                    <div className="flex items-center gap-2 border-b border-asphalt-border bg-asphalt-light px-2.5 py-1">
                      <span
                        aria-hidden="true"
                        className="h-[3px] w-5 shrink-0 bg-lane-dash bg-repeat-x"
                        style={{ backgroundSize: '8px 3px' }}
                      />
                      {t.href.startsWith('http') && (
                        <span className="ml-2 truncate rounded-full bg-asphalt px-2.5 py-0.5 font-mono text-[10px] text-chalk-faint">
                          {displayUrl(t.href)}
                        </span>
                      )}
                    </div>
                    <div className="aspect-[2/1] w-full overflow-hidden sm:aspect-[21/9]">
                      <img
                        src={t.img}
                        alt={t.nome}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-chalk-faint">
                    BR-0{n}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyles[t.status]}`}
                  >
                    {t.status}
                  </span>
                </div>
                <SplitReveal as="h3" className="mt-3 font-display text-lg font-600 text-chalk">
                  {t.nome}
                </SplitReveal>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-chalk-faint">
                  {t.tags}
                </p>
                <SplitReveal as="p" className="mt-2 text-sm text-chalk-muted">
                  {t.desc}
                </SplitReveal>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-lane opacity-0 transition-opacity group-hover:opacity-100">
                Ver projeto →
              </span>
            </motion.a>
          )
        })}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
       {/* 
        <div className="mt-24">
          <span className="eyebrow">Apps no ar</span>
          <h3 className="mt-4 font-display text-2xl font-500 text-chalk sm:text-3xl">
            Produtos digitais que também assinamos
          </h3>
          <p className="mt-3 max-w-lg text-chalk-muted">
            Além de marca e site, ajudamos a construir os apps por trás da
            operação.
          </p>

          <div className="mx-auto mt-10 grid max-w-md gap-6 sm:grid-cols-2">
            {apps.map((a, i) => (
              <motion.div
                key={a.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center rounded-2xl border border-asphalt-border bg-asphalt-surface p-6 text-center"
              >
                <div
                  className={
                    a.framed
                      ? 'w-full max-w-[150px] overflow-hidden rounded-[2rem]'
                      : 'w-full max-w-[150px] overflow-hidden rounded-[1.5rem] border-[5px] border-asphalt bg-asphalt shadow-lg'
                  }
                >
                  <img
                    src={a.img}
                    alt={a.nome}
                    className="aspect-[9/19.5] w-full object-cover object-top"
                  />
                </div>
                <p className="mt-6 font-display text-lg font-600 text-chalk">
                  {a.nome}
                </p>
                <p className="mt-1 text-sm text-chalk-muted">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
