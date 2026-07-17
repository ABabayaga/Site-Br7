import { useEffect, useState } from 'react'

const links = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#metodo', label: 'Método' },
]

export default function Header() {
  const [time, setTime] = useState('')
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-asphalt/90 backdrop-blur border-b border-asphalt-border' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-700 tracking-tight text-chalk">
          BR<span className="text-lane">7</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-chalk-muted transition-colors hover:text-chalk"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 font-mono text-xs text-chalk-muted md:flex">
          <span className="tabular-nums">{time}</span>
          <span className="text-lane">·</span>
          <span>Campo Grande</span>
        </div>

        <a
          href="#contato"
          className="rounded-full border border-lane/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-lane transition-colors hover:bg-lane hover:text-asphalt"
        >
          Conversar →
        </a>
      </div>
    </header>
  )
}
