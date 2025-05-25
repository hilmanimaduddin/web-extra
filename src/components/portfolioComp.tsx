import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiZoomIn } from "react-icons/fi";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  github: string | null;
  featured: boolean;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  // const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const categories = [
    "Semua",
    "Website Perusahaan",
    "E-Commerce",
    "Web App",
    "Landing Page",
  ];

  const projects = [
    {
      id: 1,
      title: "Website Restoran Premium",
      category: "Website Perusahaan",
      description:
        "Website modern untuk restoran fine dining dengan sistem reservasi online dan menu digital.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
      tags: ["React", "Tailwind CSS", "Node.js"],
      url: "https://contohrestoran.com",
      github: null,
      featured: true,
    },
    {
      id: 2,
      title: "Toko Fashion Online",
      category: "E-Commerce",
      description:
        "Platform e-commerce lengkap untuk brand fashion lokal dengan multi-pembayaran.",
      image: "https://images.unsplash.com/photo-1727632027836-321f7da24681",
      tags: ["Next.js", "Stripe", "MongoDB"],
      url: "https://fashionstore.example.com",
      github: "https://github.com/username/fashion-store",
      featured: true,
    },
    {
      id: 3,
      title: "Sistem Manajemen Sekolah",
      category: "Web App",
      description:
        "Aplikasi web custom untuk manajemen siswa, guru, dan administrasi sekolah.",
      image: "https://images.unsplash.com/photo-1563394867331-e687a36112fd",
      tags: ["Laravel", "Vue.js", "MySQL"],
      url: "https://schoolsystem.example.com",
      github: null,
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Fotografer",
      category: "Website Perusahaan",
      description:
        "Gallery online interaktif untuk fotografer profesional dengan lightbox efek.",
      image: "https://images.unsplash.com/photo-1690977678440-c2f32ac829e1",
      tags: ["Gatsby", "GraphQL", "Contentful"],
      url: "https://fotograferprofesional.com",
      github: null,
      featured: true,
    },
    {
      id: 5,
      title: "Landing Page Startup",
      category: "Landing Page",
      description:
        "Halaman penjualan berkonversi tinggi untuk produk SaaS startup teknologi.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      tags: ["HTML/CSS", "JavaScript", "AOS"],
      url: "https://produkstartup.com",
      github: "https://github.com/username/startup-landing",
      featured: false,
    },
    {
      id: 6,
      title: "Aplikasi Manajemen Proyek",
      category: "Web App",
      description:
        "Aplikasi kolaborasi tim dengan fitur task management dan real-time updates.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
      tags: ["React", "Firebase", "Redux"],
      url: "https://projectapp.example.com",
      github: "https://github.com/username/project-management-app",
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Karya <span className="text-blue-600">Terbaru</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beberapa proyek yang telah kami selesaikan untuk klien dari berbagai
            industri.
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
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View details"
                    >
                      <FiZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      <FiExternalLink className="mr-1" /> Kunjungi
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
                      >
                        <FiGithub className="mr-1" /> Kode
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Diskusikan Proyek Anda
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
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
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center text-sm"
                  >
                    <FiExternalLink className="mr-1" /> Kunjungi Website
                  </a>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg inline-flex items-center text-sm"
                    >
                      <FiGithub className="mr-1" /> Lihat Kode
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Teknologi yang Digunakan:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Tantangan:
                  </h4>
                  <p className="text-gray-600">
                    Proyek ini memiliki tantangan dalam hal integrasi sistem
                    pembayaran dan optimasi performa untuk pengguna dengan
                    koneksi internet yang beragam.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Solusi Kami:
                  </h4>
                  <p className="text-gray-600">
                    Kami mengimplementasikan teknik lazy loading untuk gambar,
                    code splitting untuk mengurangi ukuran bundle JavaScript,
                    dan caching strategis untuk API calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
