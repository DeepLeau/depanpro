'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

export function FaqSection() {
  return (
    <section className="border-t" style={{ borderColor: 'var(--color-graphite-lift)' }}>
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
              // 07 — faq
            </div>
            <h2
              style={{
                fontSize: '36px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                fontWeight: 400,
                color: 'var(--color-warm-white)',
              }}
            >
              Questions that actually get asked.
            </h2>
            <p className="mt-5" style={{ fontSize: '14.5px', color: 'var(--color-ash-text)' }}>
              If yours isn&apos;t here, the docs probably answer it. If not, the team reads <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-fog-text)' }}>hello@forge.sh</span>.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="md:col-span-8 divide-y" style={{ borderColor: 'var(--color-graphite-lift)' }}>
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <details className="py-5 group" open={defaultOpen}>
      <summary
        className="flex justify-between items-start gap-6 cursor-pointer list-none"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        <span style={{ fontSize: '16.5px', color: 'var(--color-smoke-text)' }}>{question}</span>
        <span
          className="font-mono text-[18px] transition-transform duration-200"
          style={{ color: 'var(--color-ash-text)', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </summary>
      {open && (
        <p className="mt-3" style={{ fontSize: '14.5px', color: 'var(--color-ash-text)', maxWidth: '640px' }}>
          {answer}
        </p>
      )}
    </details>
  )
}
