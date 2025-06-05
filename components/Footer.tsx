import Link from 'next/link'; // Next.js Link component
import { Linkedin, Twitter, Github } from 'lucide-react'; // Lucide icons for social links

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:py-8 md:py-10 lg:py-12">
      <div className="container mx-auto">
          {/* Brand Section */}
          <div className="flex flex-row items-center justify-between sm:items-start text-center sm:text-left">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Link href="/" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  {/* Placeholder for logo icon */}
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  </svg>
                </Link>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold">LinkDoc</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
              Simplifying document sharing for modern professionals.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-transform duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-transform duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-transform duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Empty Column for Spacing on Larger Screens */}
          <div className="hidden lg:block"></div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 LinkDoc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}