import Link from 'next/link';
import { Shield, Lock, CheckCircle, Target, Users, Zap } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About ASC Verify
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building the trust layer for the modern digital economy — connecting identity verification, consumer privacy, and carrier-compliant SMS infrastructure into one unified platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              ASC Verify was built to solve a fundamental problem in digital communications: businesses need to verify who they&apos;re talking to, and consumers need to protect their personal data — but existing solutions force a trade-off between the two.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We eliminate that trade-off. Our platform gives businesses carrier-grade identity verification and compliant SMS infrastructure, while simultaneously giving consumers a privacy proxy that keeps their real phone number hidden.
            </p>
            <p className="text-lg text-gray-600">
              The result: businesses can trust their customers, consumers can control their data, and everyone stays compliant with carrier rules, TCPA, and 10DLC requirements — automatically.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#2563eb]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Identity First</h3>
                  <p className="text-gray-600">
                    Carrier-grade phone number verification confirms real identities without friction — for businesses and consumers alike.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Lock className="w-8 h-8 text-[#2563eb]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy by Design</h3>
                  <p className="text-gray-600">
                    Our privacy proxy ensures consumers&apos; real phone numbers are never exposed to businesses or third parties.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-[#2563eb]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Built In</h3>
                  <p className="text-gray-600">
                    10DLC-ready infrastructure, consent management, and audit trails — baked in, not bolted on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-xl text-gray-600">
              A full-stack trust platform serving both sides of every digital interaction
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Identity Solutions
              </h3>
              <p className="text-gray-600 text-center">
                Verify customers instantly with carrier-grade phone number verification and identity checks that reduce fraud and boost conversion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center mb-4">
                <Lock className="w-12 h-12 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Privacy Infrastructure
              </h3>
              <p className="text-gray-600 text-center">
                Give consumers a privacy proxy so their real phone number is never exposed — building trust that drives long-term engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-[#2563eb]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Compliance Tools
              </h3>
              <p className="text-gray-600 text-center">
                Stay carrier-compliant with 10DLC-ready infrastructure, consent management, and audit trails that protect your business automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
          <p className="text-xl text-gray-600">
            Trusted by companies that value identity, privacy, and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Carrier-Grade Verification</h3>
            <p className="text-gray-600">
              Real identity checks powered by carrier-level data — not just OTP codes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dual-Sided Platform</h3>
            <p className="text-gray-600">
              Serve both businesses and consumers from a single unified trust infrastructure.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
            <p className="text-gray-600">
              Global CDN and optimized infrastructure ensure fast, reliable delivery worldwide.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Integration</h3>
            <p className="text-gray-600">
              Simple URL-based integration with comprehensive documentation to get you live fast.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="bg-[#1e1e24] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-400">
              ASC Verify is built for both sides of every digital interaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2a32] rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Businesses</h3>
              </div>
              <p className="text-gray-300 mb-6">
                From startups to enterprises, we give businesses the tools to verify customer identity, deliver compliant SMS, and build trust at scale — without the compliance headache.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  Instant identity verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  Carrier-compliant SMS infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  Consent management &amp; audit trails
                </li>
              </ul>
              <Link
                href="/business"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Started for Business →
              </Link>
            </div>
            <div className="bg-[#2a2a32] rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Consumers</h3>
              </div>
              <p className="text-gray-300 mb-6">
                We give everyday people a privacy proxy that keeps their real phone number hidden, puts them in control of who can contact them, and makes opting out instant.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                  Your real number stays hidden
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                  One dashboard, all your apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
                  Instant opt-out control
                </li>
              </ul>
              <Link
                href="/consumer"
                className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Protect My Privacy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2563eb] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build on Trust?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a business verifying customers or a consumer protecting your privacy, ASC Verify has you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="inline-block px-8 py-4 bg-white text-[#2563eb] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started for Business
            </Link>
            <Link
              href="/consumer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Protect My Privacy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
