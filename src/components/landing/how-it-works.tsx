'use client'

import Link from 'next/link'

export function HowItWorksSection() {
  return (
    <section id="how" className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="md:col-span-5">
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
              // 01 — operating model
            </div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                fontWeight: 400,
                color: 'var(--color-warm-white)',
                maxWidth: '440px',
              }}
            >
              A multiplexed PTY, not a screen share.
            </h2>
            <p
              className="mt-6"
              style={{ fontSize: '16px', color: 'var(--color-ash-text)', maxWidth: '400px' }}
            >
              Forge runs an agent on the target host that owns a single pseudo-terminal. Operators connect through the broker; their input streams are arbitrated by a write-lock protocol. The shell itself does not know — and does not need to know — that more than one human is attached.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="#"
                className="h-9 px-4 inline-flex items-center justify-center text-[14px] transition-colors duration-200 rounded-[var(--radius-sm)] border"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-warm-white)',
                  borderColor: 'var(--color-graphite-lift)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-iron-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              >
                Read RFC-001
              </Link>
              <Link
                href="#"
                className="h-9 px-4 inline-flex items-center justify-center text-[14px] transition-colors duration-200 rounded-[var(--radius-sm)] border"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-warm-white)',
                  borderColor: 'var(--color-graphite-lift)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-iron-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              >
                Self-host guide
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 space-y-3">
            {/* Topology Diagram */}
            <div
              className="rounded-[var(--radius-xl)] border p-5"
              style={{
                background: 'var(--color-charcoal-surface)',
                borderColor: 'var(--color-graphite-lift)',
              }}
            >
              <div
                className="flex items-center justify-between mb-4"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
              >
                <span>topology</span>
                <span>ascii</span>
              </div>
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                  lineHeight: 1.7,
                  color: 'var(--color-smoke-text)',
                  whiteSpace: 'pre',
                  overflowX: 'auto',
                }}
              >
                <span style={{ color: 'var(--color-ash-text)' }}>   operator A ───┐</span>
                {'\n'}
                <span style={{ color: 'var(--color-ash-text)' }}>   operator B ───┼──▶  </span>
                <span style={{ color: 'var(--color-terminal-sage)' }}>forge-broker</span>
                <span style={{ color: 'var(--color-ash-text)' }}>  ──▶  </span>
                <span style={{ color: 'var(--color-terminal-sage)' }}>forge-agent</span>
                <span style={{ color: 'var(--color-ash-text)' }}>  ──▶  /dev/pts/3</span>
                {'\n'}
                <span style={{ color: 'var(--color-ash-text)' }}>   operator C ───┘</span>
                {'\n'}<span style={{ color: 'var(--color-ash-text)' }}>                   │                       │</span>
                {'\n'}<span style={{ color: 'var(--color-ash-text)' }}>                   └─ </span>
                <span style={{ color: 'var(--color-fog-text)' }}>write-lock arbiter</span>
                {'\n'}<span style={{ color: 'var(--color-ash-text)' }}>                              replay store (append-only)</span>
                {'\n'}<span style={{ color: 'var(--color-ash-text)' }}>                              audit log → SIEM</span>
              </pre>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'P50', value: '38', unit: 'ms', desc: 'keystroke → render, 3 peers' },
                { label: 'SESSION', value: '12h', unit: 'max', desc: 'resumable on disconnect' },
                { label: 'REPLAY', value: '~7', unit: 'KB/min', desc: 'vt100 stream, gzip+chacha20' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[var(--radius-xl)] border p-5"
                  style={{
                    background: 'var(--color-charcoal-surface)',
                    borderColor: 'var(--color-graphite-lift)',
                  }}
                >
                  <div
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-terminal-sage)' }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '28px', color: 'var(--color-smoke-text)' }}
                  >
                    {metric.value}
                    <span style={{ fontSize: '16px', color: 'var(--color-ash-text)' }}>{metric.unit}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-ash-text)', marginTop: '4px' }}>
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
