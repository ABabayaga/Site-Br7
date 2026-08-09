import { motion } from "framer-motion";
import PixelBlast from "./PixelBlast";
import SplitReveal from "./SplitReveal";
import Clients from "./Clients";

const skills = [
  "Sites",
  "Social",
  "Vídeo",
  "Endomarketing",
  "Apresentações",
  "Branding",
  "Apps",
  "Estratégia",
];

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-screen flex-col overflow-hidden"
      >
        {/* Interactive pixel background — the studio's signature texture, kept subtle behind the copy */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <PixelBlast
            variant="square"
            color="#7A0C3A"
            pixelSize={3}
            patternScale={2.5}
            patternDensity={0.55}
            speed={0.35}
            edgeFade={0.35}
            enableRipples={false}
            antialias
          />
        </div>

        {/* Scrim — darkens the background under the copy column so text stays legible, fades out toward the empty right side */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-asphalt from-5% via-asphalt/85 via-35% to-transparent to-75%" />

        <div className="relative z-10 flex flex-1 flex-col justify-between px-[4vw] pb-10 pt-28 sm:pt-32 lg:pt-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="ml-auto max-w-[280px] font-mono text-[11px] leading-relaxed tracking-[0.06em] text-chalk-muted sm:text-right sm:text-xs"
          >
            Estúdio de marca, conteúdo e web
            <br />
            Campo Grande — MS. Desde 2019.
          </motion.p>

          <h1 className="mt-12 font-display text-[13vw] font-bold uppercase leading-[1.02] tracking-tight text-chalk sm:text-[11vw] lg:mt-0 lg:text-[8.5vw]">
            <SplitReveal as="span" delay={0.1} className="block">
              Marketing
            </SplitReveal>

            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex items-center"
            >
              {/* Reel marker — hatched pill that anchors the second line to the left margin */}
              <span
                aria-hidden="true"
                className="mr-[2.5vw] hidden h-[6.5vw] w-[10vw] shrink-0 items-center justify-center rounded-[3.25vw] border border-asphalt-border lg:flex"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, rgba(245,243,238,0.07) 0 2px, transparent 2px 11px)",
                }}
              >
                <span className="font-mono text-[0.8vw] uppercase tracking-[0.25em] text-chalk-faint">
                  Reel 12s
                </span>
              </span>

              <span className="whitespace-nowrap">
                Em{" "}
                <span className="font-serif font-normal normal-case italic tracking-normal text-lane">
                  Movimento
                </span>
              </span>
            </motion.span>
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:mt-0">
            <SplitReveal
              as="p"
              delay={0.35}
              className="max-w-md text-lg leading-snug text-chalk-muted sm:text-xl"
            >
              Tiramos marcas da invisibilidade. Da estrada ao varejo, do logo ao
              app —{" "}
              <span className="font-serif italic text-chalk">
                se não move, não vende.
              </span>
            </SplitReveal>

            <motion.a
              href="#trabalhos"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="cursor-target group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-lane px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-chalk transition-colors hover:bg-chalk hover:text-asphalt sm:px-10 sm:py-5"
            >
              Ver trabalhos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Lane band — scrolling marquee of capabilities closing the fold */}
        <div className="relative z-10 flex overflow-hidden bg-lane py-2 sm:py-0">
          <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8 sm:gap-12 sm:pr-12">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-display text-3xl font-600 uppercase text-chalk sm:gap-12 sm:text-5xl lg:text-[3.2vw]"
              >
                {s}
                <span className="text-chalk/60">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

     {/*  <Clients /> */}
    </>
  );
}
