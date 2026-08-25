import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitReveal from "./SplitReveal";
import Clients from "./Clients";

// Relógio ao vivo do rodapé esquerdo — mesma leitura de "status" da
// referência (BASED IN UKRAINE · 22:44 LVIV), adaptado pra Campo Grande.
function useClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

// Largura máxima (px) que a faixa central atinge ao reagir ao mouse — a
// base do elemento fica travada nesse valor e o "fino" de repouso é só um
// scaleX pequeno em cima dela, pra animar via transform (sem reflow).
const LANE_LINE_MAX_WIDTH = 150;
const LANE_LINE_THIN_SCALE = 1 / LANE_LINE_MAX_WIDTH;

// Conteúdo do Hero renderizado duas vezes: uma real (com refs, textos
// selecionáveis e o reveal do SplitReveal) e uma "ghost" toda branca, que só
// existe dentro da janela recortada pela faixa rosa. Manter em um componente
// só garante que as duas camadas nunca saiam de registro quando a copy mudar.
function HeroContent({ ghost = false, clock, ready, refs = {} }) {
  const r = (name) => (ghost ? undefined : refs[name])

  return (
    <div
      className={[
        'flex flex-col justify-between px-[4vw] pb-10 pt-24 sm:pt-28',
        // O clone vive dentro da janela recortada (altura setada via GSAP),
        // enquanto o real ocupa a sobra da seção como flex item.
        ghost ? 'h-full text-white [&_*]:!text-white' : 'relative z-20 flex-1',
      ].join(' ')}
    >
      <div className="flex items-baseline justify-between">
        <p
          ref={r('index')}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint sm:text-xs"
        >
          <span className="text-lane">01</span>
          <span className="text-ink-faint">/</span>
          <span>Sinal</span>
        </p>

        <p
          ref={r('eyebrow')}
          className="max-w-[280px] text-right font-mono text-[11px] leading-relaxed tracking-[0.06em] text-ink-faint sm:text-xs"
        >
          Estúdio de marca, conteúdo e web
          <br />
          Campo Grande, MS. Desde 2019.
        </p>
      </div>

      <h1
        ref={r('title')}
        className="mt-10 font-tight text-[13vw] font-extrabold uppercase leading-[0.98] tracking-tight text-ink sm:text-[11vw] lg:mt-0 lg:text-[8.5vw]"
      >
        <span ref={r('titleLine1')} className="block">
          Marketing
        </span>

        <span className="flex items-center">
          {/* Reel marker — hatched pill that anchors the second line to the left margin */}
          <span
            ref={r('reelBadge')}
            aria-hidden="true"
            className={[
              'mr-[2.5vw] hidden h-[6.5vw] w-[10vw] shrink-0 items-center justify-center rounded-[3.25vw] border lg:flex',
              ghost ? 'border-white/40' : 'border-ink/15',
            ].join(' ')}
            style={{
              backgroundImage: ghost
                ? 'repeating-linear-gradient(115deg, rgba(255,255,255,0.22) 0 2px, transparent 2px 11px)'
                : 'repeating-linear-gradient(115deg, rgba(17,19,22,0.06) 0 2px, transparent 2px 11px)',
            }}
          >
            <span className="font-mono text-[0.8vw] uppercase tracking-[0.25em] text-ink-faint">
              Reel 12s
            </span>
          </span>

          <span ref={r('titleLine2')} className="whitespace-nowrap">
            Em{' '}
            <span className="mt-10 font-tight text-[13vw] font-extrabold uppercase leading-[0.98] tracking-tight text-lane [11vw] lg:mt-0 lg:text-[8.5vw]">
              Movimento
            </span>
          </span>
        </span>
      </h1>

      <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mt-0">
        {ghost ? (
          <p className="max-w-md text-lg leading-snug text-ink-muted sm:text-xl">
            Tiramos marcas da invisibilidade. Da estrada ao varejo, do logo ao
            app.{' '}
            <span className="font-serif font-bold  text-lane">
              Se não move, não vende.
            </span>
          </p>
        ) : (
          <SplitReveal
            as="p"
            ready={ready}
            delay={1.5}
            className="max-w-md text-lg leading-snug text-ink-muted sm:text-xl"
          >
            Tiramos marcas da invisibilidade. Da estrada ao varejo, do logo ao
            app.{' '}
            <span className="font-serif font-bold italic text-lane">
              Se não move, não vende.
            </span>
          </SplitReveal>
        )}

        <a
          ref={r('cta')}
          href="#trabalhos"
          {...(ghost ? { tabIndex: -1 } : {})}
          className={[
            // `cursor-target` só no real — o clone é decorativo e não deve
            // atrair o cursor customizado.
            ghost ? '' : 'cursor-target',
            'group inline-flex w-fit shrink-0 items-center gap-1 font-mono text-sm uppercase tracking-[0.15em] text-lane transition-colors hover:text-ink',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <span className="text-ink-faint transition-colors group-hover:text-lane">[</span>
          Ver cases
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
          <span className="text-ink-faint transition-colors group-hover:text-lane">]</span>
        </a>
      </div>

      {/* Linha de status — leitura de "presença" no rodapé, no espírito do
          BASED IN UKRAINE / hora local da referência. */}
      <p
        ref={r('status')}
        className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint lg:mt-16"
      >
        <span
          className={['h-1.5 w-1.5 shrink-0', ghost ? 'bg-white' : 'bg-lane'].join(' ')}
          aria-hidden="true"
        />
        Campo Grande, MS
        <span className="text-ink-faint/60">·</span>
        {clock}
      </p>
    </div>
  )
}

export default function Hero({ ready = true }) {
  const heroSectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const indexRef = useRef(null);
  const titleRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const reelBadgeRef = useRef(null);
  const titleLine2Ref = useRef(null);
  const ctaRef = useRef(null);
  const statusRef = useRef(null);
  const laneLineRef = useRef(null);
  // Janela que recorta uma cópia branca de TODO o conteúdo do Hero — fica
  // alinhada em cima da faixa central (laneLineRef) e cobre a seção inteira,
  // então qualquer texto (título, eyebrows, parágrafo, CTA, status) que a
  // faixa rosa cruzar aparece em branco por dentro dela.
  const maskWindowRef = useRef(null);
  const maskInnerRef = useRef(null);
  const clock = useClock();

  // O Hero é renderizado ATRÁS do IntroLoader e vai sendo descoberto enquanto
  // a cortina sobe. Sem travar o estado inicial já no mount, ele aparece
  // pronto durante essa revelação e só depois a timeline o joga de volta pro
  // opacity 0 — é o "carrega e recarrega". Aqui deixamos os elementos no
  // estado de partida antes do primeiro paint; a timeline abaixo só toca eles
  // até o estado final.
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.set(laneLineRef.current, { scaleX: LANE_LINE_THIN_SCALE, scaleY: 0 })
    gsap.set([indexRef.current, eyebrowRef.current, ctaRef.current], { opacity: 0, y: 16 })
    gsap.set([titleLine1Ref.current, titleLine2Ref.current], { opacity: 0, y: 40 })
    gsap.set(reelBadgeRef.current, { opacity: 0, scale: 0.85 })
    gsap.set(statusRef.current, { opacity: 0 })
  }, [])

  // A entrada toca quando o IntroLoader COMEÇA a sair (ver `ready` no App):
  // a cortina leva 0.8s subindo, então a sequência acontece junto da
  // revelação, e não depois dela.
  useLayoutEffect(() => {
    if (!ready) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Reveal por linha (não mais char a char): cada bloco de título entra
        // com y:40 -> 0 / opacity, no espírito do stagger de linhas do specia1ne.
        // fromTo (e não from) porque o estado inicial já foi aplicado no mount —
        // um `from` leria esse estado como destino e não animaria nada.
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.to(laneLineRef.current, { scaleY: 1, duration: 0.9, ease: 'power2.inOut' })
          .to(indexRef.current, { opacity: 1, y: 0, duration: 0.5 }, '<0.1')
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, '<')
          .to(titleLine1Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '<0.1')
          .to(reelBadgeRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '<0.25')
          .to(titleLine2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '<0.15')
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.25')
          .to(statusRef.current, { opacity: 1, duration: 0.6 }, '<')
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [indexRef.current, eyebrowRef.current, titleLine1Ref.current, reelBadgeRef.current, titleLine2Ref.current, ctaRef.current, statusRef.current],
          { opacity: 1, y: 0, scale: 1 },
        )
        // scaleX fino também aqui: o pré-estado do mount é pulado sob
        // prefers-reduced-motion, então a faixa chegaria com os 150px cheios.
        gsap.set(laneLineRef.current, { scaleX: LANE_LINE_THIN_SCALE, scaleY: 1 })
      })

      return () => mm.revert()
    })

    return () => ctx.revert()
  }, [ready])

  // A cópia branca é um clone posicionado em absolute dentro da janela —
  // pra bater pixel a pixel com o conteúdo real ela precisa ter a MESMA
  // largura/altura da seção (a janela é estreita e recorta o resto). Só
  // muda quando o layout muda (mount + resize), não depende do mouse.
  useLayoutEffect(() => {
    if (!ready) return

    const section = heroSectionRef.current
    const maskInner = maskInnerRef.current
    if (!section || !maskInner) return

    const syncSize = () => {
      const sectionRect = section.getBoundingClientRect()
      gsap.set(maskInner, {
        width: sectionRect.width,
        height: sectionRect.height,
      })
    }

    syncSize()
    window.addEventListener('resize', syncSize)

    // O Hero muda de altura conforme fontes/vw resolvem — observar a seção
    // evita a cópia branca ficar com altura defasada no primeiro paint.
    const observer = new ResizeObserver(syncSize)
    observer.observe(section)

    return () => {
      window.removeEventListener('resize', syncSize)
      observer.disconnect()
    }
  }, [ready])

  // Faixa central engrossa e desliza pra esquerda/direita acompanhando o
  // mouse sobre o Hero (efeito de referência specia1ne, aqui na cor de
  // marca), voltando a afinar quando o mouse para. A mesma posição/largura
  // também controla a janela que recorta o título em branco por cima —
  // onde a faixa passa sobre as letras pretas, elas viram brancas. Só liga
  // com mouse de verdade e fora de prefers-reduced-motion — em touch/redução
  // de movimento fica só a linha fina estática e centrada de sempre.
  useLayoutEffect(() => {
    if (!ready) return

    const hoverFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hoverFine || reduced) return

    const section = heroSectionRef.current
    const line = laneLineRef.current
    const maskWindow = maskWindowRef.current
    const maskInner = maskInnerRef.current
    if (!section || !line || !maskWindow || !maskInner) return

    const setLineX = gsap.quickTo(line, 'x', { duration: 0.5, ease: 'power3.out' })
    const setLineScaleX = gsap.quickTo(line, 'scaleX', { duration: 0.35, ease: 'power3.out' })

    // centerX/width da janela são tweenados como valores puros (não como
    // propriedades CSS diretas) porque `left` precisa ser recalculado a
    // partir dos DOIS ao mesmo tempo sempre que qualquer um deles se move —
    // é o que mantém a janela centrada no ponto certo mesmo enquanto ela
    // está encolhendo/crescendo sozinha (mouse parado).
    const centerXState = { value: 0 }
    const widthState = { value: LANE_LINE_MAX_WIDTH * LANE_LINE_THIN_SCALE }

    const applyMaskGeometry = () => {
      const winLeft = centerXState.value - widthState.value / 2
      gsap.set(maskWindow, { left: winLeft, width: widthState.value })
      // O clone cobre a seção inteira a partir do canto superior esquerdo
      // dela, então basta compensar o deslocamento da janela.
      gsap.set(maskInner, { left: -winLeft })
    }

    const setCenterX = gsap.quickTo(centerXState, 'value', {
      duration: 0.5,
      ease: 'power3.out',
      onUpdate: applyMaskGeometry,
    })
    const setWidth = gsap.quickTo(widthState, 'value', {
      duration: 0.35,
      ease: 'power3.out',
      onUpdate: applyMaskGeometry,
    })

    let lastX = null
    let idleTimeout

    const handleMove = (e) => {
      const sectionRect = section.getBoundingClientRect()
      const sectionCenterX = sectionRect.width / 2
      const maxOffset = Math.max(sectionCenterX - LANE_LINE_MAX_WIDTH / 2, 0)
      const offset = gsap.utils.clamp(
        -maxOffset,
        maxOffset,
        e.clientX - sectionRect.left - sectionCenterX,
      )

      // No primeiro movimento após o mount (ou após o mouse ter saído da
      // seção), a faixa ainda está travada no centro (x=0) — sem isso, o
      // quickTo abaixo sempre tweenaria a partir do centro até o cursor,
      // dando a impressão de que ela "abre do meio" toda vez. Aqui a gente
      // teleporta (sem animação) pra posição atual do mouse antes de
      // engrossar, então ela abre de onde o cursor já está.
      if (lastX === null) {
        gsap.set(line, { x: offset })
        centerXState.value = sectionCenterX + offset
        applyMaskGeometry()
      }

      setLineX(offset)
      setCenterX(sectionCenterX + offset)

      if (lastX !== null && Math.abs(e.clientX - lastX) > 1) {
        setLineScaleX(1)
        setWidth(LANE_LINE_MAX_WIDTH)
        clearTimeout(idleTimeout)
        idleTimeout = setTimeout(() => {
          setLineScaleX(LANE_LINE_THIN_SCALE)
          setWidth(1)
        }, 220)
      }
      lastX = e.clientX
    }

    const handleLeave = () => {
      lastX = null
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)

    return () => {
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
      clearTimeout(idleTimeout)
    }
  }, [ready])

  return (
    <>
      <section
        id="top"
        ref={heroSectionRef}
        className="relative flex min-h-screen flex-col overflow-hidden bg-chalk"
      >
        {/* Linha de faixa central — divisor vertical que atravessa o Hero,
            equivalente ao traço azul da referência, aqui na cor de marca (lane).
            Cor sólida (sem opacidade reduzida, que lavava o rosa pra quase-branco
            sobre o fundo claro). Largura real travada em LANE_LINE_MAX_WIDTH;
            o "fino" de repouso e o reveal de entrada são scaleY/scaleX em cima
            dela — ver os useLayoutEffect acima. */}
        <div
          ref={laneLineRef}
          data-wipe-origin
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-[150px] origin-top -translate-x-1/2 bg-lane md:block"
        />

        {/* Janela que recorta a cópia branca do Hero inteiro, alinhada com a
            faixa central acima — decorativa (aria-hidden), o texto real e
            selecionável continua sendo o bloco de conteúdo logo abaixo. */}
        <div
          ref={maskWindowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-30 hidden overflow-hidden md:block"
        >
          <div ref={maskInnerRef} className="absolute top-0">
            <HeroContent ghost clock={clock} />
          </div>
        </div>

        <HeroContent
          clock={clock}
          ready={ready}
          refs={{
            index: indexRef,
            eyebrow: eyebrowRef,
            title: titleRef,
            titleLine1: titleLine1Ref,
            reelBadge: reelBadgeRef,
            titleLine2: titleLine2Ref,
            cta: ctaRef,
            status: statusRef,
          }}
        />
      </section>

     {/*  <Clients /> */}
    </>
  );
}
