import React from 'react';
import "./globals.css"; 

const Registrasi: React.FC = () => {
  return (
    <div className="registrasi-container">
      <div className="logo">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" />
      </div>

      <div className="right-section">
        <button className="menu-btn">BPJS</button>
        <button className="menu-btn">NON BPJS</button>
      </div>
    </div>
  );
};

export default Registrasi;
