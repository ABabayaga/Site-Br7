import { motion } from 'framer-motion'

const skills = [
  'Branding',
  'Sites',
  'Social',
  'Vídeo',
  'Identidade Visual',
  'Endomarketing',
  'Apps',
  'Estratégia',
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <span className="rounded-full border border-asphalt-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-muted">
            BR-7 · Est.
          </span>
          <span className="eyebrow">Estúdio de marca, conteúdo e web · Campo Grande, MS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-8 font-display text-[13vw] font-600 leading-[0.95] tracking-tight text-chalk sm:text-[9vw] lg:text-[6.5vw]"
        >
          Marcas
          <br />
          <span className="italic text-lane">em movimento</span> ↗
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-chalk-muted"
        >
          <span className="font-600 text-chalk">BR7</span> tira marcas de transporte,
          logística e negócios locais da invisibilidade — com estratégia, design e
          conteúdo que viram autoridade e contrato.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-chalk-faint p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-chalk-faint"
          />
        </div>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-xs text-chalk-faint"
        >
          ↓
        </motion.span>
      </motion.div>

      {/* Lane divider with scrolling marquee of skills — the page's signature motif */}
      <div className="relative mt-16 border-y border-asphalt-border bg-asphalt-surface py-4">
        <div className="lane-strip animate-lane-move absolute top-0 left-0" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 whitespace-nowrap pr-10">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="font-display text-2xl italic text-chalk-faint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="lane-strip animate-lane-move absolute bottom-0 left-0" />
      </div>
    </section>
  )
}
