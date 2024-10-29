import React from 'react';
import '../styles/display.css';

const DisplayScreen: React.FC = () => {
    
  return (
    <div className="display-screen">
    {/* Logo Section (top-left) */}
      <aside className="logoSection">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Header Section (spanning full width) */}
      <header className="headerSection">
        <img src="/assets/Vector.png" alt="Vector" className="vector" />
        <span className="pageTitle">REKAP</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>


  <div className="main-container">
  {/* Section Kiri: Container untuk Main Queue dan Secondary Queue */}
  <div className="left-section">
    {/* Container Atas: Main Queue */}
    <div className="queue-main">
    <div className="card-main">
    <button className="queue-main-button">POLI UMUM</button>
      <div className="queue-number">BA01</div>
      <div className="queue-loket">LOKET 1</div>
    </div>
    </div>

    {/* Container Bawah: Secondary Queue */}
    <div className="secondary-queues">
      <div className="queue-card">
  <div className="card">
  <button className="queue-button">POLI UMUM</button>
    <div className="queue-number-small">A01</div>
    <div className="queue-loket-small">LOKET 1</div>
  </div>
</div>

      <div className="queue-card">
      <button className="queue-button">POLI UMUM</button>
        <div className="queue-number-small">A02</div>
        <div className="queue-loket-small">LOKET 2</div>
      </div>
      <div className="queue-card">
      <button className="queue-button">POLI UMUM</button>
        <div className="queue-number-small">BA02</div>
        <div className="queue-loket-small">LOKET 2</div>
      </div>
    </div>
  </div>

  {/* Section Kanan: Video Section */}
  <div className="right-section">
    <div className="video-section">
      <video className="promo-video" controls autoPlay loop>
        <source src="/assets/play.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

    <footer>
        <div className="footer">
        <div className="footer-time">
        <p>08:20 AM</p>
        </div>
        <div className="scrolling-text">
        <div className="scrolling-content">
            Selamat Datang Di Klinik Mediline - Selamat Datang Di Klinik Mediline - Selamat Datang Di Klinik Mediline
        </div>
        </div>
        </div>
        </footer>
        </div>
      
  );
};

export default DisplayScreen;
