"use client"
import React, { useState } from "react";
import '../styles/user.css';

interface Antrian {
    nomor: number;
    nama: string;
    kode: string;
}

const SettingsPage: React.FC = () => {
    const [users, setUsers] = useState<Antrian[]>([
        { nomor: 1, nama: "Dr Raka", kode: "0987" },
        { nomor: 2, nama: "Dr Salma", kode: "6543" },
        { nomor: 3, nama: "Dr Yusuf", kode: "2109" },
        { nomor: 4, nama: "Dr Ayu", kode: "8765" },
        { nomor: 5, nama: "Dr Jaka", kode: "4321" },
        { nomor: 6, nama: "Dr Danang", kode: "B0987" },
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
          <button className="button">Status</button>
          <button className="button">Antrian</button>
          <button className="button">Jadwal</button>
          <button className="button">Loket</button>
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
        <button style={{ marginBottom: "10px", marginRight: "10px" }}>+ Tambah Dokter</button>
        <button style={{ marginBottom: "10px" }}>+ Tambah Poli</button>
        <table>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Kode</th>
            </tr>
          </thead>
          <tbody>
            {users.map((Antrian) => (
              <tr key={Antrian.nomor}>
                <td>{Antrian.nomor}</td>
                <td>{Antrian.nama}</td>
                <td>{Antrian.kode}</td>
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
            <label>Nama lengkap</label>
            <input type="text" placeholder="Masukkan Nama Lengkap" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nama*</label>
            <input type="text" placeholder="Masukkan Nama" />
          </div>
          <div className="form-row">
            <div className="form-group">
             <label>No. Telp*</label>
             <input type="tel" placeholder="Masukkan No. Telepon" />
            </div>
            <div className="form-group">
            <label>Tanggal Lahir*</label>
            <input type="date" />
            </div>
        </div>
    </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Masukkan Email" />
          </div>
          <div className="form-group">
            <label>Jenis Kelamin</label>
            <div className="radio-group">
              <input type="radio" name="gender" value="Laki-laki" /> Laki-laki
              <input type="radio" name="gender" value="Perempuan" /> Perempuan
            </div>
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
