'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { PERSON, ABOUT, SOCIAL } from '@/lib/content';

function SkillBar({ label, pct, delay = 0 }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => el.classList.add('animated'), delay);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-[14px] text-[#1d1d1f]">{label}</span>
        <span className="text-[13px] text-[#6e6e73]">{pct}%</span>
      </div>
      <div className="skill-track">
        <div ref={fillRef} className="skill-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function IconLinkedIn() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function IconX() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>; }
function IconInstagram() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function IconEmail() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f7]">
                <Image src={PERSON.photo} alt={PERSON.name} fill className="object-cover object-top" />
              </div>
              {/* Socials below photo */}
              <div className="flex items-center gap-4 mt-5">
                <span className="text-label">Find me</span>
                <a href={SOCIAL.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconLinkedIn /></a>
                <a href={SOCIAL.twitter}   target="_blank" rel="noopener noreferrer" aria-label="X"         className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconX /></a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconInstagram /></a>
                <a href={SOCIAL.email}                                                aria-label="Email"     className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"><IconEmail /></a>
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <p className="text-label mb-4">About</p>
              <h1 className="text-title text-[#1d1d1f] mb-6">{ABOUT.headline}</h1>
              <p className="text-body-lg mb-5">{ABOUT.body1}</p>
              <p className="text-body">{ABOUT.body2}</p>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mt-8">
                {ABOUT.interests.map(i => <span key={i} className="chip">{i}</span>)}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">Work with me →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline + Skills */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Timeline */}
            <div>
              <p className="text-label mb-8">Journey</p>
              <div>
                {ABOUT.timeline.map(t => (
                  <div key={t.year} className="timeline-item">
                    <p className="text-[12px] text-[#6e6e73] mb-1">{t.year}</p>
                    <p className="text-[15px] text-[#1d1d1f]">{t.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-label mb-8">Skills</p>
              {ABOUT.skills.map((s, i) => (
                <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#f5f5f7]">
        <div className="container-narrow text-center">
          <h2 className="text-title text-[#1d1d1f] mb-4">Let's create something great.</h2>
          <p className="text-body-lg mb-8">Open to freelance, retainers, and long-term collaborations.</p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
