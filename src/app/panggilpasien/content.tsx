import React from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <div className="h-screen bg-[#1D4A50] flex items-center justify-center p-6">
      <div className="bg-[#1D4A50] w-full max-w-7xl rounded-lg shadow-2xl p-6 space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
          {/* Sidebar: Filter dan tabel */}
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-4 h-full">
            <div className="bg-[#D9D9D9] text-center text-black font-medium rounded-t-lg p-3 text-sm">
              Filter Berdasarkan
            </div>
            <div className="flex flex-col space-y-4 mt-4 overflow-y-auto max-h-[250px]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black">Dipanggil</span>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-black">Menunggu</span>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            {/* Tabel Filter dengan Border */}
            <div className="mt-6 overflow-hidden border rounded-lg">
              <table className="w-full text-xs text-left bg-white text-black border-collapse">
                <thead className="bg-[#D9D9D9] text-black">
                  <tr>
                    <th className="p-2 text-center border border-gray-300">Nomor Antrian</th>
                    <th className="p-2 text-center border border-gray-300">Nama</th>
                    <th className="p-2 text-center border border-gray-300">Tanggal</th>
                  </tr>
                </thead>
              </table>
              <div className="max-h-48 overflow-y-auto">
                <table className="w-full text-xs">
                  <tbody>
                    {[
                      { id: "BA01", name: "MAMAY AYU LESTARI", date: "11/09 - 08:20", status: "dipanggil" },
                      { id: "A01", name: "KHOLIDIYAH AMNA", date: "11/09 - 08:40", status: "menunggu" },
                      { id: "A02", name: "SALSABILA SHAFIYA", date: "11/09 - 09:05", status: "menunggu" },
                    ].map((row, index) => (
                      <tr
                        key={row.id}
                        className={`text-center ${
                          index === 0 ? "bg-[#1D4A50] text-white" : "bg-yellow-500 text-black"
                        }`}
                      >
                        <td className="p-2 border border-gray-300">{row.id}</td>
                        <td className="p-2 border border-gray-300">{row.name}</td>
                        <td className="p-2 border border-gray-300">{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Nomor Antrian */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 h-full">
            <div className="bg-[#D9D9D9] text-center text-black font-medium rounded-t-lg p-3">
              NOMOR ANTRIAN
            </div>
            <div className="flex flex-col items-center text-black mt-4">
              <span className="text-5xl font-bold">BA01</span>
              <hr className="w-1/2 my-4" />
              <span>Dokter</span>
              <strong>Dr. Maulana Malik</strong>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-[#52B1BD] text-white font-medium py-2 px-6 rounded shadow-md hover:bg-[#459EA8]">
                Panggil
              </button>
              <button className="bg-[#52B1BD] text-white font-medium py-2 px-6 rounded shadow-md hover:bg-[#459EA8]">
                Selesai
              </button>
            </div>
          </div>

          {/* Data Pasien */}
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-4 h-full">
            <div className="text-black font-medium p-3 text-xs">
              <span>DATA PASIEN</span>
              {/* Box Hijau */}
              <div className="bg-green-500 text-white py-2 px-4 rounded-md mt-2 text-center">
                <span className="block font-bold text-sm">Poli Umum</span>
                <span className="block text-xs">08:00 - 14:00</span>
              </div>
            </div>
            <div className="bg-[#1D4A50] text-white p-4 rounded-md mt-4">
              {[
                { label: "Jenis", value: "Pasien BPJS" },
                { label: "Nama", value: "Mamay Ayu Lestari" },
                { label: "Dokter", value: "Dr. Maulana Malik" },
                { label: "Klinik", value: "Poli Umum" },
              ].map((field) => (
                <div key={field.label} className="mt-4">
                  <span className="block text-black font-medium text-xs">{field.label}:</span>
                  <input
                    type="text"
                    value={field.value}
                    readOnly
                    className="w-full p-2 rounded-md bg-[#D9D9D9] text-black text-xs"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-[#52B1BD] text-white font-medium py-2 px-4 rounded shadow-md hover:bg-[#459EA8] text-xs">
                Lewati
              </button>
              <button className="bg-[#52B1BD] text-white font-medium py-2 px-4 rounded shadow-md hover:bg-[#459EA8] text-xs">
                Panggil Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
