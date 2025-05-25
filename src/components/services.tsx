import { motion } from "framer-motion";
import { Service } from "../types";

const services: Service[] = [
  {
    id: 1,
    title: "Website Perusahaan Profesional",
    description:
      "Desain elegan dan fungsional untuk meningkatkan kredibilitas bisnis Anda dengan fitur lengkap seperti halaman produk, blog, dan formulir kontak.",
    icon: "🏢",
    features: [
      "Desain responsif",
      "Optimasi SEO",
      "Integrasi media sosial",
      "CMS mudah digunakan",
    ],
    price: "Mulai dari Rp 8.000.000",
  },
  {
    id: 2,
    title: "Toko Online (E-Commerce)",
    description:
      "Solusi lengkap untuk memulai penjualan online dengan sistem pembayaran terintegrasi, manajemen produk, dan dashboard admin.",
    icon: "🛒",
    features: [
      "Multi pembayaran (Transfer, E-Wallet)",
      "Manajemen stok",
      "Tracking order",
      "Laporan penjualan",
    ],
    price: "Mulai dari Rp 15.000.000",
  },
  {
    id: 3,
    title: "Website Portfolio",
    description:
      "Tampilkan karya terbaik Anda dengan desain modern yang memukau, cocok untuk fotografer, desainer, atau kreator konten.",
    icon: "🎨",
    features: [
      "Gallery interaktif",
      "Animasi scroll",
      "Lightbox efek",
      "Formulir pemesanan",
    ],
    price: "Mulai dari Rp 6.500.000",
  },
  {
    id: 4,
    title: "Aplikasi Web Kustom",
    description:
      "Bangun aplikasi web khusus sesuai kebutuhan bisnis unik Anda dengan teknologi terbaru dan skalabilitas tinggi.",
    icon: "💻",
    features: [
      "Pengembangan khusus",
      "API integration",
      "Autentikasi pengguna",
      "Database terkelola",
    ],
    price: "Harga custom",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            Solusi Digital <span className="text-blue-600">Lengkap</span> untuk
            Bisnis Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pembuatan website berkualitas
            tinggi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-blue-200">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      FITUR UTAMA:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-4 h-4 text-blue-500 mr-2"
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

                  <div className="mt-auto">
                    {/* <p className="text-lg font-semibold text-blue-600 mb-4">
                      {service.price}
                    </p> */}
                    <button className="w-full text-center bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      Detail Layanan
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Butuh Solusi Khusus?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Tim ahli kami siap mendiskusikan kebutuhan unik bisnis Anda dan
            memberikan solusi terbaik.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Konsultasi Gratis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
