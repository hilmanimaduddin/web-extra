import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
              WebExtra
            </span>
            <span className="ml-1 text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
              PRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Layanan
            </Link>
            <Link
              href="/portfolio"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </Link>
            {/* <Link
              href="/pricing"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Harga
            </Link> */}
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-blue-700"
            >
              Hubungi Kami
            </Link>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-lg mt-4 p-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Layanan
              </Link>
              <Link
                href="/portfolio"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              {/* <Link
                href="/pricing"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Harga
              </Link> */}
              <Link
                href="/about"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center mt-4 hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
