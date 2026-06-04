import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">SMS Terms &amp; Conditions</h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. SMS Notifications</h2>
          <p className="text-gray-600 mb-6">
            ASC Verify sends SMS notifications solely for account alert purposes — to inform users of updates and changes to their account. These messages are strictly transactional and are not promotional or marketing in nature. Examples of account alert notifications include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Account updates and changes to your account settings</li>
            <li>Account status changes and important notices</li>
            <li>Security alerts related to your account activity</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Message Frequency</h2>
          <p className="text-gray-600 mb-6">
            Message frequency varies based on account activity. You will only receive an SMS when a relevant event occurs in your account. ASC Verify does not send recurring scheduled messages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Opt-Out</h2>
          <p className="text-gray-600 mb-6">
            You may opt out of SMS notifications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS notifications from ASC Verify. To re-enable notifications, reply <strong>START</strong> or contact us at <a href="mailto:support@ascverify.com" className="text-[#2563eb] hover:text-[#1d4ed8]">support@ascverify.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Help</h2>
          <p className="text-gray-600 mb-6">
            For assistance, reply <strong>HELP</strong> to any SMS message or contact us at <a href="mailto:support@ascverify.com" className="text-[#2563eb] hover:text-[#1d4ed8]">support@ascverify.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Carrier Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            Message and data rates may apply. ASC Verify is not responsible for any charges incurred from your mobile carrier in connection with SMS notifications. Please contact your carrier for details on your messaging plan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Privacy</h2>
          <p className="text-gray-600 mb-6">
            Your phone number and SMS activity are handled in accordance with our <Link href="/privacy" className="text-[#2563eb] hover:text-[#1d4ed8] font-medium">Privacy Policy</Link>. We do not sell or share your phone number with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about these SMS Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@ascverify.com" className="text-[#2563eb] hover:text-[#1d4ed8]">support@ascverify.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Legal:</strong> <a href="mailto:legal@ascverify.com" className="text-[#2563eb] hover:text-[#1d4ed8]">legal@ascverify.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-[#2563eb] hover:text-[#1d4ed8]">https://ascverify.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
