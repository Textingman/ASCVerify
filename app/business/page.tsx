'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle, Zap, Users, Shield, FileText, RotateCcw, Mail, Building, Phone, User } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function BusinessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    smsConsent: false,
    termsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <section className="bg-gradient-to-b from-orange-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">Enterprise Identity Infrastructure</p>
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
            Verify Identity.
            <span className="block text-orange-500">Reduce Risk.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            ASC Verify provides carrier-compliant identity verification and consent management infrastructure — purpose-built for businesses that operate at scale and cannot afford compliance failures.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#signup"
              className="inline-block px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Request Access
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-4 bg-transparent border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Built for Compliance-Critical Operations</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            ASC Verify is designed for organizations where identity accuracy, consent documentation, and regulatory adherence are non-negotiable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Rapid Deployment</h3>
            <p className="text-gray-600 text-center">
              No SDK. No lengthy integration cycles. A single URL parameter is all that is required to begin verifying identities at scale.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">High-Performance Infrastructure</h3>
            <p className="text-gray-600 text-center">
              Engineered for reliability and speed across mobile networks. Consistent performance under high-volume, real-world conditions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Multi-Brand Architecture</h3>
            <p className="text-gray-600 text-center">
              Operate multiple brands under a single account with isolated configurations, routing, and white-label presentation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Platform Capabilities</h2>
            <p className="mt-4 text-xl text-gray-600">A unified infrastructure layer for identity, consent, and compliance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Shield className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identity Verification</h3>
              <p className="text-gray-600">
                Deliver a verification link to a user&apos;s device. Upon confirmation, your system receives a verified identity signal — completed in seconds, with a full audit trail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <FileText className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consent & Document Management</h3>
              <p className="text-gray-600">
                Deliver contracts, disclosures, and e-signature requests directly to verified identities. Every interaction is logged and timestamped for compliance purposes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <RotateCcw className="w-10 h-10 text-[#2563eb] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Re-Engagement Workflows</h3>
              <p className="text-gray-600">
                Recover incomplete verification flows with automated, carrier-compliant follow-up sequences. Maintain compliance while improving completion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Organizations Choose ASC Verify</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Carrier Compliant</h3>
            <p className="text-gray-600 text-sm">10DLC-registered infrastructure built to carrier specification, reducing the risk of message filtering or account suspension.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Integration Overhead</h3>
            <p className="text-gray-600 text-sm">Integrate via a single URL parameter. Compatible with any CRM, marketing platform, or custom workflow.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Brand Ready</h3>
            <p className="text-gray-600 text-sm">Manage multiple brands under one account with independent styling, routing, and compliance configurations.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Consent Records</h3>
            <p className="text-gray-600 text-sm">Every verification automatically captures, timestamps, and stores opt-in consent — ready for audit or regulatory review.</p>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Request Access</h2>
            <p className="mt-4 text-xl text-gray-600">
              Submit your information below and a member of our team will follow up within one business day.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for your interest in ASC Verify. A member of our team will be in touch within one business day.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
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
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Use Case (optional) */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your use case <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={4}
                    value={formData.useCase}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="How do you plan to use ASC Verify?"
                  />
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
                      className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded flex-shrink-0"
                    />
                    <label htmlFor="smsConsent" className="ml-3 text-sm leading-relaxed text-gray-700">
                      By checking this box and submitting this form, you agree to receive account alert related text messages from ASC Verify. I understand I may opt out of SMS communication by replying STOP. Reply HELP or email <a href="mailto:support@ascverify.com" className="text-orange-500 hover:text-orange-600">support@ascverify.com</a> for help. Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by ASC Verify.
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
                      className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded flex-shrink-0"
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
                      : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
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
