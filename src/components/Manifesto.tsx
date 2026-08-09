import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'

const stats = [
  { value: '+200', label: 'Peças / mês', accent: false },
  { value: '7', label: 'Sites no ar ou em obra', accent: true },
]

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-chalk py-16 text-ink lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-faint sm:text-xs"
        >
          (01) Manifesto
        </motion.p>

        <SplitReveal
          as="h2"
          delay={0.1}
          className="mt-8 max-w-[16ch] font-display text-[11vw] font-bold leading-[0.98] tracking-[-0.03em] sm:text-[9vw] lg:mt-10 lg:text-[6vw]"
        >
          Marca bonita não paga boleto.
        </SplitReveal>

        {/* Lane dot — lone accent marking the turn from headline into the body copy */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          className="mt-8 ml-auto block h-3 w-3 rounded-full bg-lane lg:mr-[16%] lg:mt-10"
        />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-16">
          <SplitReveal as="p" delay={0.1} className="max-w-md text-lg leading-snug text-ink-muted">
            Somos cinco pessoas: Gustavo, Sandra, Felipe, Mélanie e Alef.
            Entregamos estratégia, criação e execução sem terceirizar o que
            importa. Mais de 200 peças por mês.
          </SplitReveal>

          <SplitReveal as="p" delay={0.2} className="max-w-md text-lg leading-snug text-ink-muted">
            Nascemos falando a língua de quem roda: carga, frota, risco,
            motorista. E aplicamos o mesmo rigor em varejo, serviço e arte.
          </SplitReveal>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col"
          >
            {stats.map(({ value, label, accent }) => (
              <div
                key={label}
                className="flex flex-wrap items-baseline gap-x-4 border-t border-ink/15 py-4"
              >
                <dt
                  className={`font-display text-6xl font-bold leading-none tracking-tight lg:text-7xl ${
                    accent ? 'text-lane' : 'text-ink'
                  }`}
                >
                  {value}
                </dt>
                <dd className="font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
                  {label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
