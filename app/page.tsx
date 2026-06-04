import Link from 'next/link';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Identity. Privacy.
            <span className="block text-[#2563eb]">Compliance.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            ASC Verify builds identity verification, consumer privacy, and carrier-compliant SMS infrastructure — so businesses can trust their customers and consumers can protect their data.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What We Build</h2>
          <p className="mt-4 text-xl text-gray-600">
            A full-stack trust platform for the modern digital economy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Identity Solutions
            </h3>
            <p className="text-gray-600 text-center">
              Verify customers instantly with carrier-grade phone number verification and identity checks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Privacy Infrastructure
            </h3>
            <p className="text-gray-600 text-center">
              Give consumers a privacy proxy so their real phone number is never exposed to businesses.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Compliance Tools
            </h3>
            <p className="text-gray-600 text-center">
              Stay carrier-compliant with 10DLC-ready infrastructure, consent management, and audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are You? */}
      <section className="bg-[#1e1e24] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Who Are You?</h2>
            <p className="mt-4 text-xl text-gray-400">
              We built different experiences for businesses and consumers. Choose yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Card */}
            <Link href="/business" className="group block">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 px-8 py-10">
                  <h3 className="text-3xl font-extrabold text-white">I&apos;m a Business</h3>
                  <p className="mt-2 text-orange-100 text-lg">Verify customers. Boost conversions.</p>
                </div>
                <div className="bg-[#2a2a32] px-8 py-8">
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      Instant identity verification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      Smart document delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      Carrier-compliant SMS
                    </li>
                  </ul>
                  <span className="inline-block bg-orange-500 group-hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Get Started for Business →
                  </span>
                </div>
              </div>
            </Link>

            {/* Consumer Card */}
            <Link href="/consumer" className="group block">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 px-8 py-10">
                  <h3 className="text-3xl font-extrabold text-white">I&apos;m a Consumer</h3>
                  <p className="mt-2 text-gray-300 text-lg">Protect your number. Control your data.</p>
                </div>
                <div className="bg-[#2a2a32] px-8 py-8">
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
                  <span className="inline-block bg-[#2563eb] group-hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Protect My Privacy →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Built on Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Built on Trust</h2>
          <p className="mt-4 text-xl text-gray-600">
            Every layer of our platform is designed around three core pillars
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#2563eb]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Identity</h3>
            <p className="text-gray-600 text-lg">
              Know exactly who you&apos;re talking to. Our verification infrastructure confirms real identities without friction.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-[#2563eb]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h3>
            <p className="text-gray-600 text-lg">
              Consumers deserve control. We proxy communications so personal data never leaks to third parties.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#2563eb]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h3>
            <p className="text-gray-600 text-lg">
              Carrier rules, TCPA, and 10DLC requirements are baked in — not bolted on — so you stay compliant automatically.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
