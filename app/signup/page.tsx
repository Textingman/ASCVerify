'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NAVY = '#0f2744';
const ACCENT = '#0d9488';
const ACCENT_BG = '#f0fdfa';
const IVORY = '#faf8f4';

type Step = 1 | 2 | 3;

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const [su, setSu] = useState({
    firstName: '', lastName: '', workEmail: '', employerId: '', accessCode: '',
    phone: '', smsOptIn: false,
    password: '', confirmPassword: '', termsAccepted: false, privacyAccepted: false,
  });

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

  const Checkbox = ({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: React.ReactNode }) => (
    <label className="flex items-start gap-3 cursor-pointer">
      <div
        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
        style={{ background: checked ? ACCENT : '#fff', border: checked ? 'none' : '1px solid #e8e4dc' }}
        onClick={onChange}
      >
        {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className="text-sm leading-relaxed text-gray-600">{children}</span>
    </label>
  );

  const handleStep1 = () => {
    setError('');
    if (!su.firstName || !su.lastName || !su.workEmail || !su.employerId || !su.accessCode) { setError('Please fill in all fields.'); return; }
    if (!su.workEmail.includes('@')) { setError('Please enter a valid work email.'); return; }
    setStep(2);
  };
  const handleStep2 = () => {
    setError('');
    if (!su.phone) { setError('Please enter your mobile phone number.'); return; }
    setStep(3);
  };
  const handleStep3 = () => {
    setError('');
    if (!su.password || !su.confirmPassword) { setError('Please enter and confirm your password.'); return; }
    if (su.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (su.password !== su.confirmPassword) { setError('Passwords do not match.'); return; }
    if (!su.termsAccepted) { setError('You must accept the Terms of Service.'); return; }
    if (!su.privacyAccepted) { setError('You must accept the Privacy Policy.'); return; }
    setDone(true);
  };

  const steps = [
    { n: 1, label: 'Identity' },
    { n: 2, label: 'Opt-Ins' },
    { n: 3, label: 'Password' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: IVORY }}>
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e8e4dc', boxShadow: '0 4px 24px rgba(15,39,68,0.08)' }}>
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${NAVY}, ${ACCENT})` }} />

          <div className="p-8 sm:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Link href="/">
                <Image src="/ASC Verify Logo.png" alt="ASC Verify" width={160} height={54} className="h-12 w-auto" />
              </Link>
            </div>

            {!done && (
              <>
                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {steps.map((s, i) => (
                    <div key={s.n} className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                          style={{
                            background: step >= s.n ? NAVY : '#f3f4f6',
                            color: step >= s.n ? 'white' : '#9ca3af',
                            border: step === s.n ? `2px solid ${ACCENT}` : '2px solid transparent',
                          }}
                        >
                          {step > s.n ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> : s.n}
                        </div>
                        <span className="text-xs mt-1" style={{ color: step >= s.n ? NAVY : '#9ca3af' }}>{s.label}</span>
                      </div>
                      {i < steps.length - 1 && <div className="w-6 h-px mb-4" style={{ background: step > s.n ? ACCENT : '#e8e4dc' }} />}
                    </div>
                  ))}
                </div>

                {/* Error */}
                {error && (
                  <div className="mb-5 px-4 py-3 rounded-xl text-sm text-red-700" style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                    {error}
                  </div>
                )}
              </>
            )}

            {/* ── STEP 1: Identity ── */}
            {!done && step === 1 && (
              <div>
                <h1 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Create your account</h1>
                <p className="text-sm mb-5 text-gray-500">Enter your employee information to get started.</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>First Name</label>
                    <input type="text" value={su.firstName} onChange={e => setSu({ ...su, firstName: e.target.value })} placeholder="Jane" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block mb-1.5" style={labelStyle}>Last Name</label>
                    <input type="text" value={su.lastName} onChange={e => setSu({ ...su, lastName: e.target.value })} placeholder="Smith" style={inputStyle} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1.5" style={labelStyle}>Work Email</label>
                  <input type="email" value={su.workEmail} onChange={e => setSu({ ...su, workEmail: e.target.value })} placeholder="jane@company.com" style={inputStyle} />
                </div>
                <div className="mb-4">
                  <label className="block mb-1.5" style={labelStyle}>Employer ID</label>
                  <input type="text" value={su.employerId} onChange={e => setSu({ ...su, employerId: e.target.value })} placeholder="EMP-12345" style={inputStyle} />
                  <p className="text-xs mt-1 text-gray-400">Found on your employee badge or HR portal</p>
                </div>
                <div className="mb-6">
                  <label className="block mb-1.5" style={labelStyle}>Access Code</label>
                  <input type="text" value={su.accessCode} onChange={e => setSu({ ...su, accessCode: e.target.value })} placeholder="e.g. ACME-2025" style={inputStyle} />
                  <p className="text-xs mt-1 text-gray-400">Provided by your HR department or benefits administrator</p>
                </div>
                <button onClick={handleStep1} className="w-full py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={{ background: NAVY }}>
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* ── STEP 2: Opt-Ins ── */}
            {!done && step === 2 && (
              <div>
                <h1 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Communication preferences</h1>
                <p className="text-sm mb-5 text-gray-500">Choose how you&apos;d like to receive concierge updates.</p>

                <div className="mb-5">
                  <label className="block mb-1.5" style={labelStyle}>Mobile Phone Number</label>
                  <input type="tel" value={su.phone} onChange={e => setSu({ ...su, phone: e.target.value })} placeholder="(555) 000-0000" style={inputStyle} />
                </div>

                {/* SMS opt-in — optional */}
                <div className="mb-2 rounded-xl p-1.5 text-center" style={{ background: '#f3f4f6' }}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Optional — SMS Updates</p>
                </div>
                <div className="mb-4 rounded-xl p-4" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}30` }}>
                  <Checkbox checked={su.smsOptIn} onChange={() => setSu({ ...su, smsOptIn: !su.smsOptIn })}>
                    <span>
                      By checking this box and submitting this form, you agree to receive concierge service text messages from ASC Verify and agree to our <Link href="/terms" className="underline" style={{ color: NAVY }}>Terms &amp; Conditions</Link> and <Link href="/privacy" className="underline" style={{ color: NAVY }}>Privacy Policy</Link>. I understand I may opt out of SMS communication by replying &apos;STOP&apos;. Reply HELP or email <a href="mailto:support@ascverify.com" className="underline" style={{ color: NAVY }}>support@ascverify.com</a> for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by ASC Verify. I also agree to the <Link href="/terms" className="underline" style={{ color: NAVY }}>Terms of Service</Link> and <Link href="/privacy" className="underline" style={{ color: NAVY }}>Privacy Policy</Link>.
                    </span>
                  </Checkbox>
                </div>
                <p className="text-xs text-gray-400 mb-5 text-center">
                  SMS is optional. Check the box above only if you&apos;d like task updates sent to your phone.
                </p>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl text-base font-semibold" style={{ background: '#fff', border: '1px solid #e8e4dc', color: '#6b7280' }}>← Back</button>
                  <button onClick={handleStep2} className="flex-1 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={{ background: NAVY }}>
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 3: Password ── */}
            {!done && step === 3 && (
              <div>
                <h1 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Set your password</h1>
                <p className="text-sm mb-5 text-gray-500">Choose a secure password for your account.</p>

                <div className="mb-4">
                  <label className="block mb-1.5" style={labelStyle}>Password</label>
                  <input type="password" value={su.password} onChange={e => setSu({ ...su, password: e.target.value })} placeholder="Min. 8 characters" style={inputStyle} />
                </div>
                <div className="mb-5">
                  <label className="block mb-1.5" style={labelStyle}>Confirm Password</label>
                  <input type="password" value={su.confirmPassword} onChange={e => setSu({ ...su, confirmPassword: e.target.value })} placeholder="Re-enter password" style={inputStyle} />
                </div>

                <div className="space-y-3 mb-6">
                  <Checkbox checked={su.termsAccepted} onChange={() => setSu({ ...su, termsAccepted: !su.termsAccepted })}>
                    I have read and agree to the{' '}
                    <Link href="/terms" className="underline text-gray-600">Terms of Service</Link>.
                  </Checkbox>
                  <Checkbox checked={su.privacyAccepted} onChange={() => setSu({ ...su, privacyAccepted: !su.privacyAccepted })}>
                    I have read and agree to the{' '}
                    <Link href="/privacy" className="underline text-gray-600">Privacy Policy</Link>.
                  </Checkbox>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl text-base font-semibold" style={{ background: '#fff', border: '1px solid #e8e4dc', color: '#6b7280' }}>← Back</button>
                  <button onClick={handleStep3} className="flex-1 py-4 rounded-xl text-base font-semibold text-white" style={{ background: NAVY }}>Create Account</button>
                </div>
              </div>
            )}

            {/* ── SUCCESS ── */}
            {done && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_BG }}>
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: NAVY }}>You&apos;re all set!</h2>
                <p className="text-sm mb-6 text-gray-500">
                  Your account has been created.{su.smsOptIn ? ' You\'ll receive a confirmation text shortly.' : ''} Sign in to submit your first concierge request.
                </p>
                <Link href="/login" className="w-full py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2" style={{ background: NAVY }}>
                  Sign In <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Footer */}
            {!done && (
              <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid #e8e4dc' }}>
                <p className="text-sm text-gray-500">
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold hover:underline" style={{ color: NAVY }}>Sign in →</Link>
                </p>
              </div>
            )}

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
