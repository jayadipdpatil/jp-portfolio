'use client';
import { useState } from 'react';
import { PERSON, CONTACT, SOCIAL } from '@/lib/content';

function IconLinkedIn() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
function IconX() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>; }
function IconInstagram() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function IconEmail() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }

const SOCIAL_ITEMS = [
  { label: 'LinkedIn',  handle: 'nameisjayd',           href: (s) => s.linkedin,  Icon: IconLinkedIn  },
  { label: 'Instagram', handle: '@nameisjayd',           href: (s) => s.instagram, Icon: IconInstagram },
  { label: 'X / Twitter', handle: '@nameisjayd',         href: (s) => s.twitter,   Icon: IconX         },
  { label: 'Email',     handle: 'nameisjayd@gmail.com',  href: (s) => s.email,     Icon: IconEmail     },
];

export default function ContactPage() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1400));
    setStatus('sent');
  };

  return (
    <>
      {/* Header */}
      <section className="section border-b border-[#d2d2d7]">
        <div className="container">
          <p className="text-label mb-4">Contact</p>
          <h1 className="text-display text-[#1d1d1f] mb-6">{CONTACT.headline}</h1>
          <p className="text-body-lg max-w-md">{CONTACT.subhead}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16">
            {/* Form */}
            <div>
              {status === 'sent' ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-center mx-auto mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 className="text-title text-[#1d1d1f] mb-2">Message received.</h2>
                  <p className="text-body">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Name</label>
                      <input
                        type="text" required
                        className="form-field"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email" required
                        className="form-field"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">I need help with</label>
                    <select
                      className="form-field"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    >
                      <option value="">Select a service</option>
                      {CONTACT.formSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Message</label>
                    <textarea
                      required
                      rows={6}
                      className="form-field"
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Availability */}
              {PERSON.available && (
                <div className="p-6 bg-[#f5f5f7] border border-[#d2d2d7]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-label">Available Now</span>
                  </div>
                  <p className="text-[13px] text-[#424245] leading-relaxed">
                    Currently accepting new projects. Reach out early — spots fill up.
                  </p>
                </div>
              )}

              {/* Direct contacts */}
              <div>
                <p className="text-label mb-4">Direct</p>
                <div className="space-y-2">
                  <a href={`mailto:${PERSON.email}`} className="flex items-center gap-3 text-[14px] text-[#424245] hover:text-[#1d1d1f] no-underline transition-colors py-2 group">
                    <IconEmail />
                    <span>{PERSON.email}</span>
                  </a>
                  <a href={`tel:${PERSON.phone}`} className="flex items-center gap-3 text-[14px] text-[#424245] hover:text-[#1d1d1f] no-underline transition-colors py-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.05-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>{PERSON.phone}</span>
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-label mb-4">Social</p>
                <div className="space-y-1">
                  {SOCIAL_ITEMS.map(s => (
                    <a
                      key={s.label}
                      href={s.href(SOCIAL)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-3 border-b border-[#d2d2d7] group no-underline hover:border-[#1d1d1f] transition-colors"
                    >
                      <span className="text-[#6e6e73] group-hover:text-[#1d1d1f] transition-colors w-6">
                        <s.Icon />
                      </span>
                      <div className="flex-1">
                        <span className="text-[14px] font-medium text-[#1d1d1f]">{s.label}</span>
                        <span className="text-[12px] text-[#6e6e73] ml-2">{s.handle}</span>
                      </div>
                      <svg className="w-4 h-4 text-[#a1a1a6] group-hover:text-[#1d1d1f] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
