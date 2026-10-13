'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const IVORY = '#faf8f4';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const inputStyle = {
    background: '#fff',
    border: '1px solid #e8e4dc',
    color: NAVY,
    width: '100%',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
  };
  const labelStyle = { color: '#6b7280', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em' };

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

            <h1 className="text-2xl font-bold mb-1 text-center" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Welcome back</h1>
            <p className="text-sm mb-8 text-center text-gray-500">Sign in to access your concierge portal.</p>

            <form className="space-y-5">
              <div>
                <label className="block mb-1.5" style={labelStyle}>Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label style={labelStyle}>Password</label>
                  <button type="button" className="text-xs text-gray-400 hover:text-gray-600">Forgot password?</button>
                </div>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPw(!showPw)}
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2"
                style={{ background: NAVY }}
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid #e8e4dc' }}>
              <p className="text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  Create one here →
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 inline mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secured by ASC Verify
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          <Link href="/" className="hover:underline">← Back to home</Link>
        </p>
      </div>
    </div>
  );
}
