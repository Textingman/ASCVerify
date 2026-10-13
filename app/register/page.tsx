'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Step = 1 | 2 | 3;

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1 fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  // Step 2 fields
  const [phone, setPhone] = useState('');
  const [smsOptIn, setSmsOptIn] = useState(false);

  // Step 3 fields
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState('');

  const bgStyle = { background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' };
  const cardStyle = {
    background: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
  };
  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
  };
  const labelStyle = { color: 'rgba(148,163,184,1)' };
  const btnStyle = {
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    boxShadow: '0 4px 24px rgba(37,99,235,0.35)',
  };

  const handleStep1 = () => {
    setError('');
    if (!firstName || !lastName || !workEmail || !employeeId) {
      setError('Please fill in all fields.');
      return;
    }
    if (!workEmail.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }
    setStep(2);
  };

  const handleStep2 = () => {
    setError('');
    if (!phone) {
      setError('Please enter your mobile phone number.');
      return;
    }
    if (!smsOptIn) {
      setError('You must opt in to SMS to use this service.');
      return;
    }
    setStep(3);
  };

  const handleStep3 = () => {
    setError('');
    if (!password || !confirmPassword) {
      setError('Please enter and confirm your password.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!termsAccepted) {
      setError('You must accept the Terms & Privacy Policy.');
      return;
    }
    setSubmitted(true);
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.border = '1px solid rgba(37,99,235,0.6)';
    e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)';
    e.target.style.outline = 'none';
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.border = '1px solid rgba(255,255,255,0.1)';
    e.target.style.boxShadow = 'none';
  };

  const steps = [
    { num: 1, label: 'Identity' },
    { num: 2, label: 'SMS Opt-In' },
    { num: 3, label: 'Password' },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={bgStyle}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative w-full max-w-md text-center">
          <div className="absolute -inset-1 rounded-3xl opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }} />
          <div className="relative rounded-2xl overflow-hidden" style={cardStyle}>
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)' }} />
            <div className="p-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2))', border: '1px solid rgba(37,99,235,0.3)' }}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="url(#grad-check)" strokeWidth={2}>
                  <defs>
                    <linearGradient id="grad-check" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-3">You're all set!</h1>
              <p className="text-sm mb-8" style={labelStyle}>
                Your employee account has been created. You'll receive a confirmation SMS shortly.
              </p>
              <Link href="/login" className="block w-full py-4 rounded-xl text-base font-semibold text-white text-center" style={btnStyle}>
                Go to Employee Login →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10" style={bgStyle}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative w-full max-w-md">
        <div className="absolute -inset-1 rounded-3xl opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }} />

        <div className="relative rounded-2xl overflow-hidden" style={cardStyle}>
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)' }} />

          <div className="p-8 sm:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={160} height={54} className="h-12 w-auto" />
            </div>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{
                        background: step >= s.num ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'rgba(255,255,255,0.08)',
                        color: step >= s.num ? 'white' : 'rgba(100,116,139,1)',
                        border: step === s.num ? '2px solid rgba(37,99,235,0.6)' : '2px solid transparent',
                        boxShadow: step === s.num ? '0 0 12px rgba(37,99,235,0.4)' : 'none',
                      }}
                    >
                      {step > s.num ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : s.num}
                    </div>
                    <span className="text-xs mt-1" style={{ color: step >= s.num ? 'rgba(148,163,184,1)' : 'rgba(71,85,105,1)' }}>{s.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-8 h-px mb-4" style={{ background: step > s.num ? 'linear-gradient(90deg, #2563eb, #7c3aed)' : 'rgba(255,255,255,0.1)' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 px-4 py-3 rounded-xl text-sm text-red-300" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </div>
            )}

            {/* ── STEP 1: Identity ── */}
            {step === 1 && (
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Create Your Account</h1>
                <p className="text-sm mb-6" style={labelStyle}>Enter your employee information to get started.</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>First Name</label>
                    <input
                      type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                      placeholder="Jane"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Last Name</label>
                    <input
                      type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                      placeholder="Smith"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Work Email</label>
                  <input
                    type="email" value={workEmail} onChange={e => setWorkEmail(e.target.value)}
                    placeholder="jane.smith@company.com"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Employee ID</label>
                  <input
                    type="text" value={employeeId} onChange={e => setEmployeeId(e.target.value)}
                    placeholder="EMP-12345"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                  />
                  <p className="text-xs mt-1.5" style={{ color: 'rgba(71,85,105,1)' }}>Found on your employee badge or HR portal</p>
                </div>

                <button onClick={handleStep1} className="w-full py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={btnStyle}>
                  Continue <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
              </div>
            )}

            {/* ── STEP 2: SMS Opt-In ── */}
            {step === 2 && (
              <div>
                <h1 className="text-xl font-bold text-white mb-1">SMS Opt-In</h1>
                <p className="text-sm mb-6" style={labelStyle}>We'll send you concierge updates and service confirmations via text.</p>

                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Mobile Phone Number</label>
                  <input
                    type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                {/* SMS Opt-In consent box */}
                <div className="mb-6 rounded-xl p-4" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox" checked={smsOptIn} onChange={e => setSmsOptIn(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center transition-all"
                        style={{
                          background: smsOptIn ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'rgba(255,255,255,0.05)',
                          border: smsOptIn ? 'none' : '1px solid rgba(255,255,255,0.2)',
                        }}
                        onClick={() => setSmsOptIn(!smsOptIn)}
                      >
                        {smsOptIn && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,1)' }}>
                      <span className="font-semibold text-white">I agree to receive SMS messages</span> from ASC Verify regarding my concierge service requests, appointment confirmations, and account updates. Message & data rates may apply. Reply STOP to opt out at any time.
                    </span>
                  </label>
                </div>

                {/* TCPA disclosure */}
                <div className="mb-6 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(71,85,105,1)' }}>
                    By opting in, you consent to receive automated text messages from ASC Verify at the number provided. This consent is not a condition of purchase or employment. Message frequency varies. For help, reply HELP. View our{' '}
                    <Link href="/privacy" className="underline" style={{ color: 'rgba(100,116,139,1)' }}>Privacy Policy</Link>{' '}and{' '}
                    <Link href="/terms" className="underline" style={{ color: 'rgba(100,116,139,1)' }}>Terms of Service</Link>.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(148,163,184,1)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    ← Back
                  </button>
                  <button onClick={handleStep2} className="flex-1 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={btnStyle}>
                    Continue <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Password ── */}
            {step === 3 && (
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Set Your Password</h1>
                <p className="text-sm mb-6" style={labelStyle}>Choose a secure password for your employee account.</p>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Password</label>
                  <input
                    type="password" value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={labelStyle}>Confirm Password</label>
                  <input
                    type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
                  />
                </div>

                {/* Terms checkbox */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center transition-all"
                        style={{
                          background: termsAccepted ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'rgba(255,255,255,0.05)',
                          border: termsAccepted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                        }}
                        onClick={() => setTermsAccepted(!termsAccepted)}
                      >
                        {termsAccepted && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(148,163,184,1)' }}>
                      I agree to the{' '}
                      <Link href="/terms" className="underline" style={{ color: 'rgba(148,163,184,1)' }}>Terms of Service</Link>{' '}and{' '}
                      <Link href="/privacy" className="underline" style={{ color: 'rgba(148,163,184,1)' }}>Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(148,163,184,1)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    ← Back
                  </button>
                  <button onClick={handleStep3} className="flex-1 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={btnStyle}>
                    Create Account
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-xs" style={{ color: 'rgba(100,116,139,1)' }}>
                Already have an account?{' '}
                <Link href="/login" className="font-semibold" style={{ color: 'rgba(148,163,184,1)' }}>Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
