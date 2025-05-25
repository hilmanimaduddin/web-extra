import { useRouter } from "next/router";
import {
  FaExclamationTriangle,
  FaHome,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md mx-auto">
        {/* Icon atau Ilustrasi */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-6 rounded-full">
            <FaExclamationTriangle className="text-red-500 text-5xl" />
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Halaman Tidak Ditemukan
        </h1>

        {/* Subjudul */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          <span className="text-blue-600">Oops!</span> Sepertinya Anda tersesat
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 mb-8">
          Halaman yang Anda cari tidak tersedia atau sedang dalam pengembangan.
          Kami sedang bekerja keras untuk menyediakan fitur terbaik untuk Anda.
        </p>

        {/* Tindakan */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            <FaHome className="mr-2" />
            Kembali ke Beranda
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Hubungi Kami
          </button>
        </div>

        {/* Info Pengembangan */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <FaTools className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                Dalam Pengembangan
              </h3>
              <p className="text-blue-700 text-sm">
                Halaman ini sedang dalam proses pengembangan. Kami akan segera
                meluncurkannya. Daftar newsletter kami untuk mendapatkan
                pemberitahuan saat sudah tersedia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
