// src/pages/AntrianPage.tsx
import React from 'react';
import '../styles/queue.css';

const AntrianPage: React.FC = () => {
  return (
    <div className="container">
       <aside className="logoSection">
        <img src="/assets/MEDILINE LOGO.png" alt="MediLine Logo" className="logo" />
      </aside>

      {/* Header Section (spanning full width) */}
      <header className="headerSection">
        <img src="/assets/Vector.png" alt="Vector" className="vector" />
        <span className="pageTitle"> PANGGIL ANTRIAN</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>

      {/* Content Section */}
      <div className="contentContainer">
        <div className="sidebar">
          <div className="filterSection">
            <h3>Filter Berdasarkan</h3>
            <div>
              <label><input type="checkbox" /> Dipanggil</label>
              <label><input type="checkbox" /> Menunggu</label>
            </div>
          </div>
          <table className="queueTable">
            <thead>
              <tr>
                <th>Nomor Antrian</th>
                <th>Nama</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BA01</td>
                <td>Mamcy A. Lestari</td>
                <td>08:00 - 08:30</td>
              </tr>
           
            </tbody>
          </table>
        </div>

        <main className="mainContent">
          <div className="queueSection">
            <h2>Nomor Antrian</h2>
            <div className="queueNumber">BA01</div>
            <p>Dokter: Dr. Maulana Malik</p>
            <button className="primaryBtn">Panggil</button>
            <button className="secondaryBtn">Selesai</button>
          </div>

          <div className="patientInfo">
            <h2>Data Pasien</h2>
            <form>
              <label>Jenis</label>
              <input type="text" value="Pasien BPJS" readOnly />

              <label>Nama</label>
              <input type="text" value="Mamcy Ayu Lestari" readOnly />

              <label>Dokter</label>
              <input type="text" value="Dr. Maulana Malik" readOnly />

              <label>Klinik</label>
              <input type="text" value="Poli Umum" readOnly />
            </form>
            <button className="tertiaryBtn">Lewati</button>
            <button className="nextBtn">Panggil Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AntrianPage;
  