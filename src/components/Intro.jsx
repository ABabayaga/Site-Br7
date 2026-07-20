import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'
import PyramidRoute from './PyramidRoute'

const pillars = ['Posicionamento', 'Design', 'Execução']

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden border-b border-asphalt-border py-24"
    >
      <SectionBackground />
      <div className="relative z-10 mx-auto grid w-full max-w-[1800px] gap-16 px-[4vw] lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-4xl font-600 leading-tight text-chalk sm:text-5xl lg:text-6xl"
          >
            Sua marca pode até ser boa. Mas boa está
            <br />
            <span className="text-lane">vendendo?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-chalk-muted"
          >
            Logo bonita não paga boleto. A gente junta posicionamento, design e
            execução para transformar atenção em cliente — sem terceirizar o que
            importa.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-asphalt-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-chalk-muted"
              >
                {pillar}
              </li>
            ))}
          </motion.ul>
        </div>

       
      </div>
    </section>
  )
}
