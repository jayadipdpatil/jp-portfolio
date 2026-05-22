import Link from 'next/link';
import { SERVICES, PROCESS } from '@/lib/content';

export const metadata = { title: 'Services — Jayadip Patil' };

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <p className="text-label mb-4">Services</p>
          <h1 className="text-display text-[#1d1d1f] mb-6 max-w-2xl">What I can do for you.</h1>
          <p className="text-body-lg max-w-xl">
            From a single blog post to a full-scale marketing strategy — I work with brands and founders who want content that actually performs.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <div className="divide-y divide-[#d2d2d7]">
            {SERVICES.map(s => (
              <div key={s.number} className="py-10 grid grid-cols-1 md:grid-cols-[120px_1fr_280px] gap-6 md:gap-12 group hover:bg-[#f5f5f7] -mx-6 px-6 transition-colors">
                <p className="text-label self-start pt-1">{s.number}</p>
                <div>
                  <h2 className="text-headline text-[#1d1d1f] mb-3">{s.title}</h2>
                  <p className="text-body leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 content-start">
                  {s.tags.map(t => (
                    <span key={t} className="chip text-[12px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-b border-[#d2d2d7] bg-[#f5f5f7]">
        <div className="container">
          <p className="text-label mb-4">How I work</p>
          <h2 className="text-title text-[#1d1d1f] mb-12">The process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#d2d2d7]">
            {PROCESS.map(p => (
              <div key={p.step} className="bg-[#f5f5f7] p-8">
                <p className="text-label mb-4">{p.step}</p>
                <h3 className="text-headline text-[#1d1d1f] mb-3">{p.title}</h3>
                <p className="text-body text-[13px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2 className="text-title text-[#1d1d1f] mb-4">Ready to start?</h2>
          <p className="text-body-lg mb-8">Pick a service or let's figure out the right fit together.</p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
