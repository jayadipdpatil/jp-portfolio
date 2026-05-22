'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MY_WORK, SOCIAL } from '@/lib/content';

const TABS = ['Writing', 'Photography', 'Ideas'];

export default function WorkPage() {
  const [tab, setTab] = useState('Writing');

  return (
    <>
      {/* Header */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <p className="text-label mb-4">My Work</p>
          <h1 className="text-display text-[#1d1d1f] mb-6 max-w-2xl">Writing. Photography. Ideas.</h1>
          <p className="text-body-lg max-w-xl">
            Things I create outside of client work — articles, photos, and thoughts I share with the world.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-[#d2d2d7] sticky top-14 bg-white z-10">
        <div className="container">
          <div className="flex">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-4 text-[14px] font-medium border-b-2 transition-all duration-200 ${
                  tab === t
                    ? 'border-[#1d1d1f] text-[#1d1d1f]'
                    : 'border-transparent text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      {tab === 'Writing' && (
        <section className="section">
          <div className="container">
            <div className="divide-y divide-[#d2d2d7]">
              {MY_WORK.writing.map((a, i) => (
                <a
                  key={i}
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-8 group hover:bg-[#f5f5f7] -mx-6 px-6 transition-colors no-underline"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="chip">{a.category}</span>
                        <span className="text-[12px] text-[#a1a1a6]">{a.date} · {a.readTime}</span>
                      </div>
                      <h2 className="text-headline text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">{a.title}</h2>
                      <p className="text-body text-[13px] max-w-xl">{a.excerpt}</p>
                    </div>
                    <svg className="w-5 h-5 text-[#a1a1a6] group-hover:text-[#1d1d1f] transition-colors flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-[#d2d2d7]">
              <p className="text-[13px] text-[#6e6e73]">
                More writing on <a href={SOCIAL.linkedin} className="link-apple" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href={SOCIAL.twitter} className="link-apple" target="_blank" rel="noopener noreferrer">X (Twitter)</a>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PHOTOGRAPHY */}
      {tab === 'Photography' && (
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {MY_WORK.photos.map((p, i) => (
                <div key={i} className={`overflow-hidden bg-[#f5f5f7] project-card ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: (i === 0 || i === 5) ? '1/1' : '4/3' }}
                    loading="lazy"
                  />
                  <p className="text-caption px-2 py-2">{p.caption}</p>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#6e6e73] mt-8">
              More photos on <a href={SOCIAL.instagram} className="link-apple" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
          </div>
        </section>
      )}

      {/* IDEAS / X THREADS */}
      {tab === 'Ideas' && (
        <section className="section">
          <div className="container-narrow">
            <p className="text-body mb-8 text-[#6e6e73]">
              Short thoughts I share on <a href={SOCIAL.twitter} className="link-apple" target="_blank" rel="noopener noreferrer">X (Twitter)</a>. Current takes on advertising, culture, and creativity.
            </p>
            <div className="divide-y divide-[#d2d2d7]">
              {MY_WORK.xThreads.map((t, i) => (
                <a
                  key={i}
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-7 group no-underline hover:bg-[#f5f5f7] -mx-6 px-6 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* X logo */}
                    <div className="w-9 h-9 bg-[#1d1d1f] flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] text-[#1d1d1f] leading-relaxed mb-2 group-hover:text-[#0071e3] transition-colors">{t.text}</p>
                      <p className="text-caption">{t.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10">
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
                Follow on X →
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
