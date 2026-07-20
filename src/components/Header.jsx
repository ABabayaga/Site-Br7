import { useEffect, useState } from 'react'

const links = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#metodo', label: 'Método' },
]

export default function Header() {
  const [time, setTime] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    update()
    const id = setInterval(update, 30000)

    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)

    return () => {
      clearInterval(id)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    setMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border border-asphalt-border bg-asphalt-light/95 backdrop-blur transition-colors duration-300 ${
          scrolled ? 'bg-asphalt-light' : ''
        }`}
      >
        <div className="grid grid-cols-3 items-center px-4 sm:px-10">
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-target flex h-9 w-9 flex-col items-start justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-6 bg-chalk transition-transform duration-300 ${
                menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-chalk transition-transform duration-300 ${
                menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="cursor-target font-mono text-xs uppercase tracking-[0.15em] text-chalk-muted transition-colors hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-1">
            <a href="#top" className="cursor-target">
              <img src="/br7hori.png" alt="BR7" className="h-14 w-auto sm:h-16 md:h-20" />
            </a>
           {/*  <div className="flex items-center gap-2 font-mono text-[10px] text-chalk-muted">
              <span className="tabular-nums">{time}</span>
              <span className="text-lane">·</span>
              <span>Campo Grande</span>
            </div> */}
          </div>

          <div className="flex justify-end">
            <a
              href="#contato"
              className="cursor-target whitespace-nowrap rounded-full border border-lane/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-lane transition-colors hover:bg-lane hover:text-asphalt sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="sm:hidden">Falar →</span>
              <span className="hidden sm:inline">Vamos Conversar →</span>
            </a>
          </div>
        </div>

        <nav
          className={`grid overflow-hidden px-4 transition-[grid-template-rows,padding] duration-300 md:hidden ${
            menuOpen ? 'grid-rows-[1fr] py-2' : 'grid-rows-[0fr] py-0'
          }`}
        >
          <div className="flex min-h-0 flex-col gap-1 overflow-hidden border-t border-asphalt-border pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-target rounded-lg px-2 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-chalk-muted transition-colors hover:bg-asphalt-surface hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
