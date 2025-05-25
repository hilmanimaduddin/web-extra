import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simpan data ke database atau kirim email
      const formDataJson = JSON.stringify(formData);
      const text = `Halo, saya ${formData.name} dari ${formData.email} dengan nomor telepon ${formData.phone}. Saya ingin menghubungi Anda karena ${formData.subject}. Berikut adalah pesan saya: ${formData.message}`;
      const whatsappUrl = `https://wa.me/6282140078104?text=${encodeURIComponent(
        text
      )}`;
      window.open(whatsappUrl, "_blank");

      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Kontak
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin mendiskusikan proyek Anda? Tim kami siap
            membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telepon
                    </h4>
                    <a
                      href="tel:+6281234567890"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +62 812-3456-7890
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Senin-Jumat, 09:00 - 17:00 WIB
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:hello@webextra.id"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      hello@webextra.id
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Respon dalam 1-2 jam kerja
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Kantor</h4>
                    <p className="text-gray-600">
                      Jl. Teknologi No. 123
                      <br />
                      Jakarta Selatan, Indonesia 12560
                    </p>
                    <a
                      href="https://maps.google.com/?q=Jl.+Teknologi+No.+123,+Jakarta+Selatan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-800 text-sm mt-2"
                    >
                      Lihat di Peta →
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Media Sosial
                </h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaFacebook className="w-5 h-5" />,
                      name: "Facebook",
                    },
                    {
                      icon: <FaInstagram className="w-5 h-5" />,
                      name: "Instagram",
                    },
                    {
                      icon: <FaLinkedin className="w-5 h-5" />,
                      name: "LinkedIn",
                    },
                    {
                      icon: <FaTwitter className="w-5 h-5" />,
                      name: "Twitter",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600 p-3 rounded-full transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>

              {submitStatus === "success" && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                  Terima kasih! Pesan Anda telah terkirim. Kami akan segera
                  menghubungi Anda.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                  Gagal mengirim pesan. Silakan coba lagi atau hubungi kami
                  melalui telepon/email.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subjek*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    >
                      <option hidden value="">
                        Pilih subjek...
                      </option>
                      <option value="Pembuatan Website">
                        Pembuatan Website
                      </option>
                      <option value="Pembuatan Toko Online">
                        Pembuatan Toko Online
                      </option>
                      <option value="SEO">Optimasi SEO</option>
                      <option value="Maintenance">Maintenance Website</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
