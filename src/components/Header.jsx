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
    <header className="fixed top-0 z-50 w-full px-6 pt-4">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-3 items-center rounded-2xl border border-asphalt-border bg-asphalt-light/95 px-10 py-0 backdrop-blur transition-colors duration-300 ${
          scrolled ? 'bg-asphalt-light' : ''
        }`}
      >
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

        <div className="flex flex-col items-center gap-1">
          <a href="#top">
            <img src="/br7hori.png" alt="BR7" className="h-20 w-auto" />
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
            className="rounded-full border border-lane/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-lane transition-colors hover:bg-lane hover:text-asphalt"
          >
            Vamos Conversar →
          </a>
        </div>
      </div>
    </header>
  )
}
