import { motion } from 'framer-motion'

const items = [
  { code: 'BR-01', title: 'Branding & Identidade', desc: 'Logo · Manual de marca · Rebranding' },
  { code: 'BR-02', title: 'Sites & Web', desc: 'WordPress · Framer · Landing pages' },
  { code: 'BR-03', title: 'Redes Sociais', desc: 'Instagram · LinkedIn · TikTok' },
  { code: 'BR-04', title: 'Vídeo & Reels', desc: 'Roteiro · Premiere · After Effects' },
  { code: 'BR-05', title: 'Apresentações', desc: 'Institucional · Proposta comercial' },
  { code: 'BR-06', title: 'Endomarketing', desc: 'Comunicação interna · Campanhas' },
  { code: 'BR-07', title: 'Papelaria & Print', desc: 'Cartão · Folder · Banner · Assinatura' },
  { code: 'BR-08', title: 'Apps & Produto', desc: 'Plataformas digitais para o setor' },
]

export default function Capacidades() {
  return (
    <section id="capacidades" className="border-b border-asphalt-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="eyebrow">O que fazemos ✦</span>
        <h2 className="mt-4 font-display text-3xl font-500 text-chalk sm:text-4xl">
          Capacidades
        </h2>
        <p className="mt-3 max-w-lg text-chalk-muted">
          Estratégia, criação e execução sob o mesmo teto. Suite Adobe completa,
          Framer, CapCut.
        </p>

        <div className="mt-14 grid divide-y divide-asphalt-border border-t border-asphalt-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {items.map((it, i) => (
            <motion.div
              key={it.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="group flex items-start gap-5 px-2 py-6 sm:px-8"
            >
              <span className="mt-1 font-mono text-xs text-lane">{it.code}</span>
              <div>
                <h3 className="font-display text-lg font-600 text-chalk">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-chalk-muted">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
