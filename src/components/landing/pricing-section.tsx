'use client'

import { PRICING_TIERS } from '@/lib/data'
import Link from 'next/link'

export function PricingSection() {
  return (
    <section id="pricing" className="border-t" style={{ borderColor: 'var(--color-graphite-lift)', background: 'var(--color-charcoal-surface)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
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
          // 06 — pricing
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
          Per-operator. No per-host nonsense.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="rounded-[var(--radius-2xl)] border p-7"
              style={{
                background: 'var(--color-void-canvas)',
                borderColor: tier.recommended ? 'var(--color-terminal-sage)' : 'var(--color-graphite-lift)',
              }}
            >
              {tier.recommended && (
                <div className="flex items-center justify-between mb-6">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terminal-sage)' }}>
                    {tier.name}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 uppercase tracking-wider"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--color-terminal-sage)',
                      border: '1px solid var(--color-terminal-sage)',
                    }}
                  >
                    recommended
                  </span>
                </div>
              )}
              {!tier.recommended && (
                <div
                  className="mb-6"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terminal-sage)' }}
                >
                  {tier.name}
                </div>
              )}
              <div
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '40px',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-smoke-text)',
                }}
              >
                {tier.price}
                {tier.period && (
                  <span style={{ fontSize: '16px', color: 'var(--color-ash-text)' }}>{tier.period}</span>
                )}
              </div>
              <div
                className="mb-8"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}
              >
                {tier.description}
              </div>
              <ul className="space-y-3 mb-8" style={{ fontSize: '14px', color: 'var(--color-fog-text)' }}>
                {tier.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link
                href="#"
                className={`h-9 px-4 block text-center text-[14px] transition-colors duration-200 rounded-[var(--radius-sm)] ${
                  tier.ctaVariant === 'primary'
                    ? ''
                    : 'border'
                }`}
                style={
                  tier.ctaVariant === 'primary'
                    ? {
                        background: 'var(--color-warm-white)',
                        color: 'var(--color-void-canvas)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        color: 'var(--color-warm-white)',
                        borderColor: 'var(--color-graphite-lift)',
                      }
                }
                onMouseEnter={(e) => {
                  if (tier.ctaVariant === 'primary') {
                    e.currentTarget.style.background = 'var(--color-pure-white)'
                  } else {
                    e.currentTarget.style.background = 'var(--color-iron-surface)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.ctaVariant === 'primary') {
                    e.currentTarget.style.background = 'var(--color-warm-white)'
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }
                }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
