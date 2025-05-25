import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "8",
      period: "jutaan",
      description:
        "Cocok untuk bisnis kecil yang membutuhkan website sederhana",
      features: [
        "Website 5 Halaman",
        "Desain Responsif",
        "Formulir Kontak",
        "Optimasi Dasar SEO",
        "1 Revisi Desain",
        "Hosting 1 Tahun Gratis",
        "Support 1 Bulan",
      ],
      excluded: ["Integrasi Payment", "Multi Bahasa", "Dashboard Admin"],
      featured: false,
    },
    {
      name: "Professional",
      price: "15",
      period: "jutaan",
      description: "Solusi lengkap untuk bisnis menengah dengan fitur lengkap",
      features: [
        "Website 10 Halaman",
        "Desain Custom",
        "CMS Admin Panel",
        "Optimasi SEO Lengkap",
        "3 Revisi Desain",
        "Hosting 1 Tahun Gratis",
        "Support 3 Bulan",
        "Integrasi Media Sosial",
      ],
      excluded: ["Integrasi Payment", "Multi Bahasa"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "25",
      period: "jutaan",
      description: "Solusi premium untuk bisnis besar dengan kebutuhan khusus",
      features: [
        "Website Unlimited Halaman",
        "Desain Premium Custom",
        "CMS Advanced",
        "Optimasi SEO Expert",
        "Unlimited Revisi",
        "Hosting 2 Tahun Gratis",
        "Support 6 Bulan",
        "Integrasi Payment Gateway",
        "Multi Bahasa",
        "Analytics Dashboard",
      ],
      excluded: [],
      featured: false,
    },
  ];

  const services = [
    {
      name: "Toko Online (E-Commerce)",
      starterPrice: "20",
      professionalPrice: "35",
      enterprisePrice: "50",
    },
    {
      name: "Website Perusahaan",
      starterPrice: "8",
      professionalPrice: "15",
      enterprisePrice: "25",
    },
    {
      name: "Website Portfolio",
      starterPrice: "6",
      professionalPrice: "12",
      enterprisePrice: "20",
    },
    {
      name: "Landing Page",
      starterPrice: "3",
      professionalPrice: "5",
      enterprisePrice: "8",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
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
            Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paket <span className="text-blue-600">Harga</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Harga transparan dengan berbagai pilihan paket sesuai kebutuhan
            bisnis Anda.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`h-full border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                  plan.featured ? "border-blue-500 border-2" : "border-gray-200"
                }`}
              >
                {plan.featured && (
                  <div className="bg-blue-600 text-white text-center py-2 font-medium">
                    PAKET POPULER
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      Rp {plan.price}
                    </span>
                    <span className="text-gray-600"> {plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-colors duration-300 ${
                      plan.featured
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Pilih Paket Ini
                  </button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Termasuk:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.excluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-6">
                          Tidak Termasuk:
                        </h4>
                        <ul className="space-y-3">
                          {plan.excluded.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <FaTimes className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-500">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm overflow-hidden text-black"
        >
          <h3 className="text-xl font-bold p-6 border-b border-gray-200">
            Perbandingan Harga Layanan
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4">Jenis Layanan</th>
                  <th className="p-4">Starter</th>
                  <th className="p-4">Professional</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="p-4 font-medium">{service.name}</td>
                    <td className="p-4 text-center">
                      Rp {service.starterPrice} juta
                    </td>
                    <td className="p-4 text-center">
                      Rp {service.professionalPrice} juta
                    </td>
                    <td className="p-4 text-center">
                      Rp {service.enterprisePrice} juta
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-sm p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Butuh Penyesuaian Khusus?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Setiap bisnis memiliki kebutuhan unik. Kami siap membuat penawaran
            khusus sesuai anggaran dan kebutuhan Anda.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Konsultasi Gratis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
