import Link from 'next/link'
import { FEATURES_ATTACH, FEATURES_HANDOFF, FEATURES_REPLAY } from '@/lib/data'

interface FeatureItem {
  title: string
  description: string
  command: string
  commandRo?: string
  commandQueue?: string
  icon: string
}

export function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      ...FEATURES_ATTACH,
      icon: '01',
    },
    {
      ...FEATURES_HANDOFF,
      icon: '02',
    },
    {
      ...FEATURES_REPLAY,
      icon: '03',
    },
  ]

  return (
    <section id="protocol" className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="max-w-[720px]">
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
            // 02 — primitives
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              fontWeight: 400,
              color: 'var(--color-warm-white)',
            }}
          >
            Three primitives. Nothing else to learn.
          </h2>
          <p className="mt-5" style={{ fontSize: '16px', color: 'var(--color-ash-text)', maxWidth: '560px' }}>
            Forge ships a deliberately small surface. If you know SSH, you already know how to attach. The collaborative semantics live in three commands.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {features.map((feature: FeatureItem) => (
            <div
              key={feature.title}
              className="rounded-[var(--radius-xl)] border p-6"
              style={{
                background: 'var(--color-charcoal-surface)',
                borderColor: 'var(--color-graphite-lift)',
              }}
            >
              <div
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--color-terminal-sage)',
                }}
              >
                {feature.title}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: '20px',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-warm-white)',
                }}
              >
                {feature.title === 'attach(1)' && 'Join an active session'}
                {feature.title === 'handoff(1)' && 'Pass the keyboard'}
                {feature.title === 'replay(1)' && 'Scrub the timeline'}
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '14px', color: 'var(--color-ash-text)', lineHeight: 1.55 }}
              >
                {feature.description}
              </p>
              <pre
                className="rounded-[var(--radius-md)] px-3 py-2.5 whitespace-pre"
                style={{
                  background: 'var(--color-iron-surface)',
                  color: 'var(--color-smoke-text)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                }}
              >
                {feature.command}
                {'\n'}
                {feature.commandRo || feature.commandQueue}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
