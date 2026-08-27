import { Suspense, lazy, useEffect, useRef, useState } from 'react'

// three.js + postprocessing pesam ~700 kB e só são necessários quando a seção
// entra em viewport. Import dinâmico mantém esse peso fora do bundle inicial.
const PixelBlast = lazy(() => import('./PixelBlast'))

export default function SectionBackground({
  color = '#7A0C3A',
  className = 'opacity-40',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    >
      {inView && (
        <Suspense fallback={null}>
          <PixelBlast
            variant="square"
            color={color}
            pixelSize={3}
            patternScale={2.5}
            patternDensity={0.55}
            speed={0.35}
            edgeFade={0.35}
            enableRipples={false}
            antialias
          />
        </Suspense>
      )}
    </div>
  )
}
