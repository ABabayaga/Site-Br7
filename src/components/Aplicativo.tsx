import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SectionBackground from './SectionBackground'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// `ratio` é o aspecto real do arquivo: com ele a moldura da mídia tem a largura
// exata da imagem, sem o vão lateral que empurrava os textos pras bordas.
// `escala` é a fração do palco que cada arquivo ocupa: 1 é o palco cheio e
// valores menores reduzem só aquela mídia, sem mexer na altura base.
type MidiaBase = { alt: string; ratio: string; escala?: number }
type Midia =
  | ({ tipo: 'imagem'; src: string } & MidiaBase)
  | ({ tipo: 'video'; src: string; poster: string } & MidiaBase)

type Produto = {
  slug: string
  eyebrow: string
  nome: string
  copy: string
  kicker: string
  tags: string
  midia: Midia
  destaques: { title: string; copy: string }[]
  accent: 'lane' | 'brake'
  cta?: { label: string; href: string }
}

const produtos: Produto[] = [
  {
    slug: 'repensetrack',
    eyebrow: 'Novo aplicativo',
    nome: 'Desenvolvimento de app',
    copy: 'Gestão de frotas na palma da mão do motorista.',
    kicker: 'Gestão da viagem conectada à central, do início à entrega.',
    tags: 'Produto digital · App · Interface',
    accent: 'lane',
    midia: {
      tipo: 'imagem',
      src: '/rtc3-crop.webp',
      alt: 'Tela de login do aplicativo RepenseTrack',
      ratio: '2908 / 4652',
      escala: 1.0,
    },
    destaques: [
      {
        title: 'Status da viagem',
        copy: 'A posição da frota chega antes da ligação perguntando onde está a carga.',
      },
      {
        title: 'Registro de paradas',
        copy: 'Cada parada anotada no ponto, sem depender de caderno ou memória.',
      },
      {
        title: 'Comprovante de entrega',
        copy: 'Canhoto digital no fim da rota, direto na central.',
      },
    ],
  },
  {
    slug: 'captacao',
    eyebrow: 'Serviço BR7',
    nome: 'Captação em evento',
    copy: 'Equipe em campo registrando o evento enquanto ele acontece.',
    kicker: 'Do primeiro convidado ao último corte no ar, no mesmo dia.',
    tags: 'Evento · Vídeo · Social',
    accent: 'brake',
    midia: {
      tipo: 'video',
      src: '/br7cap.mp4',
      poster: '/br7cap-poster.jpg',
      alt: 'Bastidores da equipe BR7 captando um dia de evento',
      ratio: '900 / 1280',
      escala: 1.12,
    },
    destaques: [
      {
        title: 'Cobertura ao vivo',
        copy: 'A gente chega antes do primeiro convidado e sai com o evento inteiro gravado.',
      },
      {
        title: 'Corte vertical',
        copy: 'Formato de rede social já no set, não na edição.',
      },
      {
        title: 'Entrega no mesmo ritmo',
        copy: 'Pronto pra postar enquanto o assunto ainda está de pé.',
      },
    ],
  },
]

const accentStyles = {
  lane: {
    text: 'text-lane',
    chip: 'border-lane/30 bg-lane/10 text-lane',
    glow: 'bg-lane/20',
  },
  brake: {
    text: 'text-brake',
    chip: 'border-brake/30 bg-brake/10 text-brake',
    glow: 'bg-brake/20',
  },
} as const

// A troca de produtos é tocada pelo GSAP, não pelo scroll: NA_TELA é quanto
// cada produto fica parado e TROCA é quanto dura o crossfade — em segundos.
const NA_TELA = 3.5
const TROCA = 1.0

function Media({ midia }: { midia: Midia }) {
  if (midia.tipo === 'video') {
    return (
      <video
        src={midia.src}
        poster={midia.poster}
        aria-label={midia.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="relative block h-full w-full rounded-[1.75rem] border border-asphalt-border object-cover shadow-2xl"
      />
    )
  }

  // O PNG está recortado no contorno do aparelho, com fundo transparente: o
  // próprio device já é a silhueta, então não entra máscara nem moldura falsa.
  return (
    <img
      src={midia.src}
      alt={midia.alt}
      loading="lazy"
      className="relative mx-auto block h-full w-full object-contain"
    />
  )
}

function Glow({ accent }: { accent: Produto['accent'] }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] ${accentStyles[accent].glow}`}
    />
  )
}

/** Um produto no modo "slide": três colunas, mídia flutuando no meio. */
function Slide({ produto }: { produto: Produto }) {
  const a = accentStyles[produto.accent]

  return (
    <div className="flex h-full flex-col">
      {/* Coluna do meio em `auto`: ela tem a largura exata da mídia, então as
          duas laterais se encostam nela em vez de se espalharem pelas bordas. */}
      {/* `grid-rows-[minmax(0,1fr)]`: sem isso a linha é dimensionada pelo
          conteúdo e a mídia vaza pra fora do palco, passando por cima da tira
          de destaques — é essa linha que dá altura definida pro `max-h-full`. */}
      <div className="grid min-h-0 flex-1 items-center gap-[3vw] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)]">
        {/* `min-w-0 max-w-full`: com `justify-self-end` a coluna é medida pelo
            conteúdo, então sem o teto um título largo transborda pra esquerda e
            some no `overflow-hidden` da seção. */}
        <div className="min-w-0 max-w-full lg:justify-self-end">
          <span data-el className={`eyebrow block ${a.text}`}>
            {produto.eyebrow}
          </span>
          <h3
            data-el
            className="mt-3 hyphens-auto font-display text-[3.5vw] font-500 leading-[0.95] tracking-[-0.02em] text-chalk"
          >
            {produto.nome}
          </h3>
          <p
            data-el
            className="mt-4 max-w-md text-xl leading-snug text-chalk-muted"
          >
            {produto.copy}
          </p>
          <p
            data-el
            className="mt-5 font-mono text-[11px] uppercase tracking-wide text-chalk-faint"
          >
            {produto.tags}
          </p>
          {produto.cta && (
            <a
              data-el
              href={produto.cta.href}
              target="_blank"
              rel="noreferrer"
              className={`cursor-target group mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide ${a.chip}`}
            >
              {produto.cta.label}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>

        {/* `--media-h` é a altura base da mídia e a escala do arquivo multiplica
            ela. No slide (lg+) a base é 100% da linha do palco — que o
            `grid-rows-[minmax(0,1fr)]` deixa definida —, então `escala: 1` é
            exatamente o palco cheio e a escala vira um redutor previsível de 0 a
            1, sem bater no teto do `max-h-full`. Abaixo de lg a linha não é
            definida, então a base volta a ser em vh. */}
        <div
          data-el
          data-media
          className="relative h-[calc(var(--media-h)*var(--media-escala,1))] max-h-full w-auto [--media-h:46vh] lg:self-start lg:[--media-h:100%]"
          style={
            {
              aspectRatio: produto.midia.ratio,
              '--media-escala': produto.midia.escala ?? 1,
            } as CSSProperties
          }
        >
          <Glow accent={produto.accent} />
          <Media midia={produto.midia} />
        </div>

        <p
          data-el
          className="max-w-sm font-display text-2xl font-500 leading-tight text-chalk lg:justify-self-start lg:text-[2.05vw]"
        >
          {produto.kicker}
        </p>
      </div>

      <p data-el className="mt-6 pt-6 shrink-0 text-center text-base text-chalk-muted">
        {produto.destaques.map((d) => d.title).join('  ·  ')}
      </p>
    </div>
  )
}

/** O mesmo produto em bloco empilhado — usado no mobile e em reduced-motion. */
function Bloco({ produto }: { produto: Produto }) {
  const a = accentStyles[produto.accent]

  return (
    <div data-bloco className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div
        data-el
        data-media
        className="relative h-[calc(var(--media-h)*var(--media-escala,1))] [--media-h:64vh]"
        style={
          { '--media-escala': produto.midia.escala ?? 1 } as CSSProperties
        }
      >
        <Glow accent={produto.accent} />
        <div className="relative h-full">
          <Media midia={produto.midia} />
        </div>
      </div>
      <div>
        <span data-el className={`eyebrow block ${a.text}`}>
          {produto.eyebrow}
        </span>
        <h3
          data-el
          className="mt-3 font-display text-4xl font-500 leading-[0.95] text-chalk"
        >
          {produto.nome}
        </h3>
        <p data-el className="mt-4 text-lg leading-snug text-chalk-muted">
          {produto.copy}
        </p>
        <p
          data-el
          className="mt-6 font-display text-xl font-500 leading-tight text-chalk"
        >
          {produto.kicker}
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-border">
          {produto.destaques.map((d) => (
            <li key={d.title} data-el className="bg-asphalt-surface p-5">
              <h4 className="font-display text-base font-600 text-chalk">
                {d.title}
              </h4>
              <p className="mt-1 text-sm text-chalk-muted">{d.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Aplicativo() {
  const sectionRef = useRef<HTMLElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  // Momento do último input de scroll do usuário: se ele assumiu a navegação,
  // a seção não empurra a página no fim da sequência.
  const inputRef = useRef(0)
  const [index, setIndex] = useState(0)
  // `slides` só liga depois que o matchMedia confirma desktop + motion liberado;
  // no mobile e em reduced-motion a seção continua sendo uma pilha comum.
  const [slides, setSlides] = useState(false)

  useLayoutEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          setSlides(true)
          return () => {
            setSlides(false)
            setIndex(0)
          }
        },
      )

      return () => mm.revert()
    }, el)

    return () => ctx.revert()
  }, [])

  // Fim da sequência: leva a página pra próxima seção. Só acontece se a seção
  // ainda for a que está na tela e o usuário não tiver assumido o scroll —
  // arrastar a página de alguém que já está navegando é pior que não descer.
  const descer = () => {
    const el = sectionRef.current
    if (!el) return
    if (Date.now() - inputRef.current < 2000) return

    const { top } = el.getBoundingClientRect()
    if (Math.abs(top) > window.innerHeight * 0.3) return

    const prox = el.nextElementSibling as HTMLElement | null
    if (!prox) return

    gsap.to(window, {
      scrollTo: { y: prox, autoKill: true },
      duration: 1.1,
      ease: 'power2.inOut',
    })
  }

  // A seção não prende mais o scroll: a sequência é uma timeline do GSAP que
  // toca sozinha quando a seção entra na tela e, no fim, desce pra próxima.
  useLayoutEffect(() => {
    const el = sectionRef.current
    if (!el || !slides) return

    const alvos = slideRefs.current.filter(Boolean) as HTMLDivElement[]
    if (alvos.length < 2) return

    const ctx = gsap.context(() => {
      // Os slides ficam empilhados no mesmo espaço; a virada é um crossfade
      // com um deslocamento vertical curto, não um carrossel horizontal.
      alvos.forEach((alvo, i) =>
        gsap.set(alvo, { opacity: i === 0 ? 1 : 0, y: 0, scale: 1 }),
      )

      const tl = gsap.timeline({ paused: true, repeat: -1 })

      alvos.forEach((alvo, i) => {
        const marca = `p${i}`

        if (i === 0) {
          tl.addLabel(marca, 0)
        } else {
          // A saída começa antes da entrada terminar: os dois se cruzam por um
          // instante curto, o que deixa a troca contínua em vez de piscar.
          tl.addLabel(marca)
          tl.to(
            alvos[i - 1],
            {
              opacity: 0,
              y: -20,
              scale: 0.99,
              duration: TROCA * 0.6,
              ease: 'power2.in',
            },
            marca,
          )
          tl.fromTo(
            alvo,
            { opacity: 0, y: 24, scale: 0.99 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: TROCA * 0.7,
              ease: 'power2.out',
            },
            `${marca}+=${TROCA * 0.3}`,
          )
        }

        // Entrada dos elementos do produto. No primeiro o fade é dos próprios
        // elementos; nos seguintes quem faz o fade é o container, então aqui
        // sobra só o deslocamento — senão a entrada fica lavada.
        const em = i === 0 ? marca : `${marca}+=${TROCA * 0.35}`
        tl.from(
          alvo.querySelectorAll('[data-el]'),
          {
            y: i === 0 ? 28 : 16,
            ...(i === 0 ? { opacity: 0 } : null),
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.07,
          },
          em,
        )

        const midia = alvo.querySelector('[data-media]')
        if (midia) {
          tl.from(midia, { scale: 0.96, duration: 1.1, ease: 'power3.out' }, em)
        }

        tl.to({}, { duration: NA_TELA })
      })

      const marcas = alvos.map((_, i) => tl.labels[`p${i}`] ?? 0)

      // As barras do trilho só entram depois da timeline montada: cada uma
      // carrega do label do seu produto até o label do próximo (a última vai
      // até o fim), então a barra é literalmente o tempo que falta.
      const fills = Array.from(
        el.querySelectorAll<HTMLElement>('[data-fill]'),
      ).slice(0, alvos.length)
      const fim = tl.duration()

      gsap.set(fills, { scaleX: 0, transformOrigin: 'left center' })
      fills.forEach((fill, i) => {
        const ate = i + 1 < marcas.length ? marcas[i + 1] : fim
        tl.fromTo(
          fill,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none', duration: Math.max(ate - marcas[i], 0.1) },
          marcas[i],
        )
      })

      // Volta pro primeiro produto com o mesmo crossfade das outras viradas —
      // sem isso o loop cortaria seco do último pro primeiro.
      const ultimo = alvos[alvos.length - 1]
      tl.to(
        ultimo,
        {
          opacity: 0,
          y: -20,
          scale: 0.99,
          duration: TROCA * 0.6,
          ease: 'power2.in',
        },
        fim,
      )
      tl.to(
        alvos[0],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: TROCA * 0.7,
          ease: 'power2.out',
        },
        fim + TROCA * 0.3,
      )

      tl.eventCallback('onUpdate', () => {
        const t = tl.time()
        let i = 0
        for (let k = 0; k < marcas.length; k++) {
          if (t >= marcas[k] - TROCA * 0.4) i = k
        }
        // Na volta o trilho já acende o 01 junto com o crossfade.
        if (t >= fim + TROCA * 0.4) i = 0
        setIndex(i)
      })

      // A sequência roda em loop, mas a descida pra próxima seção acontece uma
      // vez só: no fim da primeira passada. Depois disso, quem ficou na seção
      // continua vendo os produtos girarem.
      let desceu = false
      tl.eventCallback('onRepeat', () => {
        if (desceu) return
        desceu = true
        descer()
      })

      tlRef.current = tl

      // Só roda com a seção na tela — fora dela a sequência fica parada onde
      // estava, sem gastar frame nem terminar escondida.
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      })

      // Recarregar a página já dentro da seção não dispara `onEnter`; sem isso
      // a sequência ficaria parada com tudo invisível.
      if (st.isActive) tl.play()
    }, el)

    return () => {
      tlRef.current = null
      ctx.revert()
    }
  }, [slides])

  // Qualquer input de scroll do usuário registra a hora — usado pelo `descer`.
  useEffect(() => {
    if (!slides) return
    const marcar = () => {
      inputRef.current = Date.now()
    }
    const opts = { passive: true } as const
    window.addEventListener('wheel', marcar, opts)
    window.addEventListener('touchmove', marcar, opts)
    window.addEventListener('keydown', marcar)
    return () => {
      window.removeEventListener('wheel', marcar)
      window.removeEventListener('touchmove', marcar)
      window.removeEventListener('keydown', marcar)
    }
  }, [slides])

  // Entrada dos elementos: um stagger curto quando a seção chega na tela. No
  // modo slides a entrada dos produtos já faz parte da timeline, então aqui
  // sobra o eyebrow; no modo pilha cada bloco tem o seu próprio gatilho.
  useLayoutEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const escopos: Element[] = slides
          ? []
          : Array.from(el.querySelectorAll('[data-bloco]'))

        const header = el.querySelector('[data-anim="header"]')
        if (header) {
          gsap.from(header, {
            y: 18,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%', once: true },
          })
        }

        escopos.forEach((escopo) => {
          gsap.from(escopo.querySelectorAll('[data-el]'), {
            y: 28,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: escopo, start: 'top 78%', once: true },
          })
          // A mídia é o elemento pesado do slide: um respiro de escala junto do
          // fade tira o ar de "imagem que apareceu do nada".
          const midia = escopo.querySelector('[data-media]')
          if (midia) {
            gsap.from(midia, {
              scale: 0.96,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: slides ? el : escopo,
                start: 'top 78%',
                once: true,
              },
            })
          }
        })
      })

      return () => mm.revert()
    }, el)

    return () => ctx.revert()
  }, [slides])

  // Dot: leva a timeline até o produto pedido e segue tocando dali.
  const irPara = (i: number) => {
    const tl = tlRef.current
    if (!tl) return

    const alvo = tl.labels[`p${i}`]
    if (alvo == null) return

    inputRef.current = Date.now()
    setIndex(i)
    tl.tweenTo(alvo + 0.01, {
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => tl.play(),
    })
  }

  return (
    <section
      ref={sectionRef}
      id="aplicativo"
      className={`relative overflow-hidden border-b border-asphalt-border ${
        slides ? 'h-[94vh] min-h-[720px]' : 'py-24'
      }`}
    >
      <SectionBackground />
      <div
        className={`relative z-10 mx-auto w-full px-[4vw] ${
          slides
            ? 'flex h-full max-w-[1500px] flex-col py-[3vh]'
            : 'max-w-[1800px]'
        }`}
      >
        <span
          data-anim="header"
          className="eyebrow inline-flex shrink-0 items-center gap-2"
        >
          Produção própria
          <span
            aria-hidden="true"
            className="h-[3px] w-8 bg-lane-dash bg-repeat-x"
            style={{ backgroundSize: '10px 3px' }}
          />
        </span>

        {slides ? (
          <>
            {/* Trilho: uma barra por produto, centralizada acima do palco, que
                carrega da esquerda pra direita enquanto ele está no ar — o tempo
                restante fica visível, e ao completar a timeline já virou. */}
            <div className="mt-5 flex shrink-0 items-end justify-center gap-8">
              {produtos.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => irPara(i)}
                  aria-label={`Ver ${p.nome}`}
                  aria-current={i === index}
                  className="cursor-target group flex min-w-[11rem] flex-col gap-2 text-left transition-colors duration-500"
                >
                  {/* O estado inativo era `opacity-40`, o que derrubava o
                      contraste do rótulo para ~3:1. A hierarquia agora vem da
                      cor, que continua legível nos dois estados. */}
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[11px] tracking-wide text-chalk-faint">
                      0{i + 1}.
                    </span>
                    <span
                      className={`whitespace-nowrap font-display text-sm font-500 leading-tight transition-colors duration-500 ${
                        i === index
                          ? 'text-chalk'
                          : 'text-chalk-muted group-hover:text-chalk'
                      }`}
                    >
                      {p.nome}
                    </span>
                  </span>
                  <span className="relative block h-[2px] w-full overflow-hidden rounded-full bg-chalk-faint/25">
                    <span
                      data-fill
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gradient-to-r from-brake to-lane"
                    />
                  </span>
                </button>
              ))}
            </div>

            {/* Palco: todos os produtos empilhados no mesmo espaço, um por cima
                do outro — a timeline faz o crossfade entre eles. */}
            <div className="relative mt-4 min-h-0 flex-1 overflow-hidden">
              {produtos.map((p, i) => (
                <div
                  key={p.slug}
                  ref={(node) => {
                    slideRefs.current[i] = node
                  }}
                  data-slide={i}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 ${
                    i === index ? '' : 'pointer-events-none'
                  }`}
                >
                  <Slide produto={p} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-14 flex flex-col gap-24">
            {produtos.map((p) => (
              <Bloco key={p.slug} produto={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
