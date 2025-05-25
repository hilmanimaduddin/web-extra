import { useState } from "react";
import { FaWhatsapp, FaPhone, FaRegClock, FaInfoCircle } from "react-icons/fa";

const WhatsAppContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Pembuatan Website",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateWhatsAppLink = () => {
    const { name, phone, service, message } = formData;
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis Anda

    const text =
      `Halo, saya ${name}%0A%0A` +
      `Saya tertarik dengan layanan: ${service}%0A` +
      `Detail pesan: ${message}%0A%0A` +
      `Nomor telepon saya: ${phone}%0A` +
      `Harap hubungi saya untuk diskusi lebih lanjut.`;

    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const services = [
    "Pembuatan Website",
    "Toko Online (E-Commerce)",
    "Website Perusahaan",
    "Website Portfolio",
    "Optimasi SEO",
    "Maintenance Website",
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Informasi Kontak */}
        <div className="md:w-1/3 bg-blue-600 text-white p-8">
          <div className="flex items-center mb-8">
            <FaWhatsapp className="text-3xl mr-3" />
            <h2 className="text-2xl font-bold">Hubungi via WhatsApp</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <FaPhone className="mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Nomor WhatsApp</h3>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <FaRegClock className="mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Jam Operasional</h3>
                <p>Senin - Jumat: 09.00 - 17.00 WIB</p>
                <p>Sabtu: 09.00 - 14.00 WIB</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaInfoCircle className="mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Informasi</h3>
                <p>Respon cepat via WhatsApp dalam jam kerja.</p>
                <p>
                  Di luar jam kerja, kami akan membalas di hari kerja
                  berikutnya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form WhatsApp */}
        <div className="md:w-2/3 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Isi Form Untuk Chat Langsung
          </h3>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nomor WhatsApp*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: 081234567890"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Layanan yang Diminati*
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pesan*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ceritakan kebutuhan website Anda..."
              ></textarea>
            </div>

            <div className="pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 ${
                  !formData.name || !formData.phone || !formData.message
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={(e) => {
                  if (!formData.name || !formData.phone || !formData.message) {
                    e.preventDefault();
                  }
                }}
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Buka Chat WhatsApp
              </a>
              <p className="text-xs text-gray-500 mt-2">
                *Pastikan nomor WhatsApp Anda aktif. Kami akan membalas pesan
                Anda segera.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppContact;
