import SectionBackground from './SectionBackground'
import SplitReveal from './SplitReveal'

const clients = [
  'UPPER GR',
  'TRANSCONCEIÇÃO',
  'RCR QUALITY LOGISITICA',
  'TRANSMANO',
  'GAME TRUCK',
  'LEMESEG',
  'GALERIA SANDRA NOVAS',
  'JOMAR TRANSPORTES',
  'CLEAN BIOENERGY',
  'SULMAIS TRANSPORTES',
  'FL HOME',
]

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden py-20">
      <SectionBackground className="opacity-30" />

      <div className="relative border-y border-asphalt-border bg-asphalt-surface py-2">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-20 whitespace-nowrap pr-20">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="flex items-center gap-20 font-display text-lg italic text-lane"
              >
                {c}
                <span className="text-chalk-faint">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto pt-8 w-full max-w-[1800px] px-[4vw] text-center">
        <span className="eyebrow">Bora começar ✦</span>
        <SplitReveal
          as="h2"
          className="mx-auto mt-4 max-w-2xl font-display text-4xl font-500 leading-tight text-chalk sm:text-5xl"
        >
          Coloque sua marca <span className="italic text-lane">em movimento</span>
        </SplitReveal>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="https://wa.me/5567981494797?text=Oi%20BR7!%20Quero%20colocar%20minha%20marca%20em%20movimento."
            target="_blank"
            rel="noreferrer"
            className="cursor-target rounded-full bg-lane px-6 py-3 text-center font-mono text-sm uppercase tracking-[0.1em] text-asphalt transition-transform hover:scale-[1.02]"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="mailto:mkt@agenciabr7.com.br"
            className="cursor-target font-mono text-sm text-chalk-muted underline decoration-asphalt-border underline-offset-4 hover:text-chalk"
          >
            mkt@agenciabr7.com.br
          </a>
        </div>

        <div className="mt-16 grid justify-items-center gap-8 border-t border-asphalt-border pt-8 text-center sm:grid-cols-3">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint">
              WhatsApp
            </span>
            <p className="mt-2 text-chalk">
              <a
                href="https://wa.me/5567981494797"
                target="_blank"
                rel="noreferrer"
                className="cursor-target hover:text-lane"
              >
                +55 67 98149-4797
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint">
              Instagram
            </span>
            <p className="mt-2 text-chalk">
              <a
                href="https://www.instagram.com/br7.mkt_/"
                target="_blank"
                rel="noreferrer"
                className="cursor-target hover:text-lane"
              >
                @br7.mkt_
              </a>
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint">
              Base
            </span>
            <p className="mt-2 text-chalk">Campo Grande · MS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
