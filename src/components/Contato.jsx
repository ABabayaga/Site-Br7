import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'
import SplitReveal from './SplitReveal'
import Clients from './Clients'
import useMagnetic from '../hooks/useMagnetic'

export default function Contato() {
  const waRef = useMagnetic({ strength: 0.3, radius: 100 })
  const mailRef = useMagnetic({ strength: 0.3, radius: 90 })

  return (
    <section id="contato" className="relative overflow-hidden py-12 lg:py-16">
      <SectionBackground className="opacity-30" />

     {/*  <Clients /> */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-chalk-faint sm:text-xs"
        >
          (05) Contato
        </motion.p>

        <h2 className="mt-5 font-display text-[9vw] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-chalk sm:text-[7.5vw] lg:mt-7 lg:text-[5.0vw]">
          <SplitReveal as="span" delay={0.1} className="block max-w-[16ch]">
            Bora colocar sua marca
          </SplitReveal>
          <SplitReveal
            as="span"
            delay={0.25}
            className="block font-serif font-normal normal-case italic tracking-normal text-lane"
          >
            em movimento
          </SplitReveal>
        </h2>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-10">
          <a
            ref={waRef}
            href="https://wa.me/5567981494797?text=Oi%20BR7!%20Quero%20colocar%20minha%20marca%20em%20movimento."
            target="_blank"
            rel="noreferrer"
            className="cursor-target group inline-flex w-fit items-center gap-3 bg-lane py-3.5 pl-7 pr-10 font-mono text-xs uppercase tracking-[0.2em] text-chalk transition-colors hover:bg-chalk hover:text-asphalt sm:py-4 sm:pl-9 sm:pr-12"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)',
            }}
          >
            Chamar no WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            ref={mailRef}
            href="mailto:mkt@agenciabr7.com.br"
            className="cursor-target inline-flex w-fit items-center rounded-full border border-asphalt-border px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-chalk-muted transition-colors hover:border-chalk hover:text-chalk sm:px-9 sm:py-4"
          >
            mkt@agenciabr7.com.br
          </a>
        </div>

        <div className="mt-6 grid justify-items-center gap-3 border-t border-asphalt-border pt-4 text-center sm:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chalk-faint">
              WhatsApp
            </span>
            <p className="mt-1 text-sm text-chalk">
              <a
                href="https://wa.me/5567981494797"
                target="_blank"
                rel="noreferrer"
                className="cursor-target hover:text-lane"
              >
                +55 67 98149-4797
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chalk-faint">
              Instagram
            </span>
            <p className="mt-1 text-sm text-chalk">
              <a
                href="https://www.instagram.com/br7.mkt_/"
                target="_blank"
                rel="noreferrer"
                className="cursor-target hover:text-lane"
              >
                @br7.mkt_
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-chalk-faint">
              Base
            </span>
            <p className="mt-1 text-sm text-chalk">Campo Grande · MS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
