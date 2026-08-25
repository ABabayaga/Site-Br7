import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Pins its children while a curtain wipes open, revealing the next section's
 * content already in place behind it.
 *
 * The curtain grows via clip-path rather than scaleX: a transform-scale would
 * stretch the content rendered inside it. `preview` is what's painted inside
 * the curtain (a decorative, aria-hidden copy of the next section, cropped to
 * one viewport); `next` is the real section, rendered right after in normal
 * flow.
 *
 * The wipe starts from the element marked `data-wipe-origin` inside `children`
 * — in the Hero that's the pink lane strip — so the curtain reads as that
 * strip widening rather than as a new shape appearing at the geometric center.
 * The strip tracks the mouse and thickens/thins, so its rect is re-read
 * whenever the wipe is parked at progress 0 (never mid-scrub, which would make
 * the curtain jump). Without such an element, it falls back to a zero-width
 * origin at the center.
 *
 * The seam between copy and real section is the other half of the trick. The
 * pin adds `distance` of spacer, so by default the real section's top would sit
 * a full viewport below where the curtain's copy is when the wipe ends — that's
 * what made the content visibly play twice in a row. Pulling the real section
 * up by exactly the pinned height (see `syncOffset`) lands its top precisely
 * where the copy is at the moment the wipe completes, so the handoff is
 * invisible: from there on the two scroll in lockstep showing identical
 * content, until the pinned block scrolls away entirely.
 *
 * Usage:
 *   <SectionTransition
 *     color="#E0176A"
 *     next={<Manifesto />}
 *     preview={<Manifesto id={null} />}
 *   >
 *     <Hero />
 *   </SectionTransition>
 */
export default function SectionTransition({
  color,
  children,
  next,
  preview,
  distance = '60%',
}) {
  const wrapperRef = useRef(null)
  const overlayRef = useRef(null)
  const previewRef = useRef(null)
  const nextRef = useRef(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const overlay = overlayRef.current
    const previewEl = previewRef.current
    const nextEl = nextRef.current
    if (!wrapper || !overlay || !previewEl || !nextEl) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Insets (px) the curtain is clipped by at progress 0. They're measured
        // to the strip's CENTER line, not to its edges, so they sum to the full
        // width and the curtain starts exactly zero-wide: at rest it paints
        // nothing, and the only pink line on screen is the strip itself.
        // (Measuring to the edges instead left a strip-wide band sitting beside
        // the real one — two lines.)
        const origin = { left: 0, right: 0 }
        const state = { progress: 0 }

        // O header fixo fica acima da cortina (z-50 vs z-40) e cortaria a
        // ilusão da abertura. Avisamos quem estiver ouvindo assim que o wipe
        // sai do repouso, para que ele se recolha, e de novo ao voltar a 0.
        let wipeActive = false
        const setWipeActive = (active) => {
          if (wipeActive === active) return
          wipeActive = active
          window.dispatchEvent(
            new CustomEvent('br7:wipe', { detail: { active } }),
          )
        }

        const readOrigin = () => {
          const wrapperRect = wrapper.getBoundingClientRect()
          const line = wrapper.querySelector('[data-wipe-origin]')
          const lineRect = line?.getBoundingClientRect()

          // No strip, or it's display:none (it's md-and-up only): fall back to
          // the geometric center.
          const center =
            lineRect && lineRect.width
              ? lineRect.left + lineRect.width / 2 - wrapperRect.left
              : wrapperRect.width / 2

          origin.left = center
          origin.right = wrapperRect.width - center
        }

        const applyClip = () => {
          const remaining = 1 - state.progress
          // The curtain also drops as it opens, so it reads as descending onto
          // the section rather than being full-height from the first frame. The
          // drop runs ahead of the sideways open (done at 80% of the range), so
          // the final stretch is a pure widening that settles flush onto the
          // content behind it.
          const dropRemaining = 1 - Math.min(state.progress / 0.8, 1)
          gsap.set(overlay, {
            clipPath: `inset(0px ${origin.right * remaining}px ${dropRemaining * 100}% ${origin.left * remaining}px)`,
          })
        }

        // Runs on every ScrollTrigger refresh, before it measures: pins are
        // reverted at that point, so the wrapper reports its natural (unpinned)
        // height — the exact amount the real next section has to come up by.
        const syncOffset = () => {
          gsap.set(nextEl, { marginTop: -wrapper.getBoundingClientRect().height })
        }

        // Two things scrubbed off the same scroll: the curtain widening, and the
        // content settling in behind it. The content lands at rest (opacity 1,
        // no offset) at 70% of the range, well before the wipe finishes, so the
        // copy is already pixel-identical to the real section by the time the
        // handoff at the end of the pin happens.
        const buildWipe = () =>
          gsap
            .timeline({ defaults: { ease: 'none' } })
            .to(state, { progress: 1, duration: 1, onUpdate: applyClip }, 0)
            .fromTo(
              previewEl,
              { opacity: 0, yPercent: 4 },
              { opacity: 1, yPercent: 0, duration: 0.7 },
              0,
            )

        syncOffset()
        readOrigin()
        applyClip()
        ScrollTrigger.addEventListener('refreshInit', syncOffset)

        const trigger = ScrollTrigger.create({
          trigger: wrapper,
          start: 'top top',
          end: `+=${distance}`,
          pin: true,
          scrub: true,
          animation: buildWipe(),
          // Fonte da verdade do estado do wipe: o progresso do próprio
          // ScrollTrigger já vem clampado em 0/1, ao contrário do valor
          // interpolado no tween, que pode parar num resíduo.
          onUpdate: (self) => setWipeActive(self.progress > 0.001),
          // Both fire with the wipe parked shut, so re-reading the strip here
          // can't produce a jump. (onEnterBack is deliberately absent: it fires
          // at progress 1, with the curtain fully open.)
          onEnter: readOrigin,
          // Voltando para antes do início, o scrub pode parar num resíduo de
          // progresso; zeramos à mão para garantir que a cortina volte a ser
          // nada e que o header seja avisado de que pode reaparecer.
          onLeaveBack: () => {
            state.progress = 0
            setWipeActive(false)
            readOrigin()
            applyClip()
          },
          onRefresh: () => {
            readOrigin()
            applyClip()
          },
        })

        // The strip glides along with the cursor, so its position when the wipe
        // finally starts is whatever the last mouse move left behind. Tracking
        // it only while the curtain is still shut keeps the opening anchored to
        // it without ever moving the origin mid-wipe.
        const trackOrigin = () => {
          if (state.progress === 0) readOrigin()
        }

        wrapper.addEventListener('mousemove', trackOrigin)

        return () => {
          wrapper.removeEventListener('mousemove', trackOrigin)
          ScrollTrigger.removeEventListener('refreshInit', syncOffset)
          trigger.kill()
          setWipeActive(false)
          gsap.set(nextEl, { marginTop: 0 })
        }
      })

      // No pin and no wipe here, so the copy stays hidden and the real section
      // keeps its normal position in flow (no negative offset to undo).
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(overlay, { clipPath: 'inset(0% 50% 0% 50%)', opacity: 0 })
      })

      return () => mm.revert()
    }, wrapper)

    return () => ctx.revert()
  }, [distance])

  return (
    <>
      <div ref={wrapperRef} className="relative z-10">
        {children}
        <div
          ref={overlayRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 overflow-hidden will-change-[clip-path]"
          style={{ backgroundColor: color }}
        >
          <div ref={previewRef} className="absolute inset-x-0 top-0">
            {preview ?? next}
          </div>
        </div>
      </div>
      <div ref={nextRef} className="relative z-0">
        {next}
      </div>
    </>
  )
}
