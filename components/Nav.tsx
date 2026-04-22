'use client'
import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#concept', label: 'CONCEPT' },
  { href: '#menu',    label: 'MENU' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#faq',     label: 'FAQ' },
  { href: '#access',  label: 'ACCESS' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" ref={navRef} className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Feuille</a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="メニュー"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
        {NAV_LINKS.map((l, i) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            <small>0{i + 1}</small>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
