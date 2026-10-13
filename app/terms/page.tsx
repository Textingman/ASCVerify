import Link from 'next/link';
import Image from 'next/image';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
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

export default function TermsPage() {
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
              <Link href="/consultation" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: '#0f2744' }}>Book Demo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-14" style={{ background: NAVY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Terms of Service</h1>
          <p className="text-sm" style={{ color: '#94a3b8' }}>Last Updated: December 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>1. Acceptance of Terms</h2>
            <p>By accessing or using ASC Verify&apos;s personal concierge service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>2. Description of Service</h2>
            <p className="mb-3">ASC Verify provides a personal concierge and virtual assistance service offered as an employee benefit. The Service includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Text-based concierge request submission</li>
              <li>Appointment scheduling and errand coordination</li>
              <li>Travel planning and research assistance</li>
              <li>Real-time task updates and confirmations</li>
              <li>Employee portal access</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>3. Account Registration and Security</h2>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>3.1 Account Creation</h3>
            <p className="mb-3">To use the Service, you must create an account using your employer-provided access code and employee ID. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>3.2 Account Security</h3>
            <p className="mb-3">You agree to immediately notify us of any unauthorized use of your account or any other breach of security.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>3.3 Account Eligibility</h3>
            <p>You must be at least 18 years old and an active employee of a participating employer to use the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>4. Acceptable Use Policy</h2>
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Submit fraudulent, abusive, or harassing requests</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Impersonate any person or entity</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>5. SMS Communications</h2>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>5.1 Opt-In Requirements</h3>
            <p className="mb-3">By providing your mobile phone number and opting in during registration, you consent to receive SMS messages from ASC Verify related to your concierge requests. Message and data rates may apply.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>5.2 Opt-Out</h3>
            <p>You may opt out of SMS communications at any time by replying STOP to any message or contacting us at support@ascverify.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>6. Service Availability</h2>
            <p className="mb-3">We strive to maintain consistent service availability Monday through Saturday, 8am–8pm ET. We may perform scheduled maintenance with advance notice when possible. We do not guarantee uninterrupted access.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>7. Intellectual Property Rights</h2>
            <p className="mb-3">The Service and all content, features, and functionality are owned by ASC Verify and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute any part of the Service without our express written permission.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>8. Data and Privacy</h2>
            <p>Your use of the Service is also governed by our <Link href="/privacy" className="hover:underline font-medium" style={{ color: ACCENT }}>Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>9. Disclaimers and Limitations of Liability</h2>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>9.1 Service "As Is"</h3>
            <p className="mb-3">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>9.2 Limitation of Liability</h3>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ASC VERIFY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless ASC Verify and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Service or your violation of these Terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>11. Termination</h2>
            <p className="mb-3">You may terminate your account at any time by contacting us. We may suspend or terminate your access to the Service at any time, with or without cause, including for violation of these Terms or non-payment by your employer.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>12. Dispute Resolution</h2>
            <p className="mb-3">Before filing a claim, you agree to contact us and attempt to resolve the dispute informally. Any unresolved disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>13. General Provisions</h2>
            <p className="mb-3">These Terms shall be governed by the laws of the United States. These Terms, together with our Privacy Policy, constitute the entire agreement between you and ASC Verify regarding the Service.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>14. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>15. Contact Information</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
            <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
              <p className="mb-2 text-sm"><strong style={{ color: NAVY }}>Email:</strong> <a href="mailto:legal@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>legal@ascverify.com</a></p>
              <p className="mb-2 text-sm"><strong style={{ color: NAVY }}>Support:</strong> <a href="mailto:support@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>support@ascverify.com</a></p>
              <p className="text-sm"><strong style={{ color: NAVY }}>Phone:</strong> <a href="tel:+18444353969" className="hover:underline" style={{ color: ACCENT }}>(844) 435-3969</a></p>
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
          <div className="border-t border-white/10 pt-6 text-center text-xs">
            &copy; 2025 ASC Verify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
