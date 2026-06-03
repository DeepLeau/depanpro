'use client'

import Link from 'next/link'
import { FOOTER_LINKS } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-graphite-lift)', background: 'var(--color-charcoal-surface)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="1" width="20" height="20" rx="3" stroke="var(--color-warm-white)" strokeWidth="1.4"/>
                <path d="M6 8L9.5 11L6 14" stroke="var(--color-warm-white)" strokeWidth="1.4" strokeLinecap="square"/>
                <path d="M11.5 14H16" stroke="var(--color-terminal-sage)" strokeWidth="1.4" strokeLinecap="square"/>
              </svg>
              <span className="font-mono text-[15px]" style={{ fontFamily: 'var(--font-mono)' }}>forge</span>
            </div>
            <p className="text-[13px]" style={{ color: 'var(--color-ash-text)', maxWidth: '260px' }}>
              Collaborative shell for teams operating critical infrastructure.
            </p>
            <div
              className="mt-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot"
                style={{ background: 'var(--color-terminal-sage)' }}
              />
              all systems nominal · status.forge.sh
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <div
              className="mb-4 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              product
            </div>
            <ul className="space-y-2.5" style={{ fontSize: '14px', color: 'var(--color-fog-text)' }}>
              {FOOTER_LINKS.product.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors duration-150"
                    style={{ color: 'var(--color-fog-text)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fog-text)')}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mb-4 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              developers
            </div>
            <ul className="space-y-2.5" style={{ fontSize: '14px', color: 'var(--color-fog-text)' }}>
              {FOOTER_LINKS.developers.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors duration-150"
                    style={{ color: 'var(--color-fog-text)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fog-text)')}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mb-4 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              company
            </div>
            <ul className="space-y-2.5" style={{ fontSize: '14px', color: 'var(--color-fog-text)' }}>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="transition-colors duration-150"
                    style={{ color: 'var(--color-fog-text)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fog-text)')}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="mb-4 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-ash-text)' }}
            >
              contact
            </div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.contact.map((contact) => (
                <li
                  key={contact.label}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-fog-text)' }}
                >
                  <Link
                    href={contact.href || '#'}
                    className="transition-colors duration-150"
                    style={{ color: 'var(--color-fog-text)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fog-text)')}
                  >
                    {contact.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-ash-text)', borderColor: 'var(--color-graphite-lift)' }}
        >
          <div>© 2024 Forge Systems, Inc. · Made by people who got paged at 3am.</div>
          <div className="flex items-center gap-5">
            <span>v0.9.4</span>
            <span>build 1f7e2c9</span>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
