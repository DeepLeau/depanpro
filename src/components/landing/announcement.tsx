'use client'

export function Announcement() {
  return (
    <div className="w-full" style={{ background: 'var(--color-obsidian-deep)' }}>
      <div className="max-w-[1200px] mx-auto px-6 h-10 flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-smoke-text)' }}>
          <span
            className="w-1.5 h-1.5 rounded-full pulse-dot"
            style={{ background: 'var(--color-terminal-sage)' }}
          />
          <span>v0.9.4 — multi-region replay storage now in beta</span>
        </div>
        <a
          href="#"
          className="hidden md:inline transition-colors duration-150 underline underline-offset-4"
          style={{ color: 'var(--color-smoke-text)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-pure-white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-smoke-text)')}
        >
          read changelog →
        </a>
      </div>
    </div>
  )
}
