import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3b3a41] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ASC Verify</h3>
            <p className="text-gray-400">
              Identity, privacy, and compliance infrastructure for businesses and consumers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/consumer" className="text-gray-400 hover:text-white">
                  For Consumers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sms-terms" className="text-gray-400 hover:text-white">
                  SMS Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              support@ascverify.com
            </p>
            <p className="text-gray-400 mt-2">
              (555) 123-4567
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Business Address</h4>
            <div className="text-gray-400 space-y-1">
              <p>2000 NE 42nd Ave PMB 1251</p>
              <p>Portland, OR 97213</p>
              <p>United States of America</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center gap-4 text-gray-400">
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/asc-verify/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.869 0-2.155 1.46-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/>
              </svg>
            </a>
            {/* Google — link to be added later */}
            <span
              aria-label="Google"
              className="transition-colors cursor-not-allowed opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.805 10.023h-9.78v3.954h5.617c-.242 1.237-.977 2.286-2.08 2.988v2.484h3.368c1.97-1.816 3.105-4.49 3.105-7.426 0-.51-.046-1.002-.13-1.5z" fill="#4285F4"/>
                <path d="M12.025 22c2.7 0 4.963-.895 6.617-2.43l-3.368-2.484c-.895.6-2.04.955-3.249.955-2.497 0-4.613-1.687-5.37-3.953H3.18v2.563A9.997 9.997 0 0 0 12.025 22z" fill="#34A853"/>
                <path d="M6.655 14.088A5.99 5.99 0 0 1 6.34 12c0-.724.124-1.428.315-2.088V7.349H3.18A9.997 9.997 0 0 0 2.025 12c0 1.614.387 3.14 1.155 4.651l3.475-2.563z" fill="#FBBC05"/>
                <path d="M12.025 5.959c1.406 0 2.668.483 3.661 1.432l2.747-2.747C16.984 3.205 14.721 2 12.025 2A9.997 9.997 0 0 0 3.18 7.349l3.475 2.563c.757-2.266 2.873-3.953 5.37-3.953z" fill="#EA4335"/>
              </svg>
            </span>
          </div>
          <p>&copy; 2025 ASC Verify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
