import { useEffect, useState } from 'react'
import useMagnetic from '../hooks/useMagnetic'

const links = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#posicionamento', label: 'Posicionamento' },
  // `#metodo` saiu daqui enquanto `<Metodo />` está desmontado em App.jsx —
  // âncora sem destino reprova no audit de skip link do Lighthouse.
  { href: '#contato', label: 'Contato' },
]

// Ícone de grade 2x2 que acompanha o gatilho "Menu" — mesma leitura do
// indicador de app-grid da referência (specia1ne.com), na cor de marca.
function GridIcon({ open }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-4 w-4 grid-cols-2 grid-rows-2 gap-[3px] transition-transform duration-300 ${
        open ? 'rotate-45' : ''
      }`}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="rounded-[1.5px] bg-lane" />
      ))}
    </span>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // `SectionTransition` emite `br7:wipe` quando a cortina sai do repouso: o
  // header é fixo e ficaria por cima dela, então sobe para fora da tela.
  const [wiping, setWiping] = useState(false)
  // O wipe começa com a página no topo (o pin arranca em `top top`), então
  // estar no topo é sinônimo de cortina fechada. Serve de rede de segurança
  // caso o evento de fim do wipe se perca por qualquer motivo.
  const [atTop, setAtTop] = useState(true)
  const triggerRef = useMagnetic({ strength: 0.3, radius: 60 })

  const hidden = wiping && !atTop

  useEffect(() => {
    const onWipe = (e) => setWiping(Boolean(e.detail?.active))
    window.addEventListener('br7:wipe', onWipe)
    return () => window.removeEventListener('br7:wipe', onWipe)
  }, [])

  useEffect(() => {
    if (hidden) setMenuOpen(false)
  }, [hidden])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      setAtTop(window.scrollY <= 4)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    setMenuOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  return (
    <header
      aria-hidden={hidden || undefined}
      className="pointer-events-none fixed top-0 z-50 w-full"
    >
      {/* A casca fixa não recebe transform nem backdrop-filter: no Safari, um
          elemento `fixed` que combina os dois com transição às vezes não é
          repintado ao voltar, e o header ficava invisível para sempre. Toda a
          aparência e o movimento vivem neste filho, que é um elemento normal. */}
      <div
        className={`pointer-events-auto border-b transition-[background-color,border-color,transform,opacity] duration-300 ${
          scrolled || menuOpen
            ? 'border-ink/10 bg-chalk/90 backdrop-blur'
            : // Mantido transparente de propósito: no topo a faixa rosa
              // vertical do Hero (`data-wipe-origin`) precisa atravessar o
              // header. Qualquer fundo opaco aqui corta a faixa.
              'border-transparent bg-transparent'
        } ${hidden ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="flex items-center justify-between px-[4vw] py-3">
          <a href="#top" className="cursor-target flex shrink-0 items-center gap-2.5">
            <img
              src="/br7dark.webp"
              alt="BR7 — voltar ao topo"
              className="h-[3.75rem] w-auto sm:h-20"
            />
          </a>

          {/* Gatilho único "Menu" + grade — agrupa navegação, CTA e toggle num
              só elemento no canto superior direito, como na referência. */}
          <button
            ref={triggerRef}
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="cursor-target flex items-center gap-2.5 font-bold  text-lg uppercase tracking-[0.15em] text-ink transition-colors hover:text-lane"
          >
            Menu
            <GridIcon open={menuOpen} />
          </button>
        </div>

        <nav
          className={`grid overflow-hidden border-ink/10 px-[4vw] transition-[grid-template-rows,padding] duration-300 ${
            menuOpen ? 'grid-rows-[1fr] border-t pb-4' : 'grid-rows-[0fr] pb-0'
          }`}
        >
          <div className="flex min-h-0 flex-col gap-1 overflow-hidden pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-target rounded-lg px-2 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
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
