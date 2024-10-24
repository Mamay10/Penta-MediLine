"use client";
import React from "react";
import { useRouter } from 'next/navigation'; // Gunakan useRouter dari Next.js
import "../styles/Page.css";
import Layout from "../components/Layout";

const Dashboard: React.FC = () => {
  const router = useRouter(); // Inisialisasi useRouter

  const handleRegistrasiClick = () => {
    router.push("/regist"); // Arahkan ke halaman registrasi
  };

  const handleSettingClick = () => {
    router.push("/setting"); // Arahkan ke halaman registrasi
  };

  return (
    <Layout
      imageSrc="/assets/doctor.png" // Gambar utama untuk Dashboard
      secondImageClassName="extra-dashboard-image" // ClassName khusus untuk gambar tambahan di Dashboard
    >
      {/* Right section: Menu buttons */}
      <div className="button-group">
        {" "}
        {/* Menggunakan class button-group */}
        <button className="dashboard-button" onClick={handleRegistrasiClick}>
          Registrasi
        </button>
        <button className="dashboard-button">Panggil Pasien</button>
        <button className="dashboard-button">Rekap</button>
        <button className="dashboard-button" onClick={handleSettingClick}>Pengaturan</button>
      </div>
    </Layout>
  );
};

export default Dashboard;
