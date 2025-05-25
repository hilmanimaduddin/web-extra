import { useRouter } from "next/router";
import { useState } from "react";
import { FaBell, FaHome, FaRocket, FaTools } from "react-icons/fa";

const UnderDevelopmentPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Simpan email ke database atau service newsletter
    console.log("Subscribed:", email);
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto">
        {/* Icon atau Ilustrasi */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-6 rounded-full">
            <FaTools className="text-yellow-500 text-5xl" />
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Halaman Dalam Pengembangan
        </h1>

        {/* Subjudul */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          <span className="text-blue-600">Fitur Keren</span> Segera Hadir!
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 mb-8">
          Kami sedang bekerja keras untuk menyelesaikan halaman ini. Daftar di
          bawah untuk mendapatkan pemberitahuan ketika fitur ini sudah tersedia.
        </p>

        {isSubscribed ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-8">
            Terima kasih! Kami akan mengirimkan pemberitahuan saat fitur ini
            siap.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda"
                required
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaBell className="mr-2" />
                Daftar
              </button>
            </div>
          </form>
        )}

        {/* Tindakan */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            <FaHome className="mr-2" />
            Kembali ke Beranda
          </button>

          <button
            onClick={() => router.push("/portfolio")}
            className="border border-blue-500 bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            <FaRocket className="mr-2" />
            Lihat Portfolio Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
