import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="border-b border-asphalt-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl font-display text-3xl font-500 leading-tight text-chalk sm:text-4xl"
        >
          Sua marca pode até ser boa.
          <br />
          <span className="text-chalk-muted">Mas boa está vendendo?</span>
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
      </div>
    </section>
  )
}
