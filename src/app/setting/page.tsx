import React from 'react';
import '../styles/setting.css';

const SettingsPage: React.FC = () => {
  return (
    <div className="container">
      {/* Logo Section (top-left) */}
      <aside className="logoSection">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Header Section (spanning full width) */}
      <header className="headerSection">
        <img src="/assets/Vector.png" alt="Vector" className="vector" />
        <span className="pageTitle">PENGATURAN</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>

      {/* Content Section (buttons and image) */}
      <div className="contentContainer">
      <div className="contentSection">
        {/* Button Section */}
        <div className="buttonContainer">
          <button className="button">
          <a href="/user">User</a>
          </button>
          <button className="button">Status</button>
          <button className="button">Antrian</button>
          <button className="button">Jadwal</button>
          <button className="button">Loket</button>
        </div>

        {/* Image Section */}
        <div className="imageSection">
          <img src="/assets/set.png" alt="Settings Icon" className="centerImage" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
