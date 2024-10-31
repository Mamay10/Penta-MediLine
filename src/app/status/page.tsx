"use client"
import React, { useState } from "react";
import '../styles/user.css';

interface Status {
    nomor?: number;
    status?: string;
    kode?: string;
    durasi?: string;
}

const SettingsPage: React.FC = () => {
    const [users, setUsers] = useState<Status[]>([
        { nomor: 1, status: 'Active', kode: 'A001', durasi: '10 mins' },
        { nomor: 2, status: 'Inactive', kode: 'A002', durasi: '15 mins' },
        { nomor: 3, status: 'Pending', kode: 'A003', durasi: '5 mins' },
        { nomor: 4, status: '', kode: '', durasi: '' },
        { nomor: 5, status: '', kode: '', durasi: '' },
        { nomor: 6, status: '', kode: '', durasi: '' },
      ]);
    
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
          <button className="button">
          <a href="/status">Status</a>
          </button>
          <button className="button">
          <a href="/setAntrian">Antrian</a>
          </button>
          <button className="button">
          <a href="/jadwal">Jadwal</a>
          </button>
          <button className="button">
          <a href="/loket">Loket</a>
          </button>
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <button style={{ marginBottom: "10px" }}>+ Tambah Status</button>
        <table>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Status</th>
              <th>Kode</th>
              <th>Durasi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((status) => (
              <tr key={status.nomor}>
                <td>{status.nomor || "-"}</td>
                <td>{status.status || "-"}</td>
                <td>{status.kode || "-"}</td>
                <td>{status.durasi || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ flex: 1 }}>
      <div className="form-container">
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>Status*</label>
            <input type="text" placeholder="Masukkan Status" />
          </div>
          <div className="form-group">
            <label>Durasi*</label>
            <input type="text" placeholder="Masukkan Durasi" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Kode</label>
            <input type="text" placeholder="Masukkan Kode" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nama Lain</label>
            <input type="text" placeholder="Masukkan Nama Lain" />
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="cancel-button">Batal</button>
          <button type="submit" className="save-button">Simpan</button>
        </div>
      </form>
    </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
