import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'

const items = [
  { title: 'Identidade visual e branding', tools: 'Logo · Manual · Rebranding' },
  { title: 'Sites e landing pages', tools: 'React · Typescript' },
  { title: 'Redes sociais e conteúdo', tools: 'Instagram · LinkedIn · TikTok' },
  { title: 'Conteúdo e roteiro para vídeo', tools: 'Estratégia editorial' },
  { title: 'Produção e edição de vídeo', tools: 'Premiere · After Effects' },
  { title: 'Apresentações e propostas', tools: 'InDesign · Figma' },
  { title: 'Endomarketing e campanhas internas', tools: 'Frota · Motoristas' },
  { title: 'Papelaria e arte para impressão', tools: 'Cartão · Folder · Banner' },
  { title: 'Produtos digitais e apps', tools: 'UX/UI' },
  { title: 'Posicionamento de marca', tools: 'Estratégia' },
]

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      className="relative overflow-hidden bg-chalk py-16 text-ink lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink-faint sm:text-xs"
        >
          (02) Capacidades
        </motion.p>

        <SplitReveal
          as="h2"
          delay={0.1}
          className="mt-6 max-w-[18ch] font-display text-[11vw] font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-[8vw] lg:mt-8 lg:text-[5vw]"
        >
          O que fazemos
        </SplitReveal>

        <ul className="mt-10 border-b border-ink/12 lg:mt-14">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: 'easeOut' }}
              className="cursor-target group flex items-center gap-6 border-t border-ink/12 py-2.5 sm:gap-10 lg:py-3"
            >
              <span className="font-mono text-[11px] text-ink-faint/60 sm:text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="flex-1 font-display text-[6.4vw] font-bold leading-[0.95] tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2 sm:text-[4.4vw] lg:text-[2.7vw]">
                {it.title}
              </h3>

              <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint/70 transition-colors duration-300 group-hover:text-lane sm:inline">
                {it.tools}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
