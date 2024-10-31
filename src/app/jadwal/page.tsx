"use client"
import React, { useState } from "react";
import '../styles/user.css';

interface Jadwal {
    nomor: number;
    kode: string;
    waktu: string;
}

const SettingsPage: React.FC = () => {
    const [users, setUsers] = useState<Jadwal[]>([
        { nomor: 1, kode: "S01", waktu: "07.00 - 10.00" },
        { nomor: 2, kode: "S02", waktu: "07.00 - 10.00" },
        { nomor: 3, kode: "S03", waktu: "07.00 - 10.00" },
        { nomor: 4, kode: "S04", waktu: "07.00 - 10.00" },
        { nomor: 5, kode: "M01", waktu: "07.00 - 10.00" },
        { nomor: 6, kode: "M01", waktu: "07.00 - 10.00" },
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
        <button style={{ marginBottom: "10px" }}>+ Tambah Jadwal</button>
        <table>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Kode</th>
              <th>Waktu</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.nomor}>
                <td>{user.nomor}</td>
                <td>{user.kode}</td>
                <td>{user.waktu}</td>
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
            <label>Kode*</label>
            <input type="text" placeholder="Masukkan Kode" />
          </div>
          <div className="form-group">
            <label>Klinik*</label>
            <select>
              <option>Pilih Klinik</option>
              <option>Poli umum</option>
              <option>Poli Gigi</option>
              {/* Additional options can be added here */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nama</label>
            <input type="text" placeholder="Masukkan Nama" />
          </div>
          <div className="form-group">
             <label>Jam masuk*</label>
             <input type="time" />
            </div>
        </div>

        <div className="form-row">
          <div className="form-group">
          <label>Dokter*</label>
          <select>
              <option>Pilih Dokter</option>
              <option>Dr Rama</option>
              <option>Dr Dara</option>
              {/* Additional options can be added here */}
            </select>
          </div>
          <div className="form-group">
            <label>Jam selesai*</label>
            <input type="time"/>
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
