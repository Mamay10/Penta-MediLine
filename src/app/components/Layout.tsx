"use client";
import React from 'react';
import '../styles/Layout.css'; // Impor file CSS

interface LayoutProps {
  children: React.ReactNode;
  imageSrc: string;         // Gambar utama
  secondImageClassName?: string;  // ClassName opsional untuk gambar tambahan
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  imageSrc, 
  secondImageClassName 
}) => {
  return (
    <div className="layout-container">
      {/* Left section: Logo */}
      <div className="logo-section">
        <img 
          src="/assets/MEDILINE LOGO.png" 
          alt="MediLine Logo" 
          className="logo" 
        />
      </div>

      {/* Hanya tampilkan gambar utama jika secondImageClassName tidak diberikan */}
      {!secondImageClassName ? (
        <div className="image-section">
          <img 
            src={imageSrc} 
            alt="Main Image" 
            className="main-image"  // Gunakan class untuk gambar utama
          />
        </div>
      ) : (
        <div className="image-section">
          <img 
            src={imageSrc} 
            alt="Additional Image" 
            className={secondImageClassName}  // Gunakan class untuk gambar tambahan
          />
        </div>
      )}

      {/* Right section: Content */}
      <div className="content-section">
        {children}
      </div>
    </div>
  );
};

export default Layout;
