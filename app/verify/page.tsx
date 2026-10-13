'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, MessageSquare } from 'lucide-react';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const IVORY = '#faf8f4';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (phoneParam) {
      setPhone(phoneParam);
    }
  }, [searchParams]);

  const handleConfirm = () => {
    setIsRedirecting(true);
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== 'phone') params.append(key, value);
    });
    const destination = searchParams.get('destination');
    if (destination) {
      window.location.href = `${destination}?${params.toString()}`;
    } else {
      // If no destination, just mark as done
      setIsRedirecting(false);
    }
  };

  const inputStyle = {
    background: '#fff',
    border: '1px solid #e8e4dc',
    color: NAVY,
    width: '100%',
    borderRadius: '12px',
    padding: '14px 16px',
    fontSize: '20px',
    fontWeight: 600,
    textAlign: 'center' as const,
    letterSpacing: '0.1em',
    outline: 'none',
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: IVORY }}>
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e8e4dc', boxShadow: '0 4px 24px rgba(15,39,68,0.08)' }}>
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${NAVY}, ${ACCENT})` }} />

          <div className="p-8 sm:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Link href="/">
                <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={160} height={54} className="h-12 w-auto" />
              </Link>
            </div>

            {/* Icon + heading */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5" style={{ background: ACCENT_BG }}>
                <MessageSquare className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
                Confirm Your Number
              </h1>
            </div>

            {/* Phone input */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2 text-gray-500">
                Mobile Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                style={inputStyle}
              />
            </div>

            {/* Submit button — always highlighted */}
            <button
              onClick={handleConfirm}
              disabled={isRedirecting}
              className="w-full py-4 rounded-xl text-base font-semibold text-white transition-all"
              style={{
                background: NAVY,
                cursor: isRedirecting ? 'not-allowed' : 'pointer',
                opacity: isRedirecting ? 0.7 : 1,
              }}
            >
              {isRedirecting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Confirming...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirm & Continue
                </span>
              )}
            </button>

            {/* Footer */}
            <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid #e8e4dc' }}>
              <p className="text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 inline mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secured by ASC Verify
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: IVORY }}>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-transparent animate-spin mx-auto" style={{ borderTopColor: NAVY, borderRightColor: ACCENT }} />
          <p className="mt-4 text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
