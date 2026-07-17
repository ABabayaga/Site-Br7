export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-chalk-faint">
          © {new Date().getFullYear()} BR7 Marketing — Marketing em Movimento
        </p>
        <div className="flex gap-6 font-mono text-xs text-chalk-muted">
          <a href="https://www.instagram.com/br7.mkt_/" target="_blank" rel="noreferrer" className="hover:text-lane">
            Instagram
          </a>
          <a href="https://wa.me/5567981494797" target="_blank" rel="noreferrer" className="hover:text-lane">
            WhatsApp
          </a>
          <a href="mailto:mkt@agenciabr7.com.br" className="hover:text-lane">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  )
}
