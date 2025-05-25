import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaCode, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-blue-600">WebExtra</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami adalah tim profesional yang berdedikasi untuk membantu bisnis
            Anda tumbuh melalui solusi digital terbaik.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-blue-100 rounded-2xl overflow-hidden h-full">
              <Image
                src="https://res.cloudinary.com/dlcgwbdtv/image/upload/v1748184738/photo-1522071820081-009f0129c71c_1_yhbmgn.jpg"
                alt="Tim WebExtra"
                layout="fill"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cerita Kami
            </h3>
            <p className="text-gray-600 mb-6">
              WebExtra didirikan pada tahun 2018 dengan misi memberikan solusi
              website berkualitas tinggi dengan harga terjangkau. Kami percaya
              bahwa setiap bisnis, besar maupun kecil, berhak memiliki website
              profesional yang membantu mereka berkembang.
            </p>
            <p className="text-gray-600 mb-8">
              Dengan tim yang terdiri dari developer, designer, dan digital
              marketer berpengalaman, kami telah membantu lebih dari 200 klien
              dari berbagai industri mencapai tujuan bisnis mereka melalui
              solusi digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Lihat Portfolio
              </button>
              <button className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium">
                Meet Our Team
              </button>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            Nilai-Nilai Kami
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-3xl text-blue-600 mb-4" />,
                title: "Inovatif",
                description:
                  "Selalu mengikuti perkembangan teknologi terbaru untuk solusi terbaik",
              },
              {
                icon: <FaCode className="text-3xl text-blue-600 mb-4" />,
                title: "Berkualitas",
                description: "Kode bersih, desain elegan, dan performa optimal",
              },
              {
                icon: <FaChartLine className="text-3xl text-blue-600 mb-4" />,
                title: "Berorientasi Hasil",
                description:
                  "Fokus pada solusi yang memberikan dampak bisnis nyata",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600 mb-4" />,
                title: "Kepuasan Klien",
                description:
                  "Prioritas utama kami adalah kepuasan dan kesuksesan klien",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Tim Inti Kami
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Andi Wijaya",
                role: "Founder & Lead Developer",
                photo: "/images/team/andi.jpg",
                expertise: "Full-Stack Development",
              },
              {
                name: "Budi Setiawan",
                role: "UI/UX Designer",
                photo: "/images/team/budi.jpg",
                expertise: "User Experience Design",
              },
              {
                name: "Citra Lestari",
                role: "Digital Marketer",
                photo: "/images/team/citra.jpg",
                expertise: "SEO & Digital Strategy",
              },
              {
                name: "Dewi Anggraeni",
                role: "Project Manager",
                photo: "/images/team/dewi.jpg",
                expertise: "Client Relations",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-black">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
