import SectionBackground from './SectionBackground'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-asphalt-border py-2">
      <SectionBackground className="opacity-20" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col items-center px-[4vw] text-center">
        <p className="font-mono text-xs text-chalk-muted">
          © {new Date().getFullYear()} BR7 Marketing · Marketing em Movimento
        </p>
      </div>
    </footer>
  )
}
