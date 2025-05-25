import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                🚀 Transformasi Digital Bisnis Anda
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Website Profesional untuk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Kesuksesan Bisnis
                </span>{" "}
                Anda
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Kami merancang dan mengembangkan website berkinerja tinggi yang
                meningkatkan kredibilitas bisnis dan menghasilkan lebih banyak
                leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Mulai Proyek Anda
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </motion.div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-700">4.9/5 (128 Reviews)</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {/* {[1, 2, 3, 4].map((item) => (
                    <Image
                      key={item}
                      src={`https://i.pravatar.cc/150?img=${item}`}
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))} */}
                </div>
                <span className="ml-2 text-gray-700">500+ Klien Puas</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-blue-200 rounded-2xl"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184685/growtika-YOEHA0Ou8ZY-unsplash_pxtgbx.jpg"
                    alt="Website Dashboard Preview"
                    layout="fill"
                    width={800} // tambahkan properti width
                    height={600} // tambahkan properti height
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-1 rounded mr-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-light">Loading Speed</p>
                      <p className="font-bold">0.8s</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
