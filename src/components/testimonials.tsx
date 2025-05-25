import { motion } from "framer-motion";
import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Pemilik Restoran Sederhana",
    content:
      "Website yang dibuat oleh tim ini sangat membantu bisnis saya. Reservasi online meningkat 70% sejak website diluncurkan, dan tampilannya sangat profesional.",
    avatar: "/images/testimonials/budi-santoso.jpg",
    rating: 5,
    project: "Website Restoran",
  },
  {
    id: 2,
    name: "Anita Wijaya",
    position: "CEO Fashionista Boutique",
    content:
      "Toko online yang mereka buat untuk brand fashion saya benar-benar mengubah game. Penjualan meningkat 120% dalam 3 bulan pertama!",
    avatar: "/images/testimonials/anita-wijaya.jpg",
    rating: 5,
    project: "E-Commerce Fashion",
  },
  {
    id: 3,
    name: "Zaki Fathur",
    position: "Fotografer Profesional",
    content:
      "Portfolio website yang dibuat sangat memukau. Saya mendapatkan lebih banyak job setelah website ini online. Pelayanan timnya juga sangat responsif.",
    avatar: "/images/testimonials/rudi-hermawan.jpg",
    rating: 4,
    project: "Website Portfolio",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    position: "Direktur Sekolah Alam",
    content:
      "Aplikasi manajemen sekolah yang dikembangkan sangat membantu operasional sehari-hari. Sistemnya user friendly dan tepat waktu penyelesaiannya.",
    avatar: "/images/testimonials/siti-nurhaliza.jpg",
    rating: 5,
    project: "Sistem Manajemen Sekolah",
  },
];

const Testimonials = () => {
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
            Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-blue-600">Klien Kami</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ulasan jujur dari klien yang telah mempercayai kami untuk
            pengembangan website mereka.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 italic mb-6">
                  `{testimonial.content}`
                </p>

                {/* Author */}
                <div className="flex items-center">
                  {/* <div className="mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div> */}
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Proyek: {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 mb-8">Dipercaya oleh:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {[
              "/images/brands/brand-1.svg",
              "/images/brands/brand-2.svg",
              "/images/brands/brand-3.svg",
              "/images/brands/brand-4.svg",
              "/images/brands/brand-5.svg",
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Client Brand"
                className="h-8 md:h-10 object-contain"
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
