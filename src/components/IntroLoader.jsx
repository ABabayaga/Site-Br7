import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DURATION = 1900

export default function IntroLoader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const startRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setProgress(100)
      setExiting(true)
      return
    }

    let raf
    const tick = (now) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setExiting(true), 300)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exiting && (
        <motion.div
          key="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-asphalt"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="lane-strip animate-lane-move absolute top-[18%] left-0" />
            <div className="lane-strip animate-lane-move absolute bottom-[18%] left-0" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6">
            <span className="eyebrow">Entrando na pista ✦</span>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="mt-4 font-display text-[16vw] font-600 uppercase leading-none tracking-tight text-chalk sm:text-[9vw] lg:text-[6vw]"
            >
              BR7
            </motion.span>

            <div className="relative mt-10 h-[3px] w-[56vw] max-w-sm overflow-hidden rounded-full bg-asphalt-border">
              <motion.div
                className="h-full bg-lane"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
              <div
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-lane shadow-[0_0_10px_2px_rgba(224,23,106,0.65)]"
                style={{ left: `${progress}%` }}
              />
            </div>

            <span className="mt-4 font-mono text-xs tabular-nums text-chalk-faint">
              {String(progress).padStart(2, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
