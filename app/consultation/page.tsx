import Link from 'next/link';
import Image from 'next/image';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const IVORY = '#faf8f4';

const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const FOOTER_LINKS = {
  employee: [
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Create Account' },
  ],
  company: [
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/consultation', label: 'Book a Demo' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>

      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e8e4dc' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={500} height={167} className="h-14 w-auto" priority />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>{l.label}</Link>
              ))}
              <div className="w-px h-5" style={{ background: '#e8e4dc' }} />
              <Link href="/login" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>Login</Link>
              <Link href="/consultation" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: NAVY }}>Book Demo</Link>
            </div>
            <div className="md:hidden flex gap-2">
              <Link href="/login" className="border px-3 py-1.5 rounded text-xs font-semibold" style={{ borderColor: NAVY, color: NAVY }}>Login</Link>
              <Link href="/consultation" className="px-3 py-1.5 rounded text-xs font-semibold text-white" style={{ background: NAVY }}>Book Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="py-14 px-4 text-center" style={{ background: NAVY }}>
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(13,148,136,0.2)', color: '#5eead4' }}>
          No Commitment Required
        </span>
        <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Book Your Free Demo</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
          Learn how ASC Verify&apos;s personal concierge service can benefit your employees. We&apos;ll walk you through everything in 30 minutes or less.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Form */}
          <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #e8e4dc', boxShadow: '0 4px 24px rgba(15,39,68,0.08)' }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: NAVY }}>Schedule Your Free Demo</h2>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">First Name *</label>
                  <input type="text" placeholder="Jane" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Last Name *</label>
                  <input type="text" placeholder="Smith" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Company Name *</label>
                <input type="text" placeholder="Acme Corporation" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Work Email *</label>
                <input type="email" placeholder="jane@company.com" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Phone Number</label>
                <input type="tel" placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Best Time to Connect</label>
                <select className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY, appearance: 'none' }}>
                  <option value="">Select a time preference</option>
                  <option>Morning (9am – 12pm)</option>
                  <option>Afternoon (12pm – 3pm)</option>
                  <option>Late Afternoon (3pm – 5pm)</option>
                  <option>I&apos;m flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Number of Employees</label>
                <select className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY, appearance: 'none' }}>
                  <option value="">Select company size</option>
                  <option>1 – 50 employees</option>
                  <option>51 – 200 employees</option>
                  <option>201 – 500 employees</option>
                  <option>501 – 1,000 employees</option>
                  <option>1,000+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5 text-gray-500">Questions or Comments</label>
                <textarea rows={3} placeholder="Tell us what you're looking for..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ border: '1px solid #e8e4dc', color: NAVY, background: IVORY }} />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl text-base font-semibold text-white" style={{ background: NAVY }}>
                Schedule My Free Demo
              </button>

              <p className="text-xs text-gray-400 text-center">
                We&apos;ll reach out within 24 hours to confirm your demo time. No spam, ever.
              </p>
            </form>
          </div>

          {/* Right: What to expect */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we&apos;ll cover</h2>
            <div className="space-y-5">
              {[
                { title: 'Full Service Overview', desc: 'See exactly what tasks our concierges handle — from healthcare scheduling to travel planning and everything in between.' },
                { title: 'Live Portal Demo', desc: 'We\'ll walk you through the employee experience — how to submit requests, track progress, and communicate with your agent.' },
                { title: 'Pricing & Plans', desc: 'Understand the benefit structure, pricing tiers, and how to roll this out as an employee perk at your organization.' },
                { title: 'Q&A Session', desc: 'Ask anything. Our team will answer all your questions about implementation, privacy, and customization.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
                {FOOTER_LINKS.employee.map(l => <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                {FOOTER_LINKS.company.map(l => <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Legal & Contact</h4>
              <ul className="space-y-2 text-sm">
                {FOOTER_LINKS.legal.map(l => <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link></li>)}
                <li className="pt-1">support@ascverify.com</li>
                <li>(844) 435-3969</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs">
            &copy; 2025 ASC Verify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
