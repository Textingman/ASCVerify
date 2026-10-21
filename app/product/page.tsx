import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Monitor, Bell, CheckCircle2, ArrowRight, Users, Clock, Shield,
  Calendar, ShoppingCart, Car, Home, Plane, Search
} from 'lucide-react';

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

const features = [
  {
    icon: MapPin,
    title: 'Local agents in your city',
    desc: 'Get matched with a real concierge agent based in your area — someone who knows your city, your neighborhoods, and how to get things done locally.',
  },
  {
    icon: Monitor,
    title: 'Virtual assistants online',
    desc: 'Prefer remote support? Connect with a dedicated virtual assistant who handles research, scheduling, bookings, and coordination from anywhere.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    desc: 'Get notified the moment something needs your attention — a decision to make, an approval needed, or a task completed. You\'re always in the loop.',
  },
  {
    icon: CheckCircle2,
    title: 'Task tracking portal',
    desc: 'Log in to your portal to see every active and completed task, communicate with your agent, and review updates in one place.',
  },
  {
    icon: Clock,
    title: 'Real-time updates',
    desc: 'Your agent keeps you informed as tasks progress. No need to follow up — we come to you when something needs your input.',
  },
  {
    icon: Shield,
    title: 'Private & confidential',
    desc: 'Your requests and personal information are never shared with your employer. Full confidentiality, always.',
  },
];

const taskTypes = [
  { icon: Calendar, label: 'Healthcare Scheduling' },
  { icon: ShoppingCart, label: 'Grocery & Errands' },
  { icon: Car, label: 'Transportation' },
  { icon: Home, label: 'Home Services' },
  { icon: Plane, label: 'Travel Planning' },
  { icon: Search, label: 'Research & Decisions' },
  { icon: Shield, label: 'Insurance Claims' },
  { icon: Bell, label: 'Benefits Paperwork' },
];

const steps = [
  { n: '01', title: 'Log in to your portal', desc: 'Access your personal concierge dashboard with your employee credentials.' },
  { n: '02', title: 'Submit a request', desc: 'Describe what you need — your agent reviews it and gets started right away.' },
  { n: '03', title: 'Your agent handles it', desc: 'A local or virtual agent takes care of everything — calls, bookings, coordination.' },
  { n: '04', title: 'You get notified', desc: 'We alert you when something needs your decision or when the task is complete.' },
];

export default function ProductPage() {
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

      {/* Hero */}
      <section className="py-20" style={{ background: IVORY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
            The Product
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
            Your concierge portal. Real agents. Real results.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            ASC Verify connects you with a dedicated concierge — a local agent in your city or a virtual assistant online — who handles life&apos;s tasks so you don&apos;t have to. Submit requests through your portal and get notified when something needs your attention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/login" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold" style={{ background: NAVY, color: '#fff' }}>
              Access Your Portal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
              Book a Demo for Your Team
            </Link>
          </div>
        </div>
      </section>

      {/* How agents work — split layout */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
                Local agents or virtual assistants — your choice.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on your task and location, you&apos;re matched with the right type of support. Need someone to wait at your home for a repair? A local agent handles it in person. Need research, bookings, or scheduling? A virtual assistant takes care of it online.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, title: 'Local agents', desc: 'Based in your city. Available for in-person tasks like home services, pickups, and errands.' },
                  { icon: Monitor, title: 'Virtual assistants', desc: 'Available online for scheduling, research, bookings, travel planning, and more.' },
                  { icon: Users, title: 'Dedicated to you', desc: 'Your concierge learns your preferences and handles requests the way you like them done.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portal mockup */}
            <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
              {/* Portal header */}
              <div className="px-5 py-4 flex items-center justify-between" style={{ background: NAVY }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-white/60 font-medium">My Concierge Portal</span>
                <div />
              </div>
              {/* Portal content */}
              <div className="p-5 space-y-3" style={{ background: IVORY }}>
                {/* Active task */}
                <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>In Progress</span>
                    <span className="text-xs text-gray-400">Today, 2:14pm</span>
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>Home repair — plumber visit</p>
                  <p className="text-xs text-gray-500">Your local agent is at your home coordinating with the plumber. ETA: 45 min.</p>
                </div>
                {/* Needs decision */}
                <div className="rounded-xl p-4" style={{ background: '#fffbeb', border: '1px solid #fde68a' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Needs Your Decision</span>
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>Flight booking — 2 options found</p>
                  <p className="text-xs text-gray-500">Your VA found 2 flights within budget. Please review and confirm your preference.</p>
                  <button className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ background: NAVY }}>Review Options →</button>
                </div>
                {/* Completed */}
                <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Completed</span>
                    </div>
                    <span className="text-xs text-gray-400">Yesterday</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: NAVY }}>Dr. Patel appointment booked — Thu Oct 14, 9am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications section */}
      <section style={{ background: IVORY }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
                Stay informed. Only when it matters.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We don&apos;t flood you with updates. You get notified when a task is complete, when your agent needs a quick decision from you, or when something unexpected comes up. Everything else, we handle quietly in the background.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Task completed', desc: 'Your agent confirms when a task is fully done — no need to follow up.' },
                  { title: 'Decision needed', desc: 'When your input is required (e.g., choosing between two options), we alert you immediately.' },
                  { title: 'Status updates', desc: 'For longer tasks, your agent sends progress updates so you always know where things stand.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification mockup */}
            <div className="space-y-3">
              {[
                { type: 'done', title: 'Grocery order placed', body: 'Your Instacart order is confirmed. Delivery window: 4–6pm today.', time: '2 min ago' },
                { type: 'action', title: 'Decision needed: Contractor quote', body: 'Two quotes received for your kitchen repair. Tap to review and approve.', time: '18 min ago' },
                { type: 'update', title: 'Travel itinerary ready', body: 'Your agent has prepared your full NYC trip itinerary. Ready to review.', time: '1 hr ago' },
              ].map(({ type, title, body, time }) => (
                <div
                  key={title}
                  className="rounded-2xl p-4 flex gap-4 items-start"
                  style={{
                    background: type === 'action' ? '#fffbeb' : '#fff',
                    border: type === 'action' ? '1px solid #fde68a' : '1px solid #e8e4dc',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: type === 'done' ? ACCENT_BG : type === 'action' ? '#fef3c7' : '#f3f4f6' }}
                  >
                    {type === 'done' && <CheckCircle2 className="w-5 h-5" style={{ color: ACCENT }} />}
                    {type === 'action' && <Bell className="w-5 h-5 text-amber-500" />}
                    {type === 'update' && <Clock className="w-5 h-5 text-gray-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold" style={{ color: NAVY }}>{title}</p>
                      <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{time}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Task types */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Any task. Any day.</h2>
            <p className="text-gray-500 text-lg">Your agent handles it — in person or online.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {taskTypes.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl p-5 flex items-center gap-3" style={{ background: IVORY, border: '1px solid #e8e4dc' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ background: IVORY, borderTop: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Everything included</h2>
            <p className="text-gray-500 text-lg">No tiers, no add-ons. Every employee gets the full service.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: ACCENT_BG }}>
                  <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>From request to done</h2>
            <p className="text-gray-500">Here&apos;s what happens after you submit a task.</p>
          </div>
          <div className="space-y-4">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5 items-start rounded-2xl p-5" style={{ background: IVORY, border: '1px solid #e8e4dc' }}>
                <div className="text-2xl font-bold flex-shrink-0 w-10 text-right" style={{ color: ACCENT, fontFamily: 'Georgia, serif' }}>{n}</div>
                <div>
                  <p className="font-bold text-base mb-1" style={{ color: NAVY }}>{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: NAVY }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to try it?
          </h2>
          <p className="text-lg mb-10" style={{ color: '#94a3b8' }}>
            Employees can log in and submit their first request today. Employers can book a demo to see how it works for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white" style={{ border: '2px solid rgba(255,255,255,0.3)' }}>
              Access Your Portal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold" style={{ background: ACCENT, color: '#fff' }}>
              Book Employer Demo
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
