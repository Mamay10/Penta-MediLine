"use client";
import React from "react";
import "../styles/Page.css";
import Layout from "../components/Layout";

const Dashboard: React.FC = () => {
  return (
    <Layout
      imageSrc="/assets/doctor.png" // Gambar utama untuk Dashboard
      secondImageClassName="extra-dashboard-image" // ClassName khusus untuk gambar tambahan di Dashboard
    >
      {/* Right section: Menu buttons */}
      <div className="button-group">
        {" "}
        {/* Menggunakan class button-group */}
        <button className="dashboard-button">Registrasi</button>
        <button className="dashboard-button">Panggil Pasien</button>
        <button className="dashboard-button">Rekap</button>
        <button className="dashboard-button">Pengaturan</button>
      </div>
    </Layout>
  );
};

export default Dashboard;
