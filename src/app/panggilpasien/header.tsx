// components/HeaderSection.tsx
import React from 'react';

const HeaderSection: React.FC = () => (
  <header className="headerSection">
    <img src="/assets/Vector.png" alt="Vector" className="vector" />
    <span className="pageTitle">PANGGIL PASIEN</span>
    <div className="userSection">
      <span className="greeting">Halo Dewi</span>
      <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
      <img src="/assets/log out.png" alt="log out" className="logOut" />
    </div>
  </header>
);

export default HeaderSection;
