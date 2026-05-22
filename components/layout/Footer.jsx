import Link from 'next/link';
import { PERSON, SOCIAL, NAV_LINKS } from '@/lib/content';

function IconLinkedIn() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function IconX() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function IconInstagram() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
}
function IconEmail() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}

export default function Footer() {
  return (
    <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="text-[15px] font-semibold text-[#1d1d1f] no-underline tracking-tight">
              {PERSON.name}
            </Link>
            <p className="text-[13px] text-[#6e6e73] mt-2 leading-relaxed">{PERSON.tagline}</p>
            <p className="text-[12px] text-[#a1a1a6] mt-1">{PERSON.location}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-label mb-3">Pages</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="text-[14px] text-[#424245] hover:text-[#1d1d1f] no-underline transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label mb-3">Connect</p>
            <div className="flex flex-col gap-2 text-[14px] text-[#424245]">
              <a href={SOCIAL.email}     className="hover:text-[#1d1d1f] transition-colors no-underline">{PERSON.email}</a>
              <a href={`tel:${PERSON.phone}`} className="hover:text-[#1d1d1f] transition-colors no-underline">{PERSON.phone}</a>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconLinkedIn /></a>
              <a href={SOCIAL.twitter}   target="_blank" rel="noopener noreferrer" aria-label="X"         className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconX /></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconInstagram /></a>
              <a href={SOCIAL.email}                                                aria-label="Email"     className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconEmail /></a>
            </div>
          </div>
        </div>

        <div className="divider mt-10 mb-6" />
        <p className="text-[12px] text-[#a1a1a6]">© {new Date().getFullYear()} {PERSON.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
