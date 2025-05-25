import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: "Proses Cepat",
      description:
        "Waktu pengerjaan efisien dengan sistem kerja terstruktur tanpa mengorbankan kualitas",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Garansi 1 Tahun",
      description:
        "Perbaikan bug dan error gratis selama 1 tahun setelah website launch",
    },
    {
      icon: <FaCogs className="text-3xl text-blue-600" />,
      title: "Teknologi Terkini",
      description:
        "Menggunakan framework modern untuk performa optimal dan keamanan terbaik",
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "Support 24/7",
      description:
        "Tim support siap membantu kapan saja melalui WhatsApp, email, dan tiket sistem",
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "SEO Friendly",
      description:
        "Struktur website dioptimalkan untuk peringkat terbaik di mesin pencari",
    },
  ];

  const stats = [
    { value: "98%", label: "Kepuasan Klien" },
    { value: "200+", label: "Proyek Selesai" },
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "24", label: "Jam Support" },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Memilih <span className="text-blue-600">Jasa Kami</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai alasan kuat mengapa ratusan klien mempercayakan pembuatan
            website mereka kepada kami.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats and Testimonial */}
        {/* Stats */}
        {/* Testimonial */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Dalam Angka
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Apa Kata Klien Kami?</h3>
            <div className="flex items-start mb-6">
              <svg
                className="w-8 h-8 text-yellow-300 mr-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="italic">
                "Tim sangat profesional dan responsive. Website yang dibuat
                melebihi ekspektasi kami. Traffic meningkat 300% dalam 3 bulan
                pertama setelah launch."
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="/images/testimonials/client-1.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Budi Santoso</h4>
                <p className="text-blue-100">Pemilik Restoran Sederhana</p>
              </div>
            </div>
          </motion.div>
        </div> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Meningkatkan Bisnis Anda?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Diskusikan kebutuhan website Anda dengan tim ahli kami sekarang.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
              Konsultasi Gratis
            </button>
            {/* <button className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Lihat Portfolio
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
