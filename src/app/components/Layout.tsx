"use client";
import React from "react";
import "../styles/Layout.css"; // Impor file CSS
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  imageSrc?: string; // Gambar utama
  secondImageClassName?: string; // ClassName opsional untuk gambar tambahan
}

const Layout: React.FC<LayoutProps> = ({
  children,
  imageSrc,
  secondImageClassName,
}) => {
  // Fungsi yang akan dipanggil saat logo diklik
  const handleLogoClick = () => {
    console.log("Logo clicked!");
    // Tambahkan logika lain jika diperlukan
  };

  return (
    <div className="layout-container">
      {/* Left section: Logo */}
      <div className="logo-section">
        <Link href="/dashboard">
            <img
              src="/assets/MEDILINE LOGO.png"
              alt="MediLine Logo"
              className="logo"
            />
        </Link>
      </div>

      {/* Hanya tampilkan gambar utama jika secondImageClassName tidak diberikan */}
      {imageSrc && (
        <div className="image-section">
          <img
            src={imageSrc}
            alt="Main Image"
            className={secondImageClassName ? secondImageClassName : "main-image"} // Gunakan class tambahan jika ada
          />
        </div>
     )}

      {/* Right section: Content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
