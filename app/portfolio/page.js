'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/content';

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <p className="text-label mb-4">Portfolio</p>
          <h1 className="text-display text-[#1d1d1f] mb-6 max-w-2xl">Real work. Real results.</h1>
          <p className="text-body-lg max-w-xl">
            Every project here came with a specific problem and left with a measurable outcome. Numbers don't lie.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section-sm border-b border-[#d2d2d7]">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[13px] font-medium border transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                    : 'bg-white text-[#424245] border-[#d2d2d7] hover:border-[#1d1d1f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {filtered.map((p, i) => (
              <div key={p.id} className="project-card group">
                <div className={`overflow-hidden bg-[#f5f5f7] ${i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-video'}`}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="chip">{p.category}</span>
                    {p.tags.slice(0,2).map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <h2 className="text-headline text-[#1d1d1f] mb-2">{p.title}</h2>
                  <p className="text-body text-[13px] mb-3">{p.summary}</p>
                  {/* Result bar */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#d2d2d7]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">{p.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm border-t border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="container text-center">
          <p className="text-body-lg mb-5">Like what you see? Let's build your next campaign.</p>
          <Link href="/contact" className="btn-primary">Start a Project →</Link>
        </div>
      </section>
    </>
  );
}
