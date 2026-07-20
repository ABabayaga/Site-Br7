import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'

const pilares = [
  {
    marker: 'KM 01 — FOCO',
    title: 'Falamos a sua língua',
    desc: 'Conhecemos o B2B rodoviário por dentro: cargas, frotas, gestão de risco, recrutamento de motoristas. Nada de campanha genérica.',
  },
  {
    marker: 'KM 02 — TIME',
    title: 'Estratégia + criação + execução',
    desc: 'Da primeira ideia ao deploy, fazemos com a equipe — sem terceirizar o que importa nem empurrar atalho de Canva.',
  },
  {
    marker: 'KM 03 — RANGE',
    title: 'Do logo ao aplicativo',
    desc: 'Marca, site, conteúdo, vídeo, papelaria e produto digital. Uma marca consistente em todos os pontos de contato.',
  },
]

export default function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden border-b border-asphalt-border py-24"
    >
      <SectionBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <span className="eyebrow">Por que a BR7 ✦</span>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-500 text-chalk sm:text-4xl">
          Marketing que se move com o seu negócio
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pilares.map((p, i) => (
            <motion.div
              key={p.marker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-asphalt-border bg-asphalt-surface p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lane">
                {p.marker}
              </span>
              <h3 className="mt-4 font-display text-xl font-600 text-chalk">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-chalk-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
