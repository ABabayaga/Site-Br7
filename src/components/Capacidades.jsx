import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal'

const groups = [
  {
    label: 'Marca',
    items: [
      { title: 'Identidade visual e branding', tools: 'Logo · Manual · Rebranding', featured: true },
      { title: 'Posicionamento de marca', tools: 'Estratégia' },
      { title: 'Papelaria e arte para impressão', tools: 'Cartão · Folder · Banner' },
    ],
  },
  {
    label: 'Digital',
    items: [
      { title: 'Sites e landing pages', tools: 'React · Typescript', featured: true },
      { title: 'Produtos digitais e apps', tools: 'UX/UI' },
    ],
  },
  {
    label: 'Conteúdo',
    items: [
      { title: 'Redes sociais e conteúdo', tools: 'Instagram · LinkedIn · TikTok', featured: true },
      { title: 'Conteúdo e roteiro para vídeo', tools: 'Estratégia editorial' },
      { title: 'Produção e edição de vídeo', tools: 'Premiere · After Effects' },
    ],
  },
  {
    label: 'Corporativo',
    items: [
      { title: 'Apresentações e propostas', tools: 'InDesign · Figma', featured: true },
      { title: 'Endomarketing e campanhas internas', tools: 'Frota · Motoristas' },
    ],
  },
]

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      className="relative overflow-hidden bg-chalk py-20 text-ink lg:py-32"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <SplitReveal
          as="h2"
          className="max-w-[20ch] font-display text-[11vw] font-black leading-[0.88] tracking-[-0.04em] sm:text-[8vw] lg:text-[5vw]"
        >
          O que fazemos
        </SplitReveal>

        <div className="mt-16 lg:mt-24">
          {groups.map((group, gi) => (
            <div
              key={group.label}
              className={`grid gap-x-8 border-t border-ink/12 py-10 lg:grid-cols-12 lg:gap-x-12 lg:py-14 ${
                gi % 2 === 1 ? 'lg:pl-[8vw]' : ''
              }`}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-display text-lg italic text-ink-muted lg:col-span-3"
              >
                {group.label}
              </motion.p>

              <ul className="mt-6 lg:col-span-9 lg:mt-0">
                {group.items.map((it, i) => (
                  <motion.li
                    key={it.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                    className={`cursor-target group border-t border-ink/12 first:border-t-0 ${
                      it.featured ? 'py-4 lg:py-5' : 'py-2.5 lg:py-3'
                    }`}
                  >
                    <h3
                      className={`font-display font-bold leading-[0.95] tracking-[-0.035em] transition-colors duration-300 group-hover:text-lane ${
                        it.featured
                          ? 'text-[7vw] sm:text-[4.8vw] lg:text-[2.8vw]'
                          : 'text-[5.4vw] text-ink-muted sm:text-[3.6vw] lg:text-[2vw]'
                      }`}
                    >
                      {it.title}
                    </h3>
                    <p className="mt-1 max-w-md font-body text-sm italic text-ink-faint">
                      {it.tools}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
