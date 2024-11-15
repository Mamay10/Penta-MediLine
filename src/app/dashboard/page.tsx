"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Gunakan useRouter dari Next.js
import "../styles/Page.css";
import Layout from "../components/Layout";

const Dashboard: React.FC = () => {
  const router = useRouter(); // Inisialisasi useRouter
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { role } = jwt_decode(token); // Gunakan jwt_decode untuk mengurai token
      setRole(role);
    }
  }, []);
  const handleRegistrasiClick = () => {
    router.push("/regist"); // Arahkan ke halaman registrasi
  };

  const handleSettingClick = () => {
    router.push("/setting"); // Arahkan ke halaman registrasi
  };
  const handleAntrianClick = () => {
    router.push("/antrian"); // Arahkan ke halaman registrasi
  };
  const handleRekapClick = () => {
    router.push("/rekap"); // Arahkan ke halaman registrasi
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
        <button className="dashboard-button" onClick={handleAntrianClick}>Panggil Pasien</button>
        <button className="dashboard-button" onClick={handleRekapClick}>Rekap</button>
       
          <button className="dashboard-button" onClick={handleSettingClick}>Pengaturan</button>
        </div>
    </Layout>
  );
};

export default Dashboard;
function jwt_decode(token: string): { role: any; } {
  throw new Error("Function not implemented.");
}

