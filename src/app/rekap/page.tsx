import React from 'react';
import '../styles/rekap.css';

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
        <span className="pageTitle">REKAP</span>
        <div className="userSection">
          <span className="greeting">Halo Dewi</span>
          <img src="/assets/profile.png" alt="User Icon" className="userIcon" />
          <img src="/assets/log out.png" alt="log out" className="logOut" />
        </div>
      </header>

      {/* Content Section */}
      <div className="contentContainer">
            {/* Filter Section */}
            <div className="filter-section">
              <div className="filter-section-left">
                <div className="input-group">
                  <label htmlFor="tanggal-awal">Tanggal Awal</label>
                  <input type="date" id="tanggal-awal" name="tanggal-awal" />
                </div>
                <div className="input-group">
                  <label htmlFor="tanggal-akhir">Tanggal Akhir</label>
                  <input type="date" id="tanggal-akhir" name="tanggal-akhir" />
                </div>
                <div className="input-group">
                  <label htmlFor="filter-select">Filter</label>
                  <select id="filter-select" name="filter-select">
                    <option value="">Pilih Filter</option>
                    <option value="1">Dokter</option>
                    <option value="2">Klinik</option>
                    <option value="2">Teller </option>
                  </select>
                </div>
              </div>
              <button className="download-button">Unduh Rekap</button>
            </div>

            <div className="rekapContainer">
            <div className="contentSection">
            {/* Table Section */}
            <div className="table-wrapper">
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>No Antrian</th>
                    <th>No NIK</th>
                    <th>Nama Pasien</th>
                    <th>Dokter</th>
                    <th>Klinik</th>
                    <th>Waktu, Tanggal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={8} className="empty-message">No data available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
