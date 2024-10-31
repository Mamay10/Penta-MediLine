"use client"
import React, { useState } from "react";
import '../styles/user.css';

interface Loket {
    nomor: number;
    nama: string;
    jenis: string;
}

const SettingsPage: React.FC = () => {
    const [users, setUsers] = useState<Loket[]>([
        { nomor: 1, nama: "Loket 1", jenis: "BPJS" },
        { nomor: 2, nama: "Loket 2", jenis: "BPJS" },
        { nomor: 3, nama: "Loket 3", jenis: "NON BPJS" },
        { nomor: 4, nama: "Loket 4", jenis: "BPJS" },
        { nomor: 5, nama: "Loket 5", jenis: "NON BPJS" },
        { nomor: 6, nama: "Loket 6", jenis: "NON BPJS" },
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
        <button style={{ marginBottom: "10px" }}>+ Tambah Loket</button>
        <table>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Jenis</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.nomor}>
                <td>{user.nomor}</td>
                <td>{user.nama}</td>
                <td>{user.jenis}</td>
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
            <label>Klinik</label>
            <select>
              <option>Pilih Klinik</option>
              <option>Poli Umum</option>
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
          <label>Jenis Loket</label>
          <select>
              <option>Pilih Jenis Loket</option>
              <option>BPJS</option>
              <option>NON BPJS</option>
              {/* Additional options can be added here */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Kode Antrian</label>
            <input type="text" placeholder="Masukkan Kode Antrian" />
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
