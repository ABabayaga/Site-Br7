import { useEffect, useState } from 'react'

const sections = [
  { id: 'top', code: 'BR-00', label: 'Início' },
  { id: 'intro', code: 'BR-01', label: 'Visão' },
  { id: 'trabalhos', code: 'BR-02', label: 'Trabalhos' },
  { id: 'capacidades', code: 'BR-03', label: 'Capacidades' },
  { id: 'metodo', code: 'BR-04', label: 'Método' },
  { id: 'contato', code: 'BR-05', label: 'Contato' },
]

export default function SectionNav() {
  const [activeId, setActiveId] = useState(sections[0].id)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Seções da página"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
    >
      {sections.map((s) => {
        const active = s.id === activeId
        return (
          <a key={s.id} href={`#${s.id}`} className="cursor-target group flex items-center gap-3">
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
                active
                  ? 'text-lane opacity-100'
                  : 'text-chalk-muted opacity-0 group-hover:opacity-100'
              }`}
            >
              {s.code} · {s.label}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                active
                  ? 'w-8 bg-lane'
                  : 'w-4 bg-chalk-faint group-hover:w-6 group-hover:bg-chalk-muted'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
