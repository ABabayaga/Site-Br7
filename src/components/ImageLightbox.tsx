import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

export type LightboxItem = {
  img: string
  alt?: string
  cliente?: string
  tema?: string
}

type Props = {
  items: LightboxItem[]
  /** Índice aberto; `null` mantém o modal fechado. */
  index: number | null
  onClose: () => void
  onIndexChange?: (next: number) => void
}

/**
 * Modal de imagem ampliada. Monta em portal no body para escapar do
 * `overflow-hidden` das seções e navega entre os itens por teclado ou setas.
 */
export default function ImageLightbox({ items, index, onClose, onIndexChange }: Props) {
  const open = index !== null && index >= 0 && index < items.length
  const item = open ? items[index] : null
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null || !onIndexChange || items.length < 2) return
      onIndexChange((index + dir + items.length) % items.length)
    },
    [index, items.length, onIndexChange],
  )

  // Esc fecha, setas navegam. Listener no document para funcionar mesmo se o
  // foco escapar do painel.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose, step])

  // Trava o scroll da página enquanto o modal estiver aberto e devolve o foco
  // para o elemento que abriu.
  useEffect(() => {
    if (!open) return
    restoreRef.current = document.activeElement as HTMLElement | null
    const previous = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.documentElement.style.overflow = previous
      // `preventScroll` evita que a devolução do foco arraste a trilha do
      // carrossel de volta para o card clicado.
      restoreRef.current?.focus?.({ preventScroll: true })
    }
  }, [open])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.cliente ? `Imagem ampliada — ${item.cliente}` : 'Imagem ampliada'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-asphalt/95 px-[4vw] py-[6vh] backdrop-blur-sm"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar imagem"
            className="absolute right-[4vw] top-[3vh] flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {items.length > 1 && onIndexChange && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Imagem anterior"
                className="absolute left-[3vw] flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Próxima imagem"
                className="absolute right-[3vw] flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-border text-chalk-muted transition-colors hover:border-lane hover:text-chalk"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

          {/* O clique dentro do painel não fecha o modal. */}
          <motion.figure
            key={item.img}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-[min(90vw,760px)] flex-col items-center gap-3"
          >
            <img
              src={item.img}
              alt={item.alt ?? ''}
              decoding="async"
              className="max-h-[78vh] w-auto max-w-full rounded-2xl border border-asphalt-border object-contain"
            />
            {(item.cliente || item.tema) && (
              <figcaption className="flex w-full items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-chalk-faint">
                <span className="text-chalk-muted">{item.cliente}</span>
                <span className="shrink-0">{item.tema}</span>
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
