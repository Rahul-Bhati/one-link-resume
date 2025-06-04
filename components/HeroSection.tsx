import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50" data-id="8m7q89cnz" data-path="src/components/HeroSection.tsx">
      <div className="container mx-auto max-w-6xl" data-id="xukioxagw" data-path="src/components/HeroSection.tsx">
        <div className="flex flex-col md:flex-row items-center gap-12" data-id="ang2ssf99" data-path="src/components/HeroSection.tsx">
          <div className="flex-1 text-center md:text-left" data-id="wyin8apgg" data-path="src/components/HeroSection.tsx">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600" data-id="1rwp5h4zp" data-path="src/components/HeroSection.tsx">
              One Link.<br data-id="sf9uzeq7s" data-path="src/components/HeroSection.tsx" />Infinite Updates.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl" data-id="atm1td5ws" data-path="src/components/HeroSection.tsx">
              Stop resending your resume. Share a single smart link that always stays fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-id="x61eg1qkh" data-path="src/components/HeroSection.tsx">
              <Link href={"/dashboard"}
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-6 h-auto text-lg">
                Create Your Link
              </Link>
              <Button
                variant="outline"
                className="px-8 py-6 h-auto text-lg border-indigo-200 hover:bg-indigo-50 text-indigo-600">

                How It Works
              </Button>
            </div>
          </div>
          <div className="flex-1 relative" data-id="w8w0k1jxa" data-path="src/components/HeroSection.tsx">
            <div className="bg-white p-6 rounded-2xl shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-300" data-id="m8a8b73rl" data-path="src/components/HeroSection.tsx">
              <div className="flex justify-between items-center mb-4" data-id="xvfes503x" data-path="src/components/HeroSection.tsx">
                <div className="flex space-x-2" data-id="0h413jxi7" data-path="src/components/HeroSection.tsx">
                  <div className="w-3 h-3 rounded-full bg-red-400" data-id="svwkb20q0" data-path="src/components/HeroSection.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400" data-id="gttq3ijv9" data-path="src/components/HeroSection.tsx"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400" data-id="vcus5oi1y" data-path="src/components/HeroSection.tsx"></div>
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600" data-id="s38v1xik3" data-path="src/components/HeroSection.tsx">
                  unilink.app/yourname
                </div>
              </div>
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex flex-col items-center justify-center" data-id="aduuc8wsy" data-path="src/components/HeroSection.tsx">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm w-3/4" data-id="wohusprjv" data-path="src/components/HeroSection.tsx">
                  <div className="w-1/2 h-2 bg-indigo-200 rounded mb-3" data-id="xqb592of8" data-path="src/components/HeroSection.tsx"></div>
                  <div className="w-3/4 h-2 bg-indigo-200 rounded mb-3" data-id="jz0yq9fhs" data-path="src/components/HeroSection.tsx"></div>
                  <div className="w-2/3 h-2 bg-indigo-200 rounded" data-id="elt8ed86i" data-path="src/components/HeroSection.tsx"></div>
                </div>
                <div className="text-indigo-600 mt-6 font-medium" data-id="ylrg6vunk" data-path="src/components/HeroSection.tsx">Resume always up-to-date</div>
              </div>
              <div className="mt-4 bg-gray-50 p-3 rounded-lg flex justify-between items-center" data-id="10w6g2jl0" data-path="src/components/HeroSection.tsx">
                <div className="text-sm text-gray-500" data-id="q1b2cfofq" data-path="src/components/HeroSection.tsx">214 views • 17 clicks last week</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" data-id="iehe0mwxe" data-path="src/components/HeroSection.tsx">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-id="wlpq82dcr" data-path="src/components/HeroSection.tsx" />

                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform translate-x-4 translate-y-4 -z-0" data-id="6sgs0cgwz" data-path="src/components/HeroSection.tsx"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;