import React from 'react';
import '../styles/display.css';

const DisplayScreen: React.FC = () => {
    
  return (
    <div className="display-screen">
      {/* Header */}
      <header className="header">
        <div className="logo">
        <img src="/assets/MEDILINE LOGO.png" alt="Mediline Logo" className="logo-img" />
        </div>
        <span className="Title">Klinik MediLine</span>
        <div className="date-time">
            <p>Senin, 09/10/2024</p>
        </div>
      </header>

  <div className="main-container">
  {/* Section Kiri: Container untuk Main Queue dan Secondary Queue */}
  <div className="left-section">
    {/* Container Atas: Main Queue */}
    <div className="queue-main">
      <h2>POLI UMUM</h2>
      <div className="queue-number">BA01</div>
      <div className="queue-loket">LOKET 1</div>
    </div>

    {/* Container Bawah: Secondary Queue */}
    <div className="secondary-queues">
      <div className="queue-card">
        <h3>POLI UMUM</h3>
        <div className="queue-number-small">A01</div>
        <div className="queue-loket-small">LOKET 1</div>
      </div>
      <div className="queue-card">
        <h3>POLI UMUM</h3>
        <div className="queue-number-small">A02</div>
        <div className="queue-loket-small">LOKET 2</div>
      </div>
      <div className="queue-card">
        <h3>POLI THT</h3>
        <div className="queue-number-small">BA02</div>
        <div className="queue-loket-small">LOKET 2</div>
      </div>
      <div className="queue-card">
        <h3>-</h3>
        <div className="queue-number-small">--</div>
        <div className="queue-loket-small">--</div>
      </div>
    </div>
  </div>

  {/* Section Kanan: Video Section */}
  <div className="right-section">
    <div className="video-section">
      <video className="promo-video" controls autoPlay loop>
        <source src="video1.mp4" type="video/mp4" />
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
