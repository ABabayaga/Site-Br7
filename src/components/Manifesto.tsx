import SplitReveal from './SplitReveal'
import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-chalk py-24 text-ink lg:py-40"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <SplitReveal
            as="h2"
            delay={0.1}
            className="max-w-[16ch] font-display text-[11vw] font-bold leading-[0.98] tracking-[-0.03em] sm:text-[9vw] lg:col-span-7 lg:text-[6vw]"
          >
            Marca bonita não paga boleto.
          </SplitReveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="max-w-md space-y-6 text-lg leading-relaxed text-ink-muted lg:col-span-4 lg:col-start-9 lg:pt-6"
          >
            <p>
              Somos cinco pessoas: Gustavo, Sandra, Felipe, Mélanie e Alef.
              Entregamos estratégia, criação e execução sem terceirizar o que
              importa —{' '}
              <em className="text-lane">mais de 200 peças por mês</em>,{' '}
              <em className="text-lane">sete sites no ar ou em obra</em>.
            </p>
            <p>
              Nascemos falando a língua de quem roda: carga, frota, risco,
              motorista. E aplicamos o mesmo rigor em varejo, serviço e arte.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
