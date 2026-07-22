const clients = [
  'UPPER GR',
  'TRANSCONCEIÇÃO',
  'RCR QUALITY LOGISITICA',
  'TRANSMANO',
  'GAME TRUCK',
  'LEMESEG',
  'GALERIA SANDRA NOVAS',
  'JOMAR TRANSPORTES',
  'CLEAN BIOENERGY',
  'SULMAIS TRANSPORTES',
  'FL HOME',
]

export default function Clients({ className = '' }) {
  return (
    <div className={`relative border-y border-chalk-faint bg-black py-2 ${className}`}>
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-20 whitespace-nowrap pr-20">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-20 font-display text-lg italic text-chalk-muted"
            >
              {c}
              <span className="text-lane">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
