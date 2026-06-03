'use client'

import { useState } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('curl -fsSL forge.sh/install | sh')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative grid-bg">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="text-[12px] uppercase tracking-[0.14em] font-medium"
            style={{ color: 'var(--color-terminal-sage)', fontFamily: 'var(--font-mono)' }}
          >
            // shell(1) — collaborative
          </span>
        </div>

        {/* Headline */}
        <h1
          className="max-w-[1000px]"
          style={{
            fontSize: 'clamp(40px, 5vw, 80px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontWeight: 400,
            color: 'var(--color-warm-white)',
          }}
        >
          One shell.
          <br />
          <span style={{ color: 'var(--color-fog-text)' }}>Many hands.</span> Full audit trail.
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 max-w-[640px]"
          style={{
            fontSize: '17px',
            lineHeight: 1.55,
            color: 'var(--color-ash-text)',
          }}
        >
          Forge attaches multiple operators to the same remote PTY over a single multiplexed connection. Cursor positions, keystroke ownership, and command history are synchronized at sub-50ms latency. Every byte written to the tty is recorded, signed, and indexed for post-incident review.
        </p>

        {/* CTA Row */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V10M7 10L3 6M7 10L11 6M1 13H13" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
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
            <span>curl -fsSL forge.sh/install | sh</span>
            <button
              onClick={handleCopy}
              className="transition-colors duration-150"
              style={{ color: 'var(--color-ash-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-smoke-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash-text)')}
              aria-label="copy"
            >
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 3" stroke="var(--color-terminal-sage)" strokeWidth="1.4" strokeLinecap="square"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="3.5" y="3.5" width="8" height="8" rx="1" stroke="currentColor"/>
                  <path d="M2 10V2.5C2 2.22 2.22 2 2.5 2H10" stroke="currentColor"/>
                </svg>
              )}
            </button>
          </div>

          <Link
            href="#how"
            className="h-10 px-4 inline-flex items-center justify-center gap-2 text-[14px] transition-colors duration-200 rounded-[var(--radius-sm)] border"
            style={{
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--color-warm-white)',
              borderColor: 'var(--color-graphite-lift)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-iron-surface)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            Read the manual
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6H9M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </Link>
        </div>

        {/* Terminal Mockup */}
        <div
          className="mt-20 overflow-hidden border rounded-[12px]"
          style={{
            background: 'var(--color-charcoal-surface)',
            borderColor: 'var(--color-graphite-lift)',
          }}
        >
          {/* Chrome */}
          <div
            className="flex items-center justify-between px-4 h-10 border-b"
            style={{
              background: 'var(--color-obsidian-deep)',
              borderColor: 'var(--color-graphite-lift)',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#3a3a39' }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#3a3a39' }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#3a3a39' }}></span>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}
            >
              <span style={{ color: 'var(--color-terminal-sage)' }}>●</span>
              <span>session://ops-7f2a · prod-eu-west-1 · 3 attached</span>
            </div>
            <div
              className="flex items-center gap-3"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              <span>REC 00:14:22</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#d97757' }}></span>
            </div>
          </div>

          {/* Presence Bar */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b"
            style={{
              background: 'var(--color-void-canvas)',
              borderColor: 'var(--color-graphite-lift)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                <span
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-mono text-white cursor-a"
                  style={{ borderColor: 'var(--color-charcoal-surface)', background: '#d97757' }}
                >
                  N
                </span>
                <span
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-mono text-white cursor-b"
                  style={{ borderColor: 'var(--color-charcoal-surface)', background: 'var(--color-terminal-sage)' }}
                >
                  M
                </span>
                <span
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-mono text-white cursor-c"
                  style={{ borderColor: 'var(--color-charcoal-surface)', background: '#c2b078' }}
                >
                  L
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-fog-text)' }}>
                noemi · marc · liang
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}>|</span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}>
                writer: <span style={{ color: 'var(--color-terminal-sage)' }}>noemi</span>
              </div>
            </div>
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              <span>rtt 38ms</span>
              <span>·</span>
              <span>tls1.3</span>
              <span>·</span>
              <span>ed25519</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="px-5 py-5 scanline" style={{ minHeight: '380px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.7 }}>
            <div>
              <span style={{ color: 'var(--color-terminal-sage)' }}>noemi@bastion</span>
              <span style={{ color: 'var(--color-ash-text)' }}>:</span>
              <span style={{ color: 'var(--color-fog-text)' }}>~/incidents/INC-4412</span>
              <span style={{ color: 'var(--color-ash-text)' }}>$</span> kubectl -n payments get pods --field-selector=status.phase!=Running
            </div>
            <div style={{ color: 'var(--color-ash-text)' }}>NAME                              READY   STATUS             RESTARTS   AGE</div>
            <div style={{ color: 'var(--color-ash-text)' }}>payments-api-6c7d-9bxqp           0/1     CrashLoopBackOff   <span style={{ color: '#d97757' }}>14</span>         42m</div>
            <div style={{ color: 'var(--color-ash-text)' }}>payments-api-6c7d-fk2lz           0/1     CrashLoopBackOff   <span style={{ color: '#d97757' }}>12</span>         42m</div>
            <div className="mt-3">
              <span style={{ color: 'var(--color-terminal-sage)' }}>noemi@bastion</span>
              <span style={{ color: 'var(--color-ash-text)' }}>:</span>
              <span style={{ color: 'var(--color-fog-text)' }}>~/incidents/INC-4412</span>
              <span style={{ color: 'var(--color-ash-text)' }}>$</span> kubectl logs payments-api-6c7d-9bxqp --previous | tail -40
            </div>
            <div style={{ color: 'var(--color-ash-text)' }}>2024-11-04T03:14:08.211Z ERROR  database/pool.go:142 acquire: context deadline exceeded</div>
            <div style={{ color: 'var(--color-ash-text)' }}>2024-11-04T03:14:08.214Z FATAL  main.go:88 cannot reach primary: dial tcp 10.42.6.18:5432: i/o timeout</div>
            <div className="mt-3 flex items-start gap-2">
              <span style={{ color: 'var(--color-terminal-sage)' }}>noemi@bastion</span>
              <span style={{ color: 'var(--color-ash-text)' }}>:</span>
              <span style={{ color: 'var(--color-fog-text)' }}>~/incidents/INC-4412</span>
              <span style={{ color: 'var(--color-ash-text)' }}>$</span>
              <span>psql -h pg-primary.internal -U readonly -c "select pg_is_in_recovery();"</span>
              <span className="inline-block w-[7px] h-[14px] align-middle ml-0.5 cursor-a blink" style={{ background: '#d97757' }}></span>
            </div>

            {/* Inline Collaborator Pointer */}
            <div
              className="mt-5 ml-8 inline-flex items-center gap-2 px-2 py-1 rounded-[var(--radius-sm)] text-[11px] font-mono text-white cursor-b"
              style={{ background: 'var(--color-terminal-sage)' }}
            >
              <span>marc</span>
              <span className="opacity-70">— check sg-payments egress to 5432, I think we lost the rule on last apply</span>
            </div>

            {/* Info Cards */}
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-[680px]">
              <div
                className="rounded-[var(--radius-md)] px-3 py-2.5 border"
                style={{
                  background: 'var(--color-charcoal-surface)',
                  borderColor: 'var(--color-graphite-lift)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-ash-text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  handoff queue
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-smoke-text)' }}>
                  → liang requests write (priority: low)
                </div>
              </div>
              <div
                className="rounded-[var(--radius-md)] px-3 py-2.5 border"
                style={{
                  background: 'var(--color-charcoal-surface)',
                  borderColor: 'var(--color-graphite-lift)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-ash-text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  recording
                </div>
                <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-smoke-text)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#d97757' }}></span>
                  14m22s · 1.4MB · sha256:9f3b…
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16">
          <div
            className="text-center mb-6"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)' }}
          >
            In production at SRE teams operating &gt; 10⁴ nodes
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4" style={{ color: 'var(--color-ash-text)' }}>
            {['▲ helion', 'midpoint.io', 'CASCADE/CO', 'k9s labs', 'orbital', 'pkt.engineering'].map((company) => (
              <span key={company} className="font-mono text-[18px] tracking-tight">{company}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
