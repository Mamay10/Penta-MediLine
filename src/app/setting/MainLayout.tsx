// components/MainLayout.tsx
import React from "react";
import LogoSection from "./logosection";
import HeaderSection from "./header";
import ButtonSection from "./button";
import "../styles/setting.css";
import "../styles/user.css";


interface MainLayoutProps {
  children: React.ReactNode; // Properti untuk menampung konten spesifik halaman
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="container">
    <LogoSection />
    <HeaderSection />
    <div className="contentContainer">
    <ButtonSection />
      <div className="contentSection">
       
        {children} {/* Ini akan berisi konten spesifik dari setiap halaman */}
      </div>
    </div>
  </div>
);

export default MainLayout;
