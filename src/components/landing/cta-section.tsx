'use client'

import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-28 text-center">
        <div
          className="mb-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-terminal-sage)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
          }}
        >
          // EOF
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px, 5vw, 72px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontWeight: 400,
            color: 'var(--color-warm-white)',
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          Stop debugging in screenshots.
        </h2>
        <p className="mt-6" style={{ fontSize: '16.5px', color: 'var(--color-ash-text)', maxWidth: '520px', margin: '0 auto' }}>
          Install the agent, attach your team, and ship the post-mortem before the coffee gets cold.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#"
            className="h-10 px-4 inline-flex items-center justify-center gap-2 text-[14px] font-medium transition-colors duration-200 rounded-[var(--radius-sm)]"
            style={{
              background: 'var(--color-warm-white)',
              color: 'var(--color-void-canvas)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-pure-white)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-warm-white)'
            }}
          >
            Install forge
          </Link>
          <div
            className="inline-flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)]"
            style={{
              background: 'var(--color-iron-surface)',
              color: 'var(--color-smoke-text)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
            }}
          >
            <span style={{ color: 'var(--color-terminal-sage)' }}>$</span>
            <span>brew install forge-sh/tap/forge</span>
          </div>
        </div>
        <div
          className="mt-8"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}
        >
          macOS · Linux · WSL2 · ARM64 / x86_64 · static binary, no runtime
        </div>
      </div>
    </section>
  )
}
