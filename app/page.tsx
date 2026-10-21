import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar, ShoppingCart, Car, GraduationCap, Home, Plane, Ticket, Search,
  Clock, Star, Shield, ArrowRight, MessageSquare, CheckCircle2
} from 'lucide-react';

const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const NAVY = '#0f2744';
const IVORY = '#faf8f4';

const services = [
  { icon: Calendar, label: 'Healthcare Scheduling', desc: 'Doctor appointments, specialist referrals, prescription refills, and medical record requests.' },
  { icon: ShoppingCart, label: 'Grocery & Errands', desc: 'Grocery ordering, dry cleaning pickup, package shipping, and everyday errand running.' },
  { icon: Car, label: 'Transportation', desc: 'Gas fill-ups, vehicle maintenance scheduling, and coordinating rides and transportation needs.' },
  { icon: GraduationCap, label: 'Family Support', desc: 'School drop-offs and pickups, childcare coordination, tutoring research, and family scheduling.' },
  { icon: Home, label: 'Home Services', desc: 'Wait at home for repairs, installations, and deliveries. We coordinate contractors and service providers.' },
  { icon: Plane, label: 'Travel Planning', desc: 'Flight and hotel booking, itinerary creation, restaurant reservations, and full trip coordination.' },
  { icon: Ticket, label: 'Events & Tickets', desc: 'Tickets to local and national attractions, concerts, sporting events, and entertainment.' },
  { icon: Search, label: 'Research & Information', desc: 'Product comparisons, vendor recommendations, best options research, and information gathering.' },
  { icon: Shield, label: 'Insurance & Benefits Paperwork', desc: 'Filing insurance claims, navigating benefits paperwork, and handling documentation for all your employee benefits.' },
];

const steps = [
  { n: '1', title: 'Sign In', body: 'Access your employee concierge portal with your company credentials.' },
  { n: '2', title: 'Send a Request', body: 'Text or type any task — big or small. No request is too simple or complex.' },
  { n: '3', title: 'We Handle It', body: 'Your dedicated concierge takes care of everything while you focus on what matters.' },
  { n: '4', title: 'Done', body: 'Get real-time updates and confirmation when your task is complete.' },
];

const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>

      {/* ── Navigation ── */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e8e4dc' }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={500} height={167} className="h-14 w-auto" priority />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: NAVY }}>{l.label}</Link>
              ))}
              <div className="w-px h-5" style={{ background: '#e8e4dc' }} />
              <Link href="/login" className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>Login</Link>
              <Link href="/consultation" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors" style={{ background: '#0f2744' }}>Book Demo →</Link>
            </div>
            <div className="md:hidden flex gap-2">
              <Link href="/login" className="border px-3 py-1.5 rounded text-xs font-semibold" style={{ borderColor: NAVY, color: NAVY }}>Login</Link>
              <Link href="/consultation" className="px-3 py-1.5 rounded text-xs font-semibold text-white" style={{ background: '#0f2744' }}>Book Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero: Split Layout ── */}
      <section style={{ background: IVORY }} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
                Exclusive Employee Benefit
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
                Your personal concierge,{' '}
                <span style={{ color: ACCENT }}>always on call.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Professional assistance for all of life&apos;s tasks — from scheduling doctor appointments to ordering groceries, planning travel, and everything in between. Available exclusively to you as an employee benefit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/login" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: NAVY, color: '#fff' }}>
                  Login <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all" style={{ border: `2px solid ${ACCENT}`, color: ACCENT, background: 'transparent' }}>
                  For Employers — Book Demo
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-40" style={{ background: `linear-gradient(135deg, ${ACCENT_BG}, #eff6ff)` }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: `linear-gradient(135deg, #0f2744 0%, #1e3a5f 100%)`, minHeight: '380px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>More evenings like this.</p>
                  <p className="text-blue-200 text-sm">Less time on hold. More time with family.</p>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.97)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                      <MessageSquare className="w-4 h-4" style={{ color: ACCENT }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold mb-1" style={{ color: NAVY }}>Your Concierge</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Dr. Patel appointment booked for Thursday 2pm. Prescription refill requested. Anything else?
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                    <span className="text-xs" style={{ color: ACCENT }}>Handled in 8 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>How it works</h2>
            <p className="text-gray-500 text-lg">Simple, fast, and completely handled for you</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px" style={{ background: '#e8e4dc' }} />
                )}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold" style={{ background: ACCENT_BG, color: ACCENT, border: `2px solid ${ACCENT}` }}>
                  {s.n}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ background: IVORY }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>We handle life&apos;s tasks</h2>
            <p className="text-gray-500 text-lg">Submit any request and your dedicated concierge takes care of the rest</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: '#fff', border: '1px solid #e8e4dc', boxShadow: '0 2px 8px rgba(15,39,68,0.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: ACCENT_BG }}>
                  <Icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Why employees love it</h2>
            <p className="text-gray-500 text-lg">Built around your needs, your schedule, and your privacy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Clock, title: 'Save hours every week', body: 'Stop spending your lunch break on hold or running errands after work. We give you your time back.' },
              { icon: Star, title: 'Professional concierges', body: 'Trained specialists who know how to get things done right, the first time, every time.' },
              { icon: Shield, title: 'Completely confidential', body: 'Your personal requests and information are always private and never shared with your employer.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_BG }}>
                  <Icon className="w-8 h-8" style={{ color: ACCENT }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{title}</h3>
                <p className="text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section style={{ background: NAVY }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to reclaim your time?
          </h2>
          <p className="text-lg mb-10" style={{ color: '#94a3b8' }}>
            Already enrolled? Log in to submit your first request.{' '}
            Want to offer this to your team? Book a free employer demo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all" style={{ border: '2px solid rgba(255,255,255,0.3)' }}>
              Login <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: ACCENT, color: '#fff' }}>
              Book Employer Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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
                <li><Link href="/login" className="hover:text-white transition-colors">Create Account</Link></li>
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
