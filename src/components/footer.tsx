import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolom 1: Tentang Perusahaan */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-blue-600 w-2 h-6 mr-2 rounded-full"></span>
              WebExtra
            </h3>
            <p className="text-gray-400 mb-6">
              Spesialis pembuatan website profesional dengan teknologi terkini
              untuk membantu bisnis Anda tumbuh di era digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Layanan */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/company-website"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website Perusahaan
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Toko Online
                </Link>
              </li>
              <li>
                <Link
                  href="/services/portfolio-website"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-webapp"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Aplikasi Web Kustom
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Optimasi SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Link Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Jl. Teknologi No. 123, Jakarta Selatan, Indonesia 12560
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+6281234567890"
                  className="hover:text-white transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hello@webextra.id"
                  className="hover:text-white transition-colors"
                >
                  hello@webextra.id
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">
                Berlangganan Newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WebExtra. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
