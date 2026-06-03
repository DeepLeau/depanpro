import { SECURITY_FEATURES } from '@/lib/data'

export function SecuritySection() {
  const icons: Record<string, React.ReactNode> = {
    lock: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="7" width="10" height="7" rx="1" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
        <path d="M5 7V5a3 3 0 016 0v2" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
      </svg>
    ),
    clock: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
        <path d="M8 4v4l2.5 2.5" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
      </svg>
    ),
    check: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8L7 12L13 4" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
      </svg>
    ),
    file: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2.5" y="3" width="11" height="10" rx="1" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
        <path d="M5 7h6M5 10h4" stroke="var(--color-fog-text)" strokeWidth="1.3"/>
      </svg>
    ),
  }

  return (
    <section id="security" className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="md:col-span-4">
            <div
              className="mb-5"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--color-terminal-sage)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              // 05 — threat model
            </div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                fontWeight: 400,
                color: 'var(--color-warm-white)',
              }}
            >
              Designed for hosts you cannot afford to lose.
            </h2>
            <p className="mt-6" style={{ fontSize: '15px', color: 'var(--color-ash-text)' }}>
              The agent is ~6MB, statically linked, and runs unprivileged. The broker can be self-hosted in your VPC. Forge has no access to your shells; we only route ciphertext.
            </p>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-3">
            {SECURITY_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="rounded-[var(--radius-xl)] border p-5"
                style={{
                  background: 'var(--color-charcoal-surface)',
                  borderColor: 'var(--color-graphite-lift)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {icons[feature.icon]}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-fog-text)' }}>
                    {feature.label}
                  </span>
                </div>
                <div className="mb-1" style={{ fontSize: '14.5px', color: 'var(--color-smoke-text)' }}>
                  {feature.title}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-ash-text)', lineHeight: 1.5 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
