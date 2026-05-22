import Image from 'next/image';
import Link from 'next/link';
import { PERSON, HOME, SOCIAL, PROJECTS, SERVICES } from '@/lib/content';

function IconLinkedIn() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function IconX() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>; }
function IconInstagram() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function IconEmail() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {PERSON.available && (
                <div className="inline-flex items-center gap-2 mb-6 fade-up">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[13px] text-[#6e6e73]">Available for new projects</span>
                </div>
              )}
              <h1 className="text-display text-[#1d1d1f] mb-6 fade-up fade-up-1" style={{ whiteSpace: 'pre-line' }}>
                {HOME.headline}
              </h1>
              <p className="text-body-lg mb-8 max-w-md fade-up fade-up-2">
                {HOME.subhead}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-10 fade-up fade-up-3">
                <Link href={HOME.cta1.href} className="btn-primary">{HOME.cta1.label} →</Link>
                <Link href={HOME.cta2.href} className="btn-secondary">{HOME.cta2.label}</Link>
              </div>
              {/* Social */}
              <div className="flex items-center gap-5 fade-up fade-up-4">
                <span className="text-label">Follow</span>
                <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconLinkedIn /></a>
                <a href={SOCIAL.twitter}   target="_blank" rel="noopener noreferrer" aria-label="X"         className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconX /></a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconInstagram /></a>
                <a href={SOCIAL.email}                                                aria-label="Email"     className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconEmail /></a>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="fade-up fade-up-2 order-first md:order-last">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f7]">
                <Image
                  src={PERSON.photo}
                  alt={PERSON.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <p className="text-[15px] font-semibold text-[#1d1d1f] tracking-tight">{PERSON.name}</p>
                  <p className="text-[13px] text-[#6e6e73] mt-0.5">{PERSON.role}</p>
                </div>
                <p className="text-[12px] text-[#a1a1a6] text-right">{PERSON.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────────────── */}
      <section className="section-sm border-b border-[#d2d2d7]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HOME.highlights.map(h => (
              <div key={h.label}>
                <p className="text-[2rem] font-semibold text-[#1d1d1f] leading-none tracking-tight">{h.number}</p>
                <p className="text-caption mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────── */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label mb-2">Selected Work</p>
              <h2 className="text-title text-[#1d1d1f]">Recent projects</h2>
            </div>
            <Link href="/portfolio" className="btn-text hidden md:flex">View all →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map(p => (
              <Link key={p.id} href="/portfolio" className="project-card no-underline block group">
                <div className="overflow-hidden bg-[#f5f5f7] aspect-video">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-3">
                  <p className="text-[12px] text-[#6e6e73] mb-1">{p.category}</p>
                  <p className="text-[15px] font-semibold text-[#1d1d1f] tracking-tight">{p.title}</p>
                  <p className="text-[13px] text-[#0071e3] mt-1 font-medium">{p.result}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/portfolio" className="btn-text">View all work →</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="section border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label mb-2">What I do</p>
              <h2 className="text-title text-[#1d1d1f]">Services</h2>
            </div>
            <Link href="/services" className="btn-text hidden md:flex">All services →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d2d2d7]">
            {SERVICES.slice(0, 4).map(s => (
              <div key={s.number} className="bg-[#f5f5f7] p-8 hover:bg-white transition-colors">
                <p className="text-label mb-3">{s.number}</p>
                <h3 className="text-headline text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-body text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/services" className="btn-text">All services →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-narrow text-center">
          <p className="text-label mb-4">Let's work together</p>
          <h2 className="text-title text-[#1d1d1f] mb-4">Have a project in mind?</h2>
          <p className="text-body-lg mb-8">I'm open to freelance projects, long-term collaborations, and brand partnerships. Let's talk.</p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
