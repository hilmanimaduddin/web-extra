import { motion } from "framer-motion";
import { useState } from "react";
import { PortfolioItem } from "../types";
import Image from "next/image";
import Link from "next/link";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Website Restoran Premium",
    category: "Website Bisnis",
    description:
      "Website modern untuk restoran fine dining dengan sistem reservasi online dan menu digital.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184824/photo3_ocfgy7.jpg",
    tags: ["Responsive", "CMS", "Reservasi Online"],
    link: "/portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Fashion",
    category: "Toko Online",
    description:
      "Platform e-commerce lengkap untuk brand fashion lokal dengan multi-pembayaran.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184850/photo4_t76sp4.jpg",
    tags: ["E-Commerce", "Payment Gateway", "Mobile Friendly"],
    link: "/portfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Website Portfolio Fotografer",
    category: "Website Profesional",
    description:
      "Gallery online interaktif untuk fotografer profesional dengan lightbox efek.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184887/photo5_t2qrcq.jpg",
    tags: ["Gallery", "Animasi", "Minimalis"],
    link: "/portfolio",
    featured: false,
  },
  {
    id: 4,
    title: "Sistem Manajemen Sekolah",
    category: "Aplikasi Web",
    description:
      "Aplikasi web custom untuk manajemen siswa, guru, dan administrasi sekolah.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184911/photo6_icr4ub.jpg",
    tags: ["Custom App", "Database", "User Management"],
    link: "/portfolio",
    featured: true,
  },
  {
    id: 5,
    title: "Website Travel Agency",
    category: "Website Bisnis",
    description:
      "Website booking paket travel dengan integrasi sistem pembayaran dan gallery destinasi.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184949/photo7_np40bs.jpg",
    tags: ["Booking System", "Destinasi", "Responsive"],
    link: "/portfolio",
    featured: false,
  },
  {
    id: 6,
    title: "Company Profile Startup",
    category: "Website Perusahaan",
    description:
      "Website perusahaan untuk startup teknologi dengan desain futuristik dan interaktif.",
    image:
      "https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184978/photo9_eyzrgu.jpg",
    tags: ["Modern Design", "Animasi", "Company Profile"],
    link: "/portfolio",
    featured: true,
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = [
    "Semua",
    "Website Bisnis",
    "Toko Online",
    "Website Profesional",
    "Aplikasi Web",
    "Website Perusahaan",
  ];

  const filteredItems =
    activeFilter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
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
            Karya Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-blue-600">Pilihan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beberapa contoh proyek yang telah kami selesaikan untuk klien dari
            berbagai industri.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.featured && (
                    <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Lihat Detail
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Membuat Website untuk Bisnis Anda?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Setiap proyek kami rancang khusus untuk memenuhi kebutuhan unik
            klien.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
          >
            Diskusikan Proyek Anda
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
