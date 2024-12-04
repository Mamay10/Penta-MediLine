"use client"; // Menandakan bahwa komponen ini adalah Client Component di Next.js

import React, { useState } from "react"; // Mengimpor React dan useState untuk mengelola state
import "tailwindcss/tailwind.css"; // Mengimpor file Tailwind CSS untuk styling

const App = () => {
  // State untuk mengelola status antrian
  const [status, setStatus] = useState("Menunggu...");

  // Fungsi untuk mengubah status ketika tombol "Panggil" atau "Selesai" ditekan
  const handleButtonClick = (action: string) => {
    if (action === "panggil") {
      setStatus("Dipanggil!"); // Mengubah status menjadi "Dipanggil!"
    } else if (action === "selesai") {
      setStatus("Selesai!"); // Mengubah status menjadi "Selesai!"
    }
  };

  return (
    // Container utama dengan latar belakang abu-abu muda dan tata letak fleksibel
    <div className="h-50 bg-gray-200 flex flex-col p-4 overflow-hidden">
      {/* Container utama untuk menampung seluruh card box */}
      <div className="bg-[#1D4A50] w-full h-full rounded-lg shadow-xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden">
        
        {/* Bagian Filter dan Tabel */}
        <div className="bg-[#1D4A50] rounded-lg shadow-2xl p-4 flex flex-col ">
          {/* Header untuk filter */}
          <div className="bg-[#D9D9D9] text-center text-[#022B29] font-bold rounded-t-lg p-3 text-sm">
            Filter Berdasarkan
          </div>
          {/* Filter berdasarkan status (Dipanggil atau Menunggu) */}
          <div className="bg-white flex flex-col space-y-2 mt- overflow-y-auto max-h-[50%] p-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-black">Dipanggil</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-black">Menunggu</span>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          {/* Tabel untuk menampilkan data antrian */}
          <div className="mt-4 flex-1 overflow-hidden border rounded-lg">
            <table className="w-full text-xs text-left bg-white text-black border-collapse">
              <thead className="bg-[#D9D9D9] text-black">
                <tr>
                  <th className="p-2 text-center border border-gray-300">Nomor Antrian</th>
                  <th className="p-2 text-center border border-gray-300">Nama</th>
                  <th className="p-2 text-center border border-gray-300">Tanggal</th>
                </tr>
              </thead>
            </table>
            {/* Data di dalam tabel */}
            <div className="overflow-y-auto max-h-[100%]">
              <table className=" w-full text-xs">
                <tbody>
                  {[
                    { id: "BA01", name: "MAMAY AYU LESTARI", date: "11/09 - 08:20" },
                    { id: "A01", name: "KHOLIDIYAH AMNA", date: "11/09 - 08:40" },
                    { id: "A02", name: "SALSABILA SHAFIYA", date: "11/09 - 09:05" },
                    { id: "A03", name: "KAYLA", date: "11/09 - 09:10" },
                    { id: "A04", name: "NABILA", date: "11/09 - 09:12" },
                    { id: "BA05", name: "RAHMA", date: "11/09 - 09:15" },
                    { id: "BA06", name: "TIA", date: "11/09 - 09:17" },
                  ].map((row, index) => (
                    // Menentukan warna baris berdasarkan urutan
                    <tr
                      key={row.id}
                      className={`text-center ${
                        index === 0 ? "bg-[#1D4A50] text-white" : "bg-white text-black"
                      }`}
                    >
                      {/* Data nomor antrian */}
                      <td className="p-2 border border-gray-300">{row.id}</td>
                      {/* Data nama */}
                      <td className="p-2 border border-gray-300">{row.name}</td>
                      {/* Data tanggal */}
                      <td className="p-2 border border-gray-300">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bagian Nomor Antrian */}
        <div className="h-64 bg-[#1D4A50] rounded-lg shadow-2xl pb-6 flex flex-col">
          {/* Header untuk nomor antrian */}
          <div className="bg-[#D9D9D9] text-center text-[#022B29] font-bold rounded-t-lg p-3">
            NOMOR ANTRIAN
          </div>
          {/* Informasi nomor antrian aktif */}
          <div className="flex flex-col items-center text-white mt-4 flex-1">
            <span className="text-4xl font-bold">BA01</span> {/* Nomor antrian */}
            <hr className="w-1/2 my-2" /> {/* Garis pemisah */}
            <span className="text-sm">Dokter</span> {/* Label Dokter */}
            <strong className="text-sm">Dr. Maulana Malik</strong> {/* Nama dokter */}
          </div>
          {/* Tombol aksi (Panggil dan Selesai) */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-[#52B1BD] text-white font-medium py-2 px-4 rounded shadow-md hover:bg-[#459EA8] transition-all"
              onClick={() => handleButtonClick("panggil")}
            >
              Panggil
            </button>
            <button
              className="bg-[#52B1BD] text-white font-medium py-2 px-4 rounded shadow-md hover:bg-[#459EA8] transition-all"
              onClick={() => handleButtonClick("selesai")}
            >
              Selesai
            </button>
          </div>
          {/* Menampilkan status antrian */}
          <div className="mt-2 text-center text-sm text-white">
            Status: {status}
          </div>
        </div>

        {/* Bagian Data Pasien */}
        <div className="bg-[#1D4A50] rounded-lg shadow-2xl p-4 flex flex-col">
          {/* Header untuk data pasien */}
          <div className="flex justify-between items-center bg-[#D9D9D9] text-[#022B29] font-bold rounded-t-lg p-3">
            <span>DATA PASIEN</span> {/* Judul */}
            <span className="text-xs text-[#022B29] ">POLI UMUM   08:00 - 14:00</span> {/* Jadwal poli */}
          </div>
          {/* Informasi pasien */}
          <div className="bg-[#1D4A50] text-white p-4 rounded-md mt-4 flex-1">
  {[
    { label: "Jenis Pasien", placeholder: "Masukkan jenis pasien" },
    { label: "Nama", placeholder: "Masukkan nama pasien" },
    { label: "Dokter", placeholder: "Masukkan nama dokter" },
    { label: "Klinik", placeholder: "Masukkan nama klinik" },
  ].map((field) => (
    <div key={field.label} className="mt-4 flex items-center space-x-4">
      {/* Label untuk setiap input */}
      <label className="text-white font-medium text-xs w-1/3">
        {field.label}:
      </label>
      {/* Input dengan placeholder */}
      <input
        type="text"
        placeholder={field.placeholder}
        className="w-full p-2 rounded-md bg-[#1D4A50] text-white text-xs border border-white outline-none focus:border focus:border-white"
      />
    </div>
  ))}
</div>

          {/* Tombol aksi */}
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
  );
};

export default App; // Ekspor komponen utama untuk digunakan di aplikasi Next.js
