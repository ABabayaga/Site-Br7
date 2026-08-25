import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitReveal from './SplitReveal'
import Reveal from './Reveal'

gsap.registerPlugin(ScrollTrigger)

const groups = [
  {
    label: 'Marca',
    items: [
      { title: 'Identidade visual e branding', tools: 'Logo · Manual · Rebranding', featured: true },
      { title: 'Posicionamento de marca', tools: 'Estratégia' },
      { title: 'Papelaria e arte para impressão', tools: 'Cartão · Folder · Banner' },
    ],
  },
  {
    label: 'Digital',
    items: [
      { title: 'Sites e landing pages', tools: 'React · Typescript', featured: true },
      { title: 'Produtos digitais e apps', tools: 'UX/UI' },
    ],
  },
  {
    label: 'Conteúdo',
    items: [
      { title: 'Redes sociais e conteúdo', tools: 'Instagram · LinkedIn · TikTok', featured: true },
      { title: 'Conteúdo e roteiro para vídeo', tools: 'Estratégia editorial' },
      { title: 'Produção e edição de vídeo', tools: 'Premiere · After Effects' },
    ],
  },
  {
    label: 'Corporativo',
    items: [
      { title: 'Apresentações e propostas', tools: 'InDesign · Figma', featured: true },
      { title: 'Endomarketing e campanhas internas', tools: 'Frota · Motoristas' },
    ],
  },
]

const totalItems = groups.reduce((n, g) => n + g.items.length, 0)

export default function Capacidades() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const itemRefs = useRef([])
  const extraRefs = useRef([])
  const prevExpandedRef = useRef(null)

  // Contador "Ativo 0X / 0Y" sincronizado ao scroll — cada item cruzando o
  // centro do viewport atualiza o índice ativo global (todas as categorias).
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        itemRefs.current.forEach((el, i) => {
          if (!el) return
          ScrollTrigger.create({
            trigger: el,
            start: 'center center',
            end: 'center center',
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          })
        })
      })

      return () => mm.revert()
    })

    return () => ctx.revert()
  }, [])

  // Expand/collapse do bloco extra (seta) por item — anima height via
  // scrollHeight (GSAP não anima height:auto nativamente) + fade com leve
  // stagger no conteúdo interno. Um índice React único controla o estado;
  // hover (desktop) e tap (mobile) escrevem no mesmo state.
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animate = (index, expand) => {
      const wrapper = extraRefs.current[index]
      if (!wrapper) return
      gsap.to(wrapper, {
        height: expand ? wrapper.scrollHeight : 0,
        duration: 0.4,
        ease: 'power3.out',
      })
      gsap.to(wrapper.querySelectorAll('[data-expand-child]'), {
        opacity: expand ? 1 : 0,
        y: expand ? 0 : -4,
        duration: 0.3,
        stagger: expand ? 0.05 : 0,
        delay: expand ? 0.08 : 0,
        overwrite: true,
      })
    }

    const prev = prevExpandedRef.current
    if (prev !== null && prev !== expandedIndex) animate(prev, false)
    if (expandedIndex !== null) animate(expandedIndex, true)
    prevExpandedRef.current = expandedIndex
  }, [expandedIndex])

  let runningIndex = -1

  return (
    <section
      id="capacidades"
      className="relative overflow-hidden bg-chalk py-14 text-ink lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SplitReveal
            as="h2"
            className="max-w-[20ch] font-display text-[11vw] font-black leading-[0.88] tracking-[-0.04em] sm:text-[8vw] lg:text-[5vw]"
          >
            O que fazemos
          </SplitReveal>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Ativo {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          {groups.map((group, gi) => (
            <div
              key={group.label}
              className={`grid gap-x-8 border-t border-ink/12 py-6 lg:grid-cols-12 lg:gap-x-12 lg:py-8 ${
                gi % 2 === 1 ? 'lg:pl-[8vw]' : ''
              }`}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-display text-lg italic text-ink-muted lg:col-span-3"
              >
                {group.label}
              </motion.p>

              <Reveal as="ul" itemSelector=":scope > li" stagger={0.07} className="mt-4 lg:col-span-9 lg:mt-0">
                {group.items.map((it) => {
                  runningIndex += 1
                  const globalIndex = runningIndex
                  const isActive = globalIndex === activeIndex

                  return (
                    <li
                      key={it.title}
                      ref={(el) => (itemRefs.current[globalIndex] = el)}
                      onMouseEnter={() => setExpandedIndex(globalIndex)}
                      onMouseLeave={() =>
                        setExpandedIndex((cur) => (cur === globalIndex ? null : cur))
                      }
                      onClick={() =>
                        setExpandedIndex((cur) => (cur === globalIndex ? null : globalIndex))
                      }
                      className={`cursor-target group border-t border-ink/12 first:border-t-0 ${
                        it.featured ? 'py-2.5 lg:py-3' : 'py-1.5 lg:py-2'
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`shrink-0 rounded-full border px-1.5 py-0.5 font-mono text-[10px] transition-colors duration-300 ${
                            isActive
                              ? 'border-lane bg-lane text-chalk'
                              : 'border-ink/25 text-ink-faint'
                          }`}
                        >
                          {String(globalIndex + 1).padStart(2, '0')}
                        </span>

                        <h3
                          className={`font-display font-bold leading-[0.95] tracking-[-0.035em] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-lane ${
                            it.featured
                              ? 'text-[6vw] sm:text-[4vw] lg:text-[2.3vw]'
                              : 'text-[4.6vw] text-ink-muted sm:text-[3vw] lg:text-[1.7vw]'
                          }`}
                        >
                          {it.title}
                        </h3>
                      </div>
                      <p className="mt-1 max-w-md font-body text-sm italic text-ink-faint">
                        {it.tools}
                      </p>

                      <div
                        ref={(el) => (extraRefs.current[globalIndex] = el)}
                        className="h-0 overflow-hidden"
                        aria-hidden="true"
                      >
                        <span
                          data-expand-child
                          className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-lane opacity-0"
                        >
                          Saiba mais →
                        </span>
                      </div>
                    </li>
                  )
                })}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
