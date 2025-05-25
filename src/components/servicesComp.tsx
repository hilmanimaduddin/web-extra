import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaChartLine,
  FaCode,
  FaMobile,
  FaServer,
  FaShoppingCart,
} from "react-icons/fa";

const ServicesComp = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: "Website Perusahaan",
      description:
        "Desain profesional untuk meningkatkan kredibilitas bisnis Anda dengan fitur lengkap seperti halaman produk, blog, dan formulir kontak.",
      features: [
        "Desain responsif & modern",
        "Optimasi SEO",
        "Integrasi media sosial",
        "CMS mudah digunakan",
      ],
      price: "Mulai dari Rp 8.000.000",
    },
    {
      icon: <FaShoppingCart className="text-4xl text-blue-600" />,
      title: "Toko Online (E-Commerce)",
      description:
        "Solusi lengkap untuk memulai penjualan online dengan sistem pembayaran terintegrasi dan manajemen produk.",
      features: [
        "Multi metode pembayaran",
        "Manajemen stok otomatis",
        "Dashboard penjualan",
        "Mobile friendly",
      ],
      price: "Mulai dari Rp 15.000.000",
    },
    {
      icon: <FaMobile className="text-4xl text-blue-600" />,
      title: "Website Portfolio",
      description:
        "Tampilkan karya terbaik Anda dengan desain modern yang memukau, cocok untuk kreator konten dan profesional.",
      features: [
        "Gallery interaktif",
        "Animasi scroll halus",
        "Lightbox efek",
        "Formulir kontak",
      ],
      price: "Mulai dari Rp 6.500.000",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Optimasi SEO",
      description:
        "Tingkatkan peringkat website Anda di mesin pencari dan dapatkan lebih banyak traffic organik.",
      features: [
        "Audit website lengkap",
        "Optimasi konten",
        "Analisis keyword",
        "Laporan bulanan",
      ],
      price: "Mulai dari Rp 3.500.000/bulan",
    },
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: "Web Hosting & Maintenance",
      description:
        "Layanan hosting berkualitas tinggi dengan maintenance rutin untuk menjaga performa website.",
      features: [
        "SSL Gratis",
        "Backup harian",
        "Support 24/7",
        "Update berkala",
      ],
      price: "Mulai dari Rp 500.000/bulan",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi <span className="text-blue-600">Digital</span> untuk Bisnis
            Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pembuatan website berkualitas
            tinggi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">
                      FITUR UTAMA:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mt-auto">
                    {/* <p className="text-lg font-semibold text-blue-600 mb-4">
                      {service.price}
                    </p> */}
                    <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      Detail Layanan
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Custom Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8 text-white">
                <h3 className="text-xl font-bold text-center mb-4">
                  Butuh Solusi Khusus?
                </h3>
                <p className="text-center mb-6 opacity-90">
                  Kami juga menyediakan layanan custom sesuai kebutuhan unik
                  bisnis Anda.
                </p>

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-200 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Aplikasi Web Custom</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-200 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Sistem Manajemen Khusus</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-200 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Integrasi dengan Sistem Lain</span>
                  </li>
                </ul>

                <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm p-8 md:p-12 text-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proses Pembuatan Website Kami
              </h3>
              <p className="text-gray-600 mb-6">
                Setiap proyek kami kerjakan dengan metodologi terstruktur untuk
                memastikan hasil terbaik dan sesuai ekspektasi klien.
              </p>
              <ol className="space-y-4">
                {[
                  "Konsultasi & Analisis Kebutuhan",
                  "Perancangan UI/UX",
                  "Pengembangan & Implementasi",
                  "Testing & Quality Assurance",
                  "Peluncuran & Maintenance",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full mr-3">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748185245/photo10_qgcuph.jpg"
                alt="Proses Pembuatan Website"
                // layout="fill"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesComp;
