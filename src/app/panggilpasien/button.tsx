import React from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-900">

      {/* Main Content */}
      <div className="main-content grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sidebar */}
        <div className="sidebar bg-teal-900 text-white rounded-lg p-4 shadow-lg">
          <img src="https://placehold.co/100x100" alt="MediLine Logo" className="mb-4 mx-auto" />
          <h2 className="text-lg font-medium mb-3 text-center">Filter Berdasarkan</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center mr-4">
              <i className="fas fa-circle text-green-500 mr-2"></i> Dipanggil
            </div>
            <div className="flex items-center">
              <i className="fas fa-circle text-yellow-500 mr-2"></i> Menunggu
            </div>
          </div>
          <div className="overflow-hidden border border-teal-800 rounded-lg">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-teal-800 text-center">
                  <th className="p-2">Nomor Antrian</th>
                  <th className="p-2">Nama</th>
                  <th className="p-2">Tanggal</th>
                </tr>
              </thead>
            </table>
            <div className="max-h-48 overflow-y-auto">
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  {[
                    { id: "BA01", name: "MAMAY AYU LESTARI", date: "11/09 - 08:20" },
                    { id: "A01", name: "KHOLIDIYAH AMNA", date: "11/09 - 08:40" },
                    { id: "A02", name: "SALSABILA SHAFIYA", date: "11/09 - 09:05" },
                    { id: "A03", name: "ARESA PUTRI", date: "11/09 - 09:25" },
                    { id: "A04", name: "MILA AMELIA", date: "11/09 - 09:45" },
                    { id: "A05", name: "DITA SARI", date: "11/09 - 10:05" },
                  ].map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? "bg-teal-800" : "bg-teal-900"}>
                      <td className="p-2 text-center">{row.id}</td>
                      <td className="p-2 text-center">{row.name}</td>
                      <td className="p-2 text-center">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Queue Number Section */}
        <div className="queue-number bg-teal-900 text-white rounded-lg p-4 lg:p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-lg font-medium mb-4">NOMOR ANTRIAN</h2>
          <div className="number text-7xl font-bold my-6">BA01</div>
          <div className="doctor text-lg mb-6 text-center">
            Dokter
            <br />
            Dr. Maulana Malik
          </div>
          <div className="flex space-x-4">
            <button className="bg-teal-800 px-4 py-2 rounded-lg">Panggil</button>
            <button className="bg-teal-800 px-4 py-2 rounded-lg">Selesai</button>
          </div>
        </div>

        {/* Patient Data Section */}
        <div className="patient-data bg-teal-900 text-white rounded-lg p-4 lg:p-6 shadow-lg">
          <h2 className="text-lg font-medium mb-4">DATA PASIEN</h2>
          <div className="flex justify-between items-center bg-teal-800 p-2 rounded-md mb-4">
            <span className="text-sm font-semibold">POLI UMUM</span>
            <span className="text-xs">08:00 - 14:00</span>
          </div>
          <div className="mb-3">
            <span className="block font-medium mb-1">Jenis :</span>
            <input type="text" value="Pasien BPJS" readOnly className="bg-teal-800 p-2 rounded-md w-full" />
          </div>
          <div className="mb-3">
            <span className="block font-medium mb-1">Nama :</span>
            <input type="text" value="Mamay Ayu Lestari" readOnly className="bg-teal-800 p-2 rounded-md w-full" />
          </div>
          <div className="mb-3">
            <span className="block font-medium mb-1">Dokter :</span>
            <input type="text" value="Dr. Maulana Malik" readOnly className="bg-teal-800 p-2 rounded-md w-full" />
          </div>
          <div className="mb-6">
            <span className="block font-medium mb-1">Klinik :</span>
            <input type="text" value="Poli Umum" readOnly className="bg-teal-800 p-2 rounded-md w-full" />
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-wrap justify-end items-center space-x-2">
        <button className="bg-teal-800 px-4 py-2 rounded-lg">Lewati</button>
        <button className="bg-teal-800 px-4 py-2 rounded-lg">Panggil Next</button>
      </div>
    </div>
  );
};

export default App;
