import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'

const problemas = [
  {
    title: 'Presença invisível',
    copy: 'Sua empresa existe há 20 anos e ninguém acha. A gente resolve isso primeiro.',
  },
  {
    title: 'Conteúdo genérico',
    copy: 'Post bonito que não fecha contrato é custo. Conteúdo com tese é ativo.',
  },
  {
    title: 'Proposta sem design',
    copy: 'Você disputa contrato de milhão com PDF do Word. A gente muda o jogo.',
  },
  {
    title: 'Site que afasta',
    copy: 'Lento, sem CTA, ruim no celular. Refazemos com foco em conversão.',
  },
]

export default function Posicionamento() {
  return (
    <section
      id="posicionamento"
      className="relative overflow-hidden bg-lane py-16 text-chalk lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-chalk/70 sm:text-xs"
        >
          (03) Posicionamento
        </motion.p>

        <SplitReveal
          as="h2"
          delay={0.1}
          className="mt-6 max-w-[15ch] font-display text-[11vw] font-bold uppercase leading-[0.92] tracking-[-0.03em] sm:text-[9vw] lg:mt-8 lg:text-[5.0vw]"
        >
          Do logo ao app, sem furo na marca.
        </SplitReveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10">
          {problemas.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="cursor-target max-w-sm"
            >
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-chalk sm:text-xs">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-snug text-chalk/85 lg:text-lg">
                {p.copy}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
