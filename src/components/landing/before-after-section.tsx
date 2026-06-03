export function BeforeAfterSection() {
  return (
    <section className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
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
          // 04 — the delta
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            fontWeight: 400,
            color: 'var(--color-warm-white)',
            maxWidth: '760px',
          }}
        >
          What incident response looks like, before and after.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {/* Before */}
          <div
            className="rounded-[var(--radius-xl)] border p-7"
            style={{
              background: 'var(--color-charcoal-surface)',
              borderColor: 'var(--color-graphite-lift)',
            }}
          >
            <div
              className="mb-6 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              before forge
            </div>
            <ul className="space-y-4" style={{ fontSize: '14.5px', color: 'var(--color-fog-text)' }}>
              {[
                'Zoom call. Three engineers staring at one shared screen.',
                'Screenshots of logs pasted into Slack, scrolled past, lost.',
                '"Can you run that for me?" repeated 40 times in a 2h call.',
                'Post-mortem reconstructed from memory and Slack timestamps.',
                'No record of who ran which destructive command, when, or why.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono" style={{ color: 'var(--color-ash-text)' }}>×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="rounded-[var(--radius-xl)] border p-7"
            style={{
              background: 'var(--color-charcoal-surface)',
              borderColor: 'var(--color-terminal-sage)',
            }}
          >
            <div
              className="mb-6 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-terminal-sage)' }}
            >
              with forge
            </div>
            <ul className="space-y-4" style={{ fontSize: '14.5px', color: 'var(--color-smoke-text)' }}>
              {[
                'One PTY. Three cursors. Sub-50ms shared state.',
                'Logs are scrollable, greppable, and persist after the session.',
                'Explicit handoff. The keyboard belongs to one person at a time.',
                'Replay file generated automatically. Drop it into the incident doc.',
                'Every command signed, attributed, and shipped to your SIEM.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono" style={{ color: 'var(--color-terminal-sage)' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
