import React from "react";
import LogoSection from "./logosection";
import HeaderSection from "./header";
import ContentSection from "./content";
import "../styles/panggilpasien.css"; // untuk memastikan file CSS sudah diatur dengan benar

interface MainLayoutProps {
  children: React.ReactNode; // Properti untuk menampung konten spesifik halaman
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex flex-col h-100 bg-gray-200">
    {/* Logo Section */}
    <LogoSection />
    
    {/* Header Section */}
    <HeaderSection />
    
    {/* Main Content Section */}
    <div className="flex-col">
      {/* Button Section */}
      <ContentSection />
      
      {/* Content Section */}
      <div className="contentContainer flex-grow bg-gray-100 p-6 overflow-y-auto">
        <div className="contentSection">{children}</div>
      </div>
    </div>
  </div>

);

export default MainLayout;
