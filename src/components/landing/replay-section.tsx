'use client'

import { REPLAY_TIMELINE } from '@/lib/data'

export function ReplaySection() {
  return (
    <section id="replay" className="border-t" style={{ borderColor: 'var(--color-graphite-lift)', background: 'var(--color-charcoal-surface)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
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
              // 03 — post-mortem
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
              The post-mortem writes itself.
            </h2>
            <p className="mt-6" style={{ fontSize: '16px', color: 'var(--color-ash-text)' }}>
              Stop screenshotting your scrollback at 4am. Forge produces a deterministic, byte-for-byte replay of the incident, annotated with operator, timestamp, exit code, and host fingerprint.
            </p>
            <ul className="mt-8 space-y-4" style={{ fontSize: '14.5px' }}>
              {[
                'Append-only object storage. Local, S3, or GCS. WORM-compatible.',
                'Chacha20-Poly1305 at rest. Per-session keys derived from your KMS.',
                'Retention policies per environment. SOC 2 / HIPAA presets included.',
                'Export to plaintext, asciinema, or signed PDF for legal review.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono mt-0.5" style={{ color: 'var(--color-terminal-sage)' }}>→</span>
                  <span style={{ color: 'var(--color-fog-text)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Replay Timeline */}
          <div className="md:col-span-7">
            <div
              className="rounded-[var(--radius-xl)] overflow-hidden border"
              style={{ background: 'var(--color-void-canvas)', borderColor: 'var(--color-graphite-lift)' }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 h-10 border-b"
                style={{ borderColor: 'var(--color-graphite-lift)' }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}>
                  replay · INC-4412 · 2024-11-04 03:02:11Z
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}>
                  duration 47m18s
                </div>
              </div>

              {/* Timeline Content */}
              <div className="px-5 py-5">
                {/* Progress Bar */}
                <div className="flex justify-between mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}>
                  <span>00:00</span>
                  <span>14:22</span>
                  <span>28:44</span>
                  <span>47:18</span>
                </div>
                <div className="relative h-2 rounded-full" style={{ background: 'var(--color-graphite-lift)' }}>
                  <div
                    className="absolute left-0 top-0 h-2 rounded-full"
                    style={{ width: '32%', background: 'var(--color-terminal-sage)' }}
                  ></div>
                  <div className="absolute top-[-4px] w-0.5 h-4" style={{ left: '14%', background: '#d97757' }}></div>
                  <div className="absolute top-[-4px] w-0.5 h-4" style={{ left: '32%', background: 'var(--color-smoke-text)' }}></div>
                  <div className="absolute top-[-4px] w-0.5 h-4" style={{ left: '58%', background: 'var(--color-smoke-text)' }}></div>
                  <div className="absolute top-[-4px] w-0.5 h-4" style={{ left: '81%', background: 'var(--color-smoke-text)' }}></div>
                </div>

                {/* Command List */}
                <div className="mt-6 space-y-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px' }}>
                  {REPLAY_TIMELINE.map((entry, i) => (
                    <div
                      key={i}
                      className="flex gap-4 px-2 py-1.5 rounded-[var(--radius-sm)] reveal"
                      style={{
                        background: i === 2 ? 'var(--color-graphite-lift)' : 'transparent',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-graphite-lift)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = i === 2 ? 'var(--color-graphite-lift)' : 'transparent')}
                    >
                      <span className="w-16" style={{ color: 'var(--color-ash-text)' }}>{entry.time}</span>
                      <span
                        className={`w-2 h-2 rounded-full mt-1.5 ${entry.cursor}`}
                        style={{ background: entry.cursor === 'cursor-a' ? '#d97757' : entry.cursor === 'cursor-b' ? 'var(--color-terminal-sage)' : '#c2b078' }}
                      ></span>
                      <span className="w-16" style={{ color: 'var(--color-fog-text)' }}>{entry.operator}</span>
                      <span className="text-smoke truncate flex-1">{entry.command}</span>
                      <span className={`ml-auto ${entry.statusColor}`}>{entry.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between px-4 py-3 border-t"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)', borderColor: 'var(--color-graphite-lift)' }}
              >
                <span>signed sha256:9f3b8a…d4c1 · key id <span style={{ color: 'var(--color-terminal-sage)' }}>forge-prod-2024-11</span></span>
                <span>5 operators · 142 commands · 0 redactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
