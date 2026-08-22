import { motion } from 'framer-motion'
import SectionBackground from './SectionBackground'
import SplitReveal from './SplitReveal'
import Reveal from './Reveal'

const displayUrl = (href) => href.replace(/^https?:\/\//, '').replace(/\/$/, '')

const statusStyles = {
  'No ar': 'bg-lane/10 text-lane border-lane/30',
  Construindo: 'bg-brake/10 text-brake border-brake/30',
  Refazendo: 'bg-chalk-muted/10 text-chalk-muted border-chalk-muted/30',
}

const apps = [
  {
    nome: 'Motora Match',
    desc: 'Feed social do app que conecta motoristas e transportadoras.',
    img: '/appmoto.PNG',
    framed: false,
  },
  {
    nome: 'RepenseTrack',
    desc: 'Painel de rastreamento de frota em tempo real.',
    img: '/apprt.png',
    framed: true,
  },
]

const trabalhos = [
  {
    nome: 'Upper GR',
    status: 'No ar',
    tags: 'Branding · Site · Posicionamento',
    desc: 'Reposicionamento digital de um grupo de gestão de risco com 20 anos de estrada e 6× GPTW.',
    href: 'https://www.grupouppergr.com.br/',
    img: '/upper.png',
  },
  {
    nome: 'Motora Match',
    status: 'No ar',
    tags: 'App · Site · Marca',
    desc: 'A plataforma que conecta motoristas e transportadoras, do nome ao app.',
    href: 'https://motoramatch.com.br/',
    img: '/moto.png',
  },
  {
    nome: 'Galeria Sandra Novas',
    status: 'No ar',
    tags: 'Posicionamento premium · Site',
    desc: 'Presença premium para uma artista plástica de Campo Grande.',
    href: 'https://www.galeriasandranovas.com.br/',
    img: '/gale.png',
  },
]

export default function Trabalhos() {
  return (
    <section
      id="trabalhos"
      className="relative overflow-hidden border-b border-asphalt-border py-24"
    >
      <SectionBackground />
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <span className="eyebrow inline-flex items-center gap-2">
          Trabalhos selecionados
          <span
            aria-hidden="true"
            className="h-[3px] w-8 bg-lane-dash bg-repeat-x"
            style={{ backgroundSize: '10px 3px' }}
          />
        </span>
        <SplitReveal as="h2" className="mt-4 font-display text-3xl font-500 text-chalk sm:text-4xl">
          Marcas que já estão em movimento
        </SplitReveal>
        <SplitReveal as="p" delay={0.1} className="mt-3 max-w-lg text-chalk-muted">
          Clientes reais do transporte, logística e negócios locais.
        </SplitReveal>

        <Reveal
          as="div"
          itemSelector=":scope > a"
          stagger={0.1}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {trabalhos.map((t, i) => (
            <a
              key={t.nome}
              href={t.href}
              target={t.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="cursor-target group relative flex flex-col justify-between bg-asphalt-surface p-6 transition-colors hover:bg-asphalt-light"
            >
              <div>
                {t.img && (
                  <div className="mb-6 w-full overflow-hidden rounded-lg border border-asphalt-border bg-asphalt">
                    <div className="flex items-center gap-2 border-b border-asphalt-border bg-asphalt-light px-3 py-2">
                      <span
                        aria-hidden="true"
                        className="h-[3px] w-5 shrink-0 bg-lane-dash bg-repeat-x"
                        style={{ backgroundSize: '8px 3px' }}
                      />
                      {t.href.startsWith('http') && (
                        <span className="ml-2 truncate rounded-full bg-asphalt px-2.5 py-0.5 font-mono text-[10px] text-chalk-faint">
                          {displayUrl(t.href)}
                        </span>
                      )}
                    </div>
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.nome}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}
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
                <SplitReveal as="h3" className="mt-6 font-display text-xl font-600 text-chalk">
                  {t.nome}
                </SplitReveal>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-chalk-faint">
                  {t.tags}
                </p>
                <SplitReveal as="p" className="mt-3 text-sm text-chalk-muted">
                  {t.desc}
                </SplitReveal>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-lane opacity-0 transition-opacity group-hover:opacity-100">
                Ver projeto →
              </span>
            </a>
          ))}
        </Reveal>

       {/* 
        <div className="mt-24">
          <span className="eyebrow">Apps no ar</span>
          <h3 className="mt-4 font-display text-2xl font-500 text-chalk sm:text-3xl">
            Produtos digitais que também assinamos
          </h3>
          <p className="mt-3 max-w-lg text-chalk-muted">
            Além de marca e site, ajudamos a construir os apps por trás da
            operação.
          </p>

          <div className="mx-auto mt-10 grid max-w-md gap-6 sm:grid-cols-2">
            {apps.map((a, i) => (
              <motion.div
                key={a.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center rounded-2xl border border-asphalt-border bg-asphalt-surface p-6 text-center"
              >
                <div
                  className={
                    a.framed
                      ? 'w-full max-w-[150px] overflow-hidden rounded-[2rem]'
                      : 'w-full max-w-[150px] overflow-hidden rounded-[1.5rem] border-[5px] border-asphalt bg-asphalt shadow-lg'
                  }
                >
                  <img
                    src={a.img}
                    alt={a.nome}
                    className="aspect-[9/19.5] w-full object-cover object-top"
                  />
                </div>
                <p className="mt-6 font-display text-lg font-600 text-chalk">
                  {a.nome}
                </p>
                <p className="mt-1 text-sm text-chalk-muted">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
