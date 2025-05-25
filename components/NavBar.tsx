import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100" data-id="51p2j9nht" data-path="src/components/NavBar.tsx">
      <div className="container mx-auto flex justify-between items-center" data-id="hlbibaqef" data-path="src/components/NavBar.tsx">
        <div className="flex items-center" data-id="66dnckqx8" data-path="src/components/NavBar.tsx">
          <h1 className="text-xl font-bold text-purple-700" data-id="a6ct4x3nm" data-path="src/components/NavBar.tsx">
            Uni<span className="text-indigo-600" data-id="dr82vvlzg" data-path="src/components/NavBar.tsx">Link</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6" data-id="hu8b8h0ql" data-path="src/components/NavBar.tsx">
          <Button variant="link" className="text-gray-700 hover:text-indigo-600">Features</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600">How It Works</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600">Pricing</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600">Contact</Button>
          <Button variant="outline" className="font-medium">Log In</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Sign Up</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden" data-id="8mdf3v94e" data-path="src/components/NavBar.tsx">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1"
            aria-label="Menu">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6" data-id="nn8u2nlkz" data-path="src/components/NavBar.tsx">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} data-id="9slsdjk3e" data-path="src/components/NavBar.tsx" />

            </svg>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen &&
      <div className="md:hidden pt-4 pb-3 px-6 space-y-3 bg-white border-t" data-id="a57us1vb8" data-path="src/components/NavBar.tsx">
          <Button variant="link" className="text-gray-700 hover:text-indigo-600 w-full justify-start">Features</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600 w-full justify-start">How It Works</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600 w-full justify-start">Pricing</Button>
          <Button variant="link" className="text-gray-700 hover:text-indigo-600 w-full justify-start">Contact</Button>
          <div className="flex flex-col space-y-2 pt-2" data-id="kpr27ktix" data-path="src/components/NavBar.tsx">
            <Button variant="outline" className="w-full">Log In</Button>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Sign Up</Button>
          </div>
        </div>
      }
    </header>);

};

export default NavBar;