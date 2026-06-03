'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/data'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-40 border-b transition-colors duration-200"
      style={{
        borderColor: 'var(--color-graphite-lift)',
        background: scrolled ? 'rgba(18,18,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="20" height="20" rx="3" stroke="var(--color-warm-white)" strokeWidth="1.4"/>
            <path d="M6 8L9.5 11L6 14" stroke="var(--color-warm-white)" strokeWidth="1.4" strokeLinecap="square"/>
            <path d="M11.5 14H16" stroke="var(--color-terminal-sage)" strokeWidth="1.4" strokeLinecap="square"/>
          </svg>
          <span className="font-mono text-[15px] tracking-tight" style={{ fontFamily: 'var(--font-mono)' }}>forge</span>
          <span className="font-mono text-[11px] ml-1" style={{ color: 'var(--color-ash-text)', fontFamily: 'var(--font-mono)' }}>/ shell</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-150"
              style={{ color: 'var(--color-ash-text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash-text)')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden sm:inline-block text-[14px] transition-colors duration-150"
            style={{ color: 'var(--color-ash-text)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-warm-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ash-text)')}
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="h-9 px-4 inline-flex items-center justify-center gap-2 text-[14px] font-medium transition-colors duration-200 rounded-[var(--radius-sm)]"
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
        </div>
      </div>
    </nav>
  )
}
