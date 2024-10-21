import React from 'react';
import '../styles/setting.css';

const SettingsPage: React.FC = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Main content */}
      <div className="mainContent">
        {/* Header */}
        <header className="header">
          <span className="pageTitle">PENGATURAN</span>
          <div className="userSection">
            <span className="greeting">Halo Dewi</span>
            <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          </div>
        </header>

        {/* Button Section */}
        <div className="buttonContainer">
          <button className="button">User</button>
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
  );
};

export default SettingsPage;
