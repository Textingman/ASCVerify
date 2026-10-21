'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const IVORY = '#faf8f4';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const inputStyle = {
    background: '#fff',
    border: '1px solid #e8e4dc',
    color: NAVY,
    width: '100%',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>
      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e8e4dc' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={500} height={167} className="h-14 w-auto" priority />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/product" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>Product</Link>
              <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>About</Link>
              <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>Contact</Link>
              <div className="w-px h-5" style={{ background: '#e8e4dc' }} />
              <Link href="/login" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>Login</Link>
              <Link href="/consultation" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: '#0f2744' }}>Book Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16" style={{ background: IVORY }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
            Contact Us
          </span>
          <h1 className="text-4xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
            We&apos;re here to help.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a question about our service, your account, or how to get your company enrolled? Reach out and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Contact info */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <h3 className="font-bold text-base mb-4" style={{ color: NAVY }}>Contact information</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Email</p>
                    <a href="mailto:support@ascverify.com" className="hover:underline" style={{ color: NAVY }}>support@ascverify.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Phone</p>
                    <a href="tel:+18444353969" className="hover:underline" style={{ color: NAVY }}>(844) 435-3969</a>
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Mailing address</p>
                    <p>2000 NE 42nd Ave PMB 1251</p>
                    <p>Portland, OR 97213</p>
                  </div>
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Hours</p>
                    <p>Monday – Friday, 8am – 8pm ET</p>
                    <p>Saturday, 9am – 5pm ET</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}20` }}>
                <p className="text-sm font-semibold mb-2" style={{ color: NAVY }}>For employers</p>
                <p className="text-sm text-gray-600 mb-4">Interested in offering ASC Verify as an employee benefit? Book a free demo with our team.</p>
                <Link href="/consultation" className="inline-block px-4 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: '#0f2744' }}>
                  Book a Demo →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="rounded-2xl p-10 text-center" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Message received!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within one business day. If it&apos;s urgent, call us at (844) 435-3969.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-5" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                  <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>Send us a message</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Name</label>
                      <input
                        type="text" required placeholder="Jane Smith"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Email</label>
                      <input
                        type="email" required placeholder="jane@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Phone (optional)</label>
                    <input
                      type="tel" placeholder="(555) 000-0000"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Subject</label>
                    <select
                      required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      style={{ ...inputStyle, appearance: 'none' }}
                    >
                      <option value="">Select a topic…</option>
                      <option>Employee account help</option>
                      <option>Employer / HR inquiry</option>
                      <option>Billing question</option>
                      <option>Technical issue</option>
                      <option>SMS opt-out request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Message</label>
                    <textarea
                      required rows={5} placeholder="Tell us how we can help…"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="underline">Privacy Policy</Link> and{' '}
                    <Link href="/terms" className="underline">Terms of Service</Link>.
                    To opt out of SMS messages, reply STOP to any text or select &quot;SMS opt-out request&quot; above.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-base font-semibold text-white"
                    style={{ background: NAVY }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a1e38', color: '#94a3b8' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={160} height={54} className="h-10 w-auto mb-3 brightness-0 invert" />
              <p className="text-sm leading-relaxed">Personal concierge and virtual assistance services for employees.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Employee Access</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/signup" className="hover:text-white transition-colors">Create Account</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/consultation" className="hover:text-white transition-colors">Book a Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Legal & Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li className="pt-1">support@ascverify.com</li>
                <li>(844) 435-3969</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span>&copy; 2025 ASC Verify. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="https://share.google/gkJZbE5yqyGnlMaPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" title="Google My Business">
                <img src="/google-logo.svg" alt="Google My Business" className="w-5 h-5" />
                <span className="text-xs" style={{ color: '#94a3b8' }}>Google</span>
              </a>
              <a href="https://www.linkedin.com/company/asc-verify/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" title="LinkedIn">
                <img src="/linkedin-logo.svg" alt="LinkedIn" className="w-5 h-5" />
                <span className="text-xs" style={{ color: '#94a3b8' }}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
