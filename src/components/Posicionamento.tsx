import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'

const problemas = [
  {
    title: 'Presença invisível',
    copy: 'Sua empresa roda há 20 anos e ninguém acha ela no Google. Resolvemos isso antes de qualquer post bonito.',
  },
  {
    title: 'Conteúdo genérico',
    copy: 'Quantos posts bonitos já saíram sem fechar um contrato sequer? A gente troca isso por conteúdo com tese.',
  },
  {
    title: 'Proposta sem design',
    copy: 'Pare de disputar contrato de milhão com PDF do Word. Suba o nível da proposta pro tamanho do negócio.',
  },
  {
    title: 'Site que afasta',
    copy: 'Lento. Sem CTA. Péssimo no celular. Prioridade número um quando entramos.',
  },
]

export default function Posicionamento() {
  return (
    <section
      id="posicionamento"
      className="relative overflow-hidden bg-lane-deep py-10 text-chalk lg:py-12"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-chalk sm:text-xs"
        >
          (03) Posicionamento
        </motion.p>

        <SplitReveal
          as="h2"
          delay={0.1}
          className="mt-4 max-w-[15ch] font-display text-[9.5vw] font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:text-[7.5vw] lg:mt-5 lg:text-[4.2vw]"
        >
          Do logo ao app, sem furo na marca.
        </SplitReveal>

        <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-8">
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
              <p className="mt-3 text-sm leading-snug text-chalk lg:text-base">
                {p.copy}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
