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

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: '#94a3b8' }}>Last Updated: December 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>1. Introduction</h2>
            <p>ASC Verify ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our personal concierge service and website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>2. Information We Collect</h2>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>2.1 Information You Provide</h3>
            <p className="mb-3">When you sign up for our service, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and employee ID</li>
              <li>Account credentials</li>
              <li>Payment information (processed by third-party payment processors)</li>
            </ul>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
            </ul>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>2.3 Mobile Information Sharing</h3>
            <p className="mb-4"><strong>No mobile information will be shared or sold to third parties for marketing purposes.</strong> We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our concierge service</li>
              <li>Process your transactions and manage your account</li>
              <li>Send you service-related communications</li>
              <li>Improve our service and develop new features</li>
              <li>Ensure compliance with carrier requirements and regulations</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>4. Information Sharing and Disclosure</h2>
            <p className="mb-3">We may share your information with:</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>4.1 Service Providers</h3>
            <p className="mb-3">Third-party vendors who perform services on our behalf, such as hosting, analytics, payment processing, and customer support. These providers are contractually obligated to protect your information.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>4.2 Business Transfers</h3>
            <p className="mb-3">In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>4.3 Legal Requirements</h3>
            <p className="mb-3">When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
            <h3 className="font-semibold mb-2" style={{ color: NAVY }}>4.4 With Your Consent</h3>
            <p>We may share your information for any other purpose with your explicit consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>5. Data Security</h2>
            <p className="mb-3">We implement appropriate technical and organizational security measures including:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Secure hosting infrastructure with regular security audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
            </ul>
            <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>6. Data Retention</h2>
            <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>7. Your Rights and Choices</h2>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:privacy@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>privacy@ascverify.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>8. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service. You can instruct your browser to refuse all cookies, though some portions of our service may not function properly without them.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>9. Children&apos;s Privacy</h2>
            <p>Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>10. California Privacy Rights</h2>
            <p>If you are a California resident, you have specific rights under the CCPA, including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. We do not sell personal information.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>12. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
              <p className="mb-2 text-sm"><strong style={{ color: NAVY }}>Email:</strong> <a href="mailto:privacy@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>privacy@ascverify.com</a></p>
              <p className="mb-2 text-sm"><strong style={{ color: NAVY }}>Support:</strong> <a href="mailto:support@ascverify.com" className="hover:underline" style={{ color: ACCENT }}>support@ascverify.com</a></p>
              <p className="text-sm"><strong style={{ color: NAVY }}>Phone:</strong> <a href="tel:+18445461613" className="hover:underline" style={{ color: ACCENT }}>(844) 546-1613</a></p>
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
                <li>(844) 546-1613</li>
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
