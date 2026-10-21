import Link from 'next/link';
import Image from 'next/image';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const IVORY = '#faf8f4';

export default function AboutPage() {
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
              <Link href="/product" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>Product</Link>
              <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>About</Link>
              <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-colors" style={{ color: NAVY }}>Contact</Link>
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

      {/* Hero */}
      <section className="py-20" style={{ background: IVORY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
            We give employees their time back.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            ASC Verify is a personal concierge and virtual assistance service offered exclusively as an employee benefit. We handle life&apos;s everyday tasks so your team can focus on what matters most — at work and at home.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Our mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern employees are stretched thin. Between demanding jobs, family responsibilities, and the endless stream of errands and appointments, there&apos;s rarely enough time in the day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ASC Verify was built to change that. We partner with employers to offer a dedicated concierge service that handles the tasks employees don&apos;t have time for — from scheduling doctor appointments to booking travel, coordinating home repairs, and everything in between.
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: ACCENT_BG }}>
              <p className="text-lg font-semibold mb-2" style={{ color: NAVY }}>A benefit employees actually use</p>
              <p className="text-gray-600 text-sm">Unlike traditional perks, concierge assistance solves real, daily problems — making it one of the most valued benefits in any package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: IVORY }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Privacy first', body: 'Your personal requests are never shared with your employer. What you ask us to handle stays between you and your concierge.' },
              { title: 'Speed & reliability', body: 'We respond fast and follow through. When you submit a request, you can trust it will be handled — completely and correctly.' },
              { title: 'Human touch', body: 'Real people handle your requests. No bots, no automated responses — just dedicated professionals who care about getting it right.' },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16" style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Company information</h2>
          <div className="rounded-2xl p-8" style={{ background: IVORY, border: '1px solid #e8e4dc' }}>
            <p className="font-semibold text-lg mb-1" style={{ color: NAVY }}>ASC Verify</p>
            <p className="text-gray-500 mb-4">Personal Concierge &amp; Virtual Assistance Services</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>2000 NE 42nd Ave PMB 1251</p>
              <p>Portland, OR 97213</p>
              <p className="pt-2">
                <a href="mailto:support@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>support@ascverify.com</a>
              </p>
              <p>
                <a href="tel:+18444353969" className="hover:underline" style={{ color: ACCENT }}>(844) 435-3969</a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
              Contact Us
            </Link>
            <Link href="/consultation" className="px-6 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: '#0f2744' }}>
              Book a Demo
            </Link>
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
