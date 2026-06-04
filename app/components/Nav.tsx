import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/ASC Verify.png"
                alt="ASC Verify"
                width={500}
                height={167}
                className="h-24 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">
                Terms
              </Link>
              <Link
                href="/consumer"
                className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                For Consumers
              </Link>
              <Link
                href="/business"
                className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                For Businesses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
