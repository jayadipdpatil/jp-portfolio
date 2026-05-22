'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, PERSON, SOCIAL } from '@/lib/content';

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#d2d2d7]' : 'bg-white border-b border-[#d2d2d7]'
      }`}>
        <div className="container-wide flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="text-[#1d1d1f] font-semibold text-[15px] tracking-tight no-underline hover:text-[#6e6e73] transition-colors">
            {PERSON.name.split(' ')[0]} <span className="text-[#6e6e73] font-normal">{PERSON.name.split(' ')[1]}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-[14px] ${pathname === l.href ? 'text-[#0071e3]' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-[14px] py-2 px-5">
              Let's Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-[#1d1d1f] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px bg-[#1d1d1f] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-[#1d1d1f] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''} pt-16`}>
        <nav className="flex flex-col gap-6 mt-8">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[32px] font-semibold text-[#1d1d1f] no-underline tracking-tight leading-none hover:text-[#6e6e73] transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4 w-fit">
            Let's Talk →
          </Link>
        </nav>
        <div className="mt-auto pt-8 border-t border-[#d2d2d7]">
          <SocialRow />
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-14" />
    </>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-4">
      <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconLinkedIn /></a>
      <a href={SOCIAL.twitter}   target="_blank" rel="noopener noreferrer" aria-label="X"         className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconX /></a>
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconInstagram /></a>
      <a href={SOCIAL.email}                                                aria-label="Email"     className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconEmail /></a>
    </div>
  );
}

/* ── Brand Icons ───────────────────────────────────────── */
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export { IconLinkedIn, IconX, IconInstagram, IconEmail };