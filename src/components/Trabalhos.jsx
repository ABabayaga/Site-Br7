import { motion } from 'framer-motion'

const statusStyles = {
  'No ar': 'bg-lane/10 text-lane border-lane/30',
  Construindo: 'bg-brake/10 text-brake border-brake/30',
  Refazendo: 'bg-chalk-muted/10 text-chalk-muted border-chalk-muted/30',
}

const trabalhos = [
  {
    nome: 'Upper GR',
    status: 'No ar',
    tags: 'Branding · Site · Posicionamento',
    desc: 'Reposicionamento digital de um grupo de gestão de risco com 20 anos de estrada e 6× GPTW.',
    href: 'https://www.grupouppergr.com.br/',
  },
  {
    nome: 'Motora Match',
    status: 'No ar',
    tags: 'App · Site · Marca',
    desc: 'A plataforma que conecta motoristas e transportadoras — do nome ao app.',
    href: 'https://motoramatch.com.br/',
  },
  {
    nome: 'Galeria Sandra Novas',
    status: 'No ar',
    tags: 'Posicionamento premium · Site',
    desc: 'Presença premium para uma artista plástica de Campo Grande.',
    href: 'https://www.galeriasandranovas.com.br/',
  },
  {
    nome: 'Transmano',
    status: 'Construindo',
    tags: 'Site do zero · Identidade',
    desc: 'Marca e site do zero para uma transportadora de alimentos em 5 estados.',
    href: '#contato',
  },
  {
    nome: 'RCR Quality',
    status: 'Refazendo',
    tags: 'Novo site · 18 anos · SASSMAQ',
    desc: 'Novo site para 18 anos de logística certificada.',
    href: 'http://www.rcrtransportes.com.br/',
  },
  {
    nome: 'TransConceição',
    status: 'Refazendo',
    tags: 'Identidade · Site',
    desc: 'Identidade e site renovados para uma transportadora consolidada.',
    href: 'https://transconceicao.com.br/',
  },
]

export default function Trabalhos() {
  return (
    <section id="trabalhos" className="border-b border-asphalt-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="eyebrow">Trabalhos selecionados ✦</span>
        <h2 className="mt-4 font-display text-3xl font-500 text-chalk sm:text-4xl">
          Marcas que já estão em movimento
        </h2>
        <p className="mt-3 max-w-lg text-chalk-muted">
          Clientes reais do transporte, logística e negócios locais. Imagens são
          provisórias — entram as artes finais.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-border sm:grid-cols-2 lg:grid-cols-3">
          {trabalhos.map((t, i) => (
            <motion.a
              key={t.nome}
              href={t.href}
              target={t.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col justify-between bg-asphalt-surface p-6 transition-colors hover:bg-asphalt-light"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-chalk-faint">
                    BR-0{i + 1}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyles[t.status]}`}
                  >
                    {t.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-600 text-chalk">
                  {t.nome}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-chalk-faint">
                  {t.tags}
                </p>
                <p className="mt-3 text-sm text-chalk-muted">{t.desc}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-lane opacity-0 transition-opacity group-hover:opacity-100">
                Ver projeto →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
