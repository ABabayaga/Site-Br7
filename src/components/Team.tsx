import Reveal from './Reveal'
import SplitReveal from './SplitReveal'

type Membro = {
  nome: string
  cargo: string
  bio: string
  accent: string
  roleColor: string
  photo?: string
  instagram?: string
}

// Placeholder até termos fotos e bios reais do time — preencha `photo` com
// uma URL de imagem quando disponível; sem `photo`, o card cai no avatar de
// iniciais abaixo.
const team: Membro[] = [
  {
    nome: 'Gustavo Soares',
    cargo: 'Diretor de estratégia',
    bio: 'Construo a percepção que sustenta uma marca.',
    accent: 'bg-lane-deep',
    roleColor: 'text-lane-bright',
    photo: '/team/gustavo.jpeg',
    instagram: 'gust3026',
  },
  {
    nome: 'Sandra Novas',
    cargo: 'Diretora financeira',
    bio: 'Planejo o crescimento passo a passo.',
    accent: 'bg-brake',
    roleColor: 'text-brake',
    photo: '/team/sandra.jpeg',
    instagram: 'sandranovas32',
  },
  {
    nome: 'Felipe Ribeiro',
    cargo: 'Diretor de Criação',
    bio: 'Dou forma a ideias que ainda não têm nome.',
    accent: 'bg-lane',
    roleColor: 'text-lane-bright',
    photo: '/team/felipe.jpeg',
    instagram: 'felipe__ribeiro',
  },
  {
    nome: 'Mel Candido',
    cargo: 'Diretora Executiva',
    bio: 'Transformo estratégia em resultado.',
    accent: 'bg-lane-deep',
    roleColor: 'text-brake',
    photo: '/team/mel.jpeg',
    instagram: 'melanie_candido',
  },
  {
    nome: 'Alef Rodrigues',
    cargo: 'Desenvolvedor',
    bio: 'Converte ideias e conceitos para o mundo digital.',
    accent: 'bg-brake',
    roleColor: 'text-lane-bright',
    photo: '/team/alef.jpg',
    instagram: 'alef.lim4',
  },
]

function initials(nome: string) {
  return nome
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <section
      id="time"
      className="relative overflow-hidden border-b border-asphalt-border bg-asphalt py-10 sm:py-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <span className="eyebrow inline-flex items-center gap-2">
          Time
          <span
            aria-hidden="true"
            className="h-[3px] w-8 bg-lane-dash bg-repeat-x"
            style={{ backgroundSize: '10px 3px' }}
          />
        </span>
        <SplitReveal as="h2" className="mt-3 font-display text-3xl font-500 text-chalk sm:text-4xl">
          Quem faz a BR7 acontecer
        </SplitReveal>
        <SplitReveal as="p" delay={0.1} className="mt-2 max-w-lg text-chalk-muted">
          Cinco pessoas, um padrão de entrega.
        </SplitReveal>

        <Reveal
          as="div"
          itemSelector=":scope > div"
          stagger={0.1}
          className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-10"
        >
          {team.map((p) => (
            <div
              key={p.nome}
              className="cursor-target group w-full max-w-[240px] overflow-hidden rounded-2xl bg-asphalt-surface transition-transform duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
            >
              <div className="relative">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.nome}
                    className="aspect-[4/4.6] w-full object-cover"
                  />
                ) : (
                  <div
                    className={`flex aspect-[4/4.6] w-full items-center justify-center font-display text-3xl font-bold text-chalk/90 ${p.accent}`}
                  >
                    {initials(p.nome)}
                  </div>
                )}
                {/* Degradê nasce do rodapé da foto e funde com o fundo preto do
                    bloco de texto abaixo — sem borda dura entre foto e bio. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-asphalt-surface via-asphalt-surface/70 to-transparent"
                />
              </div>

              <div className="flex flex-col gap-2.5 p-4">
                {p.bio && (
                  <p className="font-display text-sm font-600 leading-snug text-chalk">
                    “{p.bio}”
                  </p>
                )}

                <div className={p.bio ? 'border-t border-chalk/15 pt-2.5' : ''}>
                  <p className="font-display text-xs font-600 text-chalk"> {p.nome}</p>
                  <p className={`mt-0.5 font-mono text-[10px] uppercase tracking-wide ${p.roleColor}`}>
                    {p.cargo}
                  </p>
                  {p.instagram && (
                    <a
                      href={`https://instagram.com/${p.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-mono text-[15px] text-chalk-faint transition-colors hover:text-lane-bright"
                    >
                      @{p.instagram}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
