// components/HeaderSection.tsx
import React from 'react';

const HeaderSection: React.FC = () => (
  <header className="headerSection flex items-center">
    <img src="/assets/Vector.png" alt="Vector" className="vector mr-2" /> {/* Spasi kecil */}
    <span className="pageTitle text-lg font-bold mr-4">PANGGIL PASIEN</span> {/* Spasi kecil */}
    <div className="userSection ml-auto flex items-center">
      <span className="greeting mr-2">Halo Dewi</span> {/* Spasi kecil */}
      <img src="/assets/profile.png" alt="User Icon" className="userIcon mr-2" />
      <img src="/assets/log out.png" alt="log out" className="logOut" />
    </div>
  </header>
);

export default HeaderSection;
