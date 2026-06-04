'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle, EyeOff, LayoutDashboard, XCircle, Mail, Phone, User } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ConsumerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    smsConsent: false,
    termsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Your Phone Number.
            <span className="block text-[#2563eb]">Your Privacy. Your Control.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            ASC Verify acts as a privacy proxy between you and the businesses you interact with. They get a verified signal — you keep your real number private, forever.
          </p>
          <div className="mt-10">
            <a
              href="#signup"
              className="inline-block px-8 py-4 bg-[#2563eb] text-white text-lg font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-lg"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, powerful privacy in three steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <EyeOff className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Your Number Stays Hidden
            </h3>
            <p className="text-gray-600 text-center">
              Businesses never see your real phone number. We route communications through our privacy layer so your identity stays protected.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <LayoutDashboard className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              One Dashboard, All Your Apps
            </h3>
            <p className="text-gray-600 text-center">
              See every business that has your proxy number in one place. Know exactly who can reach you and when.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <XCircle className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Instant Opt-Out Control
            </h3>
            <p className="text-gray-600 text-center">
              Pause or revoke any business&apos;s access instantly. No more spam. No more unwanted texts. You&apos;re in charge.
            </p>
          </div>
        </div>
      </section>

      {/* Mock Dashboard Feature */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Privacy Dashboard
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every subscription in one place. See which businesses have access to your proxy number, manage their permissions, and opt out with a single tap.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time view of all active subscriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pause any business without losing your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full message history and consent records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Permanent opt-out with one click</span>
                </li>
              </ul>
            </div>

            {/* Mock Dashboard UI */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-[#2563eb] px-6 py-4">
                <h3 className="text-white font-semibold text-lg">My Subscriptions</h3>
                <p className="text-blue-200 text-sm">Proxy: +1 (***) ***-4821</p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: 'Acme Insurance', type: 'Verification', status: 'Active', color: 'green' },
                  { name: 'Metro Realty', type: 'Document Delivery', status: 'Active', color: 'green' },
                  { name: 'QuickLoan Co.', type: 'Verification', status: 'Paused', color: 'yellow' },
                  { name: 'ShopDirect', type: 'Marketing', status: 'Paused', color: 'yellow' },
                  { name: 'OldBank Corp.', type: 'Notifications', status: 'Opted Out', color: 'red' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.type}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.color === 'green'
                          ? 'bg-green-100 text-green-700'
                          : item.color === 'yellow'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50 text-center">
                <p className="text-xs text-gray-500">Your real number is never shared with any of these businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="bg-blue-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Protect Your Privacy Today</h2>
            <p className="mt-4 text-xl text-gray-600">
              Sign up free and take control of who can reach you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">You&apos;re protected!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;ve received your signup. We&apos;ll reach out shortly to get your privacy proxy set up.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    This is the number we&apos;ll protect. It will never be shared with businesses.
                  </p>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-[#2563eb] focus:ring-[#2563eb] border-gray-300 rounded flex-shrink-0"
                    />
                    <label htmlFor="smsConsent" className="ml-3 text-sm leading-relaxed text-gray-700">
                      By checking this box and submitting this form, you agree to receive account alert related text messages from ASC Verify. I understand I may opt out of SMS communication by replying STOP. Reply HELP or email <a href="mailto:support@ascverify.com" className="text-[#2563eb] hover:text-[#1d4ed8]">support@ascverify.com</a> for help. Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by ASC Verify.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="termsConsent"
                      name="termsConsent"
                      required
                      checked={formData.termsConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-[#2563eb] focus:ring-[#2563eb] border-gray-300 rounded flex-shrink-0"
                    />
                    <label htmlFor="termsConsent" className="ml-3 text-sm leading-relaxed text-gray-700">
                      I agree to the{' '}
                      <Link href="/terms" className="text-[#e91e63] hover:text-[#c2185b] font-medium">
                        Terms &amp; Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-[#e91e63] hover:text-[#c2185b] font-medium">
                        Privacy Policy
                      </Link>
                      . *
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get Started Free'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
