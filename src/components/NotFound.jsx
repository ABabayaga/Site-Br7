import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'
import SplitReveal from './SplitReveal'
import useMagnetic from '../hooks/useMagnetic'

export default function NotFound() {
  const homeRef = useMagnetic({ strength: 0.3, radius: 100 })
  const waRef = useMagnetic({ strength: 0.3, radius: 90 })

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-asphalt">
      <SectionBackground className="opacity-30" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-[4vw] py-8 lg:py-10">
        <a href="/" className="cursor-target w-fit">
          <img
            src="/br7dark.webp"
            alt="BR7"
            width="88"
            height="28"
            className="h-7 w-auto"
          />
        </a>

        <div className="flex flex-1 flex-col justify-center py-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-chalk-faint sm:text-xs"
          >
            BR-404 · Rota não encontrada
          </motion.p>

          <h1 className="mt-3 font-display text-[7.5vw] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-chalk sm:text-[6vw] lg:mt-4 lg:text-[4.2vw]">
            <SplitReveal as="span" delay={0.1} className="block max-w-[16ch]">
              Você saiu da pista
            </SplitReveal>
            <SplitReveal
              as="span"
              delay={0.25}
              className="block font-serif font-normal normal-case italic tracking-normal text-lane"
            >
              mas o retorno está logo ali
            </SplitReveal>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 lane-strip animate-lane-move max-w-[520px] lg:mt-8"
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="mt-6 max-w-[52ch] font-body text-sm text-chalk-muted sm:text-base lg:mt-8"
          >
            Esse endereço não existe (ou mudou de trecho). Volte para o início e
            siga a rota — ou fale direto com a gente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
            className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:mt-8"
          >
            <a
              ref={homeRef}
              href="/"
              className="cursor-target group inline-flex w-fit items-center gap-3 bg-lane-deep py-3.5 pl-7 pr-10 font-mono text-xs uppercase tracking-[0.2em] text-chalk transition-colors hover:bg-chalk hover:text-asphalt sm:py-3.5 sm:pl-9 sm:pr-12"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)',
              }}
            >
              Voltar ao início
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              ref={waRef}
              href="https://wa.me/5567981494797?text=Oi%20BR7!%20Quero%20colocar%20minha%20marca%20em%20movimento."
              target="_blank"
              rel="noreferrer"
              className="cursor-target inline-flex w-fit items-center rounded-full border border-asphalt-border px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-chalk-muted transition-colors hover:border-chalk hover:text-chalk sm:px-9 sm:py-3.5"
            >
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>

        <p className="font-mono text-xs text-chalk-faint">
          © {new Date().getFullYear()} BR7 Marketing · Marketing em Movimento
        </p>
      </div>
    </main>
  )
}
