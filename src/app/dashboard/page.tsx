"use client";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import "../styles/Page.css";
import Layout from "../components/Layout";

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Cek token di localStorage

    // Jika token tidak ada, redirect ke halaman login
    if (!token) {
      router.push('/'); // Arahkan ke halaman login dengan path '/'
    }
  }, [router]);

  const handleRegistrasiClick = () => {
    router.push("/regist");
  };

  const handleSettingClick = () => {
    router.push("/setting");
  };

  const handleAntrianClick = () => {
    router.push("/antrian");
  };

  const handleRekapClick = () => {
    router.push("/rekap");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    router.push('/'); // Redirect ke halaman login
  };

  return (
    <Layout
      imageSrc="/assets/doctor.png"
      secondImageClassName="extra-dashboard-image"
    >
      <div className="button-group">
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
