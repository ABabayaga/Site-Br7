import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelBlast from "./PixelBlast";
import SplitReveal from "./SplitReveal";
import Clients from "./Clients";

const skills = [
  "Branding",
  "Sites",
  "Social",
  "Vídeo",
  "Identidade Visual",
  "Endomarketing",
  "Apps",
  "Estratégia",
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-start pt-28 overflow-hidden pb-12 sm:pt-32 lg:justify-center lg:pt-20"
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

      {/* Route flourish overlay — Identidade → Posicionamento → Execução → Presença com autoridade — disabled per request, "Marcas em movimento" headline kept */}
      {false && (
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <svg
          viewBox="0 0 2081 1263"
          preserveAspectRatio="none"
          fill="none"
          className="h-full w-full"
        >
          <motion.circle
            cx="116"
            cy="1149"
            r="5"
            className="fill-chalk-faint"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
          <motion.path
            d="M116,1149 C300,1030 420,1130 620,1030 S900,960 1014,1004"
            className="stroke-lane-dim"
            strokeWidth="2"
            strokeDasharray="14 12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1014"
            cy="1004"
            r="6"
            className="fill-lane"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 2.15, ease: "backOut" }}
          />

          <motion.path
            d="M1014,1004 C1250,920 1550,850 1778,772"
            className="stroke-lane-dim"
            strokeWidth="2"
            strokeDasharray="14 12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 2.3, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1778"
            cy="772"
            r="6"
            className="fill-lane"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 3.6, ease: "backOut" }}
          />

          {/* Execução loops back across the page to the "em ●" mark, then on to Presença */}
          <motion.path
            d="M1778,772 C1450,880 750,760 322,629"
            className="stroke-lane-dim"
            strokeWidth="2"
            strokeDasharray="14 12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 3.75, ease: "easeInOut" }}
          />
          <motion.path
            d="M322,629 C550,520 850,480 1165,447"
            className="stroke-lane-dim"
            strokeWidth="2"
            strokeDasharray="14 12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 4.85, ease: "easeInOut" }}
          />

          <motion.g
            initial={{ opacity: 0, scale: 0, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5.85, ease: "backOut" }}
          >
            {/* target reticle — marks Presença com autoridade as the route's final objective */}
            <circle
              cx="1165"
              cy="447"
              r="22"
              className="fill-none stroke-lane-dim"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
            <g className="stroke-lane" strokeWidth="1.5">
              <line x1="1165" y1="415" x2="1165" y2="426" />
              <line x1="1165" y1="468" x2="1165" y2="479" />
              <line x1="1133" y1="447" x2="1144" y2="447" />
              <line x1="1186" y1="447" x2="1197" y2="447" />
            </g>
            <motion.circle
              cx="1165"
              cy="447"
              r="14"
              className="fill-none stroke-lane"
              strokeWidth="2"
              animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6.3,
              }}
            />
            <circle cx="1165" cy="447" r="6" className="fill-lane" />
          </motion.g>
        </svg>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="eyebrow absolute -translate-x-1/4 -translate-y-[130%] whitespace-nowrap"
          style={{ left: "5.6%", top: "91%" }}
        >
          Identidade
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.2 }}
          className="eyebrow absolute -translate-x-1/2 translate-y-2 whitespace-nowrap"
          style={{ left: "48.7%", top: "79.5%" }}
        >
          Posicionamento
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 3.65 }}
          className="eyebrow absolute translate-x-3 -translate-y-[130%] whitespace-nowrap"
          style={{ left: "85.4%", top: "61.1%" }}
        >
          Execução
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 5.9 }}
          className="eyebrow absolute -translate-x-1/2 -translate-y-[220%] whitespace-nowrap font-600 tracking-[0.25em]"
          style={{ left: "56%", top: "35.4%", marginTop: "-10px" }}
        >
          Presença com autoridade
        </motion.span>
      </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2"
        >
          <span className="eyebrow max-w-[240px] text-chalk-muted">
            Estúdio de marca, conteúdo e web · Campo Grande, MS
          </span>
          <span className="eyebrow max-w-[260px] text-chalk-muted sm:text-right">
            Est. Para quem move o Brasil +
          </span>
        </motion.div>

        <h1 className="mt-8 font-display text-[13vw] font-600 uppercase leading-[0.95] tracking-tight text-chalk sm:text-[9vw] lg:text-[6.5vw]">
          <SplitReveal as="span" delay={0.1}>
            Marcas
          </SplitReveal>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="relative inline-block"
          >
            <span className="text-lane">
              em movimento
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-transparent animate-stroke-shimmer"
              style={{
                WebkitTextStrokeWidth: "1.5px",
                WebkitTextStrokeColor: "#FFFFFF",
                WebkitMaskImage:
                  "linear-gradient(100deg, transparent 0%, transparent 42%, #FFFFFF 48%, #FFFFFF 52%, transparent 58%, transparent 100%)",
                maskImage:
                  "linear-gradient(100deg, transparent 0%, transparent 42%, #FFFFFF 48%, #FFFFFF 52%, transparent 58%, transparent 100%)",
                WebkitMaskSize: "250% 100%",
                maskSize: "250% 100%",
              }}
            >
              em movimento
            </span>
          </motion.span>
        </h1>

        <SplitReveal as="p" delay={0.35} className="mt-8 max-w-xl text-lg text-chalk-muted">
          <span className="font-600 text-chalk">BR7</span> tira marcas de
          transporte, logística e negócios locais da invisibilidade com
          estratégia, design e conteúdo que viram autoridade e contrato.
        </SplitReveal>

      </div>

      {/* Lane divider with scrolling marquee of skills — the page's signature motif */}
      {/*  <div className="relative mt-16 border-y border-asphalt-border bg-asphalt-surface py-4">
        <div className="lane-strip animate-lane-move absolute top-0 left-0" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 whitespace-nowrap pr-10">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="font-display text-2xl italic text-chalk-faint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="lane-strip animate-lane-move absolute bottom-0 left-0" />
      </div> */}

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center">
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2 pt-4 lg:gap-3"
            >
              <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-chalk-faint p-1.5 lg:h-12 lg:w-7 lg:p-2">
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-chalk-faint lg:h-2 lg:w-2"
                />
              </div>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-mono text-xs text-chalk-faint lg:text-sm"
              >
                ↓
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <Clients className="mt-4 w-full" />
      </div>
    </section>
  );
}
